(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{259:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"withParams",{enumerable:!0,get:function(){return n.default}}),e.regex=e.ref=e.len=e.req=void 0;var r,n=(r=o(522))&&r.__esModule?r:{default:r};function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}var l=function(t){if(Array.isArray(t))return!!t.length;if(null==t)return!1;if(!1===t)return!0;if(t instanceof Date)return!isNaN(t.getTime());if("object"===c(t)){for(var e in t)return!0;return!1}return!!String(t).length};e.req=l;e.len=function(t){return Array.isArray(t)?t.length:"object"===c(t)?Object.keys(t).length:String(t).length};e.ref=function(t,e,o){return"function"==typeof t?t.call(e,o):o[t]};e.regex=function(t,e){return(0,n.default)({type:t},(function(t){return!l(t)||e.test(t)}))}},303:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASBAMAAACk4JNkAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAnUExURV9PvEdwTGBQuF5Ou11Ou2BQtl5QvV9Ou19PvGBQul5OvF9PvF9PvGov9tsAAAAMdFJOU+IAIENlEH+AxjCQpJCNPfUAAACGSURBVAjXYxCEAQYw6XCmCcISO1HFMBHMyikUVGAEscSOCwqKnGSACAkKHwayhE6LOELEhE9GHAGrEws5JLghiEGRQTBn8hFBGycmQQagxgZDHUdFQYaYjYIKrT6GQNtsgEQQyCwwS4EJxIpZKCjEoAhiSR0LNGCCuGrNmQOKEJZwuSvYjQC10iEwyBrobQAAAABJRU5ErkJggg=="},304:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOAgMAAABiJsVCAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURf8ii/8gh0dwTP8ji357HMgAAAADdFJOU98gAOknknEAAAA5SURBVAjXY1i1atUChsZVSxQYerImKzBMlvJJYFhy1HABw0qDYwsYVvlLQQkwFywBVgJWDNYGMgAAxNYbdzShjiwAAAAASUVORK5CYII="},503:function(t,e,o){var content=o(545);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(42).default)("60593ae6",content,!0,{sourceMap:!1})},520:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"alpha",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(e,"alphaNum",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"numeric",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(e,"between",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(e,"email",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(e,"ipAddress",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(e,"macAddress",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(e,"maxLength",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(e,"minLength",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(e,"required",{enumerable:!0,get:function(){return x.default}}),Object.defineProperty(e,"requiredIf",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(e,"requiredUnless",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(e,"sameAs",{enumerable:!0,get:function(){return A.default}}),Object.defineProperty(e,"url",{enumerable:!0,get:function(){return w.default}}),Object.defineProperty(e,"or",{enumerable:!0,get:function(){return $.default}}),Object.defineProperty(e,"and",{enumerable:!0,get:function(){return P.default}}),Object.defineProperty(e,"not",{enumerable:!0,get:function(){return O.default}}),Object.defineProperty(e,"minValue",{enumerable:!0,get:function(){return j.default}}),Object.defineProperty(e,"maxValue",{enumerable:!0,get:function(){return C.default}}),Object.defineProperty(e,"integer",{enumerable:!0,get:function(){return M.default}}),Object.defineProperty(e,"decimal",{enumerable:!0,get:function(){return z.default}}),e.helpers=void 0;var r=S(o(521)),n=S(o(524)),c=S(o(525)),l=S(o(526)),d=S(o(527)),f=S(o(528)),_=S(o(529)),m=S(o(530)),v=S(o(531)),x=S(o(532)),h=S(o(533)),y=S(o(534)),A=S(o(535)),w=S(o(536)),$=S(o(537)),P=S(o(538)),O=S(o(539)),j=S(o(540)),C=S(o(541)),M=S(o(542)),z=S(o(543)),E=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,o):{};desc.get||desc.set?Object.defineProperty(e,o,desc):e[o]=t[o]}return e.default=t,e}(o(259));function S(t){return t&&t.__esModule?t:{default:t}}e.helpers=E},521:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=(0,o(259).regex)("alpha",/^[a-zA-Z]*$/);e.default=r},522:function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r="web"===t.env.BUILD?o(523).withParams:o(162).withParams;e.default=r}).call(this,o(97))},523:function(t,e,o){"use strict";(function(t){function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.withParams=void 0;var r="undefined"!=typeof window?window:void 0!==t?t:{},n=r.vuelidate?r.vuelidate.withParams:function(t,e){return"object"===o(t)&&void 0!==e?e:t((function(){}))};e.withParams=n}).call(this,o(31))},524:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=(0,o(259).regex)("alphaNum",/^[a-zA-Z0-9]*$/);e.default=r},525:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=(0,o(259).regex)("numeric",/^[0-9]*$/);e.default=r},526:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(259);e.default=function(t,e){return(0,r.withParams)({type:"between",min:t,max:e},(function(o){return!(0,r.req)(o)||(!/\s/.test(o)||o instanceof Date)&&+t<=+o&&+e>=+o}))}},527:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=(0,o(259).regex)("email",/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/);e.default=r},528:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(259),n=(0,r.withParams)({type:"ipAddress"},(function(t){if(!(0,r.req)(t))return!0;if("string"!=typeof t)return!1;var e=t.split(".");return 4===e.length&&e.every(c)}));e.default=n;var c=function(t){if(t.length>3||0===t.length)return!1;if("0"===t[0]&&"0"!==t)return!1;if(!t.match(/^\d+$/))return!1;var e=0|+t;return e>=0&&e<=255}},529:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(259);e.default=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,r.withParams)({type:"macAddress"},(function(e){if(!(0,r.req)(e))return!0;if("string"!=typeof e)return!1;var o="string"==typeof t&&""!==t?e.split(t):12===e.length||16===e.length?e.match(/.{2}/g):null;return null!==o&&(6===o.length||8===o.length)&&o.every(n)}))};var n=function(t){return t.toLowerCase().match(/^[0-9a-f]{2}$/)}},530:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(259);e.default=function(t){return(0,r.withParams)({type:"maxLength",max:t},(function(e){return!(0,r.req)(e)||(0,r.len)(e)<=t}))}},531:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(259);e.default=function(t){return(0,r.withParams)({type:"minLength",min:t},(function(e){return!(0,r.req)(e)||(0,r.len)(e)>=t}))}},532:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(259),n=(0,r.withParams)({type:"required"},(function(t){return"string"==typeof t?(0,r.req)(t.trim()):(0,r.req)(t)}));e.default=n},533:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(259);e.default=function(t){return(0,r.withParams)({type:"requiredIf",prop:t},(function(e,o){return!(0,r.ref)(t,this,o)||(0,r.req)(e)}))}},534:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(259);e.default=function(t){return(0,r.withParams)({type:"requiredUnless",prop:t},(function(e,o){return!!(0,r.ref)(t,this,o)||(0,r.req)(e)}))}},535:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(259);e.default=function(t){return(0,r.withParams)({type:"sameAs",eq:t},(function(e,o){return e===(0,r.ref)(t,this,o)}))}},536:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=(0,o(259).regex)("url",/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i);e.default=r},537:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(259);e.default=function(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];return(0,r.withParams)({type:"or"},(function(){for(var t=this,o=arguments.length,r=new Array(o),n=0;n<o;n++)r[n]=arguments[n];return e.length>0&&e.reduce((function(e,o){return e||o.apply(t,r)}),!1)}))}},538:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(259);e.default=function(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];return(0,r.withParams)({type:"and"},(function(){for(var t=this,o=arguments.length,r=new Array(o),n=0;n<o;n++)r[n]=arguments[n];return e.length>0&&e.reduce((function(e,o){return e&&o.apply(t,r)}),!0)}))}},539:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(259);e.default=function(t){return(0,r.withParams)({type:"not"},(function(e,o){return!(0,r.req)(e)||!t.call(this,e,o)}))}},540:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(259);e.default=function(t){return(0,r.withParams)({type:"minValue",min:t},(function(e){return!(0,r.req)(e)||(!/\s/.test(e)||e instanceof Date)&&+e>=+t}))}},541:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(259);e.default=function(t){return(0,r.withParams)({type:"maxValue",max:t},(function(e){return!(0,r.req)(e)||(!/\s/.test(e)||e instanceof Date)&&+e<=+t}))}},542:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=(0,o(259).regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);e.default=r},543:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=(0,o(259).regex)("decimal",/^[-]?\d*(\.\d+)?$/);e.default=r},544:function(t,e,o){"use strict";o(503)},545:function(t,e,o){var r=o(41)(!1);r.push([t.i,'.contacto[data-v-4287c2b4]{display:grid;grid-template-columns:1fr 1fr;margin-left:16%;margin-right:16%;grid-gap:16px}.contacto__texto[data-v-4287c2b4]{margin-top:212px}.contacto__texto__titulo[data-v-4287c2b4]{width:409px;font-weight:400;font-size:44px;line-height:52px}.contacto__texto__subtitulo[data-v-4287c2b4]{width:332px;font-weight:300;font-size:18px;line-height:160%;margin-top:35px;margin-bottom:30px}.contacto__texto__mail[data-v-4287c2b4]{font-weight:500;font-size:18px;line-height:21px;color:#5f4fbc;margin-bottom:67px}.contacto__texto__logos[data-v-4287c2b4]{display:flex}.contacto__texto__logos img[data-v-4287c2b4]{margin-right:18px}.contacto__formulario[data-v-4287c2b4]{width:520px;height:995px;background:#fff;box-shadow:0 2px 6px rgba(0,0,0,.25);border-radius:30px;margin-top:106px;margin-bottom:71px}.contacto__formulario__box[data-v-4287c2b4]{padding:70px 60px 90px}.contacto__formulario__box__file[data-v-4287c2b4]{display:flex!important;align-items:center;justify-content:space-between}.contacto__formulario__box__file img[data-v-4287c2b4]{cursor:pointer}.contacto__formulario__box__item[data-v-4287c2b4]{margin-top:37px}.contacto__formulario__box__item label[data-v-4287c2b4]{display:block;color:#1d1b1b;font-weight:300;font-size:16px;line-height:19px}.contacto__formulario__box__item .input[data-v-4287c2b4]{display:block;font-family:"Rubik",sans-serif;box-sizing:border-box;border:none;margin-top:16px;background:#f7f7f7;border-radius:8px;width:100%;height:56px;padding-left:23px;outline:none;caret-color:#000}.contacto__formulario__box__item .input[data-v-4287c2b4]::-moz-placeholder{color:#e0e0e0}.contacto__formulario__box__item .input[data-v-4287c2b4]:-ms-input-placeholder{color:#e0e0e0}.contacto__formulario__box__item .input[data-v-4287c2b4]::placeholder{color:#e0e0e0}.contacto__formulario__box__item .input[data-v-4287c2b4]:focus::-moz-placeholder{color:transparent}.contacto__formulario__box__item .input[data-v-4287c2b4]:focus:-ms-input-placeholder{color:transparent}.contacto__formulario__box__item .input[data-v-4287c2b4]:focus::placeholder{color:transparent}.contacto__formulario__box__item textarea[data-v-4287c2b4]{height:160px!important;padding-top:18px;resize:none}.contacto__formulario__box__item__counter[data-v-4287c2b4]{text-align:right;color:#5f4fbc}.contacto__formulario__box__item__error[data-v-4287c2b4]{color:#ff238b;font-style:normal;font-weight:300;font-size:16px}.contacto__formulario__box__button[data-v-4287c2b4]{background-color:#5f4fbc;color:#fff;font-family:"Rubik",sans-serif;border:0 solid #fff;font-size:18px;font-weight:500;border-radius:30px;padding:19px 61px;box-shadow:0 2px 8px rgba(0,0,0,.25);cursor:pointer;margin-top:90px}.contacto__formulario__box__button[data-v-4287c2b4]:hover{background-color:#fff;color:#5f4fbc}input[type=file][data-v-4287c2b4]{display:none}.custom-file-upload[data-v-4287c2b4]{display:flex!important;cursor:pointer;margin-bottom:32px;color:#5f4fbc!important;align-items:center;justify-content:right;grid-gap:18px;gap:18px}.custom-file-upload img[data-v-4287c2b4]{height:15px}@media screen and (max-width:1200px){.contacto[data-v-4287c2b4]{margin-left:8%;margin-right:8%}}@media screen and (max-width:1024px){.contacto[data-v-4287c2b4]{box-sizing:border-box}.contacto__texto__titulo[data-v-4287c2b4]{width:90%;font-size:40px}.contacto__texto__subtitulo[data-v-4287c2b4]{width:90%;font-size:16px}.contacto__formulario[data-v-4287c2b4]{width:100%;height:auto}.contacto__formulario__box[data-v-4287c2b4]{padding-top:56px;padding-bottom:31px;padding-right:10%}.contacto__formulario__box__item[data-v-4287c2b4]{margin-top:18px}.contacto__formulario__box__item input[data-v-4287c2b4],.contacto__formulario__box__item textarea[data-v-4287c2b4]{margin-top:8px;padding-left:15px}.contacto__formulario__box__button[data-v-4287c2b4]{margin-top:80px}}@media screen and (max-width:768px){.contacto__texto[data-v-4287c2b4]{margin-top:100px}.contacto__texto__titulo[data-v-4287c2b4]{font-size:36px}.contacto__texto__subtitulo[data-v-4287c2b4]{font-size:12px}.contacto__formulario[data-v-4287c2b4]{margin-top:50px}.contacto__formulario__box[data-v-4287c2b4]{padding:20px 10% 21px}.contacto__formulario__box__button[data-v-4287c2b4]{margin-top:80px}}@media screen and (max-width:480px){.contacto[data-v-4287c2b4]{margin-left:0;margin-right:0;padding-left:5%;padding-right:5%;grid-template-columns:1fr;background-color:#fff;grid-gap:0}.contacto__texto[data-v-4287c2b4]{display:grid;justify-items:center}.contacto__texto__titulo[data-v-4287c2b4]{font-size:24px;line-height:28px;text-align:center;font-weight:500}.contacto__texto__subtitulo[data-v-4287c2b4]{width:80%;font-size:16px;line-height:22px;margin-bottom:0;text-align:center}.contacto__texto__logos[data-v-4287c2b4],.contacto__texto__mail[data-v-4287c2b4]{display:none}.contacto__formulario[data-v-4287c2b4]{box-shadow:none;margin-top:0}.contacto__formulario__box[data-v-4287c2b4]{padding-right:10%;padding-left:10%}}',""]),t.exports=r},564:function(t,e,o){"use strict";o.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"contacto__texto__logos"},[e("a",{attrs:{href:"https://www.behance.net/pauloniastudio",target:"_blank",rel:"noopener"}},[e("img",{attrs:{src:o(152)}})]),e("a",{attrs:{href:"https://www.linkedin.com/company/paulonia/",target:"_blank",rel:"noopener"}},[e("img",{attrs:{src:o(153)}})])])}],n=o(3),c=o(520),l={data(){return{correo:"",celular:"",descripcion:"",file:{name:this.$t("contacto.formulario.nombre_archivo")},response:""}},validations:{correo:{required:c.required,email:c.email},celular:{numeric:c.numeric,minLength:Object(c.minLength)(4)},descripcion:{required:c.required,minLength:Object(c.minLength)(10),maxLength:Object(c.maxLength)(250)}},computed:{errores(){return this.$v.$invalid&&this.$v.$dirty}},methods:{handleFileUpload(t){this.file=t.target.files[0],t.target.value=""},removeFile(){this.file={name:"Nombre del archivo"}},submit(){var t=this;return Object(n.a)((function*(){if(t.$v.$touch(),console.log("Enviando"),t.$v.$invalid)console.log("Error form");else try{var e=new FormData;e.append("document",t.file),e.append("data",JSON.stringify({entityId:0,email:t.correo,phone:t.celular,message:t.descripcion,subject:"No subject"})),t.response="Espere mientras enviamos los datos ... ",yield t.$axios.post("https://southamerica-east1-paulonia.cloudfunctions.net/sendEmails",e,{headers:{"Content-Type":"multipart/form-data"}}),t.response="Datos enviados con éxto"}catch(e){t.response="Occurrió un error al enviar los datos",console.log(e)}}))()}}},d=(o(544),o(22)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"contacto"},[r("div",{staticClass:"contacto__texto"},[r("div",{staticClass:"contacto__texto__titulo"},[t._v(t._s(t.$t("contacto.titulo")))]),r("div",{staticClass:"contacto__texto__subtitulo"},[t._v(t._s(t.$t("contacto.parrafo")))]),r("div",{staticClass:"contacto__texto__mail"},[t._v("contacto@paulonia.dev")]),t._m(0)]),r("div",{staticClass:"contacto__formulario"},[r("div",{staticClass:"contacto__formulario__box"},[r("div",{staticClass:"contacto__formulario__box__item"},[r("label",{attrs:{for:"email"}},[t._v(t._s(t.$t("contacto.formulario.correo")))]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.$v.correo.$model,expression:"$v.correo.$model",modifiers:{trim:!0}}],staticClass:"input",attrs:{type:"email",placeholder:t.$t("contacto.formulario.correo_placeholder"),required:""},domProps:{value:t.$v.correo.$model},on:{input:function(e){e.target.composing||t.$set(t.$v.correo,"$model",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),this.$v.correo.$error?r("div",{staticClass:"contacto__formulario__box__item__error"},[this.$v.correo.email?t._e():r("p",[t._v(t._s(t.$t("contacto.formulario.correo_error")))]),this.$v.correo.required?t._e():r("p",[t._v(t._s(t.$t("contacto.formulario.requerido")))])]):t._e()]),r("div",{staticClass:"contacto__formulario__box__item"},[r("label",{attrs:{for:"celular"}},[t._v(t._s(t.$t("contacto.formulario.celular")))]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.$v.celular.$model,expression:"$v.celular.$model",modifiers:{trim:!0}}],staticClass:"input",attrs:{type:"tel",placeholder:t.$t("contacto.formulario.celular_placeholder")},domProps:{value:t.$v.celular.$model},on:{input:function(e){e.target.composing||t.$set(t.$v.celular,"$model",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),this.$v.celular.$error?r("div",{staticClass:"contacto__formulario__box__item__error"},[this.$v.celular.numeric?t._e():r("p",[t._v(t._s(t.$t("contacto.formulario.celular_error")))]),this.$v.celular.minLength?t._e():r("p",[t._v(t._s(t.$t("contacto.formulario.celular_error2")))])]):t._e()]),r("div",{staticClass:"contacto__formulario__box__item"},[r("label",{attrs:{for:"descripcion"}},[t._v(t._s(t.$t("contacto.formulario.descripcion")))]),r("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:t.$v.descripcion.$model,expression:"$v.descripcion.$model",modifiers:{trim:!0}}],staticClass:"input",attrs:{maxlength:"250",type:"text",placeholder:t.$t("contacto.formulario.descripcion_placeholder")},domProps:{value:t.$v.descripcion.$model},on:{input:function(e){e.target.composing||t.$set(t.$v.descripcion,"$model",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),r("p",{staticClass:"contacto__formulario__box__item__counter"},[t._v(t._s(t.descripcion.length)+" / 250")]),this.$v.descripcion.$error?r("div",{staticClass:"contacto__formulario__box__item__error"},[this.$v.descripcion.required?t._e():r("p",[t._v(t._s(t.$t("contacto.formulario.requerido")))]),this.$v.descripcion.minLength&&this.$v.descripcion.minLength?t._e():r("p",[t._v(t._s(t.$t("contacto.formulario.descripcion_error")))])]):t._e()]),r("div",{staticClass:"contacto__formulario__box__item"},[r("input",{staticClass:"custom-file-input",attrs:{id:"file-upload",type:"file"},on:{change:function(e){return t.handleFileUpload(e)}}}),r("label",{staticClass:"custom-file-upload",attrs:{for:"file-upload"}},[r("span",[t._v(t._s(t.$t("contacto.formulario.subir")))]),r("img",{attrs:{src:o(303)}})]),"Nombre del archivo"!==this.file.name?r("label",{staticClass:"contacto__formulario__box__file"},[r("span",[t._v(t._s(this.file.name))]),r("img",{attrs:{src:o(304)},on:{click:function(e){return t.removeFile()}}})]):t._e()]),r("center",[t.errores?r("div",{staticClass:"contacto__formulario__box__item__error"},[t._v(t._s(t.$t("contacto.formulario.campos")))]):t._e(),this.response?r("div",{staticClass:"contacto__formulario__box__item__error"},[t._v(t._s(this.response))]):t._e(),r("button",{staticClass:"contacto__formulario__box__button",on:{click:t.submit}},[t._v(t._s(t.$t("contacto.formulario.boton")))])])],1)])])}),r,!1,null,"4287c2b4",null);e.default=component.exports}}]);