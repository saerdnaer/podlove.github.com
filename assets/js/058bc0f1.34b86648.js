(self.webpackChunkpodlove_docs=self.webpackChunkpodlove_docs||[]).push([[6038],{5321:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),p=n(2355),s=["components"],i={title:"Tab Transcripts"},c={unversionedId:"v5/templating/components/tab-transcripts",id:"v5/templating/components/tab-transcripts",isDocsHomePage:!1,title:"Tab Transcripts",description:"Displays the transcripts tab",source:"@site/web-player/v5/templating/components/tab-transcripts.mdx",sourceDirName:"v5/templating/components",slug:"/v5/templating/components/tab-transcripts",permalink:"/podlove-web-player/v5/templating/components/tab-transcripts",version:"current",frontMatter:{title:"Tab Transcripts"},sidebar:"0",previous:{title:"Tab Chapters",permalink:"/podlove-web-player/v5/templating/components/tab-chapters"},next:{title:"Tab Files",permalink:"/podlove-web-player/v5/templating/components/tab-files"}},l=[{value:"Preview",id:"preview",children:[]},{value:"Code",id:"code",children:[]}],u={toc:l};function d(t){var e=t.components,n=(0,o.Z)(t,s);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Displays the transcripts tab")),(0,a.kt)("h3",{id:"preview"},"Preview"),(0,a.kt)(p.J,{episode:"/assets/web-player/v5/episode.json",config:"/assets/web-player/v5/config.json",tab:"transcripts",mdxType:"Player"},(0,a.kt)("root",null,(0,a.kt)("tab",{name:"transcripts"},(0,a.kt)("tab-transcripts",null)))),(0,a.kt)("h3",{id:"code"},"Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<root>\n  <tab name="transcripts">\n    <tab-transcripts></tab-transcripts>\n  </tab>\n</root>\n')))}d.isMDXComponent=!0},2355:function(t,e,n){"use strict";n.d(e,{J:function(){return v}});var r=n(2137),o=n(3552),a=n(7757),p=n.n(a),s=n(939),i=n(5794),c=n(4745),l=n(7294),u=n(9941),d=n(6486),m=n(7762),v=function(t){function e(e){var n;return(n=t.call(this,e)||this).playerRef=l.createRef(),n.mountIframe=(0,d.debounce)((function(){var t=n.playerRef.current;t&&(n.props.variant&&t.setAttribute("data-variant",n.props.variant),t.innerHTML=n.props.children?(0,m.renderToString)(n.props.children):"",window.podlovePlayer(t,n.props.episode,n.props.config).then((function(t){n.props.onLoaded&&n.props.onLoaded(t),n.props.playtime&&t.dispatch((0,i.RJ)(n.props.playtime)),n.props.tab&&t.dispatch((0,s.S)(n.props.tab))})))}),600),n}(0,o.Z)(e,t);var n=e.prototype;return n.componentDidMount=function(){var t=(0,r.Z)(p().mark((function t(){return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return window.podlovePlayer=void 0,t.next=3,(0,c.Z)("https://cdn.podlove.org/web-player/5.x/embed.js").then(this.mountIframe.bind(this));case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}(),n.componentWillReceiveProps=function(t){(0,d.isEqual)((0,d.omit)(t,"onLoaded"),(0,d.omit)(this.props,"onLoaded"))||(this.props=t,this.mountIframe())},n.render=function(){var t=(0,u.ZP)({default:{player:{marginBottom:"15px"}}});return l.createElement("div",{style:t.player,ref:this.playerRef})},e}(l.Component)}}]);