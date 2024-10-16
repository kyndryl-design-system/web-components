import { html, LitElement, PropertyValues } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { FormMixin } from '../../../common/mixins/form-input';
import { unsafeSVG } from 'lit-html/directives/unsafe-svg.js';
import {
  langsArray,
  isSupportedLocale,
  injectFlatpickrStyles,
  initializeSingleAnchorFlatpickr,
  getFlatpickrOptions,
} from '../../../common/helpers/flatpickr';

import flatpickr from 'flatpickr';
import { BaseOptions } from 'flatpickr/dist/types/options';
import { Locale } from 'flatpickr/dist/types/locale';
import { default as English } from 'flatpickr/dist/l10n/default.js';

import TimepickerStyles from './timepicker.scss';
import ShidokaFlatpickrTheme from '../../../common/scss/shidoka-flatpickr-theme.scss';

import '@kyndryl-design-system/shidoka-foundation/components/icon';
import '@kyndryl-design-system/shidoka-foundation/components/button';
import errorIcon from '@kyndryl-design-system/shidoka-icons/svg/monochrome/16/close-filled.svg';

type SupportedLocale = (typeof langsArray)[number];

/**
 * Timepicker: uses flatpickr datetime picker library, timepicker implementation -- `https://flatpickr.js.org/examples/#time-picker`
 * @fires on-change - Captures the input event and emits the selected value and original event details.
 * @slot unnamed - Slot for label text.
 * @slot anchor - Slot for anchor element.
 */
@customElement('kyn-time-picker')
export class TimePicker extends FormMixin(LitElement) {
  static override styles = [TimepickerStyles, ShidokaFlatpickrTheme];

  /** Sets timepicker attribute name (ex: `contact-form-time-picker`). */
  @property({ type: String })
  nameAttr = '';

  /** Sets desired locale and, if supported, dynamically loads language lib */
  @property({ type: String })
  locale: SupportedLocale = 'en';

  /** Sets pre-selected date/time value. */
  @property({ type: Number })
  override value: number | null = null;

  /** Sets default time value. */
  @property({ type: String })
  defaultDate = '';

  /** Sets validation warning messaging. */
  @property({ type: String })
  warnText = '';

  /** Sets validation error messaging. */
  @property({ type: String })
  override invalidText = '';

  /** Sets caption to be displayed under primary date picker elements. */
  @property({ type: String })
  caption = '';

  /** Sets datepicker form input value to required/required. */
  @property({ type: Boolean })
  required = false;

  /** Sets entire datepicker form element to enabled/disabled. */
  @property({ type: Boolean })
  timepickerDisabled = false;

  /** Sets 24 hour formatting true/false. */
  @property({ type: Boolean })
  twentyFourHourFormat = false;

  /** Sets lower boundary of datepicker date selection. */
  @property({ type: String })
  minTime: string | number | Date = '';

  /** Sets upper boundary of datepicker date selection. */
  @property({ type: String })
  maxTime: string | number | Date = '';

  /**
   * Detects flatpickrs default default time value set onClose when nothing has been selected by user.
   * @internal
   */
  @state()
  private _isDefaultValueSet = false;

  /**
   * Sets whether user has interacted with timepicker for error handling.
   * @internal
   */
  @state()
  private _hasInteracted = false;

  /**
   * Sets validation message to visible.
   * @internal
   */
  @state()
  private _showValidationMessage = false;

  /** Flatpickr instantiation.
   * @internal
   */
  @state()
  private flatpickrInstance?: flatpickr.Instance;

  /**
   * Queries the anchor DOM element.
   * @ignore
   */
  @state()
  private _anchorEl?: HTMLElement;

  /**
   * Queries the anchor slotted DOM element.
   * @internal
   */
  @query('slot[name="anchor"]')
  private anchorSlot!: HTMLSlotElement;

  override render() {
    const errorId = 'error-message';
    const warningId = 'warning-message';
    const descriptionId = 'time-picker-description';

    return html`
      <div class=${classMap(this.getTimepickerClasses())}>
        <slot name="label"></slot>
        <div class="anchor-wrapper">
          <slot name="anchor"></slot>
          <slot name="icon" class="icon"></slot>
        </div>

        ${this.caption
          ? html`<div id=${descriptionId} class="caption options-text">
              ${this.caption}
            </div>`
          : ''}
        ${this._hasInteracted &&
        this._showValidationMessage &&
        !this._isDefaultValueSet &&
        (this._isInvalid || this.invalidText)
          ? html`<div id=${errorId} class="error error-text" role="alert">
              <span class="error-icon">${unsafeSVG(errorIcon)}</span>${this
                .invalidText || this._internalValidationMsg}
            </div>`
          : this._hasInteracted && this.warnText
          ? html`<div id=${warningId} class="warn warn-text" role="alert">
              ${this.warnText}
            </div>`
          : ''}
      </div>
    `;
  }

  getTimepickerClasses() {
    return {
      'time-picker': true,
      'time-picker__disabled': this.timepickerDisabled,
    };
  }

  override async firstUpdated(
    changedProperties: PropertyValues
  ): Promise<void> {
    super.firstUpdated(changedProperties);
    injectFlatpickrStyles(ShidokaFlatpickrTheme.toString());

    await this.updateComplete;
    this.setupAnchor();
  }

  override async updated(changedProperties: PropertyValues): Promise<void> {
    await super.updated(changedProperties);

    if (
      changedProperties.has('defaultDate') ||
      changedProperties.has('maxTime') ||
      changedProperties.has('minTime') ||
      changedProperties.has('twentyFourHourFormat') ||
      changedProperties.has('locale')
    ) {
      if (this.flatpickrInstance) {
        await this.updateFlatpickrOptions();
      } else {
        this.initializeFlatpickr();
      }
    }
  }

  async initializeFlatpickr(): Promise<void> {
    if (!this._anchorEl) {
      return;
    }

    if (this.flatpickrInstance) {
      this.flatpickrInstance.destroy();
    }

    this.flatpickrInstance = await initializeSingleAnchorFlatpickr({
      anchorEl: this._anchorEl,
      getFlatpickrOptions: this.getComponentFlatpickrOptions.bind(this),
      setCalendarAttributes: this.setCalendarAttributes.bind(this),
      setInitialDates: undefined,
      appendToBody: false,
    });
  }

  private setupAnchor() {
    const assignedNodes = this.anchorSlot.assignedNodes({ flatten: true });
    this._anchorEl = assignedNodes.find(
      (node): node is HTMLElement => node instanceof HTMLElement
    );

    if (this._anchorEl) {
      this.initializeFlatpickr();

      const iconSlot = this.shadowRoot?.querySelector(
        'slot[name="icon"]'
      ) as HTMLSlotElement | null;
      iconSlot?.addEventListener('click', () => {
        this.flatpickrInstance?.open();
      });
    } else {
      console.error('Anchor element not found in the slotted content');
    }
  }

  async updateFlatpickrOptions(): Promise<void> {
    if (this.flatpickrInstance) {
      const currentDate = this.flatpickrInstance.selectedDates[0];

      try {
        const newOptions = await this.getComponentFlatpickrOptions();

        Object.keys(newOptions).forEach((key) => {
          if (key in this.flatpickrInstance!.config) {
            this.flatpickrInstance!.set(
              key as keyof BaseOptions,
              newOptions[key as keyof BaseOptions]
            );
          }
        });

        if (this.defaultDate) {
          const defaultDateObj = new Date(this.defaultDate);
          if (!isNaN(defaultDateObj.getTime())) {
            this.flatpickrInstance.setDate(defaultDateObj, false);
          }
        } else if (currentDate) {
          this.flatpickrInstance.setDate(currentDate, false);
        }

        this.setCalendarAttributes();
        this.requestUpdate();
      } catch (error) {
        console.error('Error updating Flatpickr options:', error);
      }
    }
  }

  setCalendarAttributes(): void {
    if (this.flatpickrInstance?.calendarContainer) {
      this.flatpickrInstance.calendarContainer.setAttribute(
        'role',
        'application'
      );
      this.flatpickrInstance.calendarContainer.setAttribute(
        'aria-label',
        'time-picker-container'
      );
    }
  }

  async loadLocale(locale: string): Promise<Partial<Locale>> {
    if (locale === 'en') return English;

    if (!isSupportedLocale(locale)) {
      console.warn(`Unsupported locale: ${locale}. Falling back to English.`);
      return English;
    }

    try {
      const module = await import(`flatpickr/dist/l10n/${locale}.js`);
      const localeConfig =
        module[locale] || module.default[locale] || module.default;

      if (!localeConfig) {
        throw new Error('Locale configuration not found');
      }

      const { amPM, hourAriaLabel, minuteAriaLabel } = localeConfig;
      return { amPM, hourAriaLabel, minuteAriaLabel };
    } catch (error) {
      console.warn(
        `Failed to load locale ${locale}. Falling back to English.`,
        error
      );
      return English;
    }
  }

  async getComponentFlatpickrOptions(): Promise<Partial<BaseOptions>> {
    return getFlatpickrOptions({
      locale: this.locale,
      enableTime: true,
      twentyFourHourFormat: this.twentyFourHourFormat,
      startAnchorEl: this._anchorEl!,
      minTime: this.minTime,
      maxTime: this.maxTime,
      defaultDate: this.defaultDate,
      loadLocale: this.loadLocale.bind(this),
      mode: 'time',
      wrap: false,
      noCalendar: true,
      onChange: this.handleTimeChange.bind(this),
      onClose: this.handleClose.bind(this),
      onOpen: this.handleOpen.bind(this),
    });
  }

  handleOpen(): void {
    this._hasInteracted = true;
    this._showValidationMessage = false;
    this.requestUpdate();
  }

  handleClose(): void {
    setTimeout(() => {
      if (this.flatpickrInstance && this.flatpickrInstance.selectedDates) {
        this._isDefaultValueSet =
          this.flatpickrInstance.selectedDates.length > 0;
      } else {
        this._isDefaultValueSet = false;
      }
      this._showValidationMessage = true;
      this._validate();
      this.requestUpdate();
    }, 50);
  }

  handleTimeChange(selectedDates: Date[], dateStr: string): void {
    this._hasInteracted = true;

    if (selectedDates.length > 0) {
      const selectedDate = selectedDates[0];
      const hours = selectedDate.getHours();
      const minutes = selectedDate.getMinutes();

      const today = new Date();
      today.setHours(hours, minutes, 0, 0);

      const selectedTime = today.getTime();

      this.value = selectedTime;
      this._isDefaultValueSet = true;

      const timeStr = this.twentyFourHourFormat
        ? `${hours.toString().padStart(2, '0')}:${minutes
            .toString()
            .padStart(2, '0')}`
        : dateStr;

      this.emitValue(timeStr);
    } else {
      this.value = null;
      this._isDefaultValueSet = false;
      this.emitValue('');
    }

    this._showValidationMessage = false;
    this.requestUpdate('value');
    this._validate();
  }

  private emitValue(timeStr: string): void {
    const event = new CustomEvent('on-change', {
      detail: { time: timeStr },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  _validate(): boolean {
    const wasInvalid = this._isInvalid;

    if (this.required && !this.value) {
      this._isInvalid = true;
      this._internalValidationMsg = 'This field is required';
    } else {
      this._isInvalid = false;
      this._internalValidationMsg = '';
    }

    if (wasInvalid !== this._isInvalid) {
      this.requestUpdate();
    }

    return !this._isInvalid;
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();

    if (this.flatpickrInstance) {
      this.flatpickrInstance.destroy();
      this.flatpickrInstance = undefined;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kyn-time-picker': TimePicker;
  }
}
