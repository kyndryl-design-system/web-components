import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import TabPanelScss from './tabPanel.scss';

/**
 * Tabs.
 * @slot unnamed - Slot for tab content.
 */
@customElement('kyn-tab-panel')
export class TabPanel extends LitElement {
  static override styles = TabPanelScss;

  /** Matching Tab ID, required. */
  @property({ type: String })
  tabId = '';

  /** Tab Panel visible state.  Must match Tab selected state. */
  @property({ type: Boolean, reflect: true })
  visible = false;

  /** Tab Panel ID.
   * @internal
   */
  @property({ type: String, reflect: true })
  override id = '';

  /** aria role.
   * @internal
   */
  @property({ type: String, reflect: true })
  override role = 'tabpanel';

  /** aria-labelledby, derived from tabId.
   * @internal
   */
  @property({ type: String, reflect: true })
  'aria-labelledby' = '';

  override render() {
    return html`
      <div class="tab-panel">
        <slot></slot>
      </div>
    `;
  }

  /**
   * Updates the id and aria-labelledby properties based on the changed tabId property.
   * @param {any} changedProps - The `changedProps` parameter is an object that contains the properties
   * that have changed in the component. It is used to determine which properties have been updated and
   * perform specific actions based on those changes.
   */
  override willUpdate(changedProps: any) {
    if (changedProps.has('tabId')) {
      this.id = this.tabId + '-panel';
      this['aria-labelledby'] = this.tabId;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kyn-tab-panel': TabPanel;
  }
}
