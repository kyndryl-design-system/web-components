import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import '@kyndryl-design-system/shidoka-foundation/components/icon';
import '../loaders';
import '../tooltip';
import checkmarkIcon from '@carbon/icons/es/checkmark--filled/16';
import errorIcon from '@carbon/icons/es/error--filled/16';

import ProgressBarStyles from './progressBar.scss';

enum ProgressStatus {
  ACTIVE = 'active',
  SUCCESS = 'success',
  ERROR = 'error',
}

/**
 * `<kyn-progress-bar>` -- progress bar status indicator component.
 * @slot tooltip - Slot for tooltip.
 */
@customElement('kyn-progress-bar')
export class ProgressBar extends LitElement {
  static override styles = ProgressBarStyles;

  /** Sets visibility of optional inline load status spinner. */
  @property({ type: Boolean })
  showInlineLoadStatus = true;

  /** Sets progress bar html id property for accessibility (ex: `example-progress-bar`). */
  @property({ type: String })
  progressBarId = '';

  /** Sets progress bar status mode. */
  @property({ type: String })
  status: 'active' | 'success' | 'error' = 'active';

  /** Sets initial progress bar value (optionally hard-coded). */
  @property({ type: Number })
  value: number | null = null;

  /** Sets manual max value (default = 100). */
  @property({ type: Number })
  max = 100;

  /** Sets optional progress bar label. */
  @property({ type: String })
  label = '';

  /** Sets optional helper text that appears underneath `<progress>` element. */
  @property({ type: String })
  helperText = '';

  /** Sets the unit for progress measurement (ex: 'MB', 'GB', '%') */
  @property({ type: String })
  unit = '';

  /** Incrementing percentage count value.
   * @internal
   */
  @state()
  private _percentage = 0;

  /** Increments animated movement in progress bar.
   * @internal
   */
  @state()
  private _progress = 0;

  /** Value indicates whether or not the bar is in animated motion, dynamic helper text values are proportionally incrementing.
   * @internal
   */
  @state()
  private _running = false;

  /** Value set to indicate absence of value and max to identify indeterminate state.
   * @internal
   */
  @state()
  private _isIndeterminate = false;

  /** Controls timeout interval for incremented bar animation.
   * @internal
   */
  private _animationFrameId: number | null = null;

  override render() {
    const currentValue = this.status === 'active' ? this._progress : this.value;
    const currentStatus = this.getCurrentStatus(currentValue);
    const helperText = this.getHelperText();
    this._isIndeterminate = !currentValue && !this.max;

    this._percentage = Math.round((this._progress / this.max) * 100);

    return html`
      ${this.renderProgressBarLabel(currentStatus, currentValue)}
      ${this.renderProgressBar(currentStatus, currentValue)}
      ${helperText
        ? html`<div
            class=${`progress-bar__helper-text helper-text ${currentStatus}`}
          >
            <span>${helperText}</span>
          </div>`
        : null}
    `;
  }

  private renderProgressBar(
    currentStatus: ProgressStatus,
    currentValue: number | null
  ) {
    const resolvedValue = [
      ProgressStatus.SUCCESS,
      ProgressStatus.ERROR,
    ].includes(currentStatus)
      ? this.max
      : currentValue;

    return html`<progress
      id=${this.progressBarId}
      class="${this.getProgressBarClasses(currentStatus)}"
      max=${this.max}
      value=${ifDefined(
        this._isIndeterminate ? this.value ?? undefined : Number(resolvedValue)
      )}
      aria-valuenow=${ifDefined(
        !this._isIndeterminate && typeof resolvedValue === 'number'
          ? resolvedValue
          : undefined
      )}
      aria-valuemin="0"
      aria-valuemax=${this.max}
      aria-label=${this.label}
    ></progress>`;
  }

  private renderProgressBarLabel(
    currentStatus: ProgressStatus,
    currentValue: number | null
  ) {
    return html`<div class="progress-bar__upper-container">
      <label class="progress-bar__label label-text" for=${this.progressBarId}>
        <span>${this.label}</span>
        <slot name="tooltip"></slot>
      </label>
      ${currentValue != null
        ? html`<div class=${`progress-bar__status-icon`}>
            ${this.renderStatusIconOrLoader(currentStatus)}
          </div>`
        : null}
    </div>`;
  }

  private renderStatusIconOrLoader(currentStatus: ProgressStatus) {
    if (currentStatus !== ProgressStatus.ACTIVE) {
      return html`<kd-icon
        class=${`${currentStatus}-icon`}
        .icon=${currentStatus === ProgressStatus.SUCCESS
          ? checkmarkIcon
          : errorIcon}
      ></kd-icon>`;
    }

    if (this.showInlineLoadStatus) {
      return html`<p>
        <span>${this._percentage}%</span
        ><kyn-loader-inline status="active"></kyn-loader-inline>
      </p>`;
    }

    return null;
  }

  override firstUpdated() {
    if (this.status === ProgressStatus.ACTIVE) {
      this.startProgress();
    }
  }

  override updated(changedProperties: Map<string, any>) {
    if (changedProperties.has('status') || changedProperties.has('value')) {
      this.cancelAnimation();
      this._running = false;

      if (this.status === ProgressStatus.ACTIVE) {
        this._running = true;
        this.startProgress();
      }
    }
  }

  private getProgressBarClasses(status: string) {
    return classMap({
      'progress-bar__main': true,
      [`progress-bar__${status}`]: true,
    });
  }

  private getHelperText() {
    const inferredIndeterminate = !this.value && !this.max;
    if (inferredIndeterminate) {
      return '';
    }

    if (this.helperText) {
      return this.helperText;
    }

    if (this.status === ProgressStatus.ACTIVE) {
      return this._running
        ? `${this._progress}${this.unit} of ${this.max}${this.unit}`
        : 'Fetching assets...';
    }

    return '';
  }

  private getCurrentStatus(currentValue: number | null): ProgressStatus {
    if (this.status === ProgressStatus.ERROR) {
      return ProgressStatus.ERROR;
    }

    if (this.status === ProgressStatus.SUCCESS || currentValue === this.max) {
      return ProgressStatus.SUCCESS;
    }

    if (this.status === ProgressStatus.ACTIVE) {
      return ProgressStatus.ACTIVE;
    }

    return ProgressStatus.SUCCESS;
  }

  private startProgress() {
    if (this._animationFrameId !== null) {
      cancelAnimationFrame(this._animationFrameId);
    }

    const step = () => {
      const targetValue =
        this.value !== null && this.value !== undefined ? this.value : this.max;
      const advancement = 1;
      const difference = targetValue - this._progress;
      const progressStep =
        Math.min(Math.abs(difference), advancement) * Math.sign(difference);

      if (this._progress < targetValue && Math.abs(difference) > 0.1) {
        this._progress += progressStep;
        this._animationFrameId = requestAnimationFrame(step);
      } else {
        this._progress = targetValue;
        this.cancelAnimation();
      }
    };

    step();
  }

  private cancelAnimation() {
    if (this._animationFrameId !== null) {
      cancelAnimationFrame(this._animationFrameId);
      this._animationFrameId = null;
    }
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    this.cancelAnimation();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kyn-progress-bar': ProgressBar;
  }
}
