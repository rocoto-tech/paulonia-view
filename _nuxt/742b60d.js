(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{307:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"withParams",{enumerable:!0,get:function(){return n.default}}),e.regex=e.ref=e.len=e.req=void 0;var r,n=(r=o(554))&&r.__esModule?r:{default:r};function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}var l=function(t){if(Array.isArray(t))return!!t.length;if(null==t)return!1;if(!1===t)return!0;if(t instanceof Date)return!isNaN(t.getTime());if("object"===c(t)){for(var e in t)return!0;return!1}return!!String(t).length};e.req=l;e.len=function(t){return Array.isArray(t)?t.length:"object"===c(t)?Object.keys(t).length:String(t).length};e.ref=function(t,e,o){return"function"==typeof t?t.call(e,o):o[t]};e.regex=function(t,e){return(0,n.default)({type:t},(function(t){return!l(t)||e.test(t)}))}},330:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHKSURBVHgBrZJRTttAEIZnZl0JqarkIyQ3gBM0lppKlUJx3kMwJ6A9QdIbJAeoYtT3xi1ICDBKuAFH8A2IEEgI2zvMGhsc4wcLMZK1uzO738z8HoB3Mmx6ceiGB8j4A4BbuWuJGO/7wbeoMWjoXoyQeWweM/OlwGxE2pGzrNrxg69XVlOIfL/8/91x4ffckwnzhwUzzeXYxrdACtvdvvCIeCZVbdFbIcZY6SjbJGjXgqTsVq6JbyDDfri3u33mVe9hmgtv8aq2tUEvdJWCuSkZ4C5i/rQQ96bW/PPPUXdSJDMamf3hvy9tq9oOAU1TSFrACIrU9e+//ZWEtvZ2wjkRjjx34QPc2wVERsAxK1U1AYhbCuDK+B5i3X9uA3kqi52msfvii51ijuiVsDITftBdintpKhj0TvOHSVQAzOMyJINKqVJmem3i0ut+WfCn8kVIvHXS9KNLRDMR2PGPs0RrZiWQbCoZcLlwWA7k2dqeO7cBNmyBjOQc1UHWNAJL21BrG6+ErQVZYGXCsrY+V4PlX1zVpGrZHA2/hxNEOGDGMdHN1A/6q0HvvKMUzppAnkFlWCUeNYGsgZ5aOe9oDR2zJ6YI1E1gqoMG9ghmsPRVmZ+VogAAAABJRU5ErkJggg=="},331:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACPSURBVHgBpZLRDYUwCEVveQ7S5yYO5YcT+OFQTmJkELXaGo1BqIny0ZByD7nQAi/DxSOU3ZiyeaocN6wJg289qOijzg31ny41j1/RJ4ENnbUdXKYKAazBAuLo6rSaE8i7YxSXscSbC2jQDTTmYW1phJdBD1YZxra/LUeDDoFVo1zX1Dnm4p3ljGx9OQF/ixUmDXgqmg4vWAAAAABJRU5ErkJggg=="},534:function(t,e,o){var content=o(577);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(70).default)("cfa49d08",content,!0,{sourceMap:!1})},552:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"alpha",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(e,"alphaNum",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"numeric",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(e,"between",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(e,"email",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(e,"ipAddress",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(e,"macAddress",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(e,"maxLength",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(e,"minLength",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(e,"required",{enumerable:!0,get:function(){return x.default}}),Object.defineProperty(e,"requiredIf",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(e,"requiredUnless",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(e,"sameAs",{enumerable:!0,get:function(){return A.default}}),Object.defineProperty(e,"url",{enumerable:!0,get:function(){return w.default}}),Object.defineProperty(e,"or",{enumerable:!0,get:function(){return P.default}}),Object.defineProperty(e,"and",{enumerable:!0,get:function(){return $.default}}),Object.defineProperty(e,"not",{enumerable:!0,get:function(){return j.default}}),Object.defineProperty(e,"minValue",{enumerable:!0,get:function(){return O.default}}),Object.defineProperty(e,"maxValue",{enumerable:!0,get:function(){return z.default}}),Object.defineProperty(e,"integer",{enumerable:!0,get:function(){return C.default}}),Object.defineProperty(e,"decimal",{enumerable:!0,get:function(){return M.default}}),e.helpers=void 0;var r=U(o(553)),n=U(o(556)),c=U(o(557)),l=U(o(558)),f=U(o(559)),d=U(o(560)),_=U(o(561)),m=U(o(562)),v=U(o(563)),x=U(o(564)),h=U(o(565)),y=U(o(566)),A=U(o(567)),w=U(o(568)),P=U(o(569)),$=U(o(570)),j=U(o(571)),O=U(o(572)),z=U(o(573)),C=U(o(574)),M=U(o(575)),S=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,o):{};desc.get||desc.set?Object.defineProperty(e,o,desc):e[o]=t[o]}return e.default=t,e}(o(307));function U(t){return t&&t.__esModule?t:{default:t}}e.helpers=S},553:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=(0,o(307).regex)("alpha",/^[a-zA-Z]*$/);e.default=r},554:function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r="web"===t.env.BUILD?o(555).withParams:o(212).withParams;e.default=r}).call(this,o(147))},555:function(t,e,o){"use strict";(function(t){function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.withParams=void 0;var r="undefined"!=typeof window?window:void 0!==t?t:{},n=r.vuelidate?r.vuelidate.withParams:function(t,e){return"object"===o(t)&&void 0!==e?e:t((function(){}))};e.withParams=n}).call(this,o(49))},556:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=(0,o(307).regex)("alphaNum",/^[a-zA-Z0-9]*$/);e.default=r},557:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=(0,o(307).regex)("numeric",/^[0-9]*$/);e.default=r},558:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(307);e.default=function(t,e){return(0,r.withParams)({type:"between",min:t,max:e},(function(o){return!(0,r.req)(o)||(!/\s/.test(o)||o instanceof Date)&&+t<=+o&&+e>=+o}))}},559:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=(0,o(307).regex)("email",/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/);e.default=r},560:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(307),n=(0,r.withParams)({type:"ipAddress"},(function(t){if(!(0,r.req)(t))return!0;if("string"!=typeof t)return!1;var e=t.split(".");return 4===e.length&&e.every(c)}));e.default=n;var c=function(t){if(t.length>3||0===t.length)return!1;if("0"===t[0]&&"0"!==t)return!1;if(!t.match(/^\d+$/))return!1;var e=0|+t;return e>=0&&e<=255}},561:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(307);e.default=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,r.withParams)({type:"macAddress"},(function(e){if(!(0,r.req)(e))return!0;if("string"!=typeof e)return!1;var o="string"==typeof t&&""!==t?e.split(t):12===e.length||16===e.length?e.match(/.{2}/g):null;return null!==o&&(6===o.length||8===o.length)&&o.every(n)}))};var n=function(t){return t.toLowerCase().match(/^[0-9a-f]{2}$/)}},562:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(307);e.default=function(t){return(0,r.withParams)({type:"maxLength",max:t},(function(e){return!(0,r.req)(e)||(0,r.len)(e)<=t}))}},563:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(307);e.default=function(t){return(0,r.withParams)({type:"minLength",min:t},(function(e){return!(0,r.req)(e)||(0,r.len)(e)>=t}))}},564:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(307),n=(0,r.withParams)({type:"required"},(function(t){return"string"==typeof t?(0,r.req)(t.trim()):(0,r.req)(t)}));e.default=n},565:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(307);e.default=function(t){return(0,r.withParams)({type:"requiredIf",prop:t},(function(e,o){return!(0,r.ref)(t,this,o)||(0,r.req)(e)}))}},566:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(307);e.default=function(t){return(0,r.withParams)({type:"requiredUnless",prop:t},(function(e,o){return!!(0,r.ref)(t,this,o)||(0,r.req)(e)}))}},567:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(307);e.default=function(t){return(0,r.withParams)({type:"sameAs",eq:t},(function(e,o){return e===(0,r.ref)(t,this,o)}))}},568:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=(0,o(307).regex)("url",/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i);e.default=r},569:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(307);e.default=function(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];return(0,r.withParams)({type:"or"},(function(){for(var t=this,o=arguments.length,r=new Array(o),n=0;n<o;n++)r[n]=arguments[n];return e.length>0&&e.reduce((function(e,o){return e||o.apply(t,r)}),!1)}))}},570:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(307);e.default=function(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];return(0,r.withParams)({type:"and"},(function(){for(var t=this,o=arguments.length,r=new Array(o),n=0;n<o;n++)r[n]=arguments[n];return e.length>0&&e.reduce((function(e,o){return e&&o.apply(t,r)}),!0)}))}},571:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(307);e.default=function(t){return(0,r.withParams)({type:"not"},(function(e,o){return!(0,r.req)(e)||!t.call(this,e,o)}))}},572:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(307);e.default=function(t){return(0,r.withParams)({type:"minValue",min:t},(function(e){return!(0,r.req)(e)||(!/\s/.test(e)||e instanceof Date)&&+e>=+t}))}},573:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(307);e.default=function(t){return(0,r.withParams)({type:"maxValue",max:t},(function(e){return!(0,r.req)(e)||(!/\s/.test(e)||e instanceof Date)&&+e<=+t}))}},574:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=(0,o(307).regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);e.default=r},575:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=(0,o(307).regex)("decimal",/^[-]?\d*(\.\d+)?$/);e.default=r},576:function(t,e,o){"use strict";o(534)},577:function(t,e,o){var r=o(69)(!1);r.push([t.i,'.contacto[data-v-1b4bf576]{display:grid;grid-template-columns:1fr 1fr;margin-left:16%;margin-right:16%;grid-gap:16px}.contacto__texto[data-v-1b4bf576]{margin-top:212px}.contacto__texto__titulo[data-v-1b4bf576]{width:409px;font-weight:400;font-size:44px;line-height:52px}.contacto__texto__subtitulo[data-v-1b4bf576]{width:332px;font-weight:300;font-size:18px;line-height:160%;margin-top:35px;margin-bottom:30px}.contacto__texto__mail[data-v-1b4bf576]{font-weight:500;font-size:18px;line-height:21px;color:#5f4fbc;margin-bottom:67px}.contacto__texto__logos[data-v-1b4bf576]{display:flex}.contacto__texto__logos img[data-v-1b4bf576]{margin-right:18px}.contacto__formulario[data-v-1b4bf576]{width:520px;height:995px;background:#fff;box-shadow:0 2px 6px rgba(0,0,0,.25);border-radius:30px;margin-top:106px;margin-bottom:71px}.contacto__formulario__box[data-v-1b4bf576]{padding:70px 60px 90px}.contacto__formulario__box__file[data-v-1b4bf576]{display:flex!important;align-items:center;justify-content:space-between}.contacto__formulario__box__file img[data-v-1b4bf576]{cursor:pointer}.contacto__formulario__box__item[data-v-1b4bf576]{margin-top:37px}.contacto__formulario__box__item label[data-v-1b4bf576]{display:block;color:#1d1b1b;font-weight:300;font-size:16px;line-height:19px}.contacto__formulario__box__item .input[data-v-1b4bf576]{display:block;font-family:"Rubik",sans-serif;box-sizing:border-box;border:none;margin-top:16px;background:#f7f7f7;border-radius:8px;width:100%;height:56px;padding-left:23px;outline:none;caret-color:#000}.contacto__formulario__box__item .input[data-v-1b4bf576]::-moz-placeholder{color:#e0e0e0}.contacto__formulario__box__item .input[data-v-1b4bf576]:-ms-input-placeholder{color:#e0e0e0}.contacto__formulario__box__item .input[data-v-1b4bf576]::placeholder{color:#e0e0e0}.contacto__formulario__box__item .input[data-v-1b4bf576]:focus::-moz-placeholder{color:transparent}.contacto__formulario__box__item .input[data-v-1b4bf576]:focus:-ms-input-placeholder{color:transparent}.contacto__formulario__box__item .input[data-v-1b4bf576]:focus::placeholder{color:transparent}.contacto__formulario__box__item textarea[data-v-1b4bf576]{height:160px!important;padding-top:18px;resize:none}.contacto__formulario__box__item__counter[data-v-1b4bf576]{text-align:right;color:#5f4fbc}.contacto__formulario__box__item__error[data-v-1b4bf576]{color:#ff238b;font-style:normal;font-weight:300;font-size:16px}.contacto__formulario__box__button[data-v-1b4bf576]{background-color:#5f4fbc;color:#fff;font-family:"Rubik",sans-serif;border:0 solid #fff;font-size:18px;font-weight:500;border-radius:30px;padding:19px 61px;box-shadow:0 2px 8px rgba(0,0,0,.25);cursor:pointer;margin-top:90px}.contacto__formulario__box__button[data-v-1b4bf576]:hover{background-color:#fff;color:#5f4fbc}input[type=file][data-v-1b4bf576]{display:none}.custom-file-upload[data-v-1b4bf576]{display:flex!important;cursor:pointer;margin-bottom:32px;color:#5f4fbc!important;align-items:center;justify-content:right;grid-gap:18px;gap:18px}.custom-file-upload img[data-v-1b4bf576]{height:15px}@media screen and (max-width:1200px){.contacto[data-v-1b4bf576]{margin-left:8%;margin-right:8%}}@media screen and (max-width:1024px){.contacto[data-v-1b4bf576]{box-sizing:border-box}.contacto__texto__titulo[data-v-1b4bf576]{width:90%;font-size:40px}.contacto__texto__subtitulo[data-v-1b4bf576]{width:90%;font-size:16px}.contacto__formulario[data-v-1b4bf576]{width:100%;height:auto}.contacto__formulario__box[data-v-1b4bf576]{padding-top:56px;padding-bottom:31px;padding-right:10%}.contacto__formulario__box__item[data-v-1b4bf576]{margin-top:18px}.contacto__formulario__box__item input[data-v-1b4bf576],.contacto__formulario__box__item textarea[data-v-1b4bf576]{margin-top:8px;padding-left:15px}.contacto__formulario__box__button[data-v-1b4bf576]{margin-top:80px}}@media screen and (max-width:768px){.contacto__texto[data-v-1b4bf576]{margin-top:100px}.contacto__texto__titulo[data-v-1b4bf576]{font-size:36px}.contacto__texto__subtitulo[data-v-1b4bf576]{font-size:12px}.contacto__formulario[data-v-1b4bf576]{margin-top:50px}.contacto__formulario__box[data-v-1b4bf576]{padding:20px 10% 21px}.contacto__formulario__box__button[data-v-1b4bf576]{margin-top:80px}}@media screen and (max-width:480px){.contacto[data-v-1b4bf576]{margin-left:0;margin-right:0;padding-left:5%;padding-right:5%;grid-template-columns:1fr;background-color:#fff;grid-gap:0}.contacto__texto[data-v-1b4bf576]{display:grid;justify-items:center}.contacto__texto__titulo[data-v-1b4bf576]{font-size:24px;line-height:28px;text-align:center;font-weight:500}.contacto__texto__subtitulo[data-v-1b4bf576]{width:80%;font-size:16px;line-height:22px;margin-bottom:0;text-align:center}.contacto__texto__logos[data-v-1b4bf576],.contacto__texto__mail[data-v-1b4bf576]{display:none}.contacto__formulario[data-v-1b4bf576]{box-shadow:none;margin-top:0}.contacto__formulario__box[data-v-1b4bf576]{padding-right:10%;padding-left:10%}}',""]),t.exports=r},594:function(t,e,o){"use strict";o.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"contacto__texto__logos"},[e("a",{attrs:{href:"https://www.behance.net/pauloniastudio",target:"_blank"}},[e("img",{attrs:{src:o(203)}})]),e("a",{attrs:{href:"https://www.linkedin.com/company/paulonia/",target:"_blank"}},[e("img",{attrs:{src:o(204)}})])])}],n=o(4),c=(o(50),o(552)),l={data:function(){return{correo:"",celular:"",descripcion:"",file:{name:this.$t("contacto.formulario.nombre_archivo")},response:""}},validations:{correo:{required:c.required,email:c.email},celular:{numeric:c.numeric,minLength:Object(c.minLength)(4)},descripcion:{required:c.required,minLength:Object(c.minLength)(10),maxLength:Object(c.maxLength)(250)}},computed:{errores:function(){return this.$v.$invalid&&this.$v.$dirty}},methods:{handleFileUpload:function(t){this.file=t.target.files[0],t.target.value=""},removeFile:function(){this.file={name:"Nombre del archivo"}},submit:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.$v.$touch(),console.log("Enviando"),!t.$v.$invalid){e.next=6;break}console.log("Error form"),e.next=20;break;case 6:return e.prev=6,(o=new FormData).append("document",t.file),o.append("data",JSON.stringify({entityId:0,email:t.correo,phone:t.celular,message:t.descripcion,subject:"No subject"})),t.response="Espere mientras enviamos los datos ... ",e.next=13,t.$axios.post("https://southamerica-east1-paulonia.cloudfunctions.net/sendEmails",o,{headers:{"Content-Type":"multipart/form-data"}});case 13:t.response="Datos enviados con éxto",e.next=20;break;case 16:e.prev=16,e.t0=e.catch(6),t.response="Occurrió un error al enviar los datos",console.log(e.t0);case 20:case"end":return e.stop()}}),e,null,[[6,16]])})))()}}},f=(o(576),o(36)),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"contacto"},[r("div",{staticClass:"contacto__texto"},[r("div",{staticClass:"contacto__texto__titulo"},[t._v(t._s(t.$t("contacto.titulo")))]),r("div",{staticClass:"contacto__texto__subtitulo"},[t._v(t._s(t.$t("contacto.parrafo")))]),r("div",{staticClass:"contacto__texto__mail"},[t._v("contacto@paulonia.dev")]),t._m(0)]),r("div",{staticClass:"contacto__formulario"},[r("div",{staticClass:"contacto__formulario__box"},[r("div",{staticClass:"contacto__formulario__box__item"},[r("label",{attrs:{for:"email"}},[t._v(t._s(t.$t("contacto.formulario.correo")))]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.$v.correo.$model,expression:"$v.correo.$model",modifiers:{trim:!0}}],staticClass:"input",attrs:{type:"email",placeholder:t.$t("contacto.formulario.correo_placeholder"),required:""},domProps:{value:t.$v.correo.$model},on:{input:function(e){e.target.composing||t.$set(t.$v.correo,"$model",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),this.$v.correo.$error?r("div",{staticClass:"contacto__formulario__box__item__error"},[this.$v.correo.email?t._e():r("p",[t._v(t._s(t.$t("contacto.formulario.correo_error")))]),this.$v.correo.required?t._e():r("p",[t._v(t._s(t.$t("contacto.formulario.requerido")))])]):t._e()]),r("div",{staticClass:"contacto__formulario__box__item"},[r("label",{attrs:{for:"celular"}},[t._v(t._s(t.$t("contacto.formulario.celular")))]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.$v.celular.$model,expression:"$v.celular.$model",modifiers:{trim:!0}}],staticClass:"input",attrs:{type:"tel",placeholder:t.$t("contacto.formulario.celular_placeholder")},domProps:{value:t.$v.celular.$model},on:{input:function(e){e.target.composing||t.$set(t.$v.celular,"$model",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),this.$v.celular.$error?r("div",{staticClass:"contacto__formulario__box__item__error"},[this.$v.celular.numeric?t._e():r("p",[t._v(t._s(t.$t("contacto.formulario.celular_error")))]),this.$v.celular.minLength?t._e():r("p",[t._v(t._s(t.$t("contacto.formulario.celular_error2")))])]):t._e()]),r("div",{staticClass:"contacto__formulario__box__item"},[r("label",{attrs:{for:"descripcion"}},[t._v(t._s(t.$t("contacto.formulario.descripcion")))]),r("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:t.$v.descripcion.$model,expression:"$v.descripcion.$model",modifiers:{trim:!0}}],staticClass:"input",attrs:{maxlength:"250",type:"text",placeholder:t.$t("contacto.formulario.descripcion_placeholder")},domProps:{value:t.$v.descripcion.$model},on:{input:function(e){e.target.composing||t.$set(t.$v.descripcion,"$model",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),r("p",{staticClass:"contacto__formulario__box__item__counter"},[t._v(t._s(t.descripcion.length)+" / 250")]),this.$v.descripcion.$error?r("div",{staticClass:"contacto__formulario__box__item__error"},[this.$v.descripcion.required?t._e():r("p",[t._v(t._s(t.$t("contacto.formulario.requerido")))]),this.$v.descripcion.minLength&&this.$v.descripcion.minLength?t._e():r("p",[t._v(t._s(t.$t("contacto.formulario.descripcion_error")))])]):t._e()]),r("div",{staticClass:"contacto__formulario__box__item"},[r("input",{staticClass:"custom-file-input",attrs:{id:"file-upload",type:"file"},on:{change:function(e){return t.handleFileUpload(e)}}}),r("label",{staticClass:"custom-file-upload",attrs:{for:"file-upload"}},[r("span",[t._v(t._s(t.$t("contacto.formulario.subir")))]),r("img",{attrs:{src:o(330)}})]),"Nombre del archivo"!==this.file.name?r("label",{staticClass:"contacto__formulario__box__file"},[r("span",[t._v(t._s(this.file.name))]),r("img",{attrs:{src:o(331)},on:{click:function(e){return t.removeFile()}}})]):t._e()]),r("center",[t.errores?r("div",{staticClass:"contacto__formulario__box__item__error"},[t._v(t._s(t.$t("contacto.formulario.campos")))]):t._e(),this.response?r("div",{staticClass:"contacto__formulario__box__item__error"},[t._v(t._s(this.response))]):t._e(),r("button",{staticClass:"contacto__formulario__box__button",on:{click:t.submit}},[t._v(t._s(t.$t("contacto.formulario.boton")))])])],1)])])}),r,!1,null,"1b4bf576",null);e.default=component.exports}}]);