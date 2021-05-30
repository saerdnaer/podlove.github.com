(self.webpackChunkpodlove_docs=self.webpackChunkpodlove_docs||[]).push([[757],{3547:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var o=n(2122),a=n(9756),r=(n(7294),n(3905)),i=n(2355),l=["components"],p={title:"Localization"},s={unversionedId:"v5/templating/localization",id:"v5/templating/localization",isDocsHomePage:!1,title:"Localization",description:"The player is localized in 4 different languages. Depending on the browser locale the matching locale is selected. If no matching locale was found english is selected.",source:"@site/web-player/v5/templating/localization.mdx",sourceDirName:"v5/templating",slug:"/v5/templating/localization",permalink:"/podlove-web-player/v5/templating/localization",version:"current",frontMatter:{title:"Localization"},sidebar:"0",previous:{title:"Error",permalink:"/podlove-web-player/v5/templating/components/error"},next:{title:"Runtime API",permalink:"/podlove-web-player/v5/extensions/runtime-api"}},c=[{value:"Code",id:"code",children:[]}],d={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The player is localized in 4 different languages. Depending on the browser locale the matching locale is selected. If no matching locale was found english is selected."),(0,r.kt)("p",null,"Localization files:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/podlove/podlove-ui/blob/development/apps/player/lang/de.json"},"german")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/podlove/podlove-ui/blob/development/apps/player/lang/en.json"},"english")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/podlove/podlove-ui/blob/development/apps/player/lang/en.json"},"esperanto")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/podlove/podlove-ui/blob/development/apps/player/lang/fr.json"},"french"))),(0,r.kt)("h4",{id:"preview"},"Preview"),(0,r.kt)(i.J,{episode:"/assets/web-player/v5/episode.json",config:"/assets/web-player/v5/config.json",mdxType:"Player"},(0,r.kt)("root",{class:"p-4 text-center"},"{{ $t('PLAYER.PLAY_EPISODE') }}")),(0,r.kt)("h3",{id:"code"},"Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<root class=\"p-4 text-center\">\n  {{ $t('PLAYER.PLAY_EPISODE') }}\n</root>\n")))}u.isMDXComponent=!0},2355:function(e,t,n){"use strict";n.d(t,{J:function(){return f}});var o=n(2137),a=n(3552),r=n(7757),i=n.n(r),l=n(939),p=n(5794),s=n(4745),c=n(7294),d=n(9941),u=n(6486),m=n(7762),f=function(e){function t(t){var n;return(n=e.call(this,t)||this).playerRef=c.createRef(),n.mountIframe=(0,u.debounce)((function(){var e=n.playerRef.current;e&&(n.props.variant&&e.setAttribute("data-variant",n.props.variant),e.innerHTML=n.props.children?(0,m.renderToString)(n.props.children):"",window.podlovePlayer(e,n.props.episode,n.props.config).then((function(e){n.props.onLoaded&&n.props.onLoaded(e),n.props.playtime&&e.dispatch((0,p.RJ)(n.props.playtime)),n.props.tab&&e.dispatch((0,l.S)(n.props.tab))})))}),600),n}(0,a.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=(0,o.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return window.podlovePlayer=void 0,e.next=3,(0,s.Z)("https://cdn.podlove.org/web-player/5.x/embed.js").then(this.mountIframe.bind(this));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),n.componentWillReceiveProps=function(e){(0,u.isEqual)((0,u.omit)(e,"onLoaded"),(0,u.omit)(this.props,"onLoaded"))||(this.props=e,this.mountIframe())},n.render=function(){var e=(0,d.ZP)({default:{player:{marginBottom:"15px"}}});return c.createElement("div",{style:e.player,ref:this.playerRef})},t}(c.Component)}}]);