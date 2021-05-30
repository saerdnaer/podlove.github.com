(self.webpackChunkpodlove_docs=self.webpackChunkpodlove_docs||[]).push([[5549],{3905:function(e,r,n){"use strict";n.d(r,{Zo:function(){return u},kt:function(){return m}});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),p=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},u=function(e){var r=p(e.components);return t.createElement(l.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||s;return n?t.createElement(f,a(a({ref:r},u),{},{components:n})):t.createElement(f,a({ref:r},u))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=d;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<s;p++)a[p]=n[p];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2681:function(e,r,n){"use strict";n.r(r),n.d(r,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var t=n(2122),o=n(9756),s=(n(7294),n(3905)),a=["components"],i={title:"Background Jobs"},l={unversionedId:"developer/background-jobs",id:"developer/background-jobs",isDocsHomePage:!1,title:"Background Jobs",description:"The Podlove Background Job system enables expensive, long-running tasks to run safely. It achieves this by breaking big tasks up into smaller subtasks. The state of a job is persisted, enabling it to be halted and resumed in a different process. The job system is based on WordPress Cron.",source:"@site/publisher/developer/background-jobs.mdx",sourceDirName:"developer",slug:"/developer/background-jobs",permalink:"/podlove-publisher/developer/background-jobs",version:"current",frontMatter:{title:"Background Jobs"},sidebar:"0",previous:{title:"Download Analytics",permalink:"/podlove-publisher/reference/download-analytics"},next:{title:"Modules",permalink:"/podlove-publisher/developer/modules"}},p=[{value:"Ideal Setup",id:"ideal-setup",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Resources",id:"resources",children:[]}],u={toc:p};function c(e){var r=e.components,n=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The Podlove Background Job system enables expensive, long-running tasks to run safely. It achieves this by breaking big tasks up into smaller subtasks. The state of a job is persisted, enabling it to be halted and resumed in a different process. The job system is based on WordPress Cron."),(0,s.kt)("h2",{id:"ideal-setup"},"Ideal Setup"),(0,s.kt)("p",null,"There are different ways to run WordPress Cron. By default, WordPress executes cron whenever necessary at the end of web requests. This works (mostly) but is not ideal since it requires user interaction to run jobs. It is preferred to use system crons. Refer to ",(0,s.kt)("a",{parentName:"p",href:"https://askubuntu.com/questions/2368/how-do-i-set-up-a-cron-job#2369"},"How do I set up a Cron job?")," or ask your system administrator if you are not sure how."),(0,s.kt)("p",null,"First, you need to tell WordPress to stop spawning its own cron processes."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n# wp-config.php\ndefine( 'DISABLE_WP_CRON', true );\n")),(0,s.kt)("p",null,"The system crontab should look like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"* * * * *   php /path/to/wordpress/wp-cron.php >>/var/log/cron.log 2>&1\n")),(0,s.kt)("p",null,"Or maybe you need to run it as a certain user:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"* * * * *   sudo -u www-data php /path/to/wordpress/wp-cron.php >>/var/log/cron.log 2>&1\n")),(0,s.kt)("p",null,"If you are using a WordPress Multisite Network, you need one line per site in your crontab:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"* * * * *   sudo HTTP_HOST=example.com -u www-data php /path/to/wordpress/wp-cron.php >>/var/log/cron.log 2>&1\n* * * * *   sudo HTTP_HOST=foo.example.com -u www-data php /path/to/wordpress/wp-cron.php >>/var/log/cron.log 2>&1\n* * * * *   sudo HTTP_HOST=bar.example.com -u www-data php /path/to/wordpress/wp-cron.php >>/var/log/cron.log 2>&1\n")),(0,s.kt)("p",null,"This entry runs the cron every minute."),(0,s.kt)("h2",{id:"configuration"},"Configuration"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"max_seconds_per_request")," is the time in seconds after which no more job subtask is started. Can be overridden with WordPress filter ",(0,s.kt)("inlineCode",{parentName:"li"},"podlove_job_max_seconds_per_request")," or shell variable ",(0,s.kt)("inlineCode",{parentName:"li"},"PODLOVE_JOB_MAX_SECONDS_PER_REQUEST"),". Default: 20."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"lock_duration_buffer")," is the additional time in seconds no job can be run. When a job runner starts, no other process can spawn jobs in parallel for ",(0,s.kt)("inlineCode",{parentName:"li"},"max_seconds_per_request + lock_duration_buffer")," seconds. This is important because some jobs may in fact run longer than ",(0,s.kt)("inlineCode",{parentName:"li"},"max_seconds_per_request"),". Default: 5.")),(0,s.kt)("p",null,"The sum ",(0,s.kt)("inlineCode",{parentName:"p"},"max_seconds_per_request + lock_duration_buffer")," should not exceed PHP ini value ",(0,s.kt)("inlineCode",{parentName:"p"},"max_execution_time")," which defaults to 30 on most systems. Be aware that different PHP settings may be active depending on how you run the crons (WordPress default or system cron approach described above). If you are running a cron every minute, the sum should be smaller than 60 seconds."),(0,s.kt)("p",null,"Using the system cron approach, you can set config values using shell variables:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"* * * * *   PODLOVE_JOB_MAX_SECONDS_PER_REQUEST=45 php /path/to/wordpress/wp-cron.php >>/var/log/cron.log 2>&1\n")),(0,s.kt)("h2",{id:"resources"},"Resources"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://developer.wordpress.org/plugins/cron/"},"WordPress Plugin Handbook: Cron")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://wordpress.org/plugins/wp-crontrol/"},"WP Crontrol"),": Useful plugin to debug WP cron jobs.")))}c.isMDXComponent=!0}}]);