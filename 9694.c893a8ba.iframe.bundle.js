"use strict";(self.webpackChunk_kyndryl_design_system_shidoka_applications=self.webpackChunk_kyndryl_design_system_shidoka_applications||[]).push([[9694],{"./src/components/reusable/modal/index.ts":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lit=__webpack_require__("./node_modules/lit/index.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),class_map=__webpack_require__("./node_modules/lit/directives/class-map.js");const modal=lit.AH`*,::after,::before{box-sizing:border-box}:root{--kd-current-breakpoint:sm}@media(min-width:42rem){:root{--kd-current-breakpoint:md}}@media(min-width:74rem){:root{--kd-current-breakpoint:lg}}@media(min-width:82rem){:root{--kd-current-breakpoint:xl}}@media(min-width:99rem){:root{--kd-current-breakpoint:max}}:host{display:inline-block}dialog{padding:32px;color:inherit;background:var(--kd-color-background-ui-default);border-radius:8px;border:1px solid var(--kd-color-border-light);box-shadow:0 0 40px 0 rgba(0,0,0,.12);min-width:288px;max-width:calc(100% - 32px);max-height:calc(100% - 32px)}dialog[open]{animation:dialog-in .4s ease-out}dialog::backdrop{background-color:rgba(0,0,0,.4)}dialog.size--md{width:384px}dialog.size--lg{width:711px}@supports(transition-behavior:allow-discrete){dialog{transition:opacity .4s ease-out,transform .4s ease-out,overlay .4s ease-out allow-discrete,display .4s ease-out allow-discrete;opacity:0;transform:scale(0)}dialog::backdrop{background-color:rgba(0,0,0,0);transition:display .4s allow-discrete,overlay .4s allow-discrete,background-color .4s}dialog[open]{animation:none;opacity:1;transform:scale(1)}dialog[open]::backdrop{background-color:rgba(0,0,0,.4)}}@keyframes dialog-in{0%{opacity:0;transform:scale(0)}100%{opacity:1;transform:scale(1)}}button{appearance:none;background:0 0;border:none;color:inherit;cursor:pointer;font:inherit;padding:0;border-radius:4px;outline:2px solid transparent;transition:outline-color 150ms ease-out,color 150ms ease-out}button:focus{outline-color:var(--kd-color-border-focus)}button:hover{color:var(--kd-color-text-link-hover)}button:active{color:var(--kd-color-text-pressed)}.anchor{display:inline-block;width:100%}header{margin-bottom:32px;margin-right:16px}.close{position:absolute;top:16px;right:16px}.close kd-icon{display:block}.label{font-family:var(--kd-font-family-secondary);font-size:var(--kd-font-size-utility-3-sm);line-height:var(--kd-line-height-utility-3-sm);font-weight:var(--kd-font-weight-regular);letter-spacing:var(--kd-letter-spacing-5);color:var(--kd-color-text-placeholder)}@media(min-width:42rem){.label{font-size:var(--kd-font-size-utility-3-md);line-height:var(--kd-line-height-utility-3-md)}}@media(min-width:74rem){.label{font-size:var(--kd-font-size-utility-3-lg);line-height:var(--kd-line-height-utility-3-lg)}}@media(min-width:82rem){.label{font-size:var(--kd-font-size-utility-3-xlg);line-height:var(--kd-line-height-utility-3-xlg)}}@media(min-width:99rem){.label{font-size:var(--kd-font-size-utility-3-max);line-height:var(--kd-line-height-utility-3-max)}}h1{font-family:var(--kd-font-family-primary);font-size:var(--kd-font-size-body-1-sm);line-height:var(--kd-line-height-body-1-sm);font-weight:var(--kd-font-weight-regular);letter-spacing:var(--kd-letter-spacing-4);margin:0;order:1}@media(min-width:42rem){h1{font-size:var(--kd-font-size-body-1-md);line-height:var(--kd-line-height-body-1-md)}}@media(min-width:74rem){h1{font-size:var(--kd-font-size-body-1-lg);line-height:var(--kd-line-height-body-1-lg)}}@media(min-width:82rem){h1{font-size:var(--kd-font-size-body-1-xlg);line-height:var(--kd-line-height-body-1-xlg)}}@media(min-width:99rem){h1{font-size:var(--kd-font-size-body-1-max);line-height:var(--kd-line-height-body-1-max)}}.actions{display:flex;align-items:center;flex-wrap:wrap;gap:16px;margin-top:32px}@media(max-width:42rem){.actions kd-button{width:100%;flex-grow:1}}.custom-actions{margin-left:auto;display:flex;align-items:center;gap:16px}`;__webpack_require__("./node_modules/@kyndryl-design-system/shidoka-foundation/components/button/index.js"),__webpack_require__("./node_modules/@kyndryl-design-system/shidoka-foundation/components/icon/index.js");var _32=__webpack_require__("./node_modules/@carbon/icons/es/close/32.js");function _getDecoratorsApi(){_getDecoratorsApi=function(){return api};var api={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(O,elements){["method","field"].forEach((function(kind){elements.forEach((function(element){element.kind===kind&&"own"===element.placement&&this.defineClassElement(O,element)}),this)}),this)},initializeClassElements:function(F,elements){var proto=F.prototype;["method","field"].forEach((function(kind){elements.forEach((function(element){var placement=element.placement;if(element.kind===kind&&("static"===placement||"prototype"===placement)){var receiver="static"===placement?F:proto;this.defineClassElement(receiver,element)}}),this)}),this)},defineClassElement:function(receiver,element){var descriptor=element.descriptor;if("field"===element.kind){var initializer=element.initializer;descriptor={enumerable:descriptor.enumerable,writable:descriptor.writable,configurable:descriptor.configurable,value:void 0===initializer?void 0:initializer.call(receiver)}}Object.defineProperty(receiver,element.key,descriptor)},decorateClass:function(elements,decorators){var newElements=[],finishers=[],placements={static:[],prototype:[],own:[]};if(elements.forEach((function(element){this.addElementPlacement(element,placements)}),this),elements.forEach((function(element){if(!_hasDecorators(element))return newElements.push(element);var elementFinishersExtras=this.decorateElement(element,placements);newElements.push(elementFinishersExtras.element),newElements.push.apply(newElements,elementFinishersExtras.extras),finishers.push.apply(finishers,elementFinishersExtras.finishers)}),this),!decorators)return{elements:newElements,finishers};var result=this.decorateConstructor(newElements,decorators);return finishers.push.apply(finishers,result.finishers),result.finishers=finishers,result},addElementPlacement:function(element,placements,silent){var keys=placements[element.placement];if(!silent&&-1!==keys.indexOf(element.key))throw new TypeError("Duplicated element ("+element.key+")");keys.push(element.key)},decorateElement:function(element,placements){for(var extras=[],finishers=[],decorators=element.decorators,i=decorators.length-1;i>=0;i--){var keys=placements[element.placement];keys.splice(keys.indexOf(element.key),1);var elementObject=this.fromElementDescriptor(element),elementFinisherExtras=this.toElementFinisherExtras((0,decorators[i])(elementObject)||elementObject);element=elementFinisherExtras.element,this.addElementPlacement(element,placements),elementFinisherExtras.finisher&&finishers.push(elementFinisherExtras.finisher);var newExtras=elementFinisherExtras.extras;if(newExtras){for(var j=0;j<newExtras.length;j++)this.addElementPlacement(newExtras[j],placements);extras.push.apply(extras,newExtras)}}return{element,finishers,extras}},decorateConstructor:function(elements,decorators){for(var finishers=[],i=decorators.length-1;i>=0;i--){var obj=this.fromClassDescriptor(elements),elementsAndFinisher=this.toClassDescriptor((0,decorators[i])(obj)||obj);if(void 0!==elementsAndFinisher.finisher&&finishers.push(elementsAndFinisher.finisher),void 0!==elementsAndFinisher.elements){elements=elementsAndFinisher.elements;for(var j=0;j<elements.length-1;j++)for(var k=j+1;k<elements.length;k++)if(elements[j].key===elements[k].key&&elements[j].placement===elements[k].placement)throw new TypeError("Duplicated element ("+elements[j].key+")")}}return{elements,finishers}},fromElementDescriptor:function(element){var obj={kind:element.kind,key:element.key,placement:element.placement,descriptor:element.descriptor};return Object.defineProperty(obj,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===element.kind&&(obj.initializer=element.initializer),obj},toElementDescriptors:function(elementObjects){if(void 0!==elementObjects)return function _toArray(arr){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(elementObjects).map((function(elementObject){var element=this.toElementDescriptor(elementObject);return this.disallowProperty(elementObject,"finisher","An element descriptor"),this.disallowProperty(elementObject,"extras","An element descriptor"),element}),this)},toElementDescriptor:function(elementObject){var kind=String(elementObject.kind);if("method"!==kind&&"field"!==kind)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+kind+'"');var key=_toPropertyKey(elementObject.key),placement=String(elementObject.placement);if("static"!==placement&&"prototype"!==placement&&"own"!==placement)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+placement+'"');var descriptor=elementObject.descriptor;this.disallowProperty(elementObject,"elements","An element descriptor");var element={kind,key,placement,descriptor:Object.assign({},descriptor)};return"field"!==kind?this.disallowProperty(elementObject,"initializer","A method descriptor"):(this.disallowProperty(descriptor,"get","The property descriptor of a field descriptor"),this.disallowProperty(descriptor,"set","The property descriptor of a field descriptor"),this.disallowProperty(descriptor,"value","The property descriptor of a field descriptor"),element.initializer=elementObject.initializer),element},toElementFinisherExtras:function(elementObject){return{element:this.toElementDescriptor(elementObject),finisher:_optionalCallableProperty(elementObject,"finisher"),extras:this.toElementDescriptors(elementObject.extras)}},fromClassDescriptor:function(elements){var obj={kind:"class",elements:elements.map(this.fromElementDescriptor,this)};return Object.defineProperty(obj,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),obj},toClassDescriptor:function(obj){var kind=String(obj.kind);if("class"!==kind)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+kind+'"');this.disallowProperty(obj,"key","A class descriptor"),this.disallowProperty(obj,"placement","A class descriptor"),this.disallowProperty(obj,"descriptor","A class descriptor"),this.disallowProperty(obj,"initializer","A class descriptor"),this.disallowProperty(obj,"extras","A class descriptor");var finisher=_optionalCallableProperty(obj,"finisher");return{elements:this.toElementDescriptors(obj.elements),finisher}},runClassFinishers:function(constructor,finishers){for(var i=0;i<finishers.length;i++){var newConstructor=(0,finishers[i])(constructor);if(void 0!==newConstructor){if("function"!=typeof newConstructor)throw new TypeError("Finishers must return a constructor.");constructor=newConstructor}}return constructor},disallowProperty:function(obj,name,objectType){if(void 0!==obj[name])throw new TypeError(objectType+" can't have a ."+name+" property.")}};return api}function _createElementDescriptor(def){var descriptor,key=_toPropertyKey(def.key);"method"===def.kind?descriptor={value:def.value,writable:!0,configurable:!0,enumerable:!1}:"get"===def.kind?descriptor={get:def.value,configurable:!0,enumerable:!1}:"set"===def.kind?descriptor={set:def.value,configurable:!0,enumerable:!1}:"field"===def.kind&&(descriptor={configurable:!0,writable:!0,enumerable:!0});var element={kind:"field"===def.kind?"field":"method",key,placement:def.static?"static":"field"===def.kind?"own":"prototype",descriptor};return def.decorators&&(element.decorators=def.decorators),"field"===def.kind&&(element.initializer=def.value),element}function _coalesceGetterSetter(element,other){void 0!==element.descriptor.get?other.descriptor.get=element.descriptor.get:other.descriptor.set=element.descriptor.set}function _hasDecorators(element){return element.decorators&&element.decorators.length}function _isDataDescriptor(desc){return void 0!==desc&&!(void 0===desc.value&&void 0===desc.writable)}function _optionalCallableProperty(obj,name){var value=obj[name];if(void 0!==value&&"function"!=typeof value)throw new TypeError("Expected '"+name+"' to be a function");return value}function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:String(i)}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}(function _decorate(decorators,factory,superClass,mixins){var api=_getDecoratorsApi();if(mixins)for(var i=0;i<mixins.length;i++)api=mixins[i](api);var r=factory((function initialize(O){api.initializeInstanceElements(O,decorated.elements)}),superClass),decorated=api.decorateClass(function _coalesceClassElements(elements){for(var newElements=[],isSameElement=function(other){return"method"===other.kind&&other.key===element.key&&other.placement===element.placement},i=0;i<elements.length;i++){var other,element=elements[i];if("method"===element.kind&&(other=newElements.find(isSameElement)))if(_isDataDescriptor(element.descriptor)||_isDataDescriptor(other.descriptor)){if(_hasDecorators(element)||_hasDecorators(other))throw new ReferenceError("Duplicated methods ("+element.key+") can't be decorated.");other.descriptor=element.descriptor}else{if(_hasDecorators(element)){if(_hasDecorators(other))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+element.key+").");other.decorators=element.decorators}_coalesceGetterSetter(element,other)}else newElements.push(element)}return newElements}(r.d.map(_createElementDescriptor)),decorators);return api.initializeClassElements(r.F,decorated.elements),api.runClassFinishers(r.F,decorated.finishers)})([(0,decorators.EM)("kyn-modal")],(function(_initialize,_LitElement){return{F:class Modal extends _LitElement{constructor(...args){super(...args),_initialize(this)}},d:[{kind:"field",static:!0,key:"styles",value:()=>[modal,lit.AH`
      @supports (transition-behavior: allow-discrete) {
        @starting-style {
          dialog[open] {
            opacity: 0;
            transform: scale(0);
          }
        }

        @starting-style {
          dialog[open]::backdrop {
            background-color: rgb(0, 0, 0, 0);
          }
        }
      }
    `]},{kind:"field",decorators:[(0,decorators.MZ)({type:Boolean})],key:"open",value:()=>!1},{kind:"field",decorators:[(0,decorators.MZ)({type:String})],key:"size",value:()=>"auto"},{kind:"field",decorators:[(0,decorators.MZ)({type:String})],key:"titleText",value:()=>""},{kind:"field",decorators:[(0,decorators.MZ)({type:String})],key:"labelText",value:()=>""},{kind:"field",decorators:[(0,decorators.MZ)({type:String})],key:"okText",value:()=>"OK"},{kind:"field",decorators:[(0,decorators.MZ)({type:String})],key:"cancelText",value:()=>"Cancel"},{kind:"field",decorators:[(0,decorators.MZ)({type:Boolean})],key:"destructive",value:()=>!1},{kind:"field",decorators:[(0,decorators.MZ)({type:Boolean})],key:"okDisabled",value:()=>!1},{kind:"field",decorators:[(0,decorators.MZ)({type:Boolean})],key:"hideFooter",value:()=>!1},{kind:"field",decorators:[(0,decorators.MZ)({attribute:!1})],key:"beforeClose",value:void 0},{kind:"field",decorators:[(0,decorators.P)("dialog")],key:"_dialog",value:void 0},{kind:"method",key:"render",value:function render(){const classes={modal:!0,"size--md":"md"===this.size,"size--lg":"lg"===this.size};return lit.qy`
      <span class="anchor" @click=${this._openModal}>
        <slot name="anchor"></slot>
      </span>

      <dialog
        class="${(0,class_map.H)(classes)}"
        autofocus
        aria-labelledby="dialogLabel"
        @cancel=${e=>this._closeModal(e,"cancel")}
      >
        <button
          class="close"
          @click=${e=>this._closeModal(e,"cancel")}
        >
          <kd-icon .icon=${_32.A}></kd-icon>
        </button>

        <header>
          <div>
            ${""!==this.labelText?lit.qy`<span class="label">${this.labelText}</span>`:null}
            <h1 id="dialogLabel">${this.titleText}</h1>
          </div>
        </header>

        <form method="dialog" class="body">
          <slot></slot>

          ${this.hideFooter?null:lit.qy`
                <div class="actions">
                  <kd-button
                    value="ok"
                    ?destructive=${this.destructive}
                    ?disabled=${this.okDisabled}
                    @click=${e=>this._closeModal(e,"ok")}
                  >
                    ${this.okText}
                  </kd-button>

                  <kd-button
                    value="cancel"
                    kind="secondary"
                    @click=${e=>this._closeModal(e,"cancel")}
                  >
                    ${this.cancelText}
                  </kd-button>

                  <!--
            <div class="custom-actions">
              <slot name="actions"></slot>
            </div>
            -->
                </div>
              `}
        </form>
      </dialog>
    `}},{kind:"method",key:"_openModal",value:function _openModal(){this.open=!0}},{kind:"method",key:"_closeModal",value:function _closeModal(e,returnValue){(!this.beforeClose||this.beforeClose&&this.beforeClose(returnValue))&&(this.open=!1,this._dialog.returnValue=returnValue,this._emitCloseEvent(e))}},{kind:"method",key:"_emitCloseEvent",value:function _emitCloseEvent(e){const event=new CustomEvent("on-close",{detail:{returnValue:this._dialog.returnValue,origEvent:e}});this.dispatchEvent(event)}},{kind:"method",key:"updated",value:function updated(changedProps){changedProps.has("open")&&(this.open?this._dialog.showModal():this._dialog.close())}}]}}),lit.WF)}}]);
//# sourceMappingURL=9694.c893a8ba.iframe.bundle.js.map