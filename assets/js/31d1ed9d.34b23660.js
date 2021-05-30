(self.webpackChunkpodlove_docs=self.webpackChunkpodlove_docs||[]).push([[530],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return g}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),m=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=m(r),g=n,d=c["".concat(p,".").concat(g)]||c[g]||u[g]||i;return r?a.createElement(d,l(l({ref:t},s),{},{components:r})):a.createElement(d,l({ref:t},s))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var m=2;m<i;m++)l[m]=r[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},1684:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return p},toc:function(){return m},default:function(){return u}});var a=r(2122),n=r(9756),i=(r(7294),r(3905)),l=["components"],o={title:"Image"},p={unversionedId:"reference/templates/template-tags/image",id:"reference/templates/template-tags/image",isDocsHomePage:!1,title:"Image",description:"URL",source:"@site/publisher/reference/templates/template-tags/image.mdx",sourceDirName:"reference/templates/template-tags",slug:"/reference/templates/template-tags/image",permalink:"/podlove-publisher/reference/templates/template-tags/image",version:"current",frontMatter:{title:"Image"},sidebar:"0",previous:{title:"File",permalink:"/podlove-publisher/reference/templates/template-tags/file"},next:{title:"Tag",permalink:"/podlove-publisher/reference/templates/template-tags/tag"}},m=[{value:"URL",id:"url",children:[]},{value:"HTML",id:"html",children:[]}],s={toc:m};function u(e){var t=e.components,r=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"url"},"URL"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"image.url\nGet URL for resized image.")),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"width"),": Image width. Set width and leave height blank to keep the orinal aspect ratio."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"height"),": Image height. Set height and leave width blank to keep the orinal aspect ratio."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"crop"),": true or false. Crop image if given dimensions deviate from original aspect ratio. Default: false.")),(0,i.kt)("h4",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-twig"},"{{ image.url }}               {# returns the unresized image URL #}\n{{ image.url({width: 100}) }} {# returns resized image URL #}\n")),(0,i.kt)("p",null,"Note: It is not ",(0,i.kt)("em",{parentName:"p"},"guaranteed")," to get back the resized image. If it is not ready yet, the source URL will be returned."),(0,i.kt)("h3",{id:"html"},"HTML"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"image.html\nGet HTML image tag for resized image.")),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"width"),": Image width. Set width and leave height blank to keep the orinal aspect ratio."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"height"),": Image height. Set height and leave width blank to keep the orinal aspect ratio."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"crop"),": true or false. Crop image if given dimensions deviate from original aspect ratio. Default: false."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"id"),": Set image tag ",(0,i.kt)("inlineCode",{parentName:"li"},"id")," attribute."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"class"),": Set image tag ",(0,i.kt)("inlineCode",{parentName:"li"},"class")," attribute."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"style"),": Set image tag ",(0,i.kt)("inlineCode",{parentName:"li"},"style")," attribute."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"alt"),": Set image tag ",(0,i.kt)("inlineCode",{parentName:"li"},"alt")," attribute."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"title"),": Set image tag ",(0,i.kt)("inlineCode",{parentName:"li"},"title")," attribute.")),(0,i.kt)("h4",{id:"examples-1"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-twig"},'{{ image.html }}                       {# returns the unresized image tag #}\n{{ image.html({width: 100}) }}         {# returns resized image tag #}\n{{ image.html({title: "The Spark"}) }} {# returns image tag with custom title #}\n')),(0,i.kt)("p",null,"Note: It is not ",(0,i.kt)("em",{parentName:"p"},"guaranteed")," to get back the resized image. If it is not ready yet, the source URL will be returned."))}u.isMDXComponent=!0}}]);