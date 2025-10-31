import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { PrimeButtons } from '../components/PrimeButtons/PrimeButtons';
import { getReferenceImagePath } from '../utils/referenceImages';

/**
 * PrimeButtons Component Stories
 * 
 * Each variant story maps to a reference image in /public/prime_buttons_images/
 * Format: prime-button-{size}-{style}-{state}.png
 * 
 * Chromatic will automatically screenshot each story and compare against previous runs.
 * Reference images serve as documentation and can be used for manual comparison.
 */

const meta = {
  title: 'Example/PrimeButtons',
  component: PrimeButtons,
  parameters: {
    layout: 'centered',
    chromatic: {
      // Enable visual regression testing for all stories
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

// Interactive story with controls
export const PrimeButton: Story = {};

// Individual variant stories for Chromatic visual regression testing
// Each story maps to a reference image in /public/prime_buttons_images/

// Primary Large variants
export const PrimaryLargeDefault: Story = {
  args: {
    size: 'Large',
    style: 'Primary',
    state: 'Default',
    children: 'Button',
  },
  parameters: {
    chromatic: {
      testMode: 'snapshot',
    },
  },
};

export const PrimaryLargeHover: Story = {
  args: {
    size: 'Large',
    style: 'Primary',
    state: 'Hover',
    children: 'Button',
  },
  parameters: {
    chromatic: {
      testMode: 'snapshot',
    },
  },
};

export const PrimaryLargeFocused: Story = {
  args: {
    size: 'Large',
    style: 'Primary',
    state: 'Focused',
    children: 'Button',
  },
  parameters: {
    chromatic: {
      testMode: 'snapshot',
    },
  },
};

export const PrimaryLargeLoading: Story = {
  args: {
    size: 'Large',
    style: 'Primary',
    state: 'Loading',
  },
  parameters: {
    chromatic: {
      testMode: 'snapshot',
    },
  },
};

export const PrimaryLargeDisabled: Story = {
  args: {
    size: 'Large',
    style: 'Primary',
    state: 'Disabled',
    children: 'Button',
  },
  parameters: {
    chromatic: {
      testMode: 'snapshot',
    },
  },
};

// Primary Medium variants
export const PrimaryMediumDefault: Story = {
  args: {
    size: 'Medium',
    style: 'Primary',
    state: 'Default',
    children: 'Button',
  },
  parameters: {
    chromatic: {
      testMode: 'snapshot',
    },
  },
};

export const PrimaryMediumHover: Story = {
  args: {
    size: 'Medium',
    style: 'Primary',
    state: 'Hover',
    children: 'Button',
  },
  parameters: {
    chromatic: {
      testMode: 'snapshot',
    },
  },
};

export const PrimaryMediumFocused: Story = {
  args: {
    size: 'Medium',
    style: 'Primary',
    state: 'Focused',
    children: 'Button',
  },
  parameters: {
    chromatic: {
      testMode: 'snapshot',
    },
  },
};

export const PrimaryMediumLoading: Story = {
  args: {
    size: 'Medium',
    style: 'Primary',
    state: 'Loading',
  },
  parameters: {
    chromatic: {
      testMode: 'snapshot',
    },
  },
};

export const PrimaryMediumDisabled: Story = {
  args: {
    size: 'Medium',
    style: 'Primary',
    state: 'Disabled',
    children: 'Button',
  },
  parameters: {
    chromatic: {
      testMode: 'snapshot',
    },
  },
};

// Primary Small variants
export const PrimarySmallDefault: Story = {
  args: {
    size: 'Small',
    style: 'Primary',
    state: 'Default',
    children: 'Button',
  },
  parameters: {
    chromatic: {
      testMode: 'snapshot',
    },
  },
};

export const PrimarySmallHover: Story = {
  args: {
    size: 'Small',
    style: 'Primary',
    state: 'Hover',
    children: 'Button',
  },
  parameters: {
    chromatic: {
      testMode: 'snapshot',
    },
  },
};

export const PrimarySmallFocused: Story = {
  args: {
    size: 'Small',
    style: 'Primary',
    state: 'Focused',
    children: 'Button',
  },
  parameters: {
    chromatic: {
      testMode: 'snapshot',
    },
  },
};

export const PrimarySmallLoading: Story = {
  args: {
    size: 'Small',
    style: 'Primary',
    state: 'Loading',
  },
  parameters: {
    chromatic: {
      testMode: 'snapshot',
    },
  },
};

export const PrimarySmallDisabled: Story = {
  args: {
    size: 'Small',
    style: 'Primary',
    state: 'Disabled',
    children: 'Button',
  },
  parameters: {
    chromatic: {
      testMode: 'snapshot',
    },
  },
};

// Secondary Large variants
export const SecondaryLargeDefault: Story = {
  args: {
    size: 'Large',
    style: 'Secondary',
    state: 'Default',
    children: 'Button',
  },
  parameters: {
    chromatic: {
      testMode: 'snapshot',
    },
  },
};

export const SecondaryLargeHover: Story = {
  args: {
    size: 'Large',
    style: 'Secondary',
    state: 'Hover',
    children: 'Button',
  },
  parameters: {
    chromatic: {
      testMode: 'snapshot',
    },
  },
};

export const SecondaryLargeFocused: Story = {
  args: {
    size: 'Large',
    style: 'Secondary',
    state: 'Focused',
    children: 'Button',
  },
  parameters: {
    chromatic: {
      testMode: 'snapshot',
    },
  },
};

export const SecondaryLargeLoading: Story = {
  args: {
    size: 'Large',
    style: 'Secondary',
    state: 'Loading',
  },
  parameters: {
    chromatic: {
      testMode: 'snapshot',
    },
  },
};

export const SecondaryLargeDisabled: Story = {
  args: {
    size: 'Large',
    style: 'Secondary',
    state: 'Disabled',
    children: 'Button',
  },
  parameters: {
    chromatic: {
      testMode: 'snapshot',
    },
  },
};

// Secondary Medium variants
export const SecondaryMediumDefault: Story = {
  args: {
    size: 'Medium',
    style: 'Secondary',
    state: 'Default',
    children: 'Button',
  },
  parameters: {
    chromatic: {
      testMode: 'snapshot',
    },
  },
};

export const SecondaryMediumHover: Story = {
  args: {
    size: 'Medium',
    style: 'Secondary',
    state: 'Hover',
    children: 'Button',
  },
  parameters: {
    chromatic: {
      testMode: 'snapshot',
    },
  },
};

export const SecondaryMediumFocused: Story = {
  args: {
    size: 'Medium',
    style: 'Secondary',
    state: 'Focused',
    children: 'Button',
  },
  parameters: {
    chromatic: {
      testMode: 'snapshot',
    },
  },
};

export const SecondaryMediumLoading: Story = {
  args: {
    size: 'Medium',
    style: 'Secondary',
    state: 'Loading',
  },
  parameters: {
    chromatic: {
      testMode: 'snapshot',
    },
  },
};

export const SecondaryMediumDisabled: Story = {
  args: {
    size: 'Medium',
    style: 'Secondary',
    state: 'Disabled',
    children: 'Button',
  },
  parameters: {
    chromatic: {
      testMode: 'snapshot',
    },
  },
};

// Secondary Small variants
export const SecondarySmallDefault: Story = {
  args: {
    size: 'Small',
    style: 'Secondary',
    state: 'Default',
    children: 'Button',
  },
  parameters: {
    chromatic: {
      testMode: 'snapshot',
    },
  },
};

export const SecondarySmallHover: Story = {
  args: {
    size: 'Small',
    style: 'Secondary',
    state: 'Hover',
    children: 'Button',
  },
  parameters: {
    chromatic: {
      testMode: 'snapshot',
    },
  },
};

export const SecondarySmallFocused: Story = {
  args: {
    size: 'Small',
    style: 'Secondary',
    state: 'Focused',
    children: 'Button',
  },
  parameters: {
    chromatic: {
      testMode: 'snapshot',
    },
  },
};

export const SecondarySmallLoading: Story = {
  args: {
    size: 'Small',
    style: 'Secondary',
    state: 'Loading',
  },
  parameters: {
    chromatic: {
      testMode: 'snapshot',
    },
  },
};

export const SecondarySmallDisabled: Story = {
  args: {
    size: 'Small',
    style: 'Secondary',
    state: 'Disabled',
    children: 'Button',
  },
  parameters: {
    chromatic: {
      testMode: 'snapshot',
    },
  },
};

// Tertiary Large variants
export const TertiaryLargeDefault: Story = {
  args: {
    size: 'Large',
    style: 'Tertiary',
    state: 'Default',
    children: 'Button',
  },
  parameters: {
    chromatic: {
      testMode: 'snapshot',
    },
  },
};

export const TertiaryLargeLoading: Story = {
  args: {
    size: 'Large',
    style: 'Tertiary',
    state: 'Loading',
  },
  parameters: {
    chromatic: {
      testMode: 'snapshot',
    },
  },
};

export const TertiaryLargeDisabled: Story = {
  args: {
    size: 'Large',
    style: 'Tertiary',
    state: 'Disabled',
    children: 'Button',
  },
  parameters: {
    chromatic: {
      testMode: 'snapshot',
    },
  },
};

// Tertiary Medium variants
export const TertiaryMediumDefault: Story = {
  args: {
    size: 'Medium',
    style: 'Tertiary',
    state: 'Default',
    children: 'Button',
  },
  parameters: {
    chromatic: {
      testMode: 'snapshot',
    },
  },
};

export const TertiaryMediumLoading: Story = {
  args: {
    size: 'Medium',
    style: 'Tertiary',
    state: 'Loading',
  },
  parameters: {
    chromatic: {
      testMode: 'snapshot',
    },
  },
};

export const TertiaryMediumDisabled: Story = {
  args: {
    size: 'Medium',
    style: 'Tertiary',
    state: 'Disabled',
    children: 'Button',
  },
  parameters: {
    chromatic: {
      testMode: 'snapshot',
    },
  },
};

// Tertiary Small variants
export const TertiarySmallDefault: Story = {
  args: {
    size: 'Small',
    style: 'Tertiary',
    state: 'Default',
    children: 'Button',
  },
  parameters: {
    chromatic: {
      testMode: 'snapshot',
    },
  },
};

export const TertiarySmallLoading: Story = {
  args: {
    size: 'Small',
    style: 'Tertiary',
    state: 'Loading',
  },
  parameters: {
    chromatic: {
      testMode: 'snapshot',
    },
  },
};

export const TertiarySmallDisabled: Story = {
  args: {
    size: 'Small',
    style: 'Tertiary',
    state: 'Disabled',
    children: 'Button',
  },
  parameters: {
    chromatic: {
      testMode: 'snapshot',
    },
  },
};
