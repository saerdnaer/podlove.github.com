(self.webpackChunkpodlove_docs=self.webpackChunkpodlove_docs||[]).push([[1345],{8666:function(e,t,o){"use strict";o.r(t),o.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return d},default:function(){return u}});var n=o(2122),r=o(9756),i=(o(7294),o(3905)),p=o(2355),s=["components"],a={title:"Episode Title"},l={unversionedId:"v5/templating/components/episode-title",id:"v5/templating/components/episode-title",isDocsHomePage:!1,title:"Episode Title",description:"Preview",source:"@site/web-player/v5/templating/components/episode-title.mdx",sourceDirName:"v5/templating/components",slug:"/v5/templating/components/episode-title",permalink:"/podlove-web-player/v5/templating/components/episode-title",version:"current",frontMatter:{title:"Episode Title"},sidebar:"0",previous:{title:"Root Node",permalink:"/podlove-web-player/v5/templating/components/root"},next:{title:"Episode Subtitle",permalink:"/podlove-web-player/v5/templating/components/episode-subtitle"}},d=[{value:"Preview",id:"preview",children:[]},{value:"Code",id:"code",children:[]}],c={toc:d};function u(e){var t=e.components,o=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"preview"},"Preview"),(0,i.kt)(p.J,{episode:"/assets/web-player/v5/episode.json",config:"/assets/web-player/v5/config.json",mdxType:"Player"},(0,i.kt)("root",{class:"p-4 text-center"},(0,i.kt)("episode-title",null))),(0,i.kt)("h3",{id:"code"},"Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<root class="p-4 text-center">\n  <episode-title></episode-title>\n</root>\n')))}u.isMDXComponent=!0},2355:function(e,t,o){"use strict";o.d(t,{J:function(){return v}});var n=o(2137),r=o(3552),i=o(7757),p=o.n(i),s=o(939),a=o(5794),l=o(4745),d=o(7294),c=o(9941),u=o(6486),m=o(7762),v=function(e){function t(t){var o;return(o=e.call(this,t)||this).playerRef=d.createRef(),o.mountIframe=(0,u.debounce)((function(){var e=o.playerRef.current;e&&(o.props.variant&&e.setAttribute("data-variant",o.props.variant),e.innerHTML=o.props.children?(0,m.renderToString)(o.props.children):"",window.podlovePlayer(e,o.props.episode,o.props.config).then((function(e){o.props.onLoaded&&o.props.onLoaded(e),o.props.playtime&&e.dispatch((0,a.RJ)(o.props.playtime)),o.props.tab&&e.dispatch((0,s.S)(o.props.tab))})))}),600),o}(0,r.Z)(t,e);var o=t.prototype;return o.componentDidMount=function(){var e=(0,n.Z)(p().mark((function e(){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return window.podlovePlayer=void 0,e.next=3,(0,l.Z)("https://cdn.podlove.org/web-player/5.x/embed.js").then(this.mountIframe.bind(this));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),o.componentWillReceiveProps=function(e){(0,u.isEqual)((0,u.omit)(e,"onLoaded"),(0,u.omit)(this.props,"onLoaded"))||(this.props=e,this.mountIframe())},o.render=function(){var e=(0,c.ZP)({default:{player:{marginBottom:"15px"}}});return d.createElement("div",{style:e.player,ref:this.playerRef})},t}(d.Component)}}]);