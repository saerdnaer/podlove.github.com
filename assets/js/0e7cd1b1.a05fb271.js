(self.webpackChunkpodlove_docs=self.webpackChunkpodlove_docs||[]).push([[990],{8361:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return m}});var n=r(2122),o=r(9756),i=(r(7294),r(3905)),p=r(2355),a=["components"],s={title:"Timer Current"},c={unversionedId:"v5/templating/components/timer-current",id:"v5/templating/components/timer-current",isDocsHomePage:!1,title:"Timer Current",description:"Displays the current episode playtime",source:"@site/web-player/v5/templating/components/timer-current.mdx",sourceDirName:"v5/templating/components",slug:"/v5/templating/components/timer-current",permalink:"/podlove-web-player/v5/templating/components/timer-current",version:"current",frontMatter:{title:"Timer Current"},sidebar:"0",previous:{title:"Tab Share",permalink:"/podlove-web-player/v5/templating/components/tab-share"},next:{title:"Timer Duration",permalink:"/podlove-web-player/v5/templating/components/timer-duration"}},l=[{value:"Preview",id:"preview",children:[]},{value:"Code",id:"code",children:[]}],u={toc:l};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Displays the current episode playtime")),(0,i.kt)("h3",{id:"preview"},"Preview"),(0,i.kt)(p.J,{episode:"/assets/web-player/v5/episode.json",config:"/assets/web-player/v5/config.json",playtime:6e4,mdxType:"Player"},(0,i.kt)("root",{class:"p-4 flex justify-center"},(0,i.kt)("timer-current",null))),(0,i.kt)("h3",{id:"code"},"Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<root class="p-4 flex justify-center">\n  <timer-current></timer-current>\n</root>\n')))}m.isMDXComponent=!0},2355:function(e,t,r){"use strict";r.d(t,{J:function(){return v}});var n=r(2137),o=r(3552),i=r(7757),p=r.n(i),a=r(939),s=r(5794),c=r(4745),l=r(7294),u=r(9941),m=r(6486),d=r(7762),v=function(e){function t(t){var r;return(r=e.call(this,t)||this).playerRef=l.createRef(),r.mountIframe=(0,m.debounce)((function(){var e=r.playerRef.current;e&&(r.props.variant&&e.setAttribute("data-variant",r.props.variant),e.innerHTML=r.props.children?(0,d.renderToString)(r.props.children):"",window.podlovePlayer(e,r.props.episode,r.props.config).then((function(e){r.props.onLoaded&&r.props.onLoaded(e),r.props.playtime&&e.dispatch((0,s.RJ)(r.props.playtime)),r.props.tab&&e.dispatch((0,a.S)(r.props.tab))})))}),600),r}(0,o.Z)(t,e);var r=t.prototype;return r.componentDidMount=function(){var e=(0,n.Z)(p().mark((function e(){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return window.podlovePlayer=void 0,e.next=3,(0,c.Z)("https://cdn.podlove.org/web-player/5.x/embed.js").then(this.mountIframe.bind(this));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),r.componentWillReceiveProps=function(e){(0,m.isEqual)((0,m.omit)(e,"onLoaded"),(0,m.omit)(this.props,"onLoaded"))||(this.props=e,this.mountIframe())},r.render=function(){var e=(0,u.ZP)({default:{player:{marginBottom:"15px"}}});return l.createElement("div",{style:e.player,ref:this.playerRef})},t}(l.Component)}}]);