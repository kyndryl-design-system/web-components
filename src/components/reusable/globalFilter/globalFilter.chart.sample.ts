import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { action } from '@storybook/addon-actions';

import './index';
import '../checkbox';
import '../modal';
import '../textInput';
import '../overflowMenu';
import '../tag';
import '@kyndryl-design-system/shidoka-foundation/components/button';
import '@kyndryl-design-system/shidoka-foundation/components/icon';
import '@kyndryl-design-system/shidoka-foundation/components/accordion';
import '@kyndryl-design-system/shidoka-charts/components/chart';

import searchIcon from '@carbon/icons/es/search/24';
import filterIcon from '@carbon/icons/es/filter/20';
import filterEditIcon from '@carbon/icons/es/filter--edit/20';
import filterRemoveIcon from '@carbon/icons/es/close--filled/16';

/**  Sample Lit component to show global filter pattern applied to a Chart. */
@customElement('sample-filter-chart-component')
export class SampleFilterChartComponent extends LitElement {
  static override styles = css`
    .filter-text {
      display: none;
    }

    @media (min-width: 42rem) {
      .filter-text {
        display: inline;
      }
    }
  `;

  /** Array of sample checkbox filter options. */
  @property({ type: Array })
  checkboxOptions: Array<any> = [
    {
      value: 'Red',
      text: 'Red',
    },
    {
      value: 'Blue',
      text: 'Blue',
    },
    {
      value: 'Yellow',
      text: 'Yellow',
    },
    {
      value: 'Green',
      text: 'Green',
    },
    {
      value: 'Purple',
      text: 'Purple',
    },
    {
      value: 'Orange',
      text: 'Orange',
    },
  ];

  @property({ type: Array })
  chartLabels: Array<string> = [
    'Red',
    'Blue',
    'Yellow',
    'Green',
    'Purple',
    'Orange',
  ];

  @property({ type: Array })
  filteredChartLabels: Array<string> = [];

  @property({ type: Array })
  chartDatasets: Array<any> = [
    {
      label: 'Dataset 1',
      data: [12, 19, 3, 5, 2, 3],
    },
    {
      label: 'Dataset 2',
      data: [8, 15, 7, 9, 6, 13],
    },
  ];

  @property({ type: Object })
  chartOptions = {
    scales: {
      x: {
        title: {
          text: 'Color',
        },
      },
      y: {
        title: {
          text: 'Votes',
        },
      },
    },
  };

  override render() {
    const SelectedOptions = this.checkboxOptions.filter(
      (option) => option.checked
    );

    return html`
      <kyn-global-filter>
        <kyn-text-input
          type="search"
          placeholder="Search"
          size="sm"
          hideLabel
          @on-input=${(e: any) => this._handleSearch(e)}
        >
          Search
          <kd-icon slot="icon" .icon=${searchIcon}></kd-icon>
        </kyn-text-input>

        <kyn-modal
          size="lg"
          titleText="Filter"
          @on-close=${(e: any) => this._handleModalClose(e)}
        >
          <kd-button
            slot="anchor"
            kind="tertiary"
            size="small"
            iconPosition="left"
          >
            <kd-icon
              slot="icon"
              .icon=${SelectedOptions.length ? filterEditIcon : filterIcon}
            ></kd-icon>
            <span class="filter-text">Filter</span>
          </kd-button>

          <kd-accordion filledHeaders compact>
            <kd-accordion-item>
              <span slot="title">
                Colors:
                ${SelectedOptions.length
                  ? SelectedOptions.length + ' items'
                  : 'Any'}
              </span>
              <div slot="body">
                <kyn-checkbox-group
                  name="colors"
                  hideLegend
                  selectAll
                  filterable
                  limitCheckboxes
                  .value=${SelectedOptions.map((option) => {
                    return option.value;
                  })}
                  @on-checkbox-group-change=${(e: any) =>
                    this._handleCheckboxes(e)}
                >
                  <span slot="label">Filter 1</span>

                  ${this.checkboxOptions.map(
                    (option: any) => html`
                      <kyn-checkbox value=${option.value}>
                        ${option.text}
                      </kyn-checkbox>
                    `
                  )}
                </kyn-checkbox-group>
              </div>
            </kd-accordion-item>

            <kd-accordion-item>
              <span slot="title">Filter 2: Any</span>
              <div slot="body">Some other filter control here.</div>
            </kd-accordion-item>
          </kd-accordion>
        </kyn-modal>

        <kyn-tag-group slot="tags" filter limitTags>
          ${SelectedOptions.map(
            (filter) =>
              html`
                <kyn-tag
                  label=${filter.text}
                  @on-close=${(e: any) => this._handleTagClick(e, filter)}
                ></kyn-tag>
              `
          )}
        </kyn-tag-group>

        ${SelectedOptions.length
          ? html`
              <kd-button
                slot="tags"
                kind="tertiary"
                size="small"
                iconPosition="right"
                @on-click=${(e: any) => this._handleClearTags(e)}
              >
                <kd-icon slot="icon" .icon=${filterRemoveIcon}></kd-icon>
                Clear All
              </kd-button>
            `
          : null}
      </kyn-global-filter>

      <br />

      <kd-chart
        style="max-width: 800px;"
        height="350"
        type="bar"
        chartTitle="Bar Chart"
        .labels=${this.filteredChartLabels}
        .datasets=${this.chartDatasets}
        .options=${this.chartOptions}
      ></kd-chart>
    `;
  }

  private _handleSearch(e: any) {
    action(e.type)(e);
    // console.log(e.detail);

    // perform filtering here
    this._filter(e.detail.value);
  }

  private _handleCheckboxes(e: any) {
    action(e.type)(e);
    // console.log(e.detail);

    const Value = e.detail.value;

    // update checked state for each option
    this.checkboxOptions = this.checkboxOptions.map((option) => {
      return { ...option, checked: Value.includes(option.value) };
    });

    // perform filtering here (client-side scenario)
    this._filter('');
  }

  private _handleModalClose(e: any) {
    action(e.type)(e);
    // console.log(e.detail);

    // handle modal close here

    if (e.detail.returnValue === 'ok') {
      // modal was closed with OK/primary action, logic to perform filtering here (server-side scenario)
    } else {
      // modal was closed with cancel/secondary action/x, logic to revert filters here
    }
  }

  private _handleTagClick(e: any, option: any) {
    action(e.type)(e);
    // console.log(e.detail);

    // remove tag by setting checkbox option checked value to false
    option.checked = false;

    // perform filtering here
    this._filter('');

    // force update/render, since objects are updated by reference
    this.requestUpdate();
  }

  private _handleClearTags(e: any) {
    action(e.type)(e);
    // console.log(e.detail);

    // update checked state for each option
    this.checkboxOptions = this.checkboxOptions.map((option) => {
      return { ...option, checked: false };
    });

    // perform filtering here
    this._filter('');
  }

  private _filter(query: string) {
    //get selected filters
    const SelectedOptions = this.checkboxOptions.filter(
      (option) => option.checked
    );

    if (SelectedOptions.length) {
      // filter the labels based on selected checkboxes
      this.filteredChartLabels = this.chartLabels.filter((label) => {
        return this.checkboxOptions.some(
          (option) => option.value === label && option.checked
        );
      });
    } else {
      // show all labels if no filters applied
      this.filteredChartLabels = this.chartLabels;
    }

    // perform search query filtering
    if (query !== '') {
      this.filteredChartLabels = this.filteredChartLabels.filter((label) => {
        return label.toLowerCase().includes(query.toLowerCase());
      });
    }
  }

  override firstUpdated() {
    // perform initial filtering on first update/render
    this._filter('');
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'sample-filter-chart-component': SampleFilterChartComponent;
  }
}
