"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3163],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return c},MDXProvider:function(){return p},mdx:function(){return y},useMDXComponents:function(){return s},withMDXComponents:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),d=function(e){return function(t){var n=s(t.components);return r.createElement(e,i({},t,{components:n}))}},s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(n),p=o,f=d["".concat(l,".").concat(p)]||d[p]||m[p]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=f;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},55413:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),l=["components"],a={id:"style_guide",title:"Style Guide",sidebar_label:"Style Guide"},u=void 0,c={unversionedId:"development/style_guide",id:"version-1.1/development/style_guide",title:"Style Guide",description:"The code need to pass verification by the following tools:",source:"@site/versioned_docs/version-1.1/development/style_guide.md",sourceDirName:"development",slug:"/development/style_guide",permalink:"/docs/development/style_guide",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.1/development/style_guide.md",tags:[],version:"1.1",lastUpdatedBy:"Jieru Hu",lastUpdatedAt:1644968095,formattedLastUpdatedAt:"2/15/2022",frontMatter:{id:"style_guide",title:"Style Guide",sidebar_label:"Style Guide"},sidebar:"version-1.1/docs",previous:{title:"Testing",permalink:"/docs/development/testing"},next:{title:"Documentation",permalink:"/docs/development/documentation"}},d=[],s={toc:d};function p(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.mdx)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"The code need to pass verification by the following tools:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"black .")," : Automatic code formatting for Python"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"flake8")," : PEP8 compliance checker for Python, this includes copyright header verification"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"isort .")," : Ensure imports are sorted properly"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"mypy --strict .")," : Ensures code passes strict type checking"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"yamllint .")," : Ensures that yaml files are syntactically correct and properly indented.")),(0,i.mdx)("p",null,"The easiest way to run the required verifications is: "),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"nox -s lint")," : for the Hydra core"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"nox -s lint_plugins")," : for the included plugins")),(0,i.mdx)("p",null,"isort is a bit tricky to run for plugins. the best way to get it to sort the plugins imports is with the FIX environment\nvariable:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"$ FIX=1 nox -s lint_plugins\n")),(0,i.mdx)("p",null,"It is also recommended that you install pre-commit hooks (use ",(0,i.mdx)("inlineCode",{parentName:"p"},"pre-commit install"),").\npre-commit will execute some of the above tests when you commit your code locally.\nYou can disable it by appending ",(0,i.mdx)("inlineCode",{parentName:"p"},"-n")," to your commit command: ",(0,i.mdx)("inlineCode",{parentName:"p"},"git commit -m wip -n")),(0,i.mdx)("p",null,"Pull requests that do not lint will fail the automated testing."))}p.isMDXComponent=!0}}]);