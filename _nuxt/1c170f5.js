(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{396:function(t,r,e){var map={"./proceso10.png":397,"./proceso11.png":398,"./proceso12.png":399};function d(t){var r=n(t);return e(r)}function n(t){if(!e.o(map,t)){var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}return map[t]}d.keys=function(){return Object.keys(map)},d.resolve=n,t.exports=d,d.id=396},397:function(t,r,e){t.exports=e.p+"img/proceso10.e31648e.png"},398:function(t,r,e){t.exports=e.p+"img/proceso11.e331e67.png"},399:function(t,r,e){t.exports=e.p+"img/proceso12.637ddae.png"},440:function(t,r,e){var content=e(464);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(70).default)("63083e80",content,!0,{sourceMap:!1})},463:function(t,r,e){"use strict";e(440)},464:function(t,r,e){var d=e(69)(!1);d.push([t.i,"@-webkit-keyframes entrar-data-v-cfbb6d90{0%{opacity:0}to{opacity:1}}@keyframes entrar-data-v-cfbb6d90{0%{opacity:0}to{opacity:1}}.cardGrande[data-v-cfbb6d90]{display:grid;grid-template-columns:534px 1fr;background-color:#fff;border-radius:30px;width:945px;padding-bottom:76px;padding-top:70px;padding-left:70px;-webkit-animation-name:entrar-data-v-cfbb6d90;animation-name:entrar-data-v-cfbb6d90;-webkit-animation-duration:2s;animation-duration:2s}.cardGrande__c1[data-v-cfbb6d90]{text-align:left}.cardGrande__c1__titulo[data-v-cfbb6d90]{font-weight:300;font-size:36px;line-height:42px;margin-top:0;margin-bottom:25px}.cardGrande__c1__parrafo[data-v-cfbb6d90]{font-weight:300;font-size:18px;line-height:28.8px;margin-bottom:0}.cardGrande__c1__img[data-v-cfbb6d90]{margin-left:70px;margin-top:41px}.cardGrande__c2 img[data-v-cfbb6d90]{height:40px}.cardGrande__c2__big[data-v-cfbb6d90]{font-size:96px;margin:0 70px 0 0}.cardGrande__c2__big[data-v-cfbb6d90],.cardGrande__c2__small[data-v-cfbb6d90]{font-weight:500;color:#e6e6e6;text-align:right}.cardGrande__c2__small[data-v-cfbb6d90]{font-size:24px;margin-right:15px;margin-top:15px;margin-bottom:9px}.cardGrande__c2__texto[data-v-cfbb6d90]{font-size:16px;font-weight:300;line-height:27px;margin-top:18px;width:80%}.cardGrande__c2__box[data-v-cfbb6d90]{display:grid;justify-items:right;justify-content:right;grid-template-columns:150px 150px;grid-gap:20px;margin-top:83px;margin-right:30px}.cardGrande__c2__box1[data-v-cfbb6d90]{width:150px;height:175px;border-radius:30px;border:3px solid #e6e6e6}.cardGrande__c2__box1[data-v-cfbb6d90]:hover{box-shadow:5px 5px 10px 5px rgba(0,0,0,.08)}@media screen and (max-width:1024px){.cardGrande[data-v-cfbb6d90]{width:80%;grid-template-columns:.55fr 1fr}}@media screen and (max-width:768px){.cardGrande[data-v-cfbb6d90]{width:275px;height:488px;grid-template-columns:1fr;padding:60px 26px 0}.cardGrande__c1[data-v-cfbb6d90]{display:grid;justify-items:center}.cardGrande__c1__titulo[data-v-cfbb6d90]{font-style:normal;font-weight:500;font-size:18px;line-height:150%;color:#5f4fbc;margin-bottom:0}.cardGrande__c1__parrafo[data-v-cfbb6d90]{font-style:normal;font-weight:300;font-size:14px;line-height:160%;text-align:center}.cardGrande__c1__img[data-v-cfbb6d90]{margin-left:0;grid-row:1/1;margin-bottom:45px;margin-top:0;height:100px}.cardGrande__c2__box[data-v-cfbb6d90]{display:none}.cardGrande__c2__big[data-v-cfbb6d90]{margin-right:0;font-size:72px}}",""]),t.exports=d},510:function(t,r,e){"use strict";e.r(r);var d={props:["titulo","parrafo","number","number_left","number_right","texto_left","texto_right"],methods:{triggerCard:function(t){this.$emit("click-card",t)}}},n=(e(463),e(36)),component=Object(n.a)(d,(function(){var t=this,r=t.$createElement,d=t._self._c||r;return d("center",{staticStyle:{overflow:"hidden"}},[d("div",{staticClass:"cardGrande"},[d("div",{staticClass:"cardGrande__c1"},[d("h3",{staticClass:"cardGrande__c1__titulo"},[t._v(t._s(t.titulo))]),d("p",{staticClass:"cardGrande__c1__parrafo"},[t._v(t._s(t.parrafo))]),d("img",{staticClass:"cardGrande__c1__img",attrs:{src:e(396)("./proceso1"+(this.number-1)+".png"),alt:"alt"}})]),d("div",{staticClass:"cardGrande__c2"},[d("p",{staticClass:"cardGrande__c2__big"},[t._v(t._s(t.number))]),d("div",{staticClass:"cardGrande__c2__box"},[d("div",{staticClass:"cardGrande__c2__box1",on:{click:function(r){return t.triggerCard(t.number_left)}}},[d("p",{staticClass:"cardGrande__c2__small"},[t._v(t._s(t.number_left))]),d("img",{attrs:{src:e(396)("./proceso1"+(this.number_left-1)+".png"),alt:"alt"}}),d("p",{staticClass:"cardGrande__c2__texto"},[t._v(t._s(t.texto_left))])]),d("div",{staticClass:"cardGrande__c2__box1",on:{click:function(r){return t.triggerCard(t.number_right)}}},[d("p",{staticClass:"cardGrande__c2__small"},[t._v(t._s(t.number_right))]),d("img",{attrs:{src:e(396)("./proceso1"+(this.number_right-1)+".png"),alt:"alt"}}),d("p",{staticClass:"cardGrande__c2__texto"},[t._v(t._s(t.texto_right))])])])])])])}),[],!1,null,"cfbb6d90",null);r.default=component.exports}}]);