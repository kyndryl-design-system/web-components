import { LitElement, html } from 'lit';
import {
  customElement,
  property,
  queryAssignedElements,
} from 'lit/decorators.js';

import stepperStyles from './stepper.scss';
import './stepperItem';

/**
 * Stepper
 * @slot unnamed - Slot for step items.
 * @fires on-click - Captures the event and emits the active step and original event details when click on any step title. This is only for procedure type stepper. Status stepper doesn't emit this event.
 */

@customElement('kyn-stepper')
export class Stepper extends LitElement {
  static override styles = stepperStyles;

  /** Stepper type `'procedure'` & `'status'`.
   *
   * procedure: Allows a user to move through a series of steps that need to be completed, such as filling out a series of forms. The user can therefore know where they are in the sequence, and can go back to previous steps if needed. Procedure must use the `'large'` size stepper.
   *
   * status: Should not allow the user navigate to previous steps for ex: sequential forms, payment gateway etc. Should use the `'small'` size to avoid unnecessary clutter.
   *
   * Note: Read the stepper guidelines before changing this option.
   */
  @property({ type: String })
  stepperType = 'procedure';

  /** Wheter the stepper is in vertical type. */
  @property({ type: Boolean })
  vertical = false;

  /** Stepper size `'large'` & `'small'`. Use small size only for status stepper.  */
  @property({ type: String })
  stepperSize = 'large';

  /** Curent index of stepper. Usefull for navigation like next, prev etc. Also represent current step.*/
  @property({ type: Number })
  currentIndex = 0;

  /**
   * Queries any slotted step items.
   * @ignore
   */
  @queryAssignedElements({ selector: 'kyn-stepper-item' })
  steps!: Array<any>;

  override render() {
    return html`
      <div
        class=${this.vertical
          ? 'vertical-stepper-wrapper'
          : 'horizontal-stepper-wrapper'}
      >
        <slot></slot>
      </div>
    `;
  }

  // when firstmost load component
  override firstUpdated(): void {
    if (this.steps?.length > 0) {
      this.steps[0].isFirstStep = true;
      this.steps[this.steps.length - 1].isLastStep = true;

      if (this.steps.length >= 3) {
        this.steps[this.steps.length - 2].isSecondLastStep = true;
      }
      // Only 2 steps - 1st is left align and 2nd is right aligned
      if (this.steps.length === 2) {
        this.steps[0].isTwoStepStepper = true;
      }
      this.steps.forEach((step, index) => (step.stepIndex = index));
    }
  }

  override updated(changedProperties: any) {
    if (changedProperties.has('stepperSize')) {
      this.steps?.forEach((step: any) => {
        this.stepperSize === 'large'
          ? (step.stepSize = 'large')
          : (step.stepSize = 'small');
      });
    }

    this.steps?.forEach((step: any) => {
      step.vertical = this.vertical;
      step.stepperType = this.stepperType;
    });
  }

  // Called when click on any step's title.
  private _handleStepClick(e: any) {
    const event = new CustomEvent('on-click', {
      detail: {
        origEvent: e,
        step: e.detail.step,
        stepIndex: e.detail.stepIndex,
      },
    });
    this.dispatchEvent(event);
  }

  override connectedCallback() {
    super.connectedCallback();
    // capture step click event when click on step's title
    this.addEventListener('on-step-click', (e: any) =>
      this._handleStepClick(e)
    );
  }

  override disconnectedCallback() {
    this.removeEventListener('on-step-click', (e: any) =>
      this._handleStepClick(e)
    );
    super.disconnectedCallback();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kyn-stepper': Stepper;
  }
}
