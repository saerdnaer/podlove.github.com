(self.webpackChunkpodlove_docs=self.webpackChunkpodlove_docs||[]).push([[7424],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,y=d["".concat(p,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(y,l(l({ref:t},c),{},{components:n})):r.createElement(y,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1411:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),l=["components"],i={title:"External Control"},p={unversionedId:"v5/extensions/plugin-external",id:"v5/extensions/plugin-external",isDocsHomePage:!1,title:"External Control",description:"External control gives you the ability to control the player from other ui elements. This comes in handy if you want to trigger specific player actions from outside.",source:"@site/web-player/v5/extensions/plugin-external.mdx",sourceDirName:"v5/extensions",slug:"/v5/extensions/plugin-external",permalink:"/podlove-web-player/v5/extensions/plugin-external",version:"current",frontMatter:{title:"External Control"},sidebar:"0",previous:{title:"Runtime API",permalink:"/podlove-web-player/v5/extensions/runtime-api"},next:{title:"Player Syncing",permalink:"/podlove-web-player/v5/extensions/player-syncing"}},s=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Example",id:"example",children:[]}],c={toc:s};function u(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"External control gives you the ability to control the player from other ui elements. This comes in handy if you want to trigger specific player actions from outside."),(0,o.kt)("h3",{id:"installation"},"Installation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"  <script src=\"extensions/external-events.js\"><\/script>\n  <div id=\"player-id\"></div>\n  <script>\n    podlovePlayer('#player-id', 'path/to/config')\n      .then(registerExternalEvents('player-id'));\n  <\/script>\n")),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'  <a\n    href="javascript:void(0)"\n    rel="podlove-web-player" // Registeres event handler\n    data-ref="player-id"     // ID of player to control, if undefined all players without an ID are controlled\n    data-action="play|pause" // Action that is triggered on click (optional)\n    data-time="00:10:10.500" // Time in simple time format that is selected (optional)\n    data-tab="info|chapters|transcripts|share|files|audio" // Tab that is selected on interaction (optional)\n  >External Element</a>\n')),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<button class="button" rel="podlove-web-player" data-ref="example-player" data-action="play">play</button>\n<button class="button" rel="podlove-web-player" data-ref="example-player" data-action="pause">pause</button>\n<button class="button" rel="podlove-web-player" data-ref="example-player" data-time="00:10:00">set time</button>\n<button class="button" rel="podlove-web-player" data-ref="example-player" data-tab="files">activate files tab</button>\n<button class="button" rel="podlove-web-player" data-ref="example-player" data-action="play" data-time="00:10:00" data-tab="files">all combined</button>\n')))}u.isMDXComponent=!0}}]);