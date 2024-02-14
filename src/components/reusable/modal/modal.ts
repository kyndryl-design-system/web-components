import { LitElement, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import ModalScss from './modal.scss';

import '@kyndryl-design-system/shidoka-foundation/components/button';
import '@kyndryl-design-system/shidoka-foundation/components/icon';

import closeIcon from '@carbon/icons/es/close/32';

/**
 * Modal.
 * @slot unnamed - Slot for modal body content.
 * @slot anchor - Slot for the anchor button content.
 * @fires on-close - Emits the modal close event with `returnValue` (`'ok'` or `'cancel'`).
 */
@customElement('kyn-modal')
export class Modal extends LitElement {
  static override styles = ModalScss;

  /** Modal open state. */
  @property({ type: Boolean })
  open = false;

  /** Modal size. `'auto'`, `'md'`, or `'lg'`. */
  @property({ type: String })
  size = 'auto';

  /** Title/heading text, required. */
  @property({ type: String })
  titleText = '';

  /** Label text, optional. */
  @property({ type: String })
  labelText = '';

  /** OK button text. */
  @property({ type: String })
  okText = 'OK';

  /** Cancel button text. */
  @property({ type: String })
  cancelText = 'Cancel';

  /** Changes the primary button styles to indicate the action is destructive. */
  @property({ type: Boolean })
  destructive = false;

  /** Disables the primary button. */
  @property({ type: Boolean })
  okDisabled = false;

  /** Function to execute before the modal can close. Useful for running checks or validations before closing. Exposes `returnValue` (`'ok'` or `'cancel'`). Must return `true` or `false`. */
  @property({ attribute: false })
  beforeClose!: Function;

  /** The dialog element
   * @internal
   */
  @query('dialog')
  _dialog!: any;

  override render() {
    const classes = {
      modal: true,
      'size--md': this.size === 'md',
      'size--lg': this.size === 'lg',
    };

    return html`
      <button class="anchor" @click=${this._openModal}>
        <slot name="anchor"></slot>
      </button>

      <dialog
        class="${classMap(classes)}"
        autofocus
        aria-labelledby="dialogLabel"
        @cancel=${(e: Event) => this._closeModal(e, 'cancel')}
      >
        <button
          class="close"
          @click=${(e: Event) => this._closeModal(e, 'cancel')}
        >
          <kd-icon .icon=${closeIcon}></kd-icon>
        </button>

        <header>
          <div>
            ${this.labelText !== ''
              ? html`<span class="label">${this.labelText}</span>`
              : null}
            <h1 id="dialogLabel">${this.titleText}</h1>
          </div>
        </header>

        <form method="dialog" class="body">
          <slot></slot>

          <div class="actions">
            <kd-button
              value="ok"
              ?destructive=${this.destructive}
              ?disabled=${this.okDisabled}
              @click=${(e: Event) => this._closeModal(e, 'ok')}
            >
              ${this.okText}
            </kd-button>

            <kd-button
              value="cancel"
              kind="secondary"
              @click=${(e: Event) => this._closeModal(e, 'cancel')}
            >
              ${this.cancelText}
            </kd-button>

            <!--
            <div class="custom-actions">
              <slot name="actions"></slot>
            </div>
            -->
          </div>
        </form>
      </dialog>
    `;
  }

  private _openModal() {
    this.open = true;
  }

  private _closeModal(e: Event, returnValue: string) {
    if (
      !this.beforeClose ||
      (this.beforeClose && this.beforeClose(returnValue))
    ) {
      this.open = false;
      this._dialog.returnValue = returnValue;
      this._emitCloseEvent(e);
    }
  }

  private _emitCloseEvent(e: Event) {
    const event = new CustomEvent('on-close', {
      detail: {
        returnValue: this._dialog.returnValue,
        origEvent: e,
      },
    });
    this.dispatchEvent(event);
  }

  override updated(changedProps: any) {
    if (changedProps.has('open')) {
      if (this.open) {
        this._dialog.showModal();
      } else {
        this._dialog.close();
      }
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kyn-modal': Modal;
  }
}
