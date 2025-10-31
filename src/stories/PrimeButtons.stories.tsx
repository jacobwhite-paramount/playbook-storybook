import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import React from 'react';

import { PrimeButtons } from '../components/PrimeButtons/PrimeButtons';
import { getReferenceImagePath } from '../utils/referenceImages';
import { VisualTestWrapper } from '../utils/VisualTestWrapper';

/**
 * PrimeButtons Component Stories
 * 
 * Each variant story maps to a Figma reference image and is wrapped in VisualTestWrapper
 * to ensure consistent spacing/padding matching Figma exports.
 * 
 * Chromatic automatically performs visual regression testing by:
 * 1. Taking screenshots of each story
 * 2. Comparing them to previous baselines (established on first run)
 * 
 * Figma reference images are stored in /public/figma-design-images/prime-button/
 * for manual comparison and documentation purposes.
 */

const meta = {
  title: 'Example/PrimeButtons',
  component: PrimeButtons,
  parameters: {
    layout: 'centered',
    chromatic: {
      disableSnapshot: false,
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['Large', 'Medium', 'Small'],
      description: 'Button size',
    },
    style: {
      control: 'select',
      options: ['Primary', 'Secondary', 'Tertiary'],
      description: 'Button style variant',
    },
    state: {
      control: 'select',
      options: ['Default', 'Hover', 'Focused', 'Loading', 'Disabled'],
      description: 'Button state',
    },
    iconL: {
      control: 'boolean',
      description: 'Show icon on the left',
    },
    iconR: {
      control: 'boolean',
      description: 'Show icon on the right',
    },
    children: {
      control: 'text',
      description: 'Button text',
    },
  },
  args: {
    onClick: fn(),
    size: 'Large',
    style: 'Primary',
    state: 'Default',
    iconL: false,
    iconR: false,
    children: 'Button',
  },
} satisfies Meta<typeof PrimeButtons>;

export default meta;
type Story = StoryObj<typeof meta>;

// Helper function to create a story with design reference
function createStoryWithDesign(
  size: 'Large' | 'Medium' | 'Small',
  style: 'Primary' | 'Secondary' | 'Tertiary',
  state: 'Default' | 'Hover' | 'Focused' | 'Loading' | 'Disabled'
): Story {
  return {
    render: (args) => {
      return (
        <VisualTestWrapper>
          <PrimeButtons {...args} />
        </VisualTestWrapper>
      );
    },
    args: {
      size,
      style,
      state,
      children: state === 'Loading' ? '' : 'Button',
    },
    parameters: {
      chromatic: {
        testMode: 'snapshot',
      },
      // Reference to Figma design image - will overlay on component in Storybook
      design: {
        type: 'image',
        url: getReferenceImagePath(size, style, state),
      },
    },
  };
}

// Interactive story with controls
export const PrimeButton: Story = {
  render: (args) => {
    return (
      <VisualTestWrapper>
        <PrimeButtons {...args} />
      </VisualTestWrapper>
    );
  },
};

// Primary Large variants
export const PrimaryLargeDefault: Story = createStoryWithDesign('Large', 'Primary', 'Default');
export const PrimaryLargeHover: Story = createStoryWithDesign('Large', 'Primary', 'Hover');
export const PrimaryLargeFocused: Story = createStoryWithDesign('Large', 'Primary', 'Focused');
export const PrimaryLargeLoading: Story = createStoryWithDesign('Large', 'Primary', 'Loading');
export const PrimaryLargeDisabled: Story = createStoryWithDesign('Large', 'Primary', 'Disabled');

// Primary Medium variants
export const PrimaryMediumDefault: Story = createStoryWithDesign('Medium', 'Primary', 'Default');
export const PrimaryMediumHover: Story = createStoryWithDesign('Medium', 'Primary', 'Hover');
export const PrimaryMediumFocused: Story = createStoryWithDesign('Medium', 'Primary', 'Focused');
export const PrimaryMediumLoading: Story = createStoryWithDesign('Medium', 'Primary', 'Loading');
export const PrimaryMediumDisabled: Story = createStoryWithDesign('Medium', 'Primary', 'Disabled');

// Primary Small variants
export const PrimarySmallDefault: Story = createStoryWithDesign('Small', 'Primary', 'Default');
export const PrimarySmallHover: Story = createStoryWithDesign('Small', 'Primary', 'Hover');
export const PrimarySmallFocused: Story = createStoryWithDesign('Small', 'Primary', 'Focused');
export const PrimarySmallLoading: Story = createStoryWithDesign('Small', 'Primary', 'Loading');
export const PrimarySmallDisabled: Story = createStoryWithDesign('Small', 'Primary', 'Disabled');

// Secondary Large variants
export const SecondaryLargeDefault: Story = createStoryWithDesign('Large', 'Secondary', 'Default');
export const SecondaryLargeHover: Story = createStoryWithDesign('Large', 'Secondary', 'Hover');
export const SecondaryLargeFocused: Story = createStoryWithDesign('Large', 'Secondary', 'Focused');
export const SecondaryLargeLoading: Story = createStoryWithDesign('Large', 'Secondary', 'Loading');
export const SecondaryLargeDisabled: Story = createStoryWithDesign('Large', 'Secondary', 'Disabled');

// Secondary Medium variants
export const SecondaryMediumDefault: Story = createStoryWithDesign('Medium', 'Secondary', 'Default');
export const SecondaryMediumHover: Story = createStoryWithDesign('Medium', 'Secondary', 'Hover');
export const SecondaryMediumFocused: Story = createStoryWithDesign('Medium', 'Secondary', 'Focused');
export const SecondaryMediumLoading: Story = createStoryWithDesign('Medium', 'Secondary', 'Loading');
export const SecondaryMediumDisabled: Story = createStoryWithDesign('Medium', 'Secondary', 'Disabled');

// Secondary Small variants
export const SecondarySmallDefault: Story = createStoryWithDesign('Small', 'Secondary', 'Default');
export const SecondarySmallHover: Story = createStoryWithDesign('Small', 'Secondary', 'Hover');
export const SecondarySmallFocused: Story = createStoryWithDesign('Small', 'Secondary', 'Focused');
export const SecondarySmallLoading: Story = createStoryWithDesign('Small', 'Secondary', 'Loading');
export const SecondarySmallDisabled: Story = createStoryWithDesign('Small', 'Secondary', 'Disabled');

// Tertiary Large variants
export const TertiaryLargeDefault: Story = createStoryWithDesign('Large', 'Tertiary', 'Default');
export const TertiaryLargeLoading: Story = createStoryWithDesign('Large', 'Tertiary', 'Loading');
export const TertiaryLargeDisabled: Story = createStoryWithDesign('Large', 'Tertiary', 'Disabled');

// Tertiary Medium variants
export const TertiaryMediumDefault: Story = createStoryWithDesign('Medium', 'Tertiary', 'Default');
export const TertiaryMediumLoading: Story = createStoryWithDesign('Medium', 'Tertiary', 'Loading');
export const TertiaryMediumDisabled: Story = createStoryWithDesign('Medium', 'Tertiary', 'Disabled');

// Tertiary Small variants
export const TertiarySmallDefault: Story = createStoryWithDesign('Small', 'Tertiary', 'Default');
export const TertiarySmallLoading: Story = createStoryWithDesign('Small', 'Tertiary', 'Loading');
export const TertiarySmallDisabled: Story = createStoryWithDesign('Small', 'Tertiary', 'Disabled');

