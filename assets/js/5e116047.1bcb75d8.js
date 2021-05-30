(self.webpackChunkpodlove_docs=self.webpackChunkpodlove_docs||[]).push([[3843],{5790:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x},frontMatter:function(){return v},metadata:function(){return f},toc:function(){return b}});var r=n(2122),a=n(9756),o=n(7294),i=n(3905),s=n(3552),l=n(939),p=n(5918),c=n(8082),d=n(6162),u=n(2355),h=function(e){function t(t){var n,r,a,o;return(o=e.call(this,t)||this).store=null,o.state={tab:"chapters"},o.tabs=[{name:"Chapters",value:"chapters"},{name:"Share",value:"share"},{name:"Files",value:"files"},(n={value:"Shownotes"},n.value="shownotes",n),(r={value:"Playlist"},r.value="playlist",r),(a={value:"Transcripts"},a.value="transcripts",a)],o}(0,s.Z)(t,e);var n=t.prototype;return n.updateTab=function(e){this.store.dispatch((0,l.S)(e))},n.loadStore=function(e){this.store=e,this.store.dispatch((0,l.S)("chapters"))},n.render=function(){return o.createElement("div",null,o.createElement(u.J,{episode:"/assets/web-player/v5/episode.json",config:"/assets/web-player/v5/config.json",onLoaded:this.loadStore.bind(this)},o.createElement("root",{class:"p-4 flex justify-center"},o.createElement("tab",{name:"chapters"},"Chapters"),o.createElement("tab",{name:"share"},"Share"),o.createElement("tab",{name:"files"},"Files"),o.createElement("tab",{name:"shownotes"},"Shownotes"),o.createElement("tab",{name:"playlist"},"Playlist"),o.createElement("tab",{name:"transcripts"},"Transcripts"))),o.createElement(c.X,null,o.createElement(p.o,{label:"tab",description:"Active tab",last:!0},o.createElement(d.P,{options:this.tabs,onChange:this.updateTab.bind(this)}))))},t}(o.Component),m=["components"],v={title:"Tabs"},f={unversionedId:"v5/templating/components/tabs",id:"v5/templating/components/tabs",isDocsHomePage:!1,title:"Tabs",description:"Tab enlcosure that handles the visibility state",source:"@site/web-player/v5/templating/components/tabs.mdx",sourceDirName:"v5/templating/components",slug:"/v5/templating/components/tabs",permalink:"/podlove-web-player/v5/templating/components/tabs",version:"current",frontMatter:{title:"Tabs"},sidebar:"0",previous:{title:"Chapter Current",permalink:"/podlove-web-player/v5/templating/components/chapter-current"},next:{title:"Tab Trigger",permalink:"/podlove-web-player/v5/templating/components/tab-trigger"}},b=[{value:"Preview",id:"preview",children:[]},{value:"Code",id:"code",children:[]}],g={toc:b};function x(e){var t=e.components,n=(0,a.Z)(e,m);return(0,i.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Tab enlcosure that handles the visibility state")),(0,i.kt)("h3",{id:"preview"},"Preview"),(0,i.kt)(h,{mdxType:"Tabs"}),(0,i.kt)("h3",{id:"code"},"Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<root class="p-4 flex justify-center">\n  <tab name="chapters">Chapters</tab>\n  <tab name="share">Share</tab>\n  <tab name="files">Files</tab>\n  <tab name="shownotes">Shownotes</tab>\n  <tab name="playlist">Playlist</tab>\n  <tab name="transcripts">Transcripts</tab>\n</root>\n')))}x.isMDXComponent=!0},8082:function(e,t,n){"use strict";n.d(t,{X:function(){return i}});var r=n(3552),a=n(7294),o=n(9941),i=function(e){function t(t){return e.call(this,t)||this}return(0,r.Z)(t,e),t.prototype.render=function(){var e=(0,o.ZP)({default:{container:{boxShadow:"rgb(0 0 0 / 10%) 0px 0px 0px 1px inset",alignItems:"center",padding:"10px",borderRadius:"5px",marginBottom:"15px"},header:{color:"rgb(102, 102, 102)",textTransform:"uppercase",letterSpacing:"2px",display:"flex",padding:"5px 10px",marginBottom:"5px",fontSize:"0.8rem"},label:{width:"20%",marginRight:"20px",overflow:"hidden",textOverflow:"ellipsis"},control:{width:"30%",marginRight:"20px"},description:{width:"45%",overflow:"hidden",textOverflow:"ellipsis"}}});return a.createElement("div",{style:e.container},a.createElement("div",{style:e.header},a.createElement("div",{style:e.label},"Name"),a.createElement("div",{style:e.control},"Control"),a.createElement("div",{style:e.description},"Description")),a.createElement("div",null,this.props.children))},t}(a.Component)},5918:function(e,t,n){"use strict";n.d(t,{o:function(){return i}});var r=n(3552),a=n(7294),o=n(9941),i=function(e){function t(t){return e.call(this,t)||this}return(0,r.Z)(t,e),t.prototype.render=function(){var e=(0,o.ZP)({default:{container:{display:"flex",borderBottom:"1px solid rgba(0, 0, 0, 0.1)",alignItems:"center",padding:"10px"},label:{fontWeight:"700",width:"20%",marginRight:"20px",overflow:"hidden",textOverflow:"ellipsis"},control:{width:"30%",marginRight:"20px"},description:{width:"45%",fontStyle:"italic",fontWeight:300,overflow:"hidden",textOverflow:"ellipsis"}},last:{container:{borderBottom:"none"}}},{last:this.props.last});return a.createElement("div",{style:e.container},a.createElement("div",{style:e.label},this.props.label),a.createElement("div",{style:e.control},this.props.children),a.createElement("div",{style:e.description},this.props.description))},t}(a.Component)},6162:function(e,t,n){"use strict";n.d(t,{P:function(){return i}});var r=n(3552),a=n(7294),o=n(9941),i=function(e){function t(t){return e.call(this,t)||this}(0,r.Z)(t,e);var n=t.prototype;return n.handleChange=function(e){this.props.onChange&&this.props.onChange(e.target.value)},n.render=function(){var e=(0,o.ZP)({default:{select:{width:"100%",border:"0px none",boxSizing:"inherit",display:"block",margin:0,background:"rgb(255, 255, 255)",padding:"6px 20px 6px 10px",fontSize:"13px",position:"relative",transition:"box-shadow 200ms ease-out 0s, opacity 200ms ease-out 0s",color:"rgb(51, 51, 51)",boxShadow:"rgb(0 0 0 / 10%) 0px 0px 0px 1px inset",borderRadius:"4px",lineHeight:"20px",flex:"1 1 0%",height:"32px",userSelect:"none",appearance:"menulist"}}});return a.createElement("select",{style:e.select,onChange:this.handleChange.bind(this),value:this.props.value},this.props.options.map((function(e){return a.createElement("option",{value:e.value,key:e.value},e.name||e.value)})))},t}(a.Component)},2355:function(e,t,n){"use strict";n.d(t,{J:function(){return m}});var r=n(2137),a=n(3552),o=n(7757),i=n.n(o),s=n(939),l=n(5794),p=n(4745),c=n(7294),d=n(9941),u=n(6486),h=n(7762),m=function(e){function t(t){var n;return(n=e.call(this,t)||this).playerRef=c.createRef(),n.mountIframe=(0,u.debounce)((function(){var e=n.playerRef.current;e&&(n.props.variant&&e.setAttribute("data-variant",n.props.variant),e.innerHTML=n.props.children?(0,h.renderToString)(n.props.children):"",window.podlovePlayer(e,n.props.episode,n.props.config).then((function(e){n.props.onLoaded&&n.props.onLoaded(e),n.props.playtime&&e.dispatch((0,l.RJ)(n.props.playtime)),n.props.tab&&e.dispatch((0,s.S)(n.props.tab))})))}),600),n}(0,a.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=(0,r.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return window.podlovePlayer=void 0,e.next=3,(0,p.Z)("https://cdn.podlove.org/web-player/5.x/embed.js").then(this.mountIframe.bind(this));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),n.componentWillReceiveProps=function(e){(0,u.isEqual)((0,u.omit)(e,"onLoaded"),(0,u.omit)(this.props,"onLoaded"))||(this.props=e,this.mountIframe())},n.render=function(){var e=(0,d.ZP)({default:{player:{marginBottom:"15px"}}});return c.createElement("div",{style:e.player,ref:this.playerRef})},t}(c.Component)}}]);