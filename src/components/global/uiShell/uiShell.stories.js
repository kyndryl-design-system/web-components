import { html } from 'lit';
import './index';
import '../footer';
import '../header';
import '@kyndryl-design-system/shidoka-foundation/components/icon';
import sampleIcon from '@carbon/icons/es/user--avatar/16';

export default {
  title: 'Global Components/UI Shell',
  component: 'kyn-ui-shell',
  decorators: [
    (story) =>
      html`
        <div
          style="transform: translate3d(0,0,0); margin: var(--kd-negative-page-gutter);"
        >
          ${story()}
        </div>
      `,
  ],
};

export const UIShell = {
  render: (args) => html`
    <kyn-ui-shell>
      <kyn-header divider appTitle="UI Shell Example"></kyn-header>

      <main>Main content here.</main>

      <kyn-footer rootUrl=${args.rootUrl}></kyn-footer>
    </kyn-ui-shell>
  `,
};

// UIShell.parameters = {
//   design: {
//     type: 'figma',
//     url: '',
//   },
// };
