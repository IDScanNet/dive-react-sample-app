(self.webpackChunk_idscan_idvc2=self.webpackChunk_idscan_idvc2||[]).push([[423],{3457:(t,e,n)=>{n.r(e),n.d(e,{default:()=>Z});var r=n(4328),o=n(4554),i=n(1026),u=n(8736),a=n(6955),c=n(813),l=n(528),f=n(683),s=n(7672);function h(t){if(void 0===t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(t,e,n,r,o,i,u){try{var a=t[i](u),c=a.value}catch(t){n(t);return}a.done?e(c):Promise.resolve(c).then(r,o)}function b(t){return function(){var e=this,n=arguments;return new Promise(function(r,o){var i=t.apply(e,n);function u(t){p(i,r,o,u,a,"next",t)}function a(t){p(i,r,o,u,a,"throw",t)}u(void 0)})}}function v(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function d(t,e,n){return e&&y(t.prototype,e),n&&y(t,n),t}function w(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function g(t){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function m(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&x(t,e)}function S(t,e){return e&&("object"===k(e)||"function"==typeof e)?e:h(t)}function x(t,e){return(x=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function k(t){return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t}function P(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function _(t){var e=P();return function(){var n,r=g(t);if(e){var o=g(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return S(this,n)}}function O(t,e){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=e.call(t,u)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}var z=320,R=320,j=[1,320,320,3],T="serving_default_input_2:0",E="StatefulPartitionedCall:0",I="StatefulPartitionedCall:1",C=function(t){"use strict";m(n,t);var e=_(n);function n(){var t,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c.z.WASM,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return v(this,n),w(h(t=e.call(this,r,o,i)),"canvasSize",{width:1,height:1}),t}return d(n,[{key:"setSizes",value:function(t){var e=t.height,n=t.width;this.canvasSize.width=n,this.canvasSize.height=e}},{key:"predict",value:function(t){var e=w({},T,new u.Tensor("float32",t,j));return this.session.run(e)}},{key:"predictFromImage",value:function(t,e,n,r){var o=this;return b(function(){var i,u,a,c,s;return O(this,function(h){switch(h.label){case 0:if(o.loading)return[2,[]];return i=o.createSrc(t,"angles-input-canvas"),u=e||(0,l.vL)("angles-canvas",{width:z,height:R}),a=(0,l.SI)(i,u,n,r),c=(0,f.Di)(a,f.eQ.WITHOUT),[4,o.predict(c)];case 1:return s=h.sent(),o.setSizes(i),[2,o.interpret(s[I].data,s[E].data)]}})})()}},{key:"interpret",value:function(t,e){var n={side:"None",bbox:{topLeft:{x:0,y:0},bottomRight:{x:1,y:1}},perimeterInPercents:{width:0,height:0}},r=[];return t.forEach(function(t,e){return r.push({label:s.mR[e],score:t})}),n.side=r.sort(function(t,e){return e.score-t.score})[0].label,n.bbox.topLeft.x=~~(e[0]*this.canvasSize.width),n.bbox.topLeft.y=~~(e[1]*this.canvasSize.height),n.bbox.bottomRight.x=~~(e[2]*this.canvasSize.width),n.bbox.bottomRight.y=~~(e[3]*this.canvasSize.height),n.perimeterInPercents.width=~~((e[2]-e[0])*100),n.perimeterInPercents.height=~~((e[3]-e[1])*100),n}}]),n}(a.Z);function L(t,e,n,r,o,i,u){try{var a=t[i](u),c=a.value}catch(t){n(t);return}a.done?e(c):Promise.resolve(c).then(r,o)}function M(t){return function(){var e=this,n=arguments;return new Promise(function(r,o){var i=t.apply(e,n);function u(t){L(i,r,o,u,a,"next",t)}function a(t){L(i,r,o,u,a,"throw",t)}u(void 0)})}}function W(t,e){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=e.call(t,u)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}let Z=M(function(){var t;return W(this,function(e){return t=new C("".concat(o.t.cK),c.z.WASM,r.Z.networkUrl),i.Z.setModule("model","classLocal",t),[2,[t.initialize.bind(t)]]})})}}]);