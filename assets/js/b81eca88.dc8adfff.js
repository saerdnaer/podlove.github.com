(self.webpackChunkpodlove_docs=self.webpackChunkpodlove_docs||[]).push([[872],{5168:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var r=n(2122),o=n(9756),p=(n(7294),n(3905)),a=n(2355),s=["components"],i={title:"Step Backward"},c={unversionedId:"v5/templating/components/step-backward",id:"v5/templating/components/step-backward",isDocsHomePage:!1,title:"Step Backward",description:"Stepper that jumps 15 seconds back",source:"@site/web-player/v5/templating/components/step-backward.mdx",sourceDirName:"v5/templating/components",slug:"/v5/templating/components/step-backward",permalink:"/podlove-web-player/v5/templating/components/step-backward",version:"current",frontMatter:{title:"Step Backward"},sidebar:"0",previous:{title:"Step Forward",permalink:"/podlove-web-player/v5/templating/components/step-forward"},next:{title:"Progress Bar",permalink:"/podlove-web-player/v5/templating/components/progress-bar"}},d=[{value:"Preview",id:"preview",children:[]},{value:"Code",id:"code",children:[]}],l={toc:d};function u(e){var t=e.components,n=(0,o.Z)(e,s);return(0,p.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"Stepper that jumps 15 seconds back")),(0,p.kt)("h3",{id:"preview"},"Preview"),(0,p.kt)(a.J,{episode:"/assets/web-player/v5/episode.json",config:"/assets/web-player/v5/config.json",mdxType:"Player"},(0,p.kt)("root",{class:"p-4 flex justify-center"},(0,p.kt)("step-backward",null))),(0,p.kt)("h3",{id:"code"},"Code"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-html"},'<root class="p-4 flex justify-center">\n  <step-backward></step-backward>\n</root>\n')))}u.isMDXComponent=!0},2355:function(e,t,n){"use strict";n.d(t,{J:function(){return v}});var r=n(2137),o=n(3552),p=n(7757),a=n.n(p),s=n(939),i=n(5794),c=n(4745),d=n(7294),l=n(9941),u=n(6486),m=n(7762),v=function(e){function t(t){var n;return(n=e.call(this,t)||this).playerRef=d.createRef(),n.mountIframe=(0,u.debounce)((function(){var e=n.playerRef.current;e&&(n.props.variant&&e.setAttribute("data-variant",n.props.variant),e.innerHTML=n.props.children?(0,m.renderToString)(n.props.children):"",window.podlovePlayer(e,n.props.episode,n.props.config).then((function(e){n.props.onLoaded&&n.props.onLoaded(e),n.props.playtime&&e.dispatch((0,i.RJ)(n.props.playtime)),n.props.tab&&e.dispatch((0,s.S)(n.props.tab))})))}),600),n}(0,o.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=(0,r.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return window.podlovePlayer=void 0,e.next=3,(0,c.Z)("https://cdn.podlove.org/web-player/5.x/embed.js").then(this.mountIframe.bind(this));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),n.componentWillReceiveProps=function(e){(0,u.isEqual)((0,u.omit)(e,"onLoaded"),(0,u.omit)(this.props,"onLoaded"))||(this.props=e,this.mountIframe())},n.render=function(){var e=(0,l.ZP)({default:{player:{marginBottom:"15px"}}});return d.createElement("div",{style:e.player,ref:this.playerRef})},t}(d.Component)}}]);