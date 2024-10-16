import './index';
import { html } from 'lit';
import { action } from '@storybook/addon-actions';
import { useEffect } from '@storybook/addons';
import { getPlaceholder } from '../../../common/helpers/flatpickr';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';

import '@kyndryl-design-system/shidoka-foundation/components/icon';
import calendarIcon from '@kyndryl-design-system/shidoka-icons/svg/monochrome/16/calendar.svg';
import overflowIcon from '@kyndryl-design-system/shidoka-icons/svg/monochrome/20/overflow.svg';

export default {
  title: 'Components/DatePicker',
  component: 'kyn-date-picker',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/dhPuQQrqxHqMvtmnMMuTry/Santorini---Global-Filters?node-id=518-47488&node-type=frame&m=dev',
    },
  },
  argTypes: {
    locale: { control: { type: 'text' } },
    dateFormat: {
      options: [
        'Y-m-d',
        'm-d-Y',
        'd-m-Y',
        'Y-m-d H:i',
        'Y-m-d H:i:s',
        'm-d-Y H:i:s',
        'd-m-Y H:i:s',
      ],
      control: { type: 'select' },
    },
    mode: {
      options: ['single', 'multiple'],
      control: { type: 'select' },
    },
    minDate: { control: { type: 'text' } },
    maxDate: { control: { type: 'text' } },
  },
};

const disconnectFlatpickr = () => {
  const calendarElements = document.querySelectorAll('.flatpickr-calendar');
  calendarElements.forEach((calendar) => calendar.remove());
};

const InputTemplate = (args) => {
  // prevents flatpickr calendar overlay from persisting on view change
  useEffect(() => {
    return () => {
      disconnectFlatpickr();
    };
  }, []);

  const anchorId =
    args.nameAttr ||
    `date-picker-button-${Math.random().toString(36).slice(2, 11)}`;

  const placeholder = getPlaceholder(args.dateFormat);

  return html`<kyn-date-picker
    .nameAttr="${args.nameAttr}"
    .locale="${args.locale}"
    .dateFormat="${args.dateFormat}"
    ?required="${args.required}"
    .value="${args.value}"
    .warnText="${args.warnText}"
    .invalidText="${args.invalidText}"
    .altFormat=${args.altFormat}
    .disable="${args.disable}"
    .enable="${args.enable}"
    .mode="${args.mode}"
    .caption="${args.caption}"
    ?datePickerDisabled="${args.datePickerDisabled}"
    ?twentyFourHourFormat="${args.twentyFourHourFormat}"
    .minDate="${args.minDate}"
    .maxDate="${args.maxDate}"
    @on-change=${(e) => action(e.type)(e)}
  >
    <label
      slot="label"
      class="label-text"
      for=${anchorId}
      ?disabled=${args.datePickerDisabled}
    >
      ${args.required
        ? html`<abbr
            class="required"
            title=${args._textStrings?.requiredText || 'Required'}
            aria-label=${args._textStrings?.requiredText || 'Required'}
            >*</abbr
          >`
        : null}
      ${args.unnamed}
    </label>
    <input
      slot="anchor"
      type="text"
      id=${anchorId}
      name=${args.nameAttr}
      placeholder=${placeholder}
      ?disabled=${args.datePickerDisabled}
      ?required=${args.required}
      aria-invalid=${args._isInvalid ? 'true' : 'false'}
    />
    <span slot="icon" style="line-height: 1;">${unsafeSVG(overflowIcon)}</span>
  </kyn-date-picker>`;
};

const ButtonTemplate = (args) => {
  useEffect(() => {
    return () => {
      disconnectFlatpickr();
    };
  }, []);

  return html`<kyn-date-picker
    .nameAttr="${args.nameAttr}"
    .locale="${args.locale}"
    .dateFormat="${args.dateFormat}"
    ?required="${args.required}"
    .value="${args.value}"
    .warnText="${args.warnText}"
    .invalidText="${args.invalidText}"
    .altFormat=${args.altFormat}
    .disable="${args.disable}"
    .enable="${args.enable}"
    .mode="${args.mode}"
    .caption="${args.caption}"
    ?datePickerDisabled="${args.datePickerDisabled}"
    ?twentyFourHourFormat="${args.twentyFourHourFormat}"
    .minDate="${args.minDate}"
    .maxDate="${args.maxDate}"
    @on-change=${(e) => action(e.type)(e)}
  >
    <label slot="label" class="label-text" ?disabled=${args.datePickerDisabled}>
      ${args.required
        ? html`<abbr
            class="required"
            title=${args._textStrings?.requiredText || 'Required'}
            aria-label=${args._textStrings?.requiredText || 'Required'}
            >*</abbr
          >`
        : null}
      ${args.unnamed}
    </label>
    <kd-button
      slot="anchor"
      value="Primary"
      kind=${'primary-app'}
      class="btn interactive"
      description="Date picker button containing icon"
      ?disabled=${args.datePickerDisabled}
    >
      <span slot="icon" style="line-height: 1;"
        >${unsafeSVG(overflowIcon)}</span
      >
    </kd-button>
  </kyn-date-picker>`;
};

export const DatePickerDefault = InputTemplate.bind({});
DatePickerDefault.args = {
  nameAttr: 'default-date-picker',
  locale: 'en',
  dateFormat: 'Y-m-d',
  required: false,
  value: '',
  warnText: '',
  invalidText: '',
  altFormat: 'F j, Y',
  disable: [],
  enable: [],
  mode: 'single',
  caption: 'Example datepicker caption.',
  datePickerDisabled: false,
  twentyFourHourFormat: false,
  minDate: '',
  maxDate: '',
  unnamed: 'Date',
};
DatePickerDefault.storyName = 'Single Date Selection (Default)';

export const DateWithButtonIcon = ButtonTemplate.bind({});
DateWithButtonIcon.args = {
  ...DatePickerDefault.args,
  nameAttr: 'date-picker-w-button',
  dateFormat: 'Y-m-d H:i',
  caption: '',
  unnamed: 'Date Picker with Button Anchor',
};
DateWithButtonIcon.storyName = 'Date / Time (Button Anchor)';

export const DateWithTime = InputTemplate.bind({});
DateWithTime.args = {
  ...DatePickerDefault.args,
  locale: 'hi',
  nameAttr: 'date-time-picker',
  dateFormat: 'Y-m-d H:i',
  caption: '',
  unnamed: 'दिनांक एवं समय चयनकर्ता',
};
DateWithTime.storyName = 'Date / Time (Hindi Locale)';

export const DatePickerMultiple = InputTemplate.bind({});
DatePickerMultiple.args = {
  ...DatePickerDefault.args,
  locale: 'en',
  nameAttr: 'date-multiple-picker',
  dateFormat: 'Y-m-d',
  caption: '',
  mode: 'multiple',
  unnamed: 'Date Picker (w/ Multiselect)',
};
DatePickerMultiple.storyName = 'Multiple Date Selection';
