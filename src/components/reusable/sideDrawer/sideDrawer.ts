import { unsafeSVG } from 'lit-html/directives/unsafe-svg.js';
import { LitElement, html, css } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { classMap } from 'lit-html/directives/class-map.js';
import SideDrawerScss from './sideDrawer.scss';

import '@kyndryl-design-system/shidoka-foundation/components/button';
import closeIcon from '@kyndryl-design-system/shidoka-icons/svg/monochrome/16/close-simple.svg';

/**
 * Side Drawer.
 * @slot unnamed - Slot for drawer body content.
 * @slot anchor - Slot for the anchor button content.
 * @fires on-close - Emits the drawer close event with `returnValue` (`'ok'` or `'cancel'`).
 */

@customElement('kyn-side-drawer')
export class SideDrawer extends LitElement {
  static override styles = [
    SideDrawerScss,
    css`
      @supports (transition-behavior: allow-discrete) {
        @starting-style {
          dialog[open] {
            transform: translateX(100%);
          }
        }

        @starting-style {
          dialog[open]::backdrop {
            background-color: rgb(0, 0, 0, 0);
          }
        }
      }
    `,
  ];

  /**
   * Drawer open state.
   */
  @property({ type: Boolean })
  open = false;

  /**
   * Drawer size. `'md'`, or `'sm'`.
   */
  @property({ type: String })
  size = 'md';

  /**
   * Title / Heading text, required.
   */
  @property({ type: String })
  titleText = '';

  /**
   * Label text, optional.
   */
  @property({ type: String })
  labelText = '';

  /**
   * Submit button text.
   */
  @property({ type: String })
  submitBtnText = 'Ok';

  /**
   * Cancel button text.
   */
  @property({ type: String })
  cancelBtnText = 'Cancel';

  /** Disables the primary button. */
  @property({ type: Boolean })
  submitBtnDisabled = false;

  /** Determine whether needs footer */
  @property({ type: Boolean })
  hideFooter = false;

  /** Changes the primary button styles to indicate the action is destructive. */
  @property({ type: Boolean })
  destructive = false;

  /** Secondary button text. */
  @property({ type: String })
  secondaryButtonText = 'Secondary';

  /** Hides the secondary button. */
  @property({ type: Boolean })
  showSecondaryButton = false;

  /** Hides the cancel button. */
  @property({ type: Boolean })
  hideCancelButton = false;

  /** Function to execute before the Drawer can close. Useful for running checks or validations before closing. Exposes `returnValue` (`'ok'` or `'cancel'`). Must return `true` or `false`. */
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
      dialog: true,
      'size--md': this.size === 'md',
      'size--standard': this.size === 'standard',
      'size--sm': this.size === 'sm',
    };

    return html`
      <span class="anchor" @click=${this._openDrawer}>
        <slot name="anchor"></slot>
      </span>

      <dialog
        class="${classMap(classes)}"
        autofocus
        aria-labelledby="dialogLabel"
        @cancel=${(e: Event) => this._closeDrawer(e, 'cancel')}
      >
        <form method="dialog">
          <!--  Header -->
          <header>
            <div class="header-label-title">
              <h1 id="dialogLabel">${this.titleText}</h1>
              ${this.labelText !== ''
                ? html`<span class="label">${this.labelText}</span>`
                : null}
            </div>

            <button
              class="close"
              @click=${(e: Event) => this._closeDrawer(e, 'cancel')}
              aria-label="Close drawer"
              title="Close drawer"
              role="button"
            >
              <span class="visually-hidden">Close drawer</span>
              <span aria-hidden="true">${unsafeSVG(closeIcon)}</span>
            </button>
          </header>

          <!-- Body -->
          <div
            class="body"
            tabindex="0"
            role="region"
            aria-label="${this.titleText} content"
          >
            <slot></slot>
          </div>

          <!-- footer -->
          ${!this.hideFooter
            ? html`
                <div class="dialog-footer">
                  <div class="actions">
                    <kd-button
                      class="action-button"
                      value="Ok"
                      ?disabled=${this.submitBtnDisabled}
                      ?destructive=${this.destructive}
                      @click=${(e: Event) => this._closeDrawer(e, 'ok')}
                    >
                      ${this.submitBtnText}
                    </kd-button>

                    ${this.showSecondaryButton
                      ? html`
                          <kd-button
                            class="action-button"
                            value="Secondary"
                            kind="secondary"
                            @click=${(e: Event) =>
                              this._closeDrawer(e, 'secondary')}
                          >
                            ${this.secondaryButtonText}
                          </kd-button>
                        `
                      : null}
                    ${this.hideCancelButton
                      ? null
                      : html`
                          <kd-button
                            class="action-button"
                            value="Cancel"
                            kind="tertiary"
                            @click=${(e: Event) =>
                              this._closeDrawer(e, 'cancel')}
                          >
                            ${this.cancelBtnText}
                          </kd-button>
                        `}
                  </div>
                </div>
              `
            : null}
        </form>
      </dialog>
    `;
  }

  private _openDrawer() {
    this.open = true;
  }

  private _closeDrawer(e: Event, returnValue: string) {
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
    'kyn-side-drawer': SideDrawer;
  }
}
