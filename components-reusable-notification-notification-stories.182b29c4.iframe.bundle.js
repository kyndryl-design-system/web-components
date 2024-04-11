/*! For license information please see components-reusable-notification-notification-stories.182b29c4.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_kyndryl_design_system_shidoka_applications=self.webpackChunk_kyndryl_design_system_shidoka_applications||[]).push([[6455],{"./node_modules/@carbon/icons/es/close/16.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>_16});var _16={elem:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:16,height:16},content:[{elem:"path",attrs:{d:"M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"}}],name:"close",size:16}},"./node_modules/@carbon/icons/es/overflow-menu--horizontal/16.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>_16});var _16={elem:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:16,height:16},content:[{elem:"circle",attrs:{cx:"8",cy:"16",r:"2"}},{elem:"circle",attrs:{cx:"16",cy:"16",r:"2"}},{elem:"circle",attrs:{cx:"24",cy:"16",r:"2"}}],name:"overflow-menu--horizontal",size:16}},"./node_modules/@kyndryl-design-system/shidoka-foundation/components/card/index.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var _tslib=__webpack_require__("./node_modules/@kyndryl-design-system/shidoka-foundation/_virtual/_tslib.js"),lit_html=(__webpack_require__("./node_modules/@kyndryl-design-system/shidoka-foundation/external/@lit/reactive-element/reactive-element.js"),__webpack_require__("./node_modules/@kyndryl-design-system/shidoka-foundation/external/lit-html/lit-html.js")),lit_element=__webpack_require__("./node_modules/@kyndryl-design-system/shidoka-foundation/external/lit-element/lit-element.js"),custom_element=__webpack_require__("./node_modules/@kyndryl-design-system/shidoka-foundation/external/@lit/reactive-element/decorators/custom-element.js"),property=__webpack_require__("./node_modules/@kyndryl-design-system/shidoka-foundation/external/@lit/reactive-element/decorators/property.js"),class_map=(__webpack_require__("./node_modules/@kyndryl-design-system/shidoka-foundation/external/@lit/reactive-element/decorators/query-assigned-elements.js"),__webpack_require__("./node_modules/@kyndryl-design-system/shidoka-foundation/external/lit-html/directives/class-map.js")),r=__webpack_require__("./node_modules/@kyndryl-design-system/shidoka-foundation/external/@lit/reactive-element/css-tag.js").AH`*,
*::before,
*::after {
  box-sizing: border-box;
}

:root {
  --kd-current-breakpoint: sm;
}
@media (min-width: 42rem) {
  :root {
    --kd-current-breakpoint: md;
  }
}
@media (min-width: 74rem) {
  :root {
    --kd-current-breakpoint: lg;
  }
}
@media (min-width: 82rem) {
  :root {
    --kd-current-breakpoint: xl;
  }
}
@media (min-width: 99rem) {
  :root {
    --kd-current-breakpoint: max;
  }
}

:host {
  display: inline-block;
  width: 264px;
}

.card-wrapper {
  position: relative;
  padding: 24px;
  background-color: var(--kd-color-background-ui-default);
  outline: 1px solid var(--kd-color-border-light);
  border-radius: 8px;
  height: 100%;
}
.card-wrapper-clickable {
  position: relative;
  display: inline-block;
  color: unset;
  width: inherit;
  text-decoration: none;
  background-color: var(--kd-color-background-ui-default);
  border-radius: 8px;
  padding: 24px;
  transition: outline 200ms ease-out;
}
.card-wrapper-clickable:hover {
  outline: 2px solid var(--kd-color-border-ui-hover);
  box-shadow: var(--kd-elevation-level-2);
}
.card-border {
  outline: 1px solid var(--kd-color-border-ui);
  box-shadow: var(--kd-elevation-level-1);
}`;let a=class extends lit_element.WF{constructor(){super(...arguments),this.type="normal",this.href="",this.rel="",this.target="_self",this.hideBorder=!1}render(){const e={"card-wrapper-clickable":!0,"card-border":!1===this.hideBorder};return lit_html.qy`${"clickable"===this.type?lit_html.qy`<a
          part="card-wrapper"
          class="${(0,class_map.H)(e)}"
          href=${this.href}
          target=${this.target}
          rel=${this.rel}
          @click=${e=>this.handleClick(e)}
        >
          <slot></slot>
        </a>`:lit_html.qy`<div part="card-wrapper" class="card-wrapper">
          <slot></slot>
        </div>`} `}handleClick(e){const t=new CustomEvent("on-card-click",{detail:{origEvent:e}});this.dispatchEvent(t)}};a.styles=r,(0,_tslib.C)([(0,property.M)({type:String})],a.prototype,"type",void 0),(0,_tslib.C)([(0,property.M)({type:String})],a.prototype,"href",void 0),(0,_tslib.C)([(0,property.M)({type:String})],a.prototype,"rel",void 0),(0,_tslib.C)([(0,property.M)({type:String})],a.prototype,"target",void 0),(0,_tslib.C)([(0,property.M)({type:Boolean})],a.prototype,"hideBorder",void 0),a=(0,_tslib.C)([(0,custom_element.E)("kd-card")],a)},"./node_modules/@kyndryl-design-system/shidoka-foundation/components/icon/index.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var _tslib=__webpack_require__("./node_modules/@kyndryl-design-system/shidoka-foundation/_virtual/_tslib.js"),lit_html=(__webpack_require__("./node_modules/@kyndryl-design-system/shidoka-foundation/external/@lit/reactive-element/reactive-element.js"),__webpack_require__("./node_modules/@kyndryl-design-system/shidoka-foundation/external/lit-html/lit-html.js")),lit_element=__webpack_require__("./node_modules/@kyndryl-design-system/shidoka-foundation/external/lit-element/lit-element.js"),custom_element=__webpack_require__("./node_modules/@kyndryl-design-system/shidoka-foundation/external/@lit/reactive-element/decorators/custom-element.js"),property=__webpack_require__("./node_modules/@kyndryl-design-system/shidoka-foundation/external/@lit/reactive-element/decorators/property.js"),directive=(__webpack_require__("./node_modules/@kyndryl-design-system/shidoka-foundation/external/@lit/reactive-element/decorators/query-assigned-elements.js"),__webpack_require__("./node_modules/@kyndryl-design-system/shidoka-foundation/external/lit-html/directive.js"));class n extends directive.WL{constructor(i){if(super(i),this.it=lit_html.s6,i.type!==directive.OA.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(r){if(r===lit_html.s6||null==r)return this._t=void 0,this.it=r;if(r===lit_html.c0)return r;if("string"!=typeof r)throw Error(this.constructor.directiveName+"() called with a non-string value");if(r===this.it)return this._t;this.it=r;const e=[r];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}n.directiveName="unsafeHTML",n.resultType=1;const o=(0,directive.u$)(n);function e(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function t(t){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?e(Object(o),!0).forEach((function(e){r(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):e(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function r(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function es_n(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var es_o=["width","height","viewBox"],c=["tabindex"],i={focusable:"false",preserveAspectRatio:"xMidYMid meet"};function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.width,a=e.height,u=e.viewBox,l=void 0===u?"0 0 ".concat(r," ").concat(a):u,b=es_n(e,es_o),f=b.tabindex,O=es_n(b,c),p=t(t(t({},i),O),{},{width:r,height:a,viewBox:l});return p["aria-label"]||p["aria-labelledby"]||p.title?(p.role="img",null!=f&&(p.focusable="true",p.tabindex=f)):p["aria-hidden"]=!0,p}function u(e){var t=e.elem,r=void 0===t?"svg":t,n=e.attrs,o=void 0===n?{}:n,c=e.content,i=(void 0===c?[]:c).map(u).join("");return"svg"!==r?"<".concat(r," ").concat(l(o),">").concat(i,"</").concat(r,">"):"<".concat(r," ").concat(l(a(o)),">").concat(i,"</").concat(r,">")}function l(e){return Object.keys(e).reduce((function(t,r,n){var o="".concat(r,'="').concat(e[r],'"');return 0===n?o:t+" "+o}),"")}var icon_scss_t=__webpack_require__("./node_modules/@kyndryl-design-system/shidoka-foundation/external/@lit/reactive-element/css-tag.js").AH`*,
*::before,
*::after {
  box-sizing: border-box;
}

:host {
  display: inline-block;
}

svg {
  display: block;
}`;let d=class extends lit_element.WF{constructor(){super(...arguments),this.icon={},this.fill="currentColor"}render(){if(Object.keys(this.icon).length>0){const e=JSON.parse(JSON.stringify(this.icon.attrs));e.fill=this.fill,this.sizeOverride&&(e.width=this.sizeOverride,e.height=this.sizeOverride);const i=u({...this.icon,attrs:a(e)});return lit_html.qy` ${o(i)} `}return null}};d.styles=icon_scss_t,(0,_tslib.C)([(0,property.M)({type:Object})],d.prototype,"icon",void 0),(0,_tslib.C)([(0,property.M)({type:String})],d.prototype,"fill",void 0),(0,_tslib.C)([(0,property.M)({type:Number})],d.prototype,"sizeOverride",void 0),d=(0,_tslib.C)([(0,custom_element.E)("kd-icon")],d)},"./node_modules/@kyndryl-design-system/shidoka-foundation/external/lit-html/directives/class-map.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>n});var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@kyndryl-design-system/shidoka-foundation/external/lit-html/lit-html.js"),_directive_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@kyndryl-design-system/shidoka-foundation/external/lit-html/directive.js");const n=(0,_directive_js__WEBPACK_IMPORTED_MODULE_1__.u$)(class extends _directive_js__WEBPACK_IMPORTED_MODULE_1__.WL{constructor(t){var s;if(super(t),t.type!==_directive_js__WEBPACK_IMPORTED_MODULE_1__.OA.ATTRIBUTE||"class"!==t.name||(null===(s=t.strings)||void 0===s?void 0:s.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((s=>t[s])).join(" ")+" "}update(s,[e]){var i,n;if(void 0===this.nt){this.nt=new Set,void 0!==s.strings&&(this.st=new Set(s.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null===(i=this.st)||void 0===i?void 0:i.has(t))&&this.nt.add(t);return this.render(e)}const r=s.element.classList;this.nt.forEach((t=>{t in e||(r.remove(t),this.nt.delete(t))}));for(const t in e){const s=!!e[t];s===this.nt.has(t)||(null===(n=this.st)||void 0===n?void 0:n.has(t))||(s?(r.add(t),this.nt.add(t)):(r.remove(t),this.nt.delete(t)))}return _lit_html_js__WEBPACK_IMPORTED_MODULE_0__.c0}})},"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{XI:()=>action});var v4=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("@storybook/core-events/preview-errors"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"./src/components/reusable/notification/notification.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Notification:()=>Notification,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit/index.js"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./src/components/reusable/notification/index.ts"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"));__webpack_require__("./src/components/reusable/overflowMenu/index.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Notification",component:"kyn-notification",argTypes:{type:{options:["normal","clickable"],control:{type:"select"}},tagStatus:{options:["default","info","warning","success","error"],control:{type:"select"}}},parameters:{design:{type:"figma",url:"https://www.figma.com/file/CQuDZEeLiuGiALvCWjAKlu/Applications---Component-Library?type=design&node-id=9370-44581&mode=design&t=LXc9LDk5mGkf8vnl-0"}}},Notification={args:{notificationTitle:"Notification Title",notificationSubtitle:"",timeStamp:"2 mins ago",href:"#",type:"normal",tagStatus:"default",unRead:!1},render:args=>lit__WEBPACK_IMPORTED_MODULE_0__.qy`<kyn-notification
      notificationTitle=${args.notificationTitle}
      notificationSubtitle=${args.notificationSubtitle}
      timeStamp=${args.timeStamp}
      href=${args.href}
      type=${args.type}
      tagStatus=${args.tagStatus}
      ?unRead=${args.unRead}
      @on-notification-click=${e=>(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.XI)(e.type)(e)}
      style="width:464px;"
    >
      <kyn-overflow-menu
        slot="actions"
        anchorRight
        @click=${e=>{e.preventDefault(),e.stopPropagation()}}
      >
        <kyn-overflow-menu-item @on-click=${e=>(e=>{(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.XI)(e.type)(e)})(e)}
          >Mark as Read</kyn-overflow-menu-item
        >
        <kyn-overflow-menu-item>View Details</kyn-overflow-menu-item>
      </kyn-overflow-menu>

      <div>${"Message, this is an additional line Ipsum iMessage, Lorem Ipsum is simply dummy and typesetting industry."}</div>
    </kyn-notification>`};Notification.parameters={...Notification.parameters,docs:{...Notification.parameters?.docs,source:{originalSource:"{\n  args: {\n    notificationTitle: 'Notification Title',\n    notificationSubtitle: '',\n    timeStamp: '2 mins ago',\n    href: '#',\n    type: 'normal',\n    tagStatus: 'default',\n    unRead: false\n  },\n  render: args => {\n    return html`<kyn-notification\n      notificationTitle=${args.notificationTitle}\n      notificationSubtitle=${args.notificationSubtitle}\n      timeStamp=${args.timeStamp}\n      href=${args.href}\n      type=${args.type}\n      tagStatus=${args.tagStatus}\n      ?unRead=${args.unRead}\n      @on-notification-click=${e => action(e.type)(e)}\n      style=\"width:464px;\"\n    >\n      <kyn-overflow-menu\n        slot=\"actions\"\n        anchorRight\n        @click=${e => {\n      e.preventDefault();\n      e.stopPropagation();\n    }}\n      >\n        <kyn-overflow-menu-item @on-click=${e => handleOverflowClick(e)}\n          >Mark as Read</kyn-overflow-menu-item\n        >\n        <kyn-overflow-menu-item>View Details</kyn-overflow-menu-item>\n      </kyn-overflow-menu>\n\n      <div>${notificationBodyMsg}</div>\n    </kyn-notification>`;\n  }\n}",...Notification.parameters?.docs?.source}}};const __namedExportsOrder=["Notification"]},"./node_modules/lit-html/directive.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{OA:()=>t,WL:()=>i,u$:()=>e});const t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e=t=>(...e)=>({_$litDirective$:t,values:e});class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},"./node_modules/lit-html/directives/class-map.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>o});var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit-html/lit-html.js"),_directive_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lit-html/directive.js");const o=(0,_directive_js__WEBPACK_IMPORTED_MODULE_1__.u$)(class extends _directive_js__WEBPACK_IMPORTED_MODULE_1__.WL{constructor(t){var i;if(super(t),t.type!==_directive_js__WEBPACK_IMPORTED_MODULE_1__.OA.ATTRIBUTE||"class"!==t.name||(null===(i=t.strings)||void 0===i?void 0:i.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((i=>t[i])).join(" ")+" "}update(i,[s]){var r,o;if(void 0===this.it){this.it=new Set,void 0!==i.strings&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in s)s[t]&&!(null===(r=this.nt)||void 0===r?void 0:r.has(t))&&this.it.add(t);return this.render(s)}const e=i.element.classList;this.it.forEach((t=>{t in s||(e.remove(t),this.it.delete(t))}));for(const t in s){const i=!!s[t];i===this.it.has(t)||(null===(o=this.nt)||void 0===o?void 0:o.has(t))||(i?(e.add(t),this.it.add(t)):(e.remove(t),this.it.delete(t)))}return _lit_html_js__WEBPACK_IMPORTED_MODULE_0__.c0}})},"./node_modules/lit/directives/class-map.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>lit_html_directives_class_map_js__WEBPACK_IMPORTED_MODULE_0__.H});var lit_html_directives_class_map_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit-html/directives/class-map.js")}}]);
//# sourceMappingURL=components-reusable-notification-notification-stories.182b29c4.iframe.bundle.js.map