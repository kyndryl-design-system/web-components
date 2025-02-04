import { LitElement, html } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import TextAreaScss from './textArea.scss';
import { FormMixin } from '../../../common/mixins/form-input';
import '@kyndryl-design-system/shidoka-foundation/components/icon';
import errorIcon from '@carbon/icons/es/warning--filled/24';
import { deepmerge } from 'deepmerge-ts';

const _defaultTextStrings = {
  requiredText: 'Required',
  errorText: 'Error',
};

/**
 * Text area.
 * @fires on-input - Captures the input event and emits the selected value and original event details.
 * @prop {number} minLength - Minimum number of characters.
 * @prop {number} maxLength - Maximum number of characters.
 * @slot unnamed - Slot for label text.
 */
@customElement('kyn-text-area')
export class TextArea extends FormMixin(LitElement) {
  static override styles = TextAreaScss;

  /** Optional text beneath the input. */
  @property({ type: String })
  caption = '';

  /** Input placeholder. */
  @property({ type: String })
  placeholder = '';

  /** Makes the input required. */
  @property({ type: Boolean })
  required = false;

  /** Input disabled state. */
  @property({ type: Boolean })
  disabled = false;

  /** Maximum number of characters. */
  @property({ type: Number })
  maxLength!: number;

  /** Minimum number of characters. */
  @property({ type: Number })
  minLength!: number;

  /** textarea rows attribute. The number of visible text lines. */
  @property({ type: Number })
  rows!: number;

  /** Customizable text strings. */
  @property({ type: Object })
  textStrings = _defaultTextStrings;

  /** Internal text strings.
   * @internal
   */
  @state()
  _textStrings = _defaultTextStrings;

  /**
   * Queries the <textarea> DOM element.
   * @ignore
   */
  @query('textarea')
  textareaEl!: HTMLTextAreaElement;

  override render() {
    return html`
      <div class="text-area" ?disabled=${this.disabled}>
        <label class="label-text" for=${this.name}>
          ${this.required
            ? html`<abbr
                class="required"
                title=${this._textStrings.requiredText}
                aria-label=${this._textStrings.requiredText}
                >*</abbr
              >`
            : null}
          <slot></slot>
        </label>

        <div class="input-wrapper">
          <textarea
            id=${this.name}
            name=${this.name}
            placeholder=${this.placeholder}
            ?required=${this.required}
            ?disabled=${this.disabled}
            ?invalid=${this._isInvalid}
            aria-invalid=${this._isInvalid}
            aria-describedby=${this._isInvalid ? 'error' : ''}
            minlength=${ifDefined(this.minLength)}
            maxlength=${ifDefined(this.maxLength)}
            rows=${this.rows}
            @input=${(e: any) => this.handleInput(e)}
          >
${this.value}</textarea
          >

          ${this._isInvalid
            ? html`
                <kd-icon
                  class="error-icon"
                  role="img"
                  aria-label=${this._textStrings.errorText}
                  .icon=${errorIcon}
                ></kd-icon>
              `
            : null}
        </div>

        <div class="caption-error-count">
          <div>
            ${this.caption !== ''
              ? html` <div class="caption">${this.caption}</div> `
              : null}
            ${this._isInvalid
              ? html`
                  <div id="error" class="error">
                    ${this.invalidText || this._internalValidationMsg}
                  </div>
                `
              : null}
          </div>
          ${this.maxLength
            ? html`
                <div class="count">${this.value.length}/${this.maxLength}</div>
              `
            : null}
        </div>
      </div>
    `;
  }

  override willUpdate(changedProps: any) {
    if (changedProps.has('textStrings')) {
      this._textStrings = deepmerge(_defaultTextStrings, this.textStrings);
    }
  }

  private handleInput(e: any) {
    this.value = e.target.value;

    this._validate(true, false);

    // emit selected value
    const event = new CustomEvent('on-input', {
      detail: {
        value: e.target.value,
        origEvent: e,
      },
    });
    this.dispatchEvent(event);
  }

  override updated(changedProps: any) {
    // preserve FormMixin updated function
    this._onUpdated(changedProps);

    if (changedProps.has('value')) {
      this.textareaEl.value = this.value;
    }
  }

  private _validate(interacted: Boolean, report: Boolean) {
    // get validity state from textareaEl, combine customError flag if invalidText is provided
    const Validity =
      this.invalidText !== ''
        ? { ...this.textareaEl.validity, customError: true }
        : this.textareaEl.validity;
    // set validationMessage to invalidText if present, otherwise use textareaEl validationMessage
    const ValidationMessage =
      this.invalidText !== ''
        ? this.invalidText
        : this.textareaEl.validationMessage;

    // set validity on custom element, anchor to textareaEl
    this._internals.setValidity(Validity, ValidationMessage, this.textareaEl);

    // set internal validation message if value was changed by user input
    if (interacted) {
      this._internalValidationMsg = this.textareaEl.validationMessage;
    }

    // focus the form field to show validity
    if (report) {
      this._internals.reportValidity();
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kyn-text-area': TextArea;
  }
}
