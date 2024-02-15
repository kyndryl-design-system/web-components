import { html } from 'lit';
import './index';
import { action } from '@storybook/addon-actions';
import '@kyndryl-design-system/shidoka-foundation/components/icon';

export default {
  title: 'Components/Tag',
  component: 'kyn-tag',
  argTypes: {
    tagSize: {
      options: ['sm', 'md'],
      control: { type: 'select' },
    },
    shade: {
      options: ['light', 'dark'],
      control: { type: 'select' },
    },
    color: {
      options: [
        'grey',
        'spruce',
        'failed',
        'warning',
        'passed',
        'cat01',
        'cat02',
        'cat03',
        'cat04',
        'cat05',
      ],
      control: { type: 'select' },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    filter: {
      control: {
        type: 'boolean',
      },
    },
  },
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/pQKkip0UrZqEbaGN2dQ3dY/Santorini-Release?type=design&node-id=88-186&mode=design&t=kG1AhIxHIBWeM1EB-0',
  },
};

const args = {
  label: 'Tag Example',
  tagSize: 'md',
  shade: 'light',
  color: 'grey',
  disabled: false,
  filter: false,
};

export const Tag = {
  args,
  render: (args) => {
    return html`
      <kyn-tag
        label=${args.label}
        tagSize=${args.tagSize}
        shade=${args.shade}
        color=${args.color}
        ?disabled=${args.disabled}
        ?filter=${args.filter}
        @on-close=${(e) => action(e.type)(e)}
      /></kyn-tag>
    `;
  },
};
