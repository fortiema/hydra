(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{266:function(e,n,a){"use strict";a.d(n,"a",(function(){return b})),a.d(n,"b",(function(){return u}));var t=a(0),r=a.n(t);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function p(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?p(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),s=function(e){var n=r.a.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},b=function(e){var n=s(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var a=e.components,t=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=s(a),d=t,u=b["".concat(p,".").concat(d)]||b[d]||m[d]||i;return a?r.a.createElement(u,o(o({ref:n},c),{},{components:a})):r.a.createElement(u,o({ref:n},c))}));function u(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=a.length,p=new Array(i);p[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:t,p[1]=o;for(var c=2;c<i;c++)p[c]=a[c];return r.a.createElement.apply(null,p)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},79:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return p})),a.d(n,"metadata",(function(){return o})),a.d(n,"toc",(function(){return l})),a.d(n,"default",(function(){return s}));var t=a(3),r=a(8),i=(a(0),a(266)),p={id:"ax_sweeper",title:"Ax Sweeper plugin",sidebar_label:"Ax Sweeper plugin"},o={unversionedId:"plugins/ax_sweeper",id:"version-1.0/plugins/ax_sweeper",isDocsHomePage:!1,title:"Ax Sweeper plugin",description:"PyPI",source:"@site/versioned_docs/version-1.0/plugins/ax_sweeper.md",slug:"/plugins/ax_sweeper",permalink:"/docs/plugins/ax_sweeper",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-1.0/plugins/ax_sweeper.md",version:"1.0",lastUpdatedBy:"Jieru Hu",lastUpdatedAt:1619637441,formattedLastUpdatedAt:"4/28/2021",sidebar_label:"Ax Sweeper plugin",sidebar:"version-1.0/docs",previous:{title:"Submitit Launcher plugin",permalink:"/docs/plugins/submitit_launcher"},next:{title:"Nevergrad Sweeper plugin",permalink:"/docs/plugins/nevergrad_sweeper"}},l=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]}],c={toc:l};function s(e){var n=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},c,a,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://img.shields.io/pypi/v/hydra-ax-sweeper"},Object(i.b)("img",{parentName:"a",src:"https://img.shields.io/pypi/v/hydra-ax-sweeper",alt:"PyPI"})),"\n",Object(i.b)("img",{parentName:"p",src:"https://img.shields.io/pypi/l/hydra-ax-sweeper",alt:"PyPI - License"}),"\n",Object(i.b)("img",{parentName:"p",src:"https://img.shields.io/pypi/pyversions/hydra-ax-sweeper",alt:"PyPI - Python Version"}),"\n",Object(i.b)("a",{parentName:"p",href:"https://pypistats.org/packages/hydra-ax-sweeper"},Object(i.b)("img",{parentName:"a",src:"https://img.shields.io/pypi/dm/hydra-ax-sweeper.svg",alt:"PyPI - Downloads"})),"\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/tree/1.0_branch/plugins/hydra_ax_sweeper/example"},Object(i.b)("img",{parentName:"a",src:"https://img.shields.io/badge/-Example%20application-informational",alt:"Example application"})),"\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/tree/1.0_branch/plugins/hydra_ax_sweeper"},Object(i.b)("img",{parentName:"a",src:"https://img.shields.io/badge/-Plugin%20source-informational",alt:"Plugin source"}))),Object(i.b)("p",null,"This plugin provides a mechanism for Hydra applications to use the ",Object(i.b)("a",{parentName:"p",href:"https://ax.dev/"},"Adaptive Experimentation Platform, aka Ax"),". Ax can optimize any experiment - machine learning experiments, A/B tests, and simulations. "),Object(i.b)("h3",{id:"installation"},"Installation"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-commandline"},"pip install hydra-ax-sweeper --upgrade\n")),Object(i.b)("h3",{id:"usage"},"Usage"),Object(i.b)("p",null,"Once installed, add ",Object(i.b)("inlineCode",{parentName:"p"},"hydra/sweeper=ax")," to your command line. Alternatively, override ",Object(i.b)("inlineCode",{parentName:"p"},"hydra/sweeper")," in your config:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"defaults:\n  - hydra/sweeper: ax\n")),Object(i.b)("p",null,"We include an example of how to use this plugin. The file ",Object(i.b)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/blob/master/plugins/hydra_ax_sweeper/example/banana.py"},Object(i.b)("inlineCode",{parentName:"a"},"example/banana.py"))," implements the ",Object(i.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Rosenbrock_function"},"Rosenbrock function (aka Banana function)"),". The return value of the function should be the value that we want to optimize."),Object(i.b)("p",null,"To compute the best parameters for the Banana function, clone the code and run the following command in the ",Object(i.b)("inlineCode",{parentName:"p"},"plugins/hydra_ax_sweeper")," directory:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"python example/banana.py -m 'banana.x=int(interval(-5, 5))' 'banana.y=interval(-5, 10.1)'\n")),Object(i.b)("p",null,"The output of a run looks like:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"[HYDRA] AxSweeper is optimizing the following parameters:\nbanana.x: range=[-5, 5], type = int\nbanana.y: range=[-5.0, 10.1], type = float\nax.modelbridge.dispatch_utils: Using Bayesian Optimization generation strategy: GenerationStrategy(name='Sobol+GPEI', steps=[Sobol for 5 arms, GPEI for subsequent arms], generated 0 arm(s) so far). Iterations after 5 will take longer to generate due to model-fitting.\nAxSweeper is launching 5 jobs\n[HYDRA] Launching 5 jobs locally\n[HYDRA]   #0 : banana.x=4 banana.y=-1.484\n[__main__][INFO] - Banana_Function(x=4, y=-1.484)=30581.473\n[HYDRA]   #1 : banana.x=3 banana.y=-3.653\n[__main__][INFO] - Banana_Function(x=3, y=-3.653)=16014.261\n[HYDRA]   #2 : banana.x=0 banana.y=9.409\n[__main__][INFO] - Banana_Function(x=0, y=9.409)=8855.340\n[HYDRA]   #3 : banana.x=-4 banana.y=2.059\n[__main__][INFO] - Banana_Function(x=-4, y=2.059)=19459.063\n[HYDRA]   #4 : banana.x=-3 banana.y=-1.338\n[__main__][INFO] - Banana_Function(x=-3, y=-1.338)=10704.497\n[HYDRA] New best value: 8855.340, best parameters: {'banana.x': 0, 'banana.y': 9.409}\n")),Object(i.b)("p",null,"In this example, we set the range of ",Object(i.b)("inlineCode",{parentName:"p"},"x")," parameter as an integer in the interval ",Object(i.b)("inlineCode",{parentName:"p"},"[-5, 5]")," and the range of ",Object(i.b)("inlineCode",{parentName:"p"},"y")," parameter as a float in the interval ",Object(i.b)("inlineCode",{parentName:"p"},"[-5, 10.1]"),". Note that in the case of ",Object(i.b)("inlineCode",{parentName:"p"},"x"),", we used ",Object(i.b)("inlineCode",{parentName:"p"},"int(interval(...))")," and hence only integers are sampled. In the case of ",Object(i.b)("inlineCode",{parentName:"p"},"y"),", we used ",Object(i.b)("inlineCode",{parentName:"p"},"interval(...)")," which refers to a floating-point interval. Other supported formats are fixed parameters (e.g.",Object(i.b)("inlineCode",{parentName:"p"}," banana.x=5.0"),"), choice parameters (eg ",Object(i.b)("inlineCode",{parentName:"p"},"banana.x=choice(1,2,3)"),") and range (eg ",Object(i.b)("inlineCode",{parentName:"p"},"banana.x=range(1, 10)"),"). Note that ",Object(i.b)("inlineCode",{parentName:"p"},"interval"),", ",Object(i.b)("inlineCode",{parentName:"p"},"choice")," etc. are functions provided by Hydra, and you can read more about them ",Object(i.b)("a",{parentName:"p",href:"https://hydra.cc/docs/next/advanced/override_grammar/extended/"},"here"),". An important thing to remember is, use ",Object(i.b)("a",{parentName:"p",href:"https://hydra.cc/docs/next/advanced/override_grammar/extended/#interval-sweep"},Object(i.b)("inlineCode",{parentName:"a"},"interval"))," when we want Ax to sample values from an interval. ",Object(i.b)("a",{parentName:"p",href:"https://ax.dev/api/ax.html#ax.RangeParameter"},Object(i.b)("inlineCode",{parentName:"a"},"RangeParameter"))," in Ax is equivalent to ",Object(i.b)("inlineCode",{parentName:"p"},"interval")," in Hydra. Remember to use ",Object(i.b)("inlineCode",{parentName:"p"},"int(interval(...))")," if you want to sample only integer points from the interval. ",Object(i.b)("a",{parentName:"p",href:"https://hydra.cc/docs/next/advanced/override_grammar/extended/#range-sweep"},Object(i.b)("inlineCode",{parentName:"a"},"range"))," can be used as an alternate way of specifying choice parameters. For example ",Object(i.b)("inlineCode",{parentName:"p"},"python example/banana.py -m banana.x=choice(1, 2, 3, 4)")," is equivalent to ",Object(i.b)("inlineCode",{parentName:"p"},"python example/banana.py -m banana.x=range(1, 5)"),"."),Object(i.b)("p",null,"The values of the ",Object(i.b)("inlineCode",{parentName:"p"},"x")," and ",Object(i.b)("inlineCode",{parentName:"p"},"y")," parameters can also be set using the config file ",Object(i.b)("inlineCode",{parentName:"p"},"plugins/hydra_ax_sweeper/example/conf/config.yaml"),". For instance, the configuration corresponding to the commandline arguments is as follows:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"banana.x:\n type: range\n bounds: [-5, 5]\n\nbanana.y:\n type: range\n bounds: [-5, 10.1]\n")),Object(i.b)("p",null,"In general, the plugin supports setting all the Ax supported ",Object(i.b)("a",{parentName:"p",href:"https://ax.dev/api/core.html?highlight=range#module-ax.core.parameter"},"Parameters")," in the config. According to the ",Object(i.b)("a",{parentName:"p",href:"https://ax.dev/api/service.html#ax.service.ax_client.AxClient.create_experiment"},"Ax documentation"),", the required elements in the config are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"name")," - Name of the parameter. It is of type string."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"type")," - Type of the parameter. It can take the following values: ",Object(i.b)("inlineCode",{parentName:"li"},"range"),", ",Object(i.b)("inlineCode",{parentName:"li"},"fixed"),", or ",Object(i.b)("inlineCode",{parentName:"li"},"choice"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"bounds")," - Required only for the ",Object(i.b)("inlineCode",{parentName:"li"},"range")," parameters. It should be a list of two values, with the lower bound first."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"values")," - Required only for the ",Object(i.b)("inlineCode",{parentName:"li"},"choice")," parameters. It should be a list of values."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"value")," - Required only for the ",Object(i.b)("inlineCode",{parentName:"li"},"fixed")," parameters. It should be a single value. ")),Object(i.b)("p",null,"Note that if you want to sample integers in the range ",Object(i.b)("inlineCode",{parentName:"p"},"-5")," to ",Object(i.b)("inlineCode",{parentName:"p"},"5"),", you need to specify the range as ",Object(i.b)("inlineCode",{parentName:"p"},"int(interval(-5, 5))")," (in the command line) or ",Object(i.b)("inlineCode",{parentName:"p"},"[-5, 5]")," (in config). If you want to sample floats in range ",Object(i.b)("inlineCode",{parentName:"p"},"-5")," to ",Object(i.b)("inlineCode",{parentName:"p"},"5"),", you need to specify the range as ",Object(i.b)("inlineCode",{parentName:"p"},"interval(-5, 5)")," (in the command line) or ",Object(i.b)("inlineCode",{parentName:"p"},"[-5.0, 5.0]")," (in config)."),Object(i.b)("p",null,"The parameters for the optimization process can also be set in the config file. Specifying the Ax config is optional. You can discover the Ax Sweeper parameters with:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="$ python your_app.py hydra/sweeper=ax --cfg hydra -p hydra.sweeper"',title:'"$',python:!0,"your_app.py":!0,"hydra/sweeper":"ax","--cfg":!0,hydra:!0,"-p":!0,'hydra.sweeper"':!0},"# @package hydra.sweeper\n_target_: hydra_plugins.hydra_ax_sweeper.ax_sweeper.AxSweeper\nmax_batch_size: null\nax_config:\n  max_trials: 10\n  early_stop:\n    minimize: true\n    max_epochs_without_improvement: 10\n    epsilon: 1.0e-05\n  experiment:\n    name: null\n    objective_name: objective\n    minimize: true\n    parameter_constraints: null\n    outcome_constraints: null\n    status_quo: null\n  client:\n    verbose_logging: false\n    random_seed: null\n  params: {}\n")))}s.isMDXComponent=!0}}]);