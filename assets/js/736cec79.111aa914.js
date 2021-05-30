(self.webpackChunkpodlove_docs=self.webpackChunkpodlove_docs||[]).push([[9153],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),y=c(r),f=o,d=y["".concat(p,".").concat(f)]||y[f]||u[f]||a;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=y;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},1697:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),i=["components"],l={title:"Player Store"},p={unversionedId:"v4/store",id:"v4/store",isDocsHomePage:!1,title:"Player Store",description:"Player Dispatches",source:"@site/web-player/v4/store.mdx",sourceDirName:"v4",slug:"/v4/store",permalink:"/podlove-web-player/v4/store",version:"current",frontMatter:{title:"Player Store"},sidebar:"0",previous:{title:"Extensions",permalink:"/podlove-web-player/v4/extensions"}},c=[{value:"Player Dispatches",id:"player-dispatches",children:[]},{value:"Player Subscriptions",id:"player-subscriptions",children:[]}],s={toc:c};function u(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"player-dispatches"},"Player Dispatches"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"  podlovePlayer(selector, config).then(function (store) {\n    store.dispatch({\n      type: TYPE,\n      payload: PAYLOAD\n    })\n  });\n")),(0,a.kt)("p",null,"Every player interaction can be triggered via the ",(0,a.kt)("a",{parentName:"p",href:"http://redux.js.org/docs/api/Store.html"},"redux store"),".\nAccessing the players store enables the full control of the player while running.\nYou can find a complete list of available types in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/podlove/podlove-web-player/blob/development/src/store/types.js"},"types definition"),"."),(0,a.kt)("h3",{id:"player-subscriptions"},"Player Subscriptions"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"  podlovePlayer(selector, config).then(function (store) {\n    store.subscribe(() => {\n      const { lastAction } = store.getState()\n      // Do something with the last action\n      console.log({ type: lastAction.type, payload: lastAction.payload })\n    })\n  });\n")),(0,a.kt)("p",null,"Every player interaction is reflected in the ",(0,a.kt)("a",{parentName:"p",href:"http://redux.js.org/docs/api/Store.html"},"redux store"),".\nYou can subscribe to every player event by attatching to the latest action."),(0,a.kt)("p",null,"You can find a complete list of available types in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/podlove/podlove-web-player/blob/development/src/store/types.js"},"types definition"),"."))}u.isMDXComponent=!0}}]);