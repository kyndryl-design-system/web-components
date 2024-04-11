"use strict";(self.webpackChunk_kyndryl_design_system_shidoka_applications=self.webpackChunk_kyndryl_design_system_shidoka_applications||[]).push([[7722,4940],{"./src/stories/forms.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_shidoka_applications_shidoka_applications_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_forms_stories_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/forms.stories.js");function _createMdxContent(props){const _components={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,_home_runner_work_shidoka_applications_shidoka_applications_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.W8,{of:_forms_stories_js__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"forms",children:"Forms"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["This document explains how to use our form field components within a native HTML ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"<form>"})," to capture FormData on submit and perform validations."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"form-participation",children:"Form Participation"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Our custom input components are form associated usin the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals",rel:"nofollow",children:"HTML ElementInternals API"})," so their values are included in ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/FormData",rel:"nofollow",children:"FormData"}),", which can be captured from the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"submit"})," event of the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"<form>"})," element."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"example",children:"Example"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-js",children:"document.querySelector('form').addEventListener('submit', (e) => {\n  e.preventDefault();\n  const formData = new FormData(e.target);\n});\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"validation",children:"Validation"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["All of our form field components use the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation",rel:"nofollow",children:"HTML Constraint Validation API"}),". This means that native input validations like ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"required"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"minLength"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"pattern"}),", etc are all included out of the box. Custom validations can be performed externally from the components by passing a value to the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"invalidText"})," property, which will take precedence over internal validation messages. Validation will not trigger until you interact with a form field, submit the form, call ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"reportValidity()"})," or ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"checkValidity()"}),", or set ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"invalidText"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"example-form",children:"Example Form"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.gG,{of:_forms_stories_js__WEBPACK_IMPORTED_MODULE_2__.Default})})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_home_runner_work_shidoka_applications_shidoka_applications_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./src/components/reusable/dropdown/index.ts":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{__webpack_require__("./src/components/reusable/dropdown/dropdown.ts"),__webpack_require__("./src/components/reusable/dropdown/dropdownOption.ts")},"./src/stories/forms.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit/index.js"),_carbon_icons_es_information_16__WEBPACK_IMPORTED_MODULE_13__=(__webpack_require__("./src/components/reusable/radioButton/index.ts"),__webpack_require__("./src/components/reusable/checkbox/index.ts"),__webpack_require__("./src/components/reusable/toggleButton/index.ts"),__webpack_require__("./src/components/reusable/textInput/index.ts"),__webpack_require__("./src/components/reusable/textArea/index.ts"),__webpack_require__("./src/components/reusable/dropdown/index.ts"),__webpack_require__("./src/components/reusable/timepicker/index.ts"),__webpack_require__("./src/components/reusable/datePicker/index.ts"),__webpack_require__("./src/components/reusable/daterangepicker/index.ts"),__webpack_require__("./src/components/reusable/tooltip/index.ts"),__webpack_require__("./node_modules/@kyndryl-design-system/shidoka-foundation/components/button/index.js"),__webpack_require__("./node_modules/@kyndryl-design-system/shidoka-foundation/components/icon/index.js"),__webpack_require__("./node_modules/@carbon/icons/es/information/16.js")),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"Patterns/Forms"},Default={render:()=>lit__WEBPACK_IMPORTED_MODULE_0__.qy`
      <form
        @submit=${e=>(e.preventDefault(),(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_14__.XI)("submit")(e),console.log(new FormData(e.target)),!1)}
      >
        <kyn-radio-button-group
          name="radio"
          @on-radio-group-change=${e=>(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_14__.XI)(e.type)(e)}
        >
          <span slot="label">Radio Buttons</span>
          <kyn-radio-button value="1"> Option 1 </kyn-radio-button>
          <kyn-radio-button value="2"> Option 2 </kyn-radio-button>
          <kyn-radio-button value="3"> Option 3 </kyn-radio-button>
        </kyn-radio-button-group>

        <br />

        <kyn-checkbox-group
          name="checkbox"
          @on-checkbox-group-change=${e=>(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_14__.XI)(e.type)(e)}
        >
          <span slot="label">Checkboxes</span>
          <kyn-checkbox value="1"> Option 1 </kyn-checkbox>
          <kyn-checkbox value="2"> Option 2 </kyn-checkbox>
          <kyn-checkbox value="3"> Option 3 </kyn-checkbox>
        </kyn-checkbox-group>

        <br />

        <kyn-toggle-button
          name="toggle"
          value="example"
          @on-change=${e=>(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_14__.XI)(e.type)(e)}
        >
          Toggle Button
        </kyn-toggle-button>

        <br /><br />

        <kyn-dropdown
          name="dropdown"
          caption="Dropdown example"
          @on-change=${e=>(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_14__.XI)(e.type)(e)}
        >
          <span slot="label"> Dropdown </span>
          <kyn-tooltip slot="label" anchorPosition="start">
            <kd-icon slot="anchor" .icon=${_carbon_icons_es_information_16__WEBPACK_IMPORTED_MODULE_13__.A}></kd-icon>
            Tooltip example.
          </kyn-tooltip>

          <kyn-dropdown-option value="1">Option 1</kyn-dropdown-option>
          <kyn-dropdown-option value="2">Option 2</kyn-dropdown-option>
          <kyn-dropdown-option value="3" disabled>
            Disabled Option
          </kyn-dropdown-option>
          <kyn-dropdown-option value="4">Option 4</kyn-dropdown-option>
          <kyn-dropdown-option value="5">Option 5</kyn-dropdown-option>
          <kyn-dropdown-option value="6">Option 6</kyn-dropdown-option>
          <kyn-dropdown-option value="7">Option 7</kyn-dropdown-option>
        </kyn-dropdown>

        <br /><br />

        <kyn-dropdown
          name="dropdownMulti"
          multiple
          searchable
          caption="Searchable Multi-Select Dropdown example"
          @on-change=${e=>(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_14__.XI)(e.type)(e)}
        >
          <span slot="label">Multi-Select Dropdown</span>
          <kyn-dropdown-option value="1">Option 1</kyn-dropdown-option>
          <kyn-dropdown-option value="2">Option 2</kyn-dropdown-option>
          <kyn-dropdown-option value="3" disabled>
            Disabled Option
          </kyn-dropdown-option>
          <kyn-dropdown-option value="4">Option 4</kyn-dropdown-option>
          <kyn-dropdown-option value="5">Option 5</kyn-dropdown-option>
          <kyn-dropdown-option value="6">Option 6</kyn-dropdown-option>
          <kyn-dropdown-option value="7">Option 7</kyn-dropdown-option>
        </kyn-dropdown>

        <br /><br />

        <kyn-text-input
          name="textInput"
          placeholder="Placeholder text"
          caption="Text input example"
          @on-input=${e=>(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_14__.XI)(e.type)(e)}
        >
          Text Input
        </kyn-text-input>

        <br /><br />

        <kyn-text-area
          name="textArea"
          placeholder="Placeholder text"
          caption="Text area example"
          @on-input=${e=>(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_14__.XI)(e.type)(e)}
          @keydown=${e=>e.stopPropagation()}
        >
          Text Area
        </kyn-text-area>

        <br /><br />

        <kyn-time-picker
          name="timepicker"
          size="md"
          caption="Time picker example"
          @on-input=${e=>(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_14__.XI)(e.type)(e)}
        >
          Time
        </kyn-time-picker>

        <br /><br />

        <kyn-date-picker
          size="md"
          name="date-picker"
          datePickerType="single"
          caption="Date picker example"
          @on-input=${e=>(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_14__.XI)(e.type)(e)}
        >
          Date
        </kyn-date-picker>

        <br /><br />

        <kyn-date-picker
          size="md"
          name="date-time-picker"
          datePickerType="date-time"
          caption="Date time picker example"
          @on-input=${e=>(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_14__.XI)(e.type)(e)}
        >
          Date Time
        </kyn-date-picker>

        <br /><br />

        <kyn-date-range-picker
          size="md"
          name="date-range"
          caption="Date range picker example"
          @on-input=${e=>(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_14__.XI)(e.type)(e)}
        >
          Date Range
        </kyn-date-range-picker>

        <br /><br />

        <kd-button
          type="submit"
          name="test"
          @on-click=${()=>{console.log(document.querySelector("form").reportValidity()?"valid":"invalid")}}
        >
          Submit
        </kd-button>
      </form>
    `};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    return html`\n      <form\n        @submit=${e => {\n      e.preventDefault();\n      action(\'submit\')(e);\n      console.log(new FormData(e.target));\n\n      // console.log(e.submitter);\n      // submitter is not accessible with form associated custom elements, see https://github.com/WICG/webcomponents/issues/814\n\n      return false;\n    }}\n      >\n        <kyn-radio-button-group\n          name="radio"\n          @on-radio-group-change=${e => action(e.type)(e)}\n        >\n          <span slot="label">Radio Buttons</span>\n          <kyn-radio-button value="1"> Option 1 </kyn-radio-button>\n          <kyn-radio-button value="2"> Option 2 </kyn-radio-button>\n          <kyn-radio-button value="3"> Option 3 </kyn-radio-button>\n        </kyn-radio-button-group>\n\n        <br />\n\n        <kyn-checkbox-group\n          name="checkbox"\n          @on-checkbox-group-change=${e => action(e.type)(e)}\n        >\n          <span slot="label">Checkboxes</span>\n          <kyn-checkbox value="1"> Option 1 </kyn-checkbox>\n          <kyn-checkbox value="2"> Option 2 </kyn-checkbox>\n          <kyn-checkbox value="3"> Option 3 </kyn-checkbox>\n        </kyn-checkbox-group>\n\n        <br />\n\n        <kyn-toggle-button\n          name="toggle"\n          value="example"\n          @on-change=${e => action(e.type)(e)}\n        >\n          Toggle Button\n        </kyn-toggle-button>\n\n        <br /><br />\n\n        <kyn-dropdown\n          name="dropdown"\n          caption="Dropdown example"\n          @on-change=${e => action(e.type)(e)}\n        >\n          <span slot="label"> Dropdown </span>\n          <kyn-tooltip slot="label" anchorPosition="start">\n            <kd-icon slot="anchor" .icon=${infoIcon}></kd-icon>\n            Tooltip example.\n          </kyn-tooltip>\n\n          <kyn-dropdown-option value="1">Option 1</kyn-dropdown-option>\n          <kyn-dropdown-option value="2">Option 2</kyn-dropdown-option>\n          <kyn-dropdown-option value="3" disabled>\n            Disabled Option\n          </kyn-dropdown-option>\n          <kyn-dropdown-option value="4">Option 4</kyn-dropdown-option>\n          <kyn-dropdown-option value="5">Option 5</kyn-dropdown-option>\n          <kyn-dropdown-option value="6">Option 6</kyn-dropdown-option>\n          <kyn-dropdown-option value="7">Option 7</kyn-dropdown-option>\n        </kyn-dropdown>\n\n        <br /><br />\n\n        <kyn-dropdown\n          name="dropdownMulti"\n          multiple\n          searchable\n          caption="Searchable Multi-Select Dropdown example"\n          @on-change=${e => action(e.type)(e)}\n        >\n          <span slot="label">Multi-Select Dropdown</span>\n          <kyn-dropdown-option value="1">Option 1</kyn-dropdown-option>\n          <kyn-dropdown-option value="2">Option 2</kyn-dropdown-option>\n          <kyn-dropdown-option value="3" disabled>\n            Disabled Option\n          </kyn-dropdown-option>\n          <kyn-dropdown-option value="4">Option 4</kyn-dropdown-option>\n          <kyn-dropdown-option value="5">Option 5</kyn-dropdown-option>\n          <kyn-dropdown-option value="6">Option 6</kyn-dropdown-option>\n          <kyn-dropdown-option value="7">Option 7</kyn-dropdown-option>\n        </kyn-dropdown>\n\n        <br /><br />\n\n        <kyn-text-input\n          name="textInput"\n          placeholder="Placeholder text"\n          caption="Text input example"\n          @on-input=${e => action(e.type)(e)}\n        >\n          Text Input\n        </kyn-text-input>\n\n        <br /><br />\n\n        <kyn-text-area\n          name="textArea"\n          placeholder="Placeholder text"\n          caption="Text area example"\n          @on-input=${e => action(e.type)(e)}\n          @keydown=${e => e.stopPropagation()}\n        >\n          Text Area\n        </kyn-text-area>\n\n        <br /><br />\n\n        <kyn-time-picker\n          name="timepicker"\n          size="md"\n          caption="Time picker example"\n          @on-input=${e => action(e.type)(e)}\n        >\n          Time\n        </kyn-time-picker>\n\n        <br /><br />\n\n        <kyn-date-picker\n          size="md"\n          name="date-picker"\n          datePickerType="single"\n          caption="Date picker example"\n          @on-input=${e => action(e.type)(e)}\n        >\n          Date\n        </kyn-date-picker>\n\n        <br /><br />\n\n        <kyn-date-picker\n          size="md"\n          name="date-time-picker"\n          datePickerType="date-time"\n          caption="Date time picker example"\n          @on-input=${e => action(e.type)(e)}\n        >\n          Date Time\n        </kyn-date-picker>\n\n        <br /><br />\n\n        <kyn-date-range-picker\n          size="md"\n          name="date-range"\n          caption="Date range picker example"\n          @on-input=${e => action(e.type)(e)}\n        >\n          Date Range\n        </kyn-date-range-picker>\n\n        <br /><br />\n\n        <kd-button\n          type="submit"\n          name="test"\n          @on-click=${() => {\n      // check validity of the overall form\n      console.log(document.querySelector(\'form\').reportValidity() ? \'valid\' : \'invalid\');\n    }}\n        >\n          Submit\n        </kd-button>\n      </form>\n    `;\n  }\n}',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]}}]);
//# sourceMappingURL=stories-forms-mdx.390c7eee.iframe.bundle.js.map