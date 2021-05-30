(self.webpackChunkpodlove_docs=self.webpackChunkpodlove_docs||[]).push([[2910],{7373:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var o=n(2122),r=n(9756),i=(n(7294),n(3905)),a=n(2355),s=["components"],p={title:"Subscribe Button"},l={unversionedId:"v5/templating/components/subscribe-button",id:"v5/templating/components/subscribe-button",isDocsHomePage:!1,title:"Subscribe Button",description:"Complete subscribe button modal with toggle",source:"@site/web-player/v5/templating/components/subscribe-button.mdx",sourceDirName:"v5/templating/components",slug:"/v5/templating/components/subscribe-button",permalink:"/podlove-web-player/v5/templating/components/subscribe-button",version:"current",frontMatter:{title:"Subscribe Button"},sidebar:"0",previous:{title:"Play State",permalink:"/podlove-web-player/v5/templating/components/play-state"},next:{title:"Error",permalink:"/podlove-web-player/v5/templating/components/error"}},c=[{value:"Preview",id:"preview",children:[]},{value:"Code",id:"code",children:[]}],u={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Complete subscribe button modal with toggle")),(0,i.kt)("h3",{id:"preview"},"Preview"),(0,i.kt)(a.J,{episode:"/assets/web-player/v5/episode.json",config:"/assets/web-player/v5/config.json",mdxType:"Player"},(0,i.kt)("root",{class:"p-4 flex justify-center"},(0,i.kt)("subscribe-button",null))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Is only displayed if a feed and podcast clients are defined"),(0,i.kt)("li",{parentName:"ul"},"Platform sensitivity: only clients that are available on the current operation system are displayed")))),(0,i.kt)("h3",{id:"code"},"Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<root class="p-4 flex justify-center">\n  <subscribe-button></subscribe-button>\n</root>\n')))}d.isMDXComponent=!0},2355:function(e,t,n){"use strict";n.d(t,{J:function(){return v}});var o=n(2137),r=n(3552),i=n(7757),a=n.n(i),s=n(939),p=n(5794),l=n(4745),c=n(7294),u=n(9941),d=n(6486),m=n(7762),v=function(e){function t(t){var n;return(n=e.call(this,t)||this).playerRef=c.createRef(),n.mountIframe=(0,d.debounce)((function(){var e=n.playerRef.current;e&&(n.props.variant&&e.setAttribute("data-variant",n.props.variant),e.innerHTML=n.props.children?(0,m.renderToString)(n.props.children):"",window.podlovePlayer(e,n.props.episode,n.props.config).then((function(e){n.props.onLoaded&&n.props.onLoaded(e),n.props.playtime&&e.dispatch((0,p.RJ)(n.props.playtime)),n.props.tab&&e.dispatch((0,s.S)(n.props.tab))})))}),600),n}(0,r.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=(0,o.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return window.podlovePlayer=void 0,e.next=3,(0,l.Z)("https://cdn.podlove.org/web-player/5.x/embed.js").then(this.mountIframe.bind(this));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),n.componentWillReceiveProps=function(e){(0,d.isEqual)((0,d.omit)(e,"onLoaded"),(0,d.omit)(this.props,"onLoaded"))||(this.props=e,this.mountIframe())},n.render=function(){var e=(0,u.ZP)({default:{player:{marginBottom:"15px"}}});return c.createElement("div",{style:e.player,ref:this.playerRef})},t}(c.Component)}}]);