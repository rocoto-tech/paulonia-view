(window.webpackJsonp=window.webpackJsonp||[]).push([[20,10],{344:function(t,e,r){var map={"./proceso10.png":345,"./proceso11.png":346,"./proceso12.png":347};function n(t){var e=c(t);return r(e)}function c(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=c,t.exports=n,n.id=344},345:function(t,e,r){t.exports=r.p+"img/proceso10.c7d3071.png"},346:function(t,e,r){t.exports=r.p+"img/proceso11.b6f1136.png"},347:function(t,e,r){t.exports=r.p+"img/proceso12.29bc6de.png"},447:function(t,e,r){var content=r(477);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(70).default)("5347e1b2",content,!0,{sourceMap:!1})},475:function(t,e,r){var content=r(534);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(70).default)("3b851ef4",content,!0,{sourceMap:!1})},476:function(t,e,r){"use strict";r(447)},477:function(t,e,r){var n=r(69)(!1);n.push([t.i,"@-webkit-keyframes entrar-data-v-be01f760{0%{opacity:0}to{opacity:1}}@keyframes entrar-data-v-be01f760{0%{opacity:0}to{opacity:1}}.cardGrande[data-v-be01f760]{display:grid;grid-template-columns:534px 1fr;background-color:#fff;border-radius:30px;width:945px;padding-bottom:76px;padding-top:70px;padding-left:70px;-webkit-animation-name:entrar-data-v-be01f760;animation-name:entrar-data-v-be01f760;-webkit-animation-duration:2s;animation-duration:2s}.cardGrande__c1[data-v-be01f760]{text-align:left}.cardGrande__c1__titulo[data-v-be01f760]{font-weight:300;font-size:36px;line-height:42px;margin-top:0;margin-bottom:25px}.cardGrande__c1__parrafo[data-v-be01f760]{font-weight:300;font-size:18px;line-height:28.8px;margin-bottom:0}.cardGrande__c1__img[data-v-be01f760]{margin-left:70px;margin-top:41px;width:150px;height:150px}.cardGrande__c2 img[data-v-be01f760]{height:40px;width:auto}.cardGrande__c2__big[data-v-be01f760]{font-size:96px;margin:0 70px 0 0}.cardGrande__c2__big[data-v-be01f760],.cardGrande__c2__small[data-v-be01f760]{font-weight:500;color:#e6e6e6;text-align:right}.cardGrande__c2__small[data-v-be01f760]{font-size:24px;margin-right:15px;margin-top:15px;margin-bottom:9px}.cardGrande__c2__texto[data-v-be01f760]{font-size:16px;font-weight:300;line-height:27px;margin-top:18px;width:80%}.cardGrande__c2__box[data-v-be01f760]{display:grid;justify-items:right;justify-content:right;grid-template-columns:150px 150px;grid-gap:20px;margin-top:83px;margin-right:30px}.cardGrande__c2__box1[data-v-be01f760]{width:150px;height:175px;border-radius:30px;border:3px solid #e6e6e6}.cardGrande__c2__box1[data-v-be01f760]:hover{box-shadow:5px 5px 10px 5px rgba(0,0,0,.08)}@media screen and (max-width:1024px){.cardGrande[data-v-be01f760]{width:80%;grid-template-columns:.55fr 1fr}}@media screen and (max-width:768px){.cardGrande[data-v-be01f760]{width:275px;height:488px;grid-template-columns:1fr;padding:60px 26px 0}.cardGrande__c1[data-v-be01f760]{display:grid;justify-items:center}.cardGrande__c1__titulo[data-v-be01f760]{font-style:normal;font-weight:500;font-size:18px;line-height:150%;color:#5f4fbc;margin-bottom:0}.cardGrande__c1__parrafo[data-v-be01f760]{font-style:normal;font-weight:300;font-size:14px;line-height:160%;text-align:center}.cardGrande__c1__img[data-v-be01f760]{margin-left:0;grid-row:1/1;margin-bottom:45px;margin-top:0;height:100px;width:auto}.cardGrande__c2__box[data-v-be01f760]{display:none}.cardGrande__c2__big[data-v-be01f760]{margin-right:0;font-size:72px}}",""]),t.exports=n},527:function(t,e,r){"use strict";r.r(e);var n={props:["titulo","parrafo","number","number_left","number_right","texto_left","texto_right"],methods:{triggerCard:function(t){this.$emit("click-card",t)}}},c=(r(476),r(36)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("center",{staticStyle:{overflow:"hidden"}},[n("div",{staticClass:"cardGrande"},[n("div",{staticClass:"cardGrande__c1"},[n("h3",{staticClass:"cardGrande__c1__titulo"},[t._v(t._s(t.titulo))]),n("p",{staticClass:"cardGrande__c1__parrafo"},[t._v(t._s(t.parrafo))]),n("img",{staticClass:"cardGrande__c1__img",attrs:{src:r(344)("./proceso1"+(this.number-1)+".png"),alt:"alt",width:"150px",height:"150px"}})]),n("div",{staticClass:"cardGrande__c2"},[n("p",{staticClass:"cardGrande__c2__big"},[t._v(t._s(t.number))]),n("div",{staticClass:"cardGrande__c2__box"},[n("div",{staticClass:"cardGrande__c2__box1",on:{click:function(e){return t.triggerCard(t.number_left)}}},[n("p",{staticClass:"cardGrande__c2__small"},[t._v(t._s(t.number_left))]),n("img",{attrs:{src:r(344)("./proceso1"+(this.number_left-1)+".png"),alt:"alt",width:"150px",height:"150px"}}),n("p",{staticClass:"cardGrande__c2__texto"},[t._v(t._s(t.texto_left))])]),n("div",{staticClass:"cardGrande__c2__box1",on:{click:function(e){return t.triggerCard(t.number_right)}}},[n("p",{staticClass:"cardGrande__c2__small"},[t._v(t._s(t.number_right))]),n("img",{attrs:{src:r(344)("./proceso1"+(this.number_right-1)+".png"),alt:"alt",width:"150px",height:"150px"}}),n("p",{staticClass:"cardGrande__c2__texto"},[t._v(t._s(t.texto_right))])])])])])])}),[],!1,null,"be01f760",null);e.default=component.exports},533:function(t,e,r){"use strict";r(475)},534:function(t,e,r){var n=r(69)(!1);n.push([t.i,".titulo-proceso[data-v-58c27cb7]{margin-top:185px;margin-bottom:135px}@media screen and (max-width:480px){.titulo-proceso[data-v-58c27cb7]{margin-bottom:35px;margin-top:90px}}",""]),t.exports=n},561:function(t,e,r){"use strict";r.r(e);r(59),r(28);var n={data:function(){return{current:-1,timer:null,cards:[{activa:!0},{activa:!1},{activa:!1}]}},methods:{visibilityChanged:function(t){var e=this;t&&-1===this.current&&(this.current=0,this.timer=setInterval((function(){e.cards.forEach((function(t){t.activa=!1})),e.current=e.current+1>=e.cards.length?0:e.current+1,e.cards[e.current].activa=!0}),9500))},clickBox:function(t){var e=this;clearInterval(this.timer),this.cards.forEach((function(t){t.activa=!1})),this.current=parseInt(t)-1,this.cards[this.current].activa=!0,this.timer=setInterval((function(){e.cards.forEach((function(t){t.activa=!1})),e.current=e.current+1>=e.cards.length?0:e.current+1,e.cards[e.current].activa=!0}),9500)}}},c=(r(533),r(36)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:t.visibilityChanged,expression:"visibilityChanged"}],staticClass:"proceso"},[r("CardGrande",{directives:[{name:"show",rawName:"v-show",value:t.cards[0].activa,expression:"cards[0].activa"}],attrs:{titulo:t.$t("index.proceso.c1.titulo"),number:"01",number_left:"02",number_right:"03",texto_left:t.$t("index.proceso.c2.titulo"),texto_right:t.$t("index.proceso.c3.titulo"),parrafo:t.$t("index.proceso.c1.texto")},on:{"click-card":t.clickBox}}),r("CardGrande",{directives:[{name:"show",rawName:"v-show",value:t.cards[1].activa,expression:"cards[1].activa"}],attrs:{titulo:t.$t("index.proceso.c2.titulo"),number:"02",number_left:"03",number_right:"01",texto_left:t.$t("index.proceso.c3.titulo"),texto_right:t.$t("index.proceso.c1.titulo"),parrafo:t.$t("index.proceso.c2.texto")},on:{"click-card":t.clickBox}}),r("CardGrande",{directives:[{name:"show",rawName:"v-show",value:t.cards[2].activa,expression:"cards[2].activa"}],attrs:{titulo:t.$t("index.proceso.c3.titulo"),number:"03",number_left:"01",number_right:"02",texto_left:t.$t("index.proceso.c1.titulo"),texto_right:t.$t("index.proceso.c2.titulo"),parrafo:t.$t("index.proceso.c3.texto")},on:{"click-card":t.clickBox}})],1)}),[],!1,null,"58c27cb7",null);e.default=component.exports;installComponents(component,{CardGrande:r(527).default})}}]);