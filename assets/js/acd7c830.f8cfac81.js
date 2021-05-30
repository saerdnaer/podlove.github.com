(self.webpackChunkpodlove_docs=self.webpackChunkpodlove_docs||[]).push([[933],{3905:function(n,e,t){"use strict";t.d(e,{Zo:function(){return c},kt:function(){return f}});var i=t(7294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function o(n,e){if(null==n)return{};var t,i,r=function(n,e){if(null==n)return{};var t,i,r={},a=Object.keys(n);for(i=0;i<a.length;i++)t=a[i],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(i=0;i<a.length;i++)t=a[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var l=i.createContext({}),d=function(n){var e=i.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):s(s({},e),n)),t},c=function(n){var e=d(n.components);return i.createElement(l.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return i.createElement(i.Fragment,{},e)}},u=i.forwardRef((function(n,e){var t=n.components,r=n.mdxType,a=n.originalType,l=n.parentName,c=o(n,["components","mdxType","originalType","parentName"]),u=d(t),f=r,m=u["".concat(l,".").concat(f)]||u[f]||p[f]||a;return t?i.createElement(m,s(s({ref:e},c),{},{components:t})):i.createElement(m,s({ref:e},c))}));function f(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var a=t.length,s=new Array(a);s[0]=u;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=n,o.mdxType="string"==typeof n?n:r,s[1]=o;for(var d=2;d<a;d++)s[d]=t[d];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4714:function(n,e,t){"use strict";t.r(e),t.d(e,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var i=t(2122),r=t(9756),a=(t(7294),t(3905)),s=["components"],o={title:"Configuration"},l={unversionedId:"v5/configuration",id:"v5/configuration",isDocsHomePage:!1,title:"Configuration",description:"Episode",source:"@site/web-player/v5/configuration.mdx",sourceDirName:"v5",slug:"/v5/configuration",permalink:"/podlove-web-player/v5/configuration",version:"current",frontMatter:{title:"Configuration"},sidebar:"0",previous:{title:"Usage",permalink:"/podlove-web-player/v5/usage"},next:{title:"Playground",permalink:"/podlove-web-player/v5/playground"}},d=[{value:"Episode",id:"episode",children:[]},{value:"Config",id:"config",children:[]}],c={toc:d};function p(n){var e=n.components,t=(0,r.Z)(n,s);return(0,a.kt)("wrapper",(0,i.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"episode"},"Episode"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="episode.json"',title:'"episode.json"'},'{\n  // Configuration Version\n  "version": 5,\n\n  /**\n  * Show Related Information\n  */\n  "show": {\n    "title": "Podlovers",\n    "subtitle": "Der Podlove Entwickler:innen Podcast",\n    "summary": "Podlove ist eine Initiative zur Verbesserung der Open Source Infrastruktur zum Podcasting. Podlove ist gleichzeitig auch ein Netzwerk an Entwickler:innen zur Diskussion von Features und Standardisierung.",\n    "poster": "/assets/web-player/show.png",\n    "link": "https://podlovers.org"\n  },\n\n  /**\n  * Episode related Information\n  */\n  "title": "Podlove Web Player",\n  "subtitle": "Podlove Web Player: Motivation, Geschichte, Features, Ausblick",\n  "summary": "Wir holen uns Simon zur Hilfe um \\u00fcber die Anf\\u00e4nge des Podlove Web Player zu sprechen: Warum es ihn gibt und wie die ersten Versionen aussahen. In der zweiten H\\u00e4lfte geht es tief in den Technik-Kaninchenbau: Alex erl\\u00e4utert seine Motivation f\\u00fcr den Neubau f\\u00fcr Podlove Web Player 4 und 5. Zum Schluss besprechen wir das holprige Release des aktuellen Web Player Plugins.",\n  // ISO 8601 DateTime format, this is capable of adding a time offset, see https://en.wikipedia.org/wiki/ISO_8601\n  "publicationDate": "2020-08-16T11:58:58+00:00",\n  // ISO 8601 Duration format ([hh]:[mm]:[ss].[sss]), capable of add ing milliseconds, see https://en.wikipedia.org/wiki/ISO_8601\n  "duration": "01:31:18.610",\n  "poster": "/assets/web-player/episode.png",\n  "link": "https://podlovers.org/podlove-web-player",\n\n  /**\n  * Chapters:\n  * - can be a plain list or a reference to a json file\n  * - if present chapters tab will be available\n  */\n  "chapters": [\n    {\n      "start": "00:00:00.000",\n      "title": "Begr\\u00fc\\u00dfung",\n      "href": "",\n      "image": ""\n    },\n    {\n      "start": "00:00:26.196",\n      "title": "Simon",\n      "href": "",\n      "image": ""\n    },\n    {\n      "start": "00:01:56.397",\n      "title": "Feedback",\n      "href": "",\n      "image": ""\n    },\n    {\n      "start": "00:07:08.279",\n      "title": "Erfahrungen beim Publishen",\n      "href": "",\n      "image": ""\n    },\n    {\n      "start": "00:13:29.226",\n      "title": "Shownotes",\n      "href": "",\n      "image": ""\n    },\n    {\n      "start": "00:20:43.264",\n      "title": "Audio-Hardware",\n      "href": "",\n      "image": ""\n    },\n    {\n      "start": "00:22:51.183",\n      "title": "Podlove Web Player: Warum eigentlich?",\n      "href": "",\n      "image": ""\n    },\n    {\n      "start": "00:25:41.451",\n      "title": "Podlove Web Player 1",\n      "href": "",\n      "image": ""\n    },\n    {\n      "start": "00:28:16.131",\n      "title": "Podlove Web Player 2",\n      "href": "",\n      "image": ""\n    },\n    {\n      "start": "00:33:44.999",\n      "title": "Podlove Web Player 3",\n      "href": "",\n      "image": ""\n    },\n    {\n      "start": "00:44:17.011",\n      "title": "Podlove Web Player 4",\n      "href": "",\n      "image": ""\n    },\n    {\n      "start": "01:02:41.149",\n      "title": "Podlove UI",\n      "href": "",\n      "image": ""\n    },\n    {\n      "start": "01:05:50.035",\n      "title": "Podlove Web Player 5",\n      "href": "",\n      "image": ""\n    },\n    {\n      "start": "01:12:50.121",\n      "title": "Podlove Web Player WordPress Plugin",\n      "href": "",\n      "image": ""\n    },\n    {\n      "start": "01:29:23.552",\n      "title": "Ausblick",\n      "href": "",\n      "image": ""\n    },\n    {\n      "start": "01:30:49.849",\n      "title": "Und Tsch\\u00fcss",\n      "href": "",\n      "image": ""\n    }\n  ],\n\n  /**\n    * Audio Assets\n    * - media Assets played by the audio player\n    * - format support depends on the used browser (https://en.wikipedia.org/wiki/HTML5_audio#Supported_audio_coding_formats)\n    * - also supports HLS streams\n    *\n    * Asset\n    * - url: absolute path to media asset\n    * - size: file size in  byte\n    * - (title): title to be displayed in download tab\n    * - mimeType: media asset mimeType\n  */\n  "audio": [\n    {\n      "url": "https://files.podlovers.org/LOV003.mp3",\n      "size": "76976929",\n      "title": "MP3 Audio (mp3)",\n      "mimeType": "audio\\/mpeg"\n    }\n  ],\n\n  /**\n  * Files\n  * - list of files available for download\n  * - if no files are present, audio assets will be used as downloads\n  *\n  * Asset\n  * - url: absolute path to media asset\n  * - size: file size in  byte\n  * - title: title to be displayed in download tab\n  * - (mimeType): media asset mimeType\n  */\n  "files": [\n    {\n      "url": "https://files.podlovers.org/LOV003.mp3",\n      "size": "76976929",\n      "title": "MP3 Audio",\n      "mimeType": "audio\\/mpeg"\n    }\n  ],\n\n  /**\n  * Contributors\n  * - used by info and transcripts tab\n  *\n  * Contributor\n  * - id: used as a reference in transcripts\n  * - name: name of the contributor\n  * - (avatar): avatar of the contributor\n  * - (group): contributors group\n  */\n  "contributors": [\n    {\n      "id": "1",\n      "name": "Alexander Heimbuch",\n      "avatar": "/assets/web-player/alexander-heimbuch.jpeg",\n      "role": {\n        "id": "1",\n        "slug": "team",\n        "title": "Team"\n      },\n      "group": {\n        "id": "2",\n        "slug": "on-air",\n        "title": "On Air"\n      }\n    },\n    {\n      "id": "2",\n      "name": "Michaela Lehr",\n      "avatar": "/assets/web-player/michaela-lehr.jpeg",\n      "role": {\n        "id": "1",\n        "slug": "team",\n        "title": "Team"\n      },\n      "group": {\n        "id": "2",\n        "slug": "on-air",\n        "title": "On Air"\n      }\n    },\n    {\n      "id": "3",\n      "name": "Eric Teubert",\n      "avatar": "/assets/web-player/eric-teubert.jpeg",\n      "role": {\n        "id": "1",\n        "slug": "team",\n        "title": "Team"\n      },\n      "group": {\n        "id": "2",\n        "slug": "on-air",\n        "title": "On Air"\n      }\n    },\n    {\n      "id": "4",\n      "name": "Simon",\n      "avatar": "/assets/web-player/simon.jpeg",\n      "role": {\n        "id": "2",\n        "slug": "guest",\n        "title": "Gast"\n      },\n      "group": {\n        "id": "2",\n        "slug": "on-air",\n        "title": "On Air"\n      }\n    }\n  ],\n\n  /**\n  * Transcripts:\n  * - can be a plain list or a reference to a json file\n  * - if present transcripts tab will be available (if the template includes it)\n  */\n  "transcripts": "/assets/web-player/v5/transcript.json"\n}\n')),(0,a.kt)("h2",{id:"config"},"Config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'version: 5,\n\n  // player asset base path, falls back to ./\n  base: "player/",\n\n  activeTab: "chapters", // default active tab, can be set to [chapters, files, share, playlist]\n\n  theme: {\n    /**\n     * Tokens\n     * - if defined the player defaults are dropped\n     * - rgba as well as hex values are allowed\n     * - use this generator to get a direct visual feedback:\n     */\n    tokens: {\n      brand: "#166255",\n      brandDark: "#166255",\n      brandDarkest: "#1A3A4A",\n      brandLightest: "#E5EAECFF",\n      shadeDark: "#807E7C",\n      shadeBase: "#807E7C",\n      contrast: "#000",\n      alt: "#fff"\n    },\n\n    /**\n     * Fonts\n     * - by default the system font stack is used (https://css-tricks.com/snippets/css/system-font-stack/)\n     *\n     * font:\n     * - name: font name that is used in the font stack\n     * - family: list of fonts in a fallback order\n     * - weight: font weight of the defined font\n     * - src: list of web font sources (allowed: woff, woff2, ttf, eot, svg)\n     */\n    fonts: {\n      ci: {\n        name: "RobotoBlack",\n        family: [\n          "RobotoBlack",\n          "Calibri",\n          "Candara",\n          "Arial",\n          "Helvetica",\n          "sans-serif"\n        ],\n        weight: 900,\n        src: ["./assets/Roboto-Black.ttf"]\n      },\n      regular: {\n        name: "FiraSansLight",\n        family: [\n          "FiraSansLight",\n          "Calibri",\n          "Candara",\n          "Arial",\n          "Helvetica",\n          "sans-serif"\n        ],\n        weight: 300,\n        src: ["./assets/FiraSans-Light.ttf"]\n      },\n      bold: {\n        name: "FiraSansBold",\n        family: [\n          "FiraSansBold",\n          "Calibri",\n          "Candara",\n          "Arial",\n          "Helvetica",\n          "sans-serif"\n        ],\n        weight: 700,\n        src: ["./assets/FiraSans-Bold.ttf"]\n      }\n    }\n  },\n\n  /**\n   * Subscribe Button\n   * - configuration for the subsscribe button overlay\n   * - if not defined the subscribe button won\'t be rendered\n   */\n  "subscribe-button": {\n    feed: "https://feeds.podlovers.org/mp3", // Rss feed\n\n    /**\n     * Clients\n     * - list of supported podcast clients on android, iOS, Windows, OSX\n     * - only available clients on the used os/platform are shown\n     * - order in list determines rendered order\n     */\n    clients: [\n      {\n        id: "apple-podcasts",\n        service: "id1523714548" // https://podcasts.apple.com/podcast/[service]\n      },\n      {\n        id: "antenna-pod"\n      },\n      {\n        id: "beyond-pod"\n      },\n      {\n        id: "castbox",\n        service: "castbox-id"\n      },\n      {\n        id: "castro"\n      },\n      {\n        id: "clementine"\n      },\n      // {\n      //   id: "deezer",\n      //   service: "" https://www.deezer.com/en/show/[service]\n      // },\n      {\n        id: "downcast"\n      },\n      {\n        id: "google-podcasts",\n        service: "https://feeds.podlovers.org/mp3" // feed\n      },\n      {\n        id: "gpodder"\n      },\n      {\n        id: "itunes"\n      },\n      {\n        id: "i-catcher"\n      },\n      {\n        id: "instacast"\n      },\n      {\n        id: "overcast"\n      },\n      {\n        id: "player-fm"\n      },\n      {\n        id: "pocket-casts"\n      },\n      {\n        id: "pocket-casts",\n        service: "https://feeds.podlovers.org/mp3" // feed\n      },\n      {\n        id: "pod-grasp"\n      },\n      {\n        id: "podcast-addict"\n      },\n      {\n        id: "podcast-republic"\n      },\n      {\n        id: "podcat"\n      },\n      {\n        id: "podscout"\n      },\n      {\n        id: "rss-radio"\n      },\n      // {\n      //   id: "soundcloud",\n      //   service: "", // https://soundcloud.com/[service]\n      // },\n      // {\n      //   id: "spotify",\n      //   service: "", // https://open.spotify.com/show/[service]\n      // },\n      // {\n      //   id: "stitcher",\n      //   service: "" // https://www.stitcher.com/podcast/[service]\n      // },\n      // {\n      //   id: "youtube",\n      //   service: "" // https://www.youtube.com/channel/[service]\n      // },\n      {\n        id: "rss"\n      }\n    ]\n  },\n\n  /**\n   * Playlist:\n   * - can be a plain list or a reference to a json file\n   * - if present playlist tab will be available\n   */\n  playlist: playlist,\n\n  /*\n    Share Tab\n  */\n  share: {\n    /**\n     * Share Channels:\n     * - list of available channels in share tab\n     */\n    channels: [\n      // "facebook",\n      "twitter",\n      // "whats-app",\n      // "linkedin",\n      // "pinterest",\n      // "xing",\n      "mail",\n      "link"\n    ],\n    // share outlet, if not provided embed snippet is not available\n    outlet: "/share.html",\n    sharePlaytime: true\n  }\n')))}p.isMDXComponent=!0}}]);