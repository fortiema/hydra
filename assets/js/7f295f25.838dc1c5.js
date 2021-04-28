(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{179:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return d}));var r=t(3),o=t(8),i=(t(0),t(266)),a=t(273),c={id:"job",sidebar_label:"Job Configuration",hide_title:!0},s={unversionedId:"configure_hydra/job",id:"configure_hydra/job",isDocsHomePage:!1,title:"job",description:"Job configuration",source:"@site/docs/configure_hydra/job.md",slug:"/configure_hydra/job",permalink:"/docs/next/configure_hydra/job",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/configure_hydra/job.md",version:"current",lastUpdatedBy:"Jieru Hu",lastUpdatedAt:1619637441,formattedLastUpdatedAt:"4/28/2021",sidebar_label:"Job Configuration",sidebar:"docs",previous:{title:"Overview",permalink:"/docs/next/configure_hydra/intro"},next:{title:"Customizing logging",permalink:"/docs/next/configure_hydra/logging"}},u=[{value:"Job configuration",id:"job-configuration",children:[]},{value:"Documentation",id:"documentation",children:[{value:"hydra.job.name",id:"hydrajobname",children:[]},{value:"hydra.job.override_dirname",id:"hydrajoboverride_dirname",children:[]},{value:"hydra.job.id",id:"hydrajobid",children:[]},{value:"hydra.job.num",id:"hydrajobnum",children:[]},{value:"hydra.job.config_name",id:"hydrajobconfig_name",children:[]},{value:"hydra.job.env_set",id:"hydrajobenv_set",children:[]},{value:"hydra.job.env_copy",id:"hydrajobenv_copy",children:[]}]}],l={toc:u};function d(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"job-configuration"},"Job configuration"),Object(i.b)("p",null,"The job configuration resides in ",Object(i.b)("inlineCode",{parentName:"p"},"hydra.job"),".\nThe Structured Config is below, the latest definition is ",Object(i.b)(a.b,{to:"hydra/conf/__init__.py",mdxType:"GithubLink"},"here"),"."),Object(i.b)("details",null,Object(i.b)("summary",null,"Expand definition"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},'# job runtime information will be populated here\n@dataclass\nclass JobConf:\n    # Job name, populated automatically unless specified by the user (in config or cli)\n    name: str = MISSING\n\n    # Concatenation of job overrides that can be used as a part\n    # of the directory name.\n    # This can be configured in hydra.job.config.override_dirname\n    override_dirname: str = MISSING\n\n    # Job ID in underlying scheduling system\n    id: str = MISSING\n\n    # Job number if job is a part of a sweep\n    num: int = MISSING\n\n    # The config name used by the job\n    config_name: Optional[str] = MISSING\n\n    # Environment variables to set remotely\n    env_set: Dict[str, str] = field(default_factory=dict)\n    # Environment variables to copy from the launching machine\n    env_copy: List[str] = field(default_factory=list)\n\n    # Job config\n    @dataclass\n    class JobConfig:\n        @dataclass\n        # configuration for the ${hydra.job.override_dirname} runtime variable\n        class OverrideDirname:\n            kv_sep: str = "="\n            item_sep: str = ","\n            exclude_keys: List[str] = field(default_factory=list)\n\n        override_dirname: OverrideDirname = OverrideDirname()\n\n    config: JobConfig = JobConfig()\n'))),Object(i.b)("h2",{id:"documentation"},"Documentation"),Object(i.b)("h3",{id:"hydrajobname"},"hydra.job.name"),Object(i.b)(a.a,{text:"Example application",to:"examples/configure_hydra/job_name",mdxType:"ExampleGithubLink"}),Object(i.b)("p",null,"The job name is used by different things in Hydra, such as the log file name (",Object(i.b)("inlineCode",{parentName:"p"},"${hydra.job.name}.log"),").\nIt is normally derived from the Python file name (The job name of the file ",Object(i.b)("inlineCode",{parentName:"p"},"train.py")," is ",Object(i.b)("inlineCode",{parentName:"p"},"train"),").\nYou can override it via the command line, or your config file. "),Object(i.b)("h3",{id:"hydrajoboverride_dirname"},"hydra.job.override_dirname"),Object(i.b)("p",null,"Enables the creation of an output directory which is based on command line overrides.\nSee ",Object(i.b)("a",{parentName:"p",href:"/docs/next/configure_hydra/workdir"},"this")," for more information."),Object(i.b)("h3",{id:"hydrajobid"},"hydra.job.id"),Object(i.b)("p",null,"The job ID is populated by active Hydra launcher. For the basic launcher, the job ID is just a serial job number, but\nfor other systems this could be the SLURM job ID or the AWS Instance ID."),Object(i.b)("h3",{id:"hydrajobnum"},"hydra.job.num"),Object(i.b)("p",null,"Serial job number within this current sweep run. (0 to n-1)"),Object(i.b)("h3",{id:"hydrajobconfig_name"},"hydra.job.config_name"),Object(i.b)("p",null,"The config name used by the job, this is populated automatically to match the config name in @hydra.main()"),Object(i.b)("h3",{id:"hydrajobenv_set"},"hydra.job.env_set"),Object(i.b)("p",null,"A Dict","[str, str]"," that is used to set the environment variables of the running job.\nSome common use cases are to set environment variables that are affecting underlying libraries, for example"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"hydra:\n  job:\n    env_set:\n      OMP_NUM_THREADS: 1\n")),Object(i.b)("p",null,"Disables multithreading in Intel IPP and MKL."),Object(i.b)("p",null,"Another example, is to use interpolation to automatically set the rank\nfor ",Object(i.b)("a",{parentName:"p",href:"https://pytorch.org/tutorials/intermediate/dist_tuto.html"},"Torch Distributed")," run to match the job number\nin the sweep. "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"hydra:\n  job:\n    env_set:\n      RANK: ${hydra:job.num}\n")),Object(i.b)("h3",{id:"hydrajobenv_copy"},"hydra.job.env_copy"),Object(i.b)("p",null,"In some cases you want to automatically copy local environment variables to the running job environment variables.\nThis is particularly useful for remote runs."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"hydra:\n  job:\n    env_copy:\n      - AWS_KEY\n")))}d.isMDXComponent=!0},266:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return h}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),l=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=l(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(t),f=r,h=d["".concat(a,".").concat(f)]||d[f]||b[f]||i;return t?o.a.createElement(h,c(c({ref:n},u),{},{components:t})):o.a.createElement(h,c({ref:n},u))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=f;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=t[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},267:function(e,n,t){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return o}))},268:function(e,n,t){"use strict";var r=t(0),o=t.n(r),i=t(11),a=t(267),c=t(7),s=Object(r.createContext)({collectLink:function(){}}),u=t(269),l=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t};n.a=function(e){var n,t,d,b=e.isNavLink,f=e.to,h=e.href,p=e.activeClassName,m=e.isActive,v=e["data-noBrokenLinkCheck"],g=e.autoAddBaseUrl,y=void 0===g||g,j=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),O=Object(u.b)().withBaseUrl,D=Object(r.useContext)(s),_=f||h,w=Object(a.a)(_),A=null==_?void 0:_.replace("pathname://",""),x=void 0!==A?(t=A,y&&function(e){return e.startsWith("/")}(t)?O(t):t):void 0,P=Object(r.useRef)(!1),C=b?i.e:i.c,E=c.default.canUseIntersectionObserver;Object(r.useEffect)((function(){return!E&&w&&window.docusaurus.prefetch(x),function(){E&&d&&d.disconnect()}}),[x,E,w]);var V=null!==(n=null==x?void 0:x.startsWith("#"))&&void 0!==n&&n,S=!x||!w||V;return x&&w&&!V&&!v&&D.collectLink(x),S?o.a.createElement("a",Object.assign({href:x},_&&!w&&{target:"_blank",rel:"noopener noreferrer"},j)):o.a.createElement(C,Object.assign({},j,{onMouseEnter:function(){P.current||(window.docusaurus.preload(x),P.current=!0)},innerRef:function(e){var n,t;E&&e&&w&&(n=e,t=function(){window.docusaurus.prefetch(x)},(d=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(n),d.disconnect(),t())}))}))).observe(n))},to:x||""},b&&{isActive:m,activeClassName:p}))}},269:function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"a",(function(){return a}));var r=t(10),o=t(267);function i(){var e=Object(r.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,i=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,r){var i=void 0===r?{}:r,a=i.forcePrependBaseUrl,c=void 0!==a&&a,s=i.absolute,u=void 0!==s&&s;if(!t)return t;if(t.startsWith("#"))return t;if(Object(o.b)(t))return t;if(c)return n+t;var l=t.startsWith(n)?t:n+t.replace(/^\//,"");return u?e+l:l}(i,t,e,n)}}}function a(e,n){return void 0===n&&(n={}),(0,i().withBaseUrl)(e,n)}},270:function(e,n,t){try{e.exports=t(271)}catch(o){var r={};e.exports={useAllDocsData:function(){return r},useActivePluginAndVersion:function(){}}}},271:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.useDocVersionSuggestions=n.useActiveDocContext=n.useActiveVersion=n.useLatestVersion=n.useVersions=n.useActivePluginAndVersion=n.useActivePlugin=n.useDocsData=n.useAllDocsData=void 0;var r=t(23),o=t(38),i=t(272);n.useAllDocsData=function(){return o.useAllPluginInstancesData("docusaurus-plugin-content-docs")},n.useDocsData=function(e){return o.usePluginData("docusaurus-plugin-content-docs",e)},n.useActivePlugin=function(e){void 0===e&&(e={});var t=n.useAllDocsData(),o=r.useLocation().pathname;return i.getActivePlugin(t,o,e)},n.useActivePluginAndVersion=function(e){void 0===e&&(e={});var t=n.useActivePlugin(e),o=r.useLocation().pathname;if(t)return{activePlugin:t,activeVersion:i.getActiveVersion(t.pluginData,o)}},n.useVersions=function(e){return n.useDocsData(e).versions},n.useLatestVersion=function(e){var t=n.useDocsData(e);return i.getLatestVersion(t)},n.useActiveVersion=function(e){var t=n.useDocsData(e),o=r.useLocation().pathname;return i.getActiveVersion(t,o)},n.useActiveDocContext=function(e){var t=n.useDocsData(e),o=r.useLocation().pathname;return i.getActiveDocContext(t,o)},n.useDocVersionSuggestions=function(e){var t=n.useDocsData(e),o=r.useLocation().pathname;return i.getDocVersionSuggestions(t,o)}},272:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.getDocVersionSuggestions=n.getActiveDocContext=n.getActiveVersion=n.getLatestVersion=n.getActivePlugin=void 0;var r=t(23);n.getActivePlugin=function(e,n,t){void 0===t&&(t={});var o=Object.entries(e).find((function(e){e[0];var t=e[1];return!!r.matchPath(n,{path:t.path,exact:!1,strict:!1})})),i=o?{pluginId:o[0],pluginData:o[1]}:void 0;if(!i&&t.failfast)throw new Error("Can't find active docs plugin for pathname="+n+", while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: "+Object.values(e).map((function(e){return e.path})).join(", "));return i},n.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))},n.getActiveVersion=function(e,t){var o=n.getLatestVersion(e);return[].concat(e.versions.filter((function(e){return e!==o})),[o]).find((function(e){return!!r.matchPath(t,{path:e.path,exact:!1,strict:!1})}))},n.getActiveDocContext=function(e,t){var o,i,a=n.getActiveVersion(e,t),c=null==a?void 0:a.docs.find((function(e){return!!r.matchPath(t,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:a,activeDoc:c,alternateDocVersions:c?(o=c.id,i={},e.versions.forEach((function(e){e.docs.forEach((function(n){n.id===o&&(i[e.name]=n)}))})),i):{}}},n.getDocVersionSuggestions=function(e,t){var r=n.getLatestVersion(e),o=n.getActiveDocContext(e,t),i=o.activeVersion!==r;return{latestDocSuggestion:i?null==o?void 0:o.alternateDocVersions[r.name]:void 0,latestVersionSuggestion:i?r:void 0}}},273:function(e,n,t){"use strict";t.d(n,"b",(function(){return u})),t.d(n,"a",(function(){return l}));var r=t(3),o=t(0),i=t.n(o),a=t(268),c=t(10),s=t(270);function u(e){return i.a.createElement(a.a,Object(r.a)({},e,{to:(n=e.to,o=Object(s.useActiveVersion)(),Object(c.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!==(t=null==o?void 0:o.name)&&void 0!==t?t:"current"]+n),target:"_blank"}));var n,t,o}function l(e){var n,t=null!==(n=e.text)&&void 0!==n?n:"Example";return i.a.createElement(u,e,i.a.createElement("span",null,"\xa0"),i.a.createElement("img",{src:"https://img.shields.io/badge/-"+t+"-informational",alt:"Example"}))}}}]);