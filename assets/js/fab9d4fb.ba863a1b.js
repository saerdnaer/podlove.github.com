(self.webpackChunkpodlove_docs=self.webpackChunkpodlove_docs||[]).push([[4076],{6725:function(e,t,o){"use strict";o.r(t),o.d(t,{frontMatter:function(){return s},metadata:function(){return d},toc:function(){return l},default:function(){return u}});var n=o(2122),r=o(9756),i=(o(7294),o(3905)),a=o(2355),p=["components"],s={title:"Root Node"},d={unversionedId:"v5/templating/components/root",id:"v5/templating/components/root",isDocsHomePage:!1,title:"Root Node",description:"A custom player template lives in a root node that grants the access to tailwind classes and custom fonts. Since it is the first node in the player it is recommended to add min and max width boundaries.",source:"@site/web-player/v5/templating/components/root.mdx",sourceDirName:"v5/templating/components",slug:"/v5/templating/components/root",permalink:"/podlove-web-player/v5/templating/components/root",version:"current",frontMatter:{title:"Root Node"},sidebar:"0",previous:{title:"Getting Started",permalink:"/podlove-web-player/v5/templating/getting-started"},next:{title:"Episode Title",permalink:"/podlove-web-player/v5/templating/components/episode-title"}},l=[{value:"Preview",id:"preview",children:[]},{value:"Code",id:"code",children:[]}],c={toc:l};function u(e){var t=e.components,o=(0,r.Z)(e,p);return(0,i.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"A custom player template lives in a root node that grants the access to tailwind classes and custom fonts. Since it is the first node in the player it is recommended to add min and max width boundaries.")),(0,i.kt)("h3",{id:"preview"},"Preview"),(0,i.kt)(a.J,{episode:"/assets/web-player/v5/episode.json",config:"/assets/web-player/v5/config.json",mdxType:"Player"},(0,i.kt)("root",{style:{maxWidth:"950px",minWidth:"260px"},class:"p-4 flex justify-center rounded"},(0,i.kt)("play-button",null))),(0,i.kt)("h3",{id:"code"},"Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<root style="max-width:950px;min-width:260px;" class="p-4 flex justify-center">\n  <play-button></play-button>\n</root>\n')))}u.isMDXComponent=!0},2355:function(e,t,o){"use strict";o.d(t,{J:function(){return f}});var n=o(2137),r=o(3552),i=o(7757),a=o.n(i),p=o(939),s=o(5794),d=o(4745),l=o(7294),c=o(9941),u=o(6486),m=o(7762),f=function(e){function t(t){var o;return(o=e.call(this,t)||this).playerRef=l.createRef(),o.mountIframe=(0,u.debounce)((function(){var e=o.playerRef.current;e&&(o.props.variant&&e.setAttribute("data-variant",o.props.variant),e.innerHTML=o.props.children?(0,m.renderToString)(o.props.children):"",window.podlovePlayer(e,o.props.episode,o.props.config).then((function(e){o.props.onLoaded&&o.props.onLoaded(e),o.props.playtime&&e.dispatch((0,s.RJ)(o.props.playtime)),o.props.tab&&e.dispatch((0,p.S)(o.props.tab))})))}),600),o}(0,r.Z)(t,e);var o=t.prototype;return o.componentDidMount=function(){var e=(0,n.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return window.podlovePlayer=void 0,e.next=3,(0,d.Z)("https://cdn.podlove.org/web-player/5.x/embed.js").then(this.mountIframe.bind(this));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),o.componentWillReceiveProps=function(e){(0,u.isEqual)((0,u.omit)(e,"onLoaded"),(0,u.omit)(this.props,"onLoaded"))||(this.props=e,this.mountIframe())},o.render=function(){var e=(0,c.ZP)({default:{player:{marginBottom:"15px"}}});return l.createElement("div",{style:e.player,ref:this.playerRef})},t}(l.Component)}}]);