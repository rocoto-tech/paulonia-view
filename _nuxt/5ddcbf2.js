(window.webpackJsonp=window.webpackJsonp||[]).push([[6,17],{307:function(t,o,n){var content=n(319);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(70).default)("322a396c",content,!0,{sourceMap:!1})},310:function(t,o,n){"use strict";n.r(o);var e={props:{color:{type:String,required:!0},blanco:{type:Boolean,default:!1},mobile:{type:String},url:{type:String,default:"/portafolio"}},computed:{styleComponent:function(){var t={"--backgroundColor":this.color,"--color":"white"};return this.blanco&&(t={"--backgroundColor":"white","--color":this.color}),t}}},r=(n(318),n(36)),component=Object(r.a)(e,(function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("center",{staticClass:"boton--caja",style:t.styleComponent},[n("nuxt-link",{attrs:{to:t.localePath(this.url)}},[n("button",{staticClass:"boton desktop",attrs:{type:"submit"}},[t._t("default")],2),this.mobile?n("button",{staticClass:"boton mobile",attrs:{type:"submit"}},[t._v(t._s(t.mobile))]):n("button",{staticClass:"boton mobile",attrs:{type:"submit"}},[t._t("default")],2)])],1)}),[],!1,null,"4a45092d",null);o.default=component.exports},318:function(t,o,n){"use strict";n(307)},319:function(t,o,n){var e=n(69)(!1);e.push([t.i,'.boton--caja[data-v-4a45092d]{height:70px}.mobile[data-v-4a45092d]{display:none}.boton[data-v-4a45092d]{background-color:var(--backgroundColor);color:var(--color);font-family:"Rubik",sans-serif;border:0 solid #fff;font-size:18px;font-weight:500;border-radius:30px;padding:19px 61px;box-shadow:0 2px 8px rgba(0,0,0,.25);cursor:pointer}.boton[data-v-4a45092d]:hover{font-size:20px;transition-duration:.2s}@media screen and (max-width:768px){.boton[data-v-4a45092d]{padding:16px 50px;font-size:16px}.desktop[data-v-4a45092d]{display:none}.mobile[data-v-4a45092d]{display:block}}',""]),t.exports=e},352:function(t,o,n){var map={"./Vector.png":405,"./agile.png":406,"./arrowdown.png":207,"./arrowup.png":208,"./aso.png":407,"./atractive.png":408,"./back.png":353,"./back_over.png":409,"./behance.png":203,"./celular_navbar.png":146,"./cloud.png":410,"./complex_code.png":411,"./comunicate.png":412,"./cost.png":413,"./cross.png":206,"./cruz.png":351,"./decision.png":414,"./desing.png":415,"./desingsystem.png":416,"./dev.png":417,"./email.png":209,"./empathy.png":418,"./eslabon.png":350,"./experience.png":419,"./expert.png":420,"./fast.png":421,"./fidelity.png":422,"./fitmind.png":423,"./flexi.png":424,"./goal.png":425,"./hamburguesa.png":205,"./innovation.png":426,"./iosandroid.png":427,"./linkedin.png":204,"./location.png":210,"./managment.png":428,"./marca.png":429,"./module.png":430,"./multi.png":431,"./multiplatform.png":432,"./mvp.png":433,"./native.png":434,"./next.png":354,"./next_over.png":435,"./oportunity.png":436,"./pluma.png":145,"./productdesing.png":437,"./productivity.png":438,"./resources.png":439,"./security.png":440,"./support.png":441,"./syncro.png":442,"./team_ethic.png":443,"./team_expert.png":444,"./team_quality.png":445,"./twitter.png":211,"./user.png":446};function e(t){var o=r(t);return n(o)}function r(t){if(!n.o(map,t)){var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}return map[t]}e.keys=function(){return Object.keys(map)},e.resolve=r,t.exports=e,e.id=352},473:function(t,o,n){var content=n(530);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(70).default)("400c2121",content,!0,{sourceMap:!1})},529:function(t,o,n){"use strict";n(473)},530:function(t,o,n){var e=n(69)(!1);e.push([t.i,".cardBoton[data-v-40120912]{box-sizing:border-box;text-align:center;background-color:#fff;border-radius:30px;padding-top:40px;box-shadow:5px 5px 15px 5px rgba(0,0,0,.012)}.cardBoton__img[data-v-40120912]{margin-bottom:35px}.cardBoton__titulo[data-v-40120912]{font-weight:500;margin-top:0;margin-bottom:20px}.cardBoton__parrafo[data-v-40120912],.cardBoton__titulo[data-v-40120912]{padding-right:40px;padding-left:40px;font-size:18px}.cardBoton__parrafo[data-v-40120912]{font-weight:300;line-height:28.8px;margin-bottom:80px}.cardBoton__boton[data-v-40120912]{margin-bottom:35px}@media screen and (max-width:1024px){.cardBoton[data-v-40120912]{display:grid;justify-items:center}.cardBoton__titulo[data-v-40120912]{font-size:16px}.cardBoton__parrafo[data-v-40120912]{font-size:16px;line-height:160%}}@media screen and (max-width:768px){.cardBoton[data-v-40120912]{height:auto}}@media screen and (max-width:480px){.cardBoton__img[data-v-40120912]{margin-bottom:25px}.cardBoton__parrafo[data-v-40120912],.cardBoton__titulo[data-v-40120912]{font-size:14px;margin-bottom:25px}.cardBoton__parrafo[data-v-40120912]{line-height:160%}}",""]),t.exports=e},565:function(t,o,n){"use strict";n.r(o);var e={props:{image:{required:!0,type:String},alt_image:{required:!0,type:String},boton_text:{required:!0,type:String},boton_textMobile:{required:!0,type:String},url:{type:String}}},r=(n(529),n(36)),component=Object(r.a)(e,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"cardBoton"},[e("img",{staticClass:"cardBoton__img",attrs:{src:n(352)("./"+t.image+".png"),alt:t.alt_image}}),e("h3",{staticClass:"cardBoton__titulo"},[t._t("titulo")],2),e("p",{staticClass:"cardBoton__parrafo"},[t._t("parrafo")],2),e("ComponentBoton",{staticClass:"cardBoton__boton",attrs:{url:this.url,color:"#5F4FBC",mobile:this.boton_textMobile}},[t._v(t._s(this.boton_text))])],1)}),[],!1,null,"40120912",null);o.default=component.exports;installComponents(component,{ComponentBoton:n(310).default})}}]);