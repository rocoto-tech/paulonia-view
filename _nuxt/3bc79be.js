(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{307:function(t,o,e){var content=e(319);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(70).default)("322a396c",content,!0,{sourceMap:!1})},310:function(t,o,e){"use strict";e.r(o);var n={props:{color:{type:String,required:!0},blanco:{type:Boolean,default:!1},mobile:{type:String},url:{type:String,default:"/portafolio"}},computed:{styleComponent:function(){var t={"--backgroundColor":this.color,"--color":"white"};return this.blanco&&(t={"--backgroundColor":"white","--color":this.color}),t}}},r=(e(318),e(36)),component=Object(r.a)(n,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("center",{staticClass:"boton--caja",style:t.styleComponent},[e("nuxt-link",{attrs:{to:t.localePath(this.url)}},[e("button",{staticClass:"boton desktop",attrs:{type:"submit"}},[t._t("default")],2),this.mobile?e("button",{staticClass:"boton mobile",attrs:{type:"submit"}},[t._v(t._s(t.mobile))]):e("button",{staticClass:"boton mobile",attrs:{type:"submit"}},[t._t("default")],2)])],1)}),[],!1,null,"4a45092d",null);o.default=component.exports},318:function(t,o,e){"use strict";e(307)},319:function(t,o,e){var n=e(69)(!1);n.push([t.i,'.boton--caja[data-v-4a45092d]{height:70px}.mobile[data-v-4a45092d]{display:none}.boton[data-v-4a45092d]{background-color:var(--backgroundColor);color:var(--color);font-family:"Rubik",sans-serif;border:0 solid #fff;font-size:18px;font-weight:500;border-radius:30px;padding:19px 61px;box-shadow:0 2px 8px rgba(0,0,0,.25);cursor:pointer}.boton[data-v-4a45092d]:hover{font-size:20px;transition-duration:.2s}@media screen and (max-width:768px){.boton[data-v-4a45092d]{padding:16px 50px;font-size:16px}.desktop[data-v-4a45092d]{display:none}.mobile[data-v-4a45092d]{display:block}}',""]),t.exports=n}}]);