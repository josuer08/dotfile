!function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=1125)}({1125:function(n,e,t){t(185),n.exports=t(1126)},1126:function(n,e,t){"use strict";t.r(e);var r=t(15);window.addEventListener("message",n=>{switch(n.data.type){case r.g:!function(){window.navigator.webkitGetUserMedia({audio:!0,video:!0},n=>{const e=n.getTracks();let t=!1,r=!1;e.forEach(n=>{n.stop();const e=n.kind;t=t||"audio"===e,r=r||"video"===e}),t&&r?window.top.postMessage({accessGranted:!0,type:"mic-and-cam",micsAvailable:t,camerasAvailable:r},"*"):window.top.postMessage({accessGranted:!1,type:"mic-and-cam",micsAvailable:t,camerasAvailable:r},"*")},n=>{const e="PermissionDismissedError"===n.name&&null,t="DevicesNotFoundError"===n.name;window.top.postMessage({accessGranted:e,type:"mic-and-cam",deviceUnavailable:t},"*")})}()}},!1)},15:function(n,e,t){"use strict";t.d(e,"b",(function(){return r})),t.d(e,"d",(function(){return o})),t.d(e,"f",(function(){return i})),t.d(e,"h",(function(){return c})),t.d(e,"g",(function(){return u})),t.d(e,"i",(function(){return a})),t.d(e,"c",(function(){return s})),t.d(e,"k",(function(){return d})),t.d(e,"j",(function(){return f})),t.d(e,"n",(function(){return l})),t.d(e,"m",(function(){return p})),t.d(e,"l",(function(){return m})),t.d(e,"q",(function(){return g})),t.d(e,"o",(function(){return v})),t.d(e,"p",(function(){return w})),t.d(e,"r",(function(){return b})),t.d(e,"s",(function(){return y})),t.d(e,"t",(function(){return h})),t.d(e,"e",(function(){return j})),t.d(e,"a",(function(){return x}));const r="allow-loom-urls",o="disallow-loom-urls",i="get-cam-permission",c="get-mic-permission",u="get-mic-and-cam-permissions",a="get-session-details",s="check-content-connection",d="inject-intercom-link-expand-script",f="initiate-loom-recorder-from-script",l="open-gmail-integration-walkthrough-from-gmail-composer",p="log-exception",m="log-crumb",g="request-tab-id",v="request-active-tab",w="request-devices",b="track-event",y="update-integration-settings",h="user-login",j="extension-clicked",x="add-log-entry"},185:function(n,e,t){(function(n){("undefined"!=typeof window?window:void 0!==n?n:"undefined"!=typeof self?self:{}).SENTRY_RELEASE={id:"3.6.22"}}).call(this,t(55))},55:function(n,e){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(n){"object"==typeof window&&(t=window)}n.exports=t}});
//# sourceMappingURL=get-mic-and-cam-access.js.map