import { html } from 'lit';
import './index';

export default {
  title: 'Components/Progress Bar',
  component: 'kyn-progress-bar',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/AIX4LLzoDHnFCXzQCiPHJk/Vienna?node-id=4308-129&node-type=canvas&t=NIQViMjgDrgdLGdi-0',
    },
  },
  argTypes: {
    value: { control: 'number' },
    max: { control: 'number' },
    status: {
      control: 'select',
      options: ['indeterminate', 'active', 'success', 'error'],
    },
  },
};

const Template = (args) => html`
  <kyn-progress-bar
    .value=${args.value}
    .max=${args.max}
    .label=${args.label}
    .informationalTooltipText=${args.informationalTooltipText}
    .helperText=${args.helperText}
    .inlineLoadStatusVisible=${args.inlineLoadStatusVisible}
    .status=${args.status}
    .unit=${args.unit}
  ></kyn-progress-bar>
`;

export const Default = Template.bind({});
Default.args = {
  status: 'active',
  value: 65,
  max: 100,
  label: 'Default Progress Bar (Fixed % Value)',
  informationalTooltipText: 'Example tooltip text.',
  helperText: 'Optional helper text.',
  inlineLoadStatusVisible: true,
  unit: '',
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  ...Default.args,
  status: 'indeterminate',
  label: 'Indeterminate Progress Bar',
  value: null,
};

export const Simulated = Template.bind({});
Simulated.args = {
  ...Default.args,
  status: 'active',
  inlineLoadStatusVisible: true,
  informationalTooltipText: '',
  helperText: '',
  max: 728,
  label: 'Simulated Full Progression (MB)',
  unit: 'MB',
  value: null,
};

export const Error = Template.bind({});
Error.args = {
  ...Default.args,
  status: 'error',
  label: 'Error Progress Bar',
  helperText: 'Error: Operation failed.',
  value: 100,
};
