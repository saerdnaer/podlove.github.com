(self.webpackChunkpodlove_docs=self.webpackChunkpodlove_docs||[]).push([[5353],{8855:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var o=r(2122),n=r(9756),p=(r(7294),r(3905)),s=r(2355),a=["components"],i={title:"Progress Bar"},l={unversionedId:"v5/templating/components/progress-bar",id:"v5/templating/components/progress-bar",isDocsHomePage:!1,title:"Progress Bar",description:"Progress bar to slide through the audio",source:"@site/web-player/v5/templating/components/progress-bar.mdx",sourceDirName:"v5/templating/components",slug:"/v5/templating/components/progress-bar",permalink:"/podlove-web-player/v5/templating/components/progress-bar",version:"current",frontMatter:{title:"Progress Bar"},sidebar:"0",previous:{title:"Step Backward",permalink:"/podlove-web-player/v5/templating/components/step-backward"},next:{title:"Speed Control",permalink:"/podlove-web-player/v5/templating/components/speed-control"}},c=[{value:"Preview",id:"preview",children:[]},{value:"Code",id:"code",children:[]}],d={toc:c};function u(e){var t=e.components,r=(0,n.Z)(e,a);return(0,p.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"Progress bar to slide through the audio")),(0,p.kt)("h3",{id:"preview"},"Preview"),(0,p.kt)(s.J,{episode:"/assets/web-player/v5/episode.json",config:"/assets/web-player/v5/config.json",mdxType:"Player"},(0,p.kt)("root",{class:"p-4 flex justify-center"},(0,p.kt)("progress-bar",null))),(0,p.kt)("h3",{id:"code"},"Code"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-html"},'<root class="p-4 flex justify-center">\n  <progress-bar></progress-bar>\n</root>\n')))}u.isMDXComponent=!0},2355:function(e,t,r){"use strict";r.d(t,{J:function(){return v}});var o=r(2137),n=r(3552),p=r(7757),s=r.n(p),a=r(939),i=r(5794),l=r(4745),c=r(7294),d=r(9941),u=r(6486),m=r(7762),v=function(e){function t(t){var r;return(r=e.call(this,t)||this).playerRef=c.createRef(),r.mountIframe=(0,u.debounce)((function(){var e=r.playerRef.current;e&&(r.props.variant&&e.setAttribute("data-variant",r.props.variant),e.innerHTML=r.props.children?(0,m.renderToString)(r.props.children):"",window.podlovePlayer(e,r.props.episode,r.props.config).then((function(e){r.props.onLoaded&&r.props.onLoaded(e),r.props.playtime&&e.dispatch((0,i.RJ)(r.props.playtime)),r.props.tab&&e.dispatch((0,a.S)(r.props.tab))})))}),600),r}(0,n.Z)(t,e);var r=t.prototype;return r.componentDidMount=function(){var e=(0,o.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return window.podlovePlayer=void 0,e.next=3,(0,l.Z)("https://cdn.podlove.org/web-player/5.x/embed.js").then(this.mountIframe.bind(this));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),r.componentWillReceiveProps=function(e){(0,u.isEqual)((0,u.omit)(e,"onLoaded"),(0,u.omit)(this.props,"onLoaded"))||(this.props=e,this.mountIframe())},r.render=function(){var e=(0,d.ZP)({default:{player:{marginBottom:"15px"}}});return c.createElement("div",{style:e.player,ref:this.playerRef})},t}(c.Component)}}]);