import React from 'react';

import './PrimeButtons.css';

// Icon assets from Figma
const imgVector = 'http://localhost:3845/assets/91d49248688655dca5f5cc413652512db48579c2.svg';
const imgVector1 = 'http://localhost:3845/assets/e6251132975047869b4408123442118732e36cbb.svg';
const imgEllipsis = 'http://localhost:3845/assets/73cb6a615ba32c81d79e59dbbbabebcec058c0b9.svg';
const imgEllipsis1 = 'http://localhost:3845/assets/fa3e587fd9f58b5348af3c8b80f7d7f9e0ed58ab.svg';

// Arrow icon components
type ArrowForwardProps = {
  className?: string;
  size?: number;
};

const ArrowForward: React.FC<ArrowForwardProps> = ({ className, size = 12 }) => {
  const img = size === 14 ? imgVector : imgVector;
  return (
    <div className={className} style={{ width: size, height: size, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: '18.38% 18.44% 18.44% 16.67%' }}>
        <img alt="" src={img} style={{ display: 'block', width: '100%', height: '100%' }} />
      </div>
    </div>
  );
};

type ArrowBackProps = {
  className?: string;
  size?: number;
};

const ArrowBack: React.FC<ArrowBackProps> = ({ className, size = 12 }) => {
  const img = size === 14 ? imgVector1 : imgVector1;
  return (
    <div className={className} style={{ width: size, height: size, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: '18.44% 16.67% 18.38% 18.44%' }}>
        <img alt="" src={img} style={{ display: 'block', width: '100%', height: '100%' }} />
      </div>
    </div>
  );
};

export interface PrimeButtonsProps {
  /** Show icon on the left */
  iconL?: boolean;
  /** Show icon on the right */
  iconR?: boolean;
  /** Custom icon for the right side */
  icon?: React.ReactNode | null;
  /** Custom icon for the left side */
  icon1?: React.ReactNode | null;
  /** Button size */
  size?: 'Large' | 'Medium' | 'Small';
  /** Button style variant */
  style?: 'Primary' | 'Secondary' | 'Tertiary';
  /** Button state */
  state?: 'Default' | 'Hover' | 'Focused' | 'Loading' | 'Disabled';
  /** Button text */
  children?: React.ReactNode;
  /** Click handler */
  onClick?: () => void;
}

/** PrimeButtons component with multiple sizes, styles, and states */
export const PrimeButtons: React.FC<PrimeButtonsProps> = ({
  iconL = false,
  iconR = false,
  icon = null,
  icon1 = null,
  size = 'Large',
  style = 'Primary',
  state = 'Default',
  children = 'Button',
  onClick,
  ...props
}) => {
  const iconSize = size === 'Large' ? 14 : 12;
  const isLoading = state === 'Loading';
  const isDisabled = state === 'Disabled';
  const isFocused = state === 'Focused';

  // Get CSS classes
  const baseClasses = ['prime-button'];
  const sizeClass = `prime-button--${size.toLowerCase()}`;
  const styleClass = `prime-button--${style.toLowerCase()}`;
  const stateClass = `prime-button--${state.toLowerCase()}`;

  const allClasses = [...baseClasses, sizeClass, styleClass, stateClass].join(' ');

  // Loading ellipsis
  if (isLoading) {
    const ellipsisSrc = size === 'Large' ? imgEllipsis1 : imgEllipsis;
    const ellipsisSize = size === 'Large' ? { width: 26, height: 6 } : { width: 16, height: 4 };

    return (
      <div className={allClasses} {...props}>
        <div style={{ ...ellipsisSize, position: 'relative' }}>
          <img alt="" src={ellipsisSrc} style={{ display: 'block', width: '100%', height: '100%' }} />
        </div>
      </div>
    );
  }

  // Focused state uses nested structure like in Figma
  if (isFocused) {
    return (
      <div
        className={allClasses}
        onClick={isDisabled ? undefined : onClick}
        role="button"
        tabIndex={isDisabled ? -1 : 0}
        aria-disabled={isDisabled}
        {...props}
      >
        <div className="prime-button__inner">
          {iconL && (icon1 || <ArrowBack size={iconSize} />)}
          <span className="prime-button__text">{children}</span>
          {iconR && (icon || <ArrowForward size={iconSize} />)}
        </div>
      </div>
    );
  }

  return (
    <div
      className={allClasses}
      onClick={isDisabled ? undefined : onClick}
      role="button"
      tabIndex={isDisabled ? -1 : 0}
      aria-disabled={isDisabled}
      {...props}
    >
      {iconL && (icon1 || <ArrowBack size={iconSize} />)}
      <span className="prime-button__text">{children}</span>
      {iconR && (icon || <ArrowForward size={iconSize} />)}
    </div>
  );
};

