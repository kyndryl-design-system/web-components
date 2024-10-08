import { html, LitElement, PropertyValues } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { FormMixin } from '../../../common/mixins/form-input';
import { deepmerge } from 'deepmerge-ts';
import { unsafeSVG } from 'lit-html/directives/unsafe-svg.js';
import {
  isSupportedLocale,
  langsArray,
  injectFlatpickrStyles,
  initializeFlatpickr,
} from '../../../common/helpers/flatpickr';

import { BaseOptions } from 'flatpickr/dist/types/options';
import type { Instance } from 'flatpickr/dist/types/instance';
import { Locale } from 'flatpickr/dist/types/locale';
import rangePlugin from 'flatpickr/dist/plugins/rangePlugin';
import { default as English } from 'flatpickr/dist/l10n/default.js';

import DateRangePickerStyles from './daterangepicker.scss';
import ShidokaDatePickerTheme from '../../../common/scss/date-picker-theme.scss';

import '@kyndryl-design-system/shidoka-foundation/components/icon';

import errorIcon from '@kyndryl-design-system/shidoka-icons/svg/monochrome/16/close-filled.svg';

const _defaultTextStrings = {
  requiredText: 'Required',
};

type SupportedLocale = (typeof langsArray)[number];

/**
 * Date Range Picker: uses flatpickr datetime picker library -- `https://flatpickr.js.org/examples/#range-calendar`
 * @fires on-change - Captures the input event and emits the selected value and original event details.
 * @slot unnamed - Slotted anchor.
 * @slot start-label - Slot for start date label text.
 * @slot end-label - Slot for end date label text.
 */
@customElement('kyn-date-range-picker')
export class DateRangePicker extends FormMixin(LitElement) {
  static override styles = [DateRangePickerStyles, ShidokaDatePickerTheme];

  /** Sets date range picker attribute name (ex: `contact-form-date-range-picker`). */
  @property({ type: String })
  nameAttr = '';

  /** Sets and dynamically imports specific l10n calendar localization. */
  @property({ type: String })
  locale: SupportedLocale = 'en';

  /** Sets flatpickr dateFormat attr (ex: `Y-m-d H:i`). */
  @property({ type: String })
  dateFormat:
    | 'Y-m-d'
    | 'm-d-Y'
    | 'd-m-Y'
    | 'Y-m-d H:i'
    | 'Y-m-d H:i:s'
    | 'm-d-Y H:i:s'
    | 'd-m-Y H:i:s' = 'Y-m-d';

  /** Sets date range to have start and end date inputs. */
  @property({ type: Boolean })
  multipleInputs = false;

  /** Sets date range picker container size. */
  @property({ type: String })
  size: 'sm' | 'md' | 'lg' = 'md';

  /** Sets pre-selected date/time value. */
  @property({ type: Array })
  override value: [number | null, number | null] = [null, null];

  /** Sets validation warning messaging. */
  @property({ type: String })
  warnText = '';

  /** Sets validation error messaging. */
  @property({ type: String })
  override invalidText = '';

  /** Sets flatpickr alternative formatting value (ex: `F j, Y`). */
  @property({ type: String })
  altFormat = '';

  /** Sets flatpcikr options setting to disable specific dates. */
  @property({ type: Array })
  disable: (string | number | Date)[] = [];

  /** Sets flatpcikr options setting to enable specific dates. */
  @property({ type: Array })
  enable: (string | number | Date)[] = [];

  /** Sets caption to be displayed under primary date picker elements. */
  @property({ type: String })
  caption = '';

  /** Sets date range picker form input value to required/required. */
  @property({ type: Boolean })
  required = false;

  /** Sets entire date range picker form element to enabled/disabled. */
  @property({ type: Boolean })
  dateRangePickerDisabled = false;

  /** Sets 24 hour formatting true/false. */
  @property({ type: Boolean })
  twentyFourHourFormat = false;

  /** Sets lower boundary of date range picker date selection. */
  @property({ type: String })
  minDate: string | number | Date = '';

  /** Sets upper boundary of date range picker date selection. */
  @property({ type: String })
  maxDate: string | number | Date = '';

  /** Customizable text strings. */
  @property({ type: Object })
  textStrings = _defaultTextStrings;

  /** Internal text strings.
   * @internal
   */
  @state()
  _textStrings = _defaultTextStrings;

  /** Detects whether time format includes time values.
   * @internal
   */
  @state()
  _enableTime = false;

  /** Flatpickr instantiation.
   * @internal
   */
  @state()
  private flatpickrInstance?: Instance;

  /**
   * Queries the start date <input> DOM element.
   * @internal
   */
  @state()
  private startDateInputEl?: HTMLInputElement;

  /**
   * Queries the end date <input> DOM element.
   * @internal
   */
  @state()
  private endDateInputEl?: HTMLInputElement;

  @query('slot[name="start-input"]')
  private startInputSlot!: HTMLSlotElement;

  @query('slot[name="end-input"]')
  private endInputSlot!: HTMLSlotElement;

  /**
   * Sets delay to facilitate smooth date value changes.
   * @internal
   */
  private debounceTimer: ReturnType<typeof setTimeout> | null = null;

  override render() {
    const errorId = 'error-message';
    const warningId = 'warning-message';
    const captionId = 'date-range-picker-caption';

    return html`
      <div class=${classMap(this.getDateRangePickerClasses())}>
        <div class="date-inputs">
          <div class="date-input">
            <slot name="start-label"></slot>
            <div class="input-wrapper">
              <slot name="start-input"></slot>
            </div>
          </div>
          ${this.multipleInputs
            ? html`
                <div class="date-range-separator">—</div>
                <div class="date-input">
                  <slot name="end-label"></slot>
                  <div class="input-wrapper">
                    <slot name="end-input"></slot>
                  </div>
                </div>
              `
            : ''}
        </div>
        ${this.caption
          ? html`<div id=${captionId} class="caption options-text">
              ${this.caption}
            </div>`
          : ''}
        ${this._isInvalid || this.invalidText
          ? html`<div id=${errorId} class="error error-text" role="alert">
              <span class="error-icon">${unsafeSVG(errorIcon)}</span>${this
                .invalidText || this._internalValidationMsg}
            </div>`
          : this.warnText
          ? html`<div id=${warningId} class="warn warn-text" role="alert">
              ${this.warnText}
            </div>`
          : ''}
      </div>
    `;
  }

  getDateRangePickerClasses() {
    return {
      'date-range-picker': true,
      [`date-range-picker__time-variation-${this._enableTime}`]: true,
      [`date-range-picker__size--${this.size}`]: true,
      [`date-range-picker__multi-input-${this.multipleInputs}`]: true,
      'date-range-picker__disabled': this.dateRangePickerDisabled,
    };
  }

  getInputValue(index: number): string {
    return Array.isArray(this.value) && this.value[index] != null
      ? new Date(this.value[index]!).toLocaleString()
      : '';
  }

  override async firstUpdated(
    changedProperties: PropertyValues
  ): Promise<void> {
    super.firstUpdated(changedProperties);
    injectFlatpickrStyles(ShidokaDatePickerTheme.toString());
    await this.updateComplete;
    this.setupInputs();
  }

  private setupInputs() {
    const startAssignedNodes = this.startInputSlot.assignedNodes();

    this.startDateInputEl = this.findInputElement(startAssignedNodes);

    if (this.multipleInputs) {
      const endAssignedNodes = this.endInputSlot.assignedNodes();
      this.endDateInputEl = this.findInputElement(endAssignedNodes);
    }

    if (this.startDateInputEl) {
      this.initializeFlatpickr();
    } else {
      console.error(
        'Start date input element not found in the slotted content'
      );
      throw new Error(
        'Start date input element not found in the slotted content'
      );
    }
  }
  private findInputElement(nodes: Node[]): HTMLInputElement | undefined {
    for (const node of nodes) {
      if (node instanceof HTMLElement) {
        const input = node.querySelector('input');
        if (input) return input;
      } else if (node instanceof HTMLInputElement) {
        return node;
      }
    }
    return undefined;
  }

  async initializeFlatpickr(): Promise<void> {
    if (!this.startDateInputEl) {
      console.error(
        'Cannot initialize Flatpickr: startDateInputEl is undefined'
      );
      return;
    }

    try {
      this.flatpickrInstance = await initializeFlatpickr({
        startDateInputEl: this.startDateInputEl,
        getFlatpickrOptions: this.getFlatpickrOptions.bind(this),
        setCalendarAttributes: this.setCalendarAttributes.bind(this),
        setInitialDates: this.setInitialDates.bind(this),
      });
    } catch (error) {
      console.error('Error initializing Flatpickr:', error);
    }
  }
  override updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);
    if (
      changedProperties.has('dateFormat') ||
      changedProperties.has('minDate') ||
      changedProperties.has('maxDate') ||
      changedProperties.has('locale')
    ) {
      this.updateFlatpickrOptions();
    }
  }

  async loadLocale(locale: string): Promise<Locale> {
    if (locale === 'en') return English;

    if (!isSupportedLocale(locale)) {
      console.error(`Unable to load ${locale} -- falling back to English.`);
      return English;
    }

    try {
      const module = await import(`flatpickr/dist/l10n/${locale}.js`);

      let localeConfig: Locale;

      if (module[locale]) {
        localeConfig = module[locale];
      } else if (module.default && module.default[locale]) {
        localeConfig = module.default[locale];
      } else if (module.default && typeof module.default === 'object') {
        localeConfig = module.default;
      } else {
        throw new Error('Unable to find locale configuration');
      }

      return localeConfig;
    } catch (error) {
      console.error(
        `Unable to load ${locale} -- falling back to English.`,
        error
      );
      return English;
    }
  }

  async getFlatpickrOptions(): Promise<Partial<BaseOptions>> {
    this._enableTime = this.dateFormat.includes('H:');

    let localeOptions: Partial<Locale>;

    if (this.locale === 'en') {
      localeOptions = {
        weekdays: {
          shorthand: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
          longhand: [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
          ],
        },
      };
    } else {
      localeOptions = await this.loadLocale(this.locale);
    }

    const options: Partial<BaseOptions> = {
      dateFormat: this.dateFormat,
      mode: 'range',
      enableTime: this._enableTime,
      allowInput: false,
      clickOpens: true,
      time_24hr: this.twentyFourHourFormat,
      weekNumbers: false,
      wrap: false,
      monthSelectorType: 'static',
      locale: localeOptions,
      altFormat: this.altFormat,
      onChange: this.handleDateChange.bind(this),
    };

    if (this.multipleInputs) {
      options.plugins = [rangePlugin({ input: this.endDateInputEl })];
    }

    if (this.minDate) options.minDate = this.minDate;
    if (this.maxDate) options.maxDate = this.maxDate;
    if (this.enable.length > 0) options.enable = this.enable;
    if (this.disable.length > 0) options.disable = this.disable;

    return options;
  }

  setCalendarAttributes(): void {
    if (this.flatpickrInstance?.calendarContainer) {
      this.flatpickrInstance.calendarContainer.setAttribute(
        'role',
        'application'
      );
      this.flatpickrInstance.calendarContainer.setAttribute(
        'aria-label',
        'calendar-container'
      );
    }
  }

  setInitialDates(): void {
    if (
      Array.isArray(this.value) &&
      this.value.length === 2 &&
      this.value[0] !== null &&
      this.value[1] !== null
    ) {
      this.flatpickrInstance!.setDate(
        [new Date(this.value[0]), new Date(this.value[1])],
        false
      );
    }
  }

  setAccessibilityAttributes(): void {
    if (this.flatpickrInstance?.calendarContainer) {
      this.flatpickrInstance.calendarContainer.setAttribute(
        'role',
        'application'
      );
      this.flatpickrInstance.calendarContainer.setAttribute(
        'aria-label',
        'Date range calendar'
      );

      const startDateInput = this.startDateInputEl;
      const endDateInput = this.endDateInputEl;

      startDateInput?.setAttribute('aria-label', 'Start date');
      endDateInput?.setAttribute('aria-label', 'End date');
    }
  }

  async updateFlatpickrOptions(): Promise<void> {
    if (!this.flatpickrInstance) return;

    const currentDates = this.flatpickrInstance.selectedDates;

    const newOptions = await this.getFlatpickrOptions();

    Object.keys(newOptions).forEach((key) => {
      this.flatpickrInstance!.set(
        key as keyof BaseOptions,
        newOptions[key as keyof BaseOptions]
      );
    });

    this.flatpickrInstance.redraw();

    if (currentDates && currentDates.length === 2) {
      this.flatpickrInstance.setDate(currentDates, false);
    }

    this.setAccessibilityAttributes();

    this.requestUpdate();
  }

  handleDateChange = (selectedDates: Date[], dateStr: string): void => {
    if (this.debounceTimer) clearTimeout(this.debounceTimer);
    this.debounceTimer = setTimeout(() => {
      this.value =
        selectedDates.length === 2
          ? [selectedDates[0].getTime(), selectedDates[1].getTime()]
          : [null, null];
      this.requestUpdate('value');

      const customEvent = new CustomEvent('on-change', {
        detail: { dates: selectedDates, dateString: dateStr },
        bubbles: true,
        composed: true,
      });

      this.dispatchEvent(customEvent);

      this._validate();

      this.updateSelectedDateRangeAria(selectedDates);
    }, 100);
  };

  updateSelectedDateRangeAria(selectedDates: Date[]): void {
    if (selectedDates.length === 2) {
      const [startDate, endDate] = selectedDates;
      this.startDateInputEl?.setAttribute(
        'aria-label',
        `Selected start date: ${startDate.toLocaleDateString()}`
      );
      this.endDateInputEl?.setAttribute(
        'aria-label',
        `Selected end date: ${endDate.toLocaleDateString()}`
      );
    } else {
      this.startDateInputEl?.setAttribute('aria-label', 'Start date');
      this.endDateInputEl?.setAttribute('aria-label', 'End date');
    }
  }

  _validate(): boolean {
    this._isInvalid = this.required && (!this.value[0] || !this.value[1]);
    this._internalValidationMsg = this._isInvalid
      ? 'Both start and end dates are required'
      : '';
    return !this._isInvalid;
  }

  override willUpdate(changedProps: PropertyValues) {
    if (changedProps.has('textStrings')) {
      this._textStrings = deepmerge(_defaultTextStrings, this.textStrings);
    }
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    if (this.flatpickrInstance) {
      this.flatpickrInstance.destroy();
      this.flatpickrInstance = undefined;
    }
    const calendarElements = document.querySelectorAll('.flatpickr-calendar');
    calendarElements.forEach((calendar) => calendar.remove());
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kyn-date-range-picker': DateRangePicker;
  }
}
