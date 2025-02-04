import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import '@kyndryl-design-system/shidoka-foundation/components/button';
import '@kyndryl-design-system/shidoka-foundation/components/icon';
import closeIcon from '@carbon/icons/es/close/16';

import NotificationScss from './notification.scss';
import '@kyndryl-design-system/shidoka-foundation/components/card';
import '@kyndryl-design-system/shidoka-foundation/components/icon';
import successIcon from '@carbon/icons/es/checkmark--filled/16';
import warningErrorIcon from '@carbon/icons/es/warning--alt--filled/16';
import infoIcon from '@carbon/icons/es/information--filled/16';

import '../tag';
/**
 * Notification component.
 * @slot unnamed - Slot for notification message body.
 * @slot actions - Slot for menu.
 * @fires on-notification-click - Emit event for clickable notification.
 * @fires on-close - Emits when an inline/toast notification closes.
 */

@customElement('kyn-notification')
export class Notification extends LitElement {
  static override styles = NotificationScss;

  /** Notification Title (Required). */
  @property({ type: String })
  notificationTitle = '';

  /** Notification subtitle.(optional) */
  @property({ type: String })
  notificationSubtitle = '';

  /** 
   * Timestamp of notification.
   * It is recommended to add the context along with the timestamp. Example: `Updated 2 mins ago`.
   */
  @property({ type: String })
  timeStamp = '';

  /** Card href link */
  @property({ type: String })
  href = '';

  /** Notification status / tag type. `'default'`, `'info'`, `'warning'`, `'success'` & `'error'`. */
  @property({ type: String })
  tagStatus = 'default';

  /** Notification type. `'normal'`, `'inline'`, `'toast'` and `'clickable'`. Clickable type can be use inside notification panel */
  @property({ type: String })
  type = 'normal';

  /** Customizable text strings. */
  @property({ type: Object })
  textStrings: any = {
    success: 'Success',
    warning: 'Warning',
    info: 'Info',
    error: 'Error',
  };

  /** Close button description (Required to support accessibility). */
  @property({ type: String })
  closeBtnDescription = 'Close';

  /** 
   * Assistive text for notification type. 
   * Required for `'clickable'`, `'inline'` and `'toast'` notification types.
   * */
  @property({ type: String })
  assistiveNotificationTypeText = '';

  /** Notification role (Required to support accessibility). */
  @property({ type: String }) 
  notificationRole?: 'alert' | 'log' | 'status';

  /** 
   * Status label (Required to support accessibility). 
   * Assign the localized string value for the word **Status**.
   * */
  @property({ type: String })
  statusLabel = 'Status';

  /** Set tagColor based on provided tagStatus.
   * @internal
   */
  @state()
  _tagColor: any = {
    success: 'passed',
    warning: 'warning',
    info: 'cat01',
    error: 'failed',
  };

  /** Set notification mark read prop. Required ony for `type: 'clickable'`.*/
  @property({ type: Boolean, reflect: true })
  unRead = false;

  /** Hide close (x) button. Useful only for `type='toast'`. This required `timeout > 0` otherwise toast remain as it is when `hideCloseButton` is set true. */
  @property({ type: Boolean })
  hideCloseButton = false;

  /** Timeout (Default 8 seconds for Toast). Specify an optional duration the toast notification should be closed in. Only apply with `type = 'toast'` */
  @property({ type: Number })
  timeout = 8;

  override render() {
    const cardBgClasses = {
      'notification-inline': this.type === 'inline',
      'notification-toast': this.type === 'toast',
      'notification-error':
        (this.type === 'inline' || this.type === 'toast') &&
        this.tagStatus === 'error',
      'notification-success':
        (this.type === 'inline' || this.type === 'toast') &&
        this.tagStatus === 'success',
      'notification-warning':
        (this.type === 'inline' || this.type === 'toast') &&
        this.tagStatus === 'warning',
      'notification-info':
        (this.type === 'inline' || this.type === 'toast') &&
        this.tagStatus === 'info',
      'notification-default':
        (this.type === 'inline' || this.type === 'toast') &&
        this.tagStatus === 'default',
    };

    return html`
      ${this.type === 'clickable'
        ? html`<kd-card
            class="${this.unRead
              ? 'notification-mark-unread'
              : 'notification-mark-read'}"
            type=${this.type}
            href=${this.href}
            target="_blank"
            rel="noopener"
            @on-card-click=${(e: any) => this._handleCardClick(e)}
            hideBorder
            role=${ifDefined(this.notificationRole)}>
              <span id="notificationType">${this.assistiveNotificationTypeText}</span>
              ${this.renderInnerUI()}
            </kd-card
          >`
        : html`
        <kd-card type=${this.type} role=${ifDefined(this.notificationRole)} class="${classMap(cardBgClasses)}">
          ${this.type === 'inline' || this.type === 'toast' ? html `<span id="notificationType">${this.assistiveNotificationTypeText}</span>` : null}
          ${this.renderInnerUI()}
        </kd-card>`
      }
    `;
  }

  private renderInnerUI() {
    const notificationIcon: any = {
      success: successIcon,
      error: warningErrorIcon,
      warning: warningErrorIcon,
      info: infoIcon,
    };

    const notificationIconFillColor: any = {
      success: 'var(--kd-color-border-success, #1FA452)',
      error: 'var(--kd-color-border-destructive, #CC1800)',
      warning: 'var(--kd-color-border-warning,#F5C400)',
      info: 'var(--kd-color-border-informational, #1473FF)',
    };

    return html`<div class="notification-wrapper">
      <div class="notification-title-wrap">
        <div class="notification-head">
          ${(this.type === 'inline' || this.type === 'toast') &&
          this.tagStatus !== 'default'
            ? html` <kd-icon
                class="notification-state-icon"
                slot="icon"
                fill=${notificationIconFillColor[this.tagStatus]}
                .icon=${notificationIcon[this.tagStatus]}
                role="img"
                aria-label=${`${this.textStrings[this.tagStatus]} icon`}
              ></kd-icon>`
            : null}

          <div class="notification-title">${this.notificationTitle}</div>

          ${this.notificationSubtitle !== '' &&
          (this.type === 'normal' || this.type === 'clickable')
            ? html`
                <div class="notification-subtitle">
                  ${this.notificationSubtitle}
                </div>
              `
            : null}
        </div>

        <div>
          ${(this.type === 'toast' || this.type === 'inline') &&
          !this.hideCloseButton
            ? html` <kd-button
                class="notification-toast-close-btn"
                kind="tertiary"
                size="small"
                description=${ifDefined(this.closeBtnDescription)}
                iconPosition="left"
                @on-click="${() => this._handleClose()}"
              >
                <kd-icon
                  slot="icon"
                  fill="#3D3C3C"
                  .icon=${closeIcon}
                  role="img"
                  aria-label=${ifDefined(this.closeBtnDescription)}
                ></kd-icon>
              </kd-button>`
            : null}
          <!-- actions slot could be an overflow menu, close icon (for other notification types) etc. -->
          <slot name="actions"></slot>
        </div>
      </div>

      <div class="notification-description">
        <slot></slot>
      </div>

      <div class="notification-content-wrapper">
        <div class="status-tag">
          ${this.tagStatus !== 'default' &&
          (this.type === 'normal' || this.type === 'clickable')
            ? html` 
            <span id="statusLabel">${this.statusLabel}</span>
            <kyn-tag
                label=${this.textStrings[this.tagStatus]}
                tagColor=${this._tagColor[this.tagStatus]}
                shade="dark"
              ></kyn-tag>`
            : null}
        </div>
        <div class="timestamp-wrapper">
          <div class="timestamp-text">${this.timeStamp}</div>
        </div>
      </div>
    </div>`;
  }

  override updated(changedProperties: any) {
    // Close toast notification if timeout > 0
    if (
      this.type === 'toast' &&
      changedProperties.has('timeout') &&
      this.timeout > 0
    ) {
      setTimeout(() => {
        this._close();
      }, this.timeout * 1000);
    }
  }

  // Remove toast from DOM
  private _close() {
    const animation = this.animate([{ opacity: '1' }, { opacity: '0' }], {
      duration: 500,
      easing: 'ease-in-out',
      fill: 'forwards',
    });
    animation.onfinish = () => {
      this.parentNode?.removeChild(this);
    };

    // emit on-close event
    const event = new CustomEvent('on-close');
    this.dispatchEvent(event);
  }

  private _handleClose() {
    this._close();
  }

  private _handleCardClick(e: any) {
    const event = new CustomEvent('on-notification-click', {
      detail: e.detail.origEvent,
    });
    this.dispatchEvent(event);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kyn-notification': Notification;
  }
}
