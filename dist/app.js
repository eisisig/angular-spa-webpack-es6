!function(e){function n(e){var n=document.getElementsByTagName("head")[0],t=document.createElement("script");t.type="text/javascript",t.charset="utf-8",t.src=p.p+""+e+"."+g+".hot-update.js",n.appendChild(t)}function t(e){if("undefined"==typeof XMLHttpRequest)return e(new Error("No browser support"));try{var n=new XMLHttpRequest,t=p.p+""+g+".hot-update.json";n.open("GET",t,!0),n.timeout=1e4,n.send(null)}catch(r){return e(r)}n.onreadystatechange=function(){if(4===n.readyState)if(0===n.status)e(new Error("Manifest request to "+t+" timed out."));else if(404===n.status)e();else if(200!==n.status&&304!==n.status)e(new Error("Manifest request to "+t+" failed."));else{try{var r=JSON.parse(n.responseText)}catch(o){return void e(o)}e(null,r)}}}function r(e){var n=D[e];if(!n)return p;var t=function(t){return n.hot.active?D[t]?(D[t].parents.indexOf(e)<0&&D[t].parents.push(e),n.children.indexOf(t)<0&&n.children.push(t)):b=[e]:(console.warn("[HMR] unexpected require("+t+") from disposed module "+e),b=[]),p(t)};for(var r in p)Object.prototype.hasOwnProperty.call(p,r)&&(t[r]=p[r]);return t.e=function(e,n){"ready"===m&&a("prepare"),x++,p.e(e,function(){function r(){x--,"prepare"===m&&(M[e]||d(e),0===x&&0===_&&s())}try{n.call(null,t)}finally{r()}})},t}function o(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],active:!0,accept:function(e,t){if("undefined"==typeof e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._acceptedDependencies[e[r]]=t;else n._acceptedDependencies[e]=t},decline:function(e){if("undefined"==typeof e)n._selfDeclined=!0;else if("number"==typeof e)n._declinedDependencies[e]=!0;else for(var t=0;t<e.length;t++)n._declinedDependencies[e[t]]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=n._disposeHandlers.indexOf(e);t>=0&&n._disposeHandlers.splice(t,1)},check:c,apply:f,status:function(e){return e?void O.push(e):m},addStatusHandler:function(e){O.push(e)},removeStatusHandler:function(e){var n=O.indexOf(e);n>=0&&O.splice(n,1)},data:H[e]};return n}function a(e){m=e;for(var n=0;n<O.length;n++)O[n].call(null,e)}function i(e){var n=+e+""===e;return n?+e:e}function c(e,n){if("idle"!==m)throw new Error("check() is only allowed in idle status");"function"==typeof e?(w=!1,n=e):(w=e,n=n||function(e){if(e)throw e}),a("check"),t(function(e,t){if(e)return n(e);if(!t)return a("idle"),void n(null,null);E={},R={},M={};for(var r=0;r<t.c.length;r++)R[t.c[r]]=!0;y=t.h,a("prepare"),h=n,v={};var o=0;d(o),"prepare"===m&&0===x&&0===_&&s()})}function l(e,n){if(R[e]&&E[e]){E[e]=!1;for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(v[t]=n[t]);0===--_&&0===x&&s()}}function d(e){R[e]?(E[e]=!0,_++,n(e)):M[e]=!0}function s(){a("ready");var e=h;if(h=null,e)if(w)f(w,e);else{var n=[];for(var t in v)Object.prototype.hasOwnProperty.call(v,t)&&n.push(i(t));e(null,n)}}function f(n,t){function r(e){for(var n=[e],t={},r=n.slice();r.length>0;){var a=r.pop(),e=D[a];if(e&&!e.hot._selfAccepted){if(e.hot._selfDeclined)return new Error("Aborted because of self decline: "+a);if(0===a)return;for(var i=0;i<e.parents.length;i++){var c=e.parents[i],l=D[c];if(l.hot._declinedDependencies[a])return new Error("Aborted because of declined dependency: "+a+" in "+c);n.indexOf(c)>=0||(l.hot._acceptedDependencies[a]?(t[c]||(t[c]=[]),o(t[c],[a])):(delete t[c],n.push(c),r.push(c)))}}}return[n,t]}function o(e,n){for(var t=0;t<n.length;t++){var r=n[t];e.indexOf(r)<0&&e.push(r)}}if("ready"!==m)throw new Error("apply() is only allowed in ready status");"function"==typeof n?(t=n,n={}):n&&"object"==typeof n?t=t||function(e){if(e)throw e}:(n={},t=t||function(e){if(e)throw e});var c={},l=[],d={};for(var s in v)if(Object.prototype.hasOwnProperty.call(v,s)){var f=i(s),u=r(f);if(!u){if(n.ignoreUnaccepted)continue;return a("abort"),t(new Error("Aborted because "+f+" is not accepted"))}if(u instanceof Error)return a("abort"),t(u);d[f]=v[f],o(l,u[0]);for(var f in u[1])Object.prototype.hasOwnProperty.call(u[1],f)&&(c[f]||(c[f]=[]),o(c[f],u[1][f]))}for(var h=[],w=0;w<l.length;w++){var f=l[w];D[f]&&D[f].hot._selfAccepted&&h.push({module:f,errorHandler:D[f].hot._selfAccepted})}a("dispose");for(var O=l.slice();O.length>0;){var f=O.pop(),_=D[f];if(_){for(var x={},M=_.hot._disposeHandlers,E=0;E<M.length;E++){var R=M[E];R(x)}H[f]=x,_.hot.active=!1,delete D[f];for(var E=0;E<_.children.length;E++){var j=D[_.children[E]];if(j){var k=j.parents.indexOf(f);k>=0&&j.parents.splice(k,1)}}}}for(var f in c)if(Object.prototype.hasOwnProperty.call(c,f))for(var _=D[f],A=c[f],E=0;E<A.length;E++){var P=A[E],k=_.children.indexOf(P);k>=0&&_.children.splice(k,1)}a("apply"),g=y;for(var f in d)Object.prototype.hasOwnProperty.call(d,f)&&(e[f]=d[f]);var N=null;for(var f in c)if(Object.prototype.hasOwnProperty.call(c,f)){for(var _=D[f],A=c[f],U=[],w=0;w<A.length;w++){var P=A[w],R=_.hot._acceptedDependencies[P];U.indexOf(R)>=0||U.push(R)}for(var w=0;w<U.length;w++){var R=U[w];try{R(c)}catch(q){N||(N=q)}}}for(var w=0;w<h.length;w++){var C=h[w],f=C.module;b=[f];try{p(f)}catch(q){if("function"==typeof C.errorHandler)try{C.errorHandler(q)}catch(q){N||(N=q)}else N||(N=q)}}return N?(a("fail"),t(N)):(a("idle"),void t(null,l))}function p(n){if(D[n])return D[n].exports;var t=D[n]={exports:{},id:n,loaded:!1,hot:o(n),parents:b,children:[]};return e[n].call(t.exports,t,t.exports,r(n)),t.loaded=!0,t.exports}var u=this.webpackHotUpdate;this.webpackHotUpdate=function(e,n){l(e,n),u&&u(e,n)};var h,v,y,w=!0,g="b5fa80857f37d5edde18",H={},b=[],O=[],m="idle",_=0,x=0,M={},E={},R={},D={};return p.m=e,p.c=D,p.p="",p.h=function(){return g},r(0)(0)}([function(e,n,t){t(1),e.exports=t(3)},function(e,n,t){var r,o=function(){return r.indexOf(t.h())>=0},a=function c(){e.hot.check(!0,function(n,r){return n?void(e.hot.status()in{abort:1,fail:1}?(console.warn("[HMR] Cannot apply update. Need to do a full reload!"),console.warn("[HMR] "+n.stack||n.message),window.location.reload()):console.warn("[HMR] Update failed: "+n.stack||n.message)):r?(o()||c(),t(2)(r,r),void(o()&&console.log("[HMR] App is up to date."))):(console.warn("[HMR] Cannot find update. Need to do a full reload!"),console.warn("[HMR] (Probably because of restarting the webpack-dev-server)"),void window.location.reload())})},i=window.addEventListener?function(e,n){window.addEventListener(e,n,!1)}:function(e,n){window.attachEvent("on"+e,n)};i("message",function(n){"string"==typeof n.data&&0===n.data.indexOf("webpackHotUpdate")&&(r=n.data,o()||"idle"!==e.hot.status()||(console.log("[HMR] Checking for updates on the server..."),a()))}),console.log("[HMR] Waiting for update signal from WDS...")},function(e,n){e.exports=function(e,n){var t=e.filter(function(e){return n&&n.indexOf(e)<0});t.length>0&&(console.warn("[HMR] The following modules couldn't be hot updated: (They would need a full reload!)"),t.forEach(function(e){console.warn("[HMR]  - "+e)})),n&&0!==n.length?(console.log("[HMR] Updated modules:"),n.forEach(function(e){console.log("[HMR]  - "+e)})):console.log("[HMR] Nothing hot updated.")}},function(e,n){"use strict";function t(){function e(){console.log("Main controller")}function n(){}var t=this;t.data=[],t.title="Main controller",t.someFunction=n,e()}angular.module("app",[]),angular.module("app").controller("MainCtrl",t)}]);
//# sourceMappingURL=app.js.map