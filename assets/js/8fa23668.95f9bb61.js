"use strict";(self.webpackChunkpching=self.webpackChunkpching||[]).push([[3555],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var l=r.createContext({}),s=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=s(t.components);return r.createElement(l.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,l=t.parentName,p=u(t,["components","mdxType","originalType","parentName"]),g=s(n),d=i,m=g["".concat(l,".").concat(d)]||g[d]||c[d]||a;return n?r.createElement(m,o(o({ref:e},p),{},{components:n})):r.createElement(m,o({ref:e},p))}));function d(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,o=new Array(a);o[0]=g;var u={};for(var l in e)hasOwnProperty.call(e,l)&&(u[l]=e[l]);u.originalType=t,u.mdxType="string"==typeof t?t:i,o[1]=u;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4766:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return c}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],u={sidebar_label:"GitHub Pages"},l="Github",s={unversionedId:"tutorial-setting/github-pages",id:"tutorial-setting/github-pages",title:"Github",description:"\u5148\u8b1b\u8b1b\u4ec0\u9ebc\u662f GitHub \u597d\u4e86\u3002\u4f60\u53ef\u80fd\u807d\u904e Git\uff0c\u4e00\u500b\u7248\u672c\u7ba1\u7406\u8edf\u9ad4\uff1b\u800c Github \u662f\u500b\u7dda\u4e0a\u7684 Git Server\uff0c\u5c31\u662f\u53ef\u4ee5\u628a\u7a0b\u5f0f\u78bc\u653e\u5230\u4e0a\u9762\uff0c\u4e26\u5229\u7528 Git \u505a\u7248\u672c\u7ba1\u7406\u3002",source:"@site/docs/tutorial-setting/github-pages.md",sourceDirName:"tutorial-setting",slug:"/tutorial-setting/github-pages",permalink:"/pching/docs/tutorial-setting/github-pages",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-setting/github-pages.md",tags:[],version:"current",frontMatter:{sidebar_label:"GitHub Pages"},sidebar:"tutorialSidebar",previous:{title:"Github Pages + Docusaurus",permalink:"/pching/docs/tutorial-setting/intro"},next:{title:"Docusaurus",permalink:"/pching/docs/tutorial-setting/docusaurus"}},p={},c=[{value:"What is it?",id:"what-is-it",level:3},{value:"How to do?",id:"how-to-do",level:3}],g={toc:c};function d(t){var e=t.components,u=(0,i.Z)(t,o);return(0,a.kt)("wrapper",(0,r.Z)({},g,u,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"github"},"Github"),(0,a.kt)("p",null,"\u5148\u8b1b\u8b1b\u4ec0\u9ebc\u662f GitHub \u597d\u4e86\u3002\u4f60\u53ef\u80fd\u807d\u904e Git\uff0c\u4e00\u500b\u7248\u672c\u7ba1\u7406\u8edf\u9ad4\uff1b\u800c Github \u662f\u500b\u7dda\u4e0a\u7684 Git Server\uff0c\u5c31\u662f\u53ef\u4ee5\u628a\u7a0b\u5f0f\u78bc\u653e\u5230\u4e0a\u9762\uff0c\u4e26\u5229\u7528 Git \u505a\u7248\u672c\u7ba1\u7406\u3002\n\u7576\u4f60\u7684\u5c08\u6848\u53ea\u9700\u8981\u5728\u672c\u5730\u7aef\u64b0\u5beb\u3001\u4f7f\u7528\uff0c\u90a3\u5176\u5be6\u4e0d\u9700\u8981 Github\uff0c\u90a3\u70ba\u4ec0\u9ebc\u6211\u5011\u9700\u8981 Github \u5462\uff1f\n\u6709\u5f88\u591a\u6709\u9053\u7406\u7684\u539f\u56e0\uff0c\u53ef\u4ee5\u7576\u4f5c\u5099\u4efd\u3001\u53ef\u4ee5\u591a\u4eba\u5354\u4f5c\u3002\n\u6216\u8a31\u9700\u8981\u8a18\u4f4f\uff0cGitHub \u8ddf Git \u4e0d\u540c\u3002"),(0,a.kt)("h1",{id:"\u975c\u614b\u7db2\u9801"},"\u975c\u614b\u7db2\u9801"),(0,a.kt)("p",null,"\u8981\u8b1b GitHub Pages \u9700\u8981\u8b1b\u975c\u614b\u548c\u52d5\u614b\u7db2\u9801\u7684\u5dee\u5225\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u975c\u614b\u7db2\u9801\uff1a\u7531 HTML/CSS/JavaScript \u7d44\u6210",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u8005\u5411 server \u767c\u51fa\u8acb\u6c42"),(0,a.kt)("li",{parentName:"ol"},"server \u56de\u61c9"),(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u8005\u7684\u700f\u89bd\u5668\u6e32\u67d3\u51fa\u9801\u9762"))),(0,a.kt)("li",{parentName:"ul"},"\u52d5\u614b\u7db2\u9801\uff1a\u6709\u4e0d\u540c\u7684\u7a0b\u5f0f\u8a9e\u8a00\uff0c\u901a\u5e38\u6703\u6709\u8cc7\u6599\u5eab",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u8005\u5411 server \u767c\u51fa\u8acb\u6c42"),(0,a.kt)("li",{parentName:"ol"},"server \u5728\u5167\u90e8\u547c\u53eb\u76f8\u95dc\u7a0b\u5f0f\u8655\u7406\u8a72\u8acb\u6c42"),(0,a.kt)("li",{parentName:"ol"},"server \u56de\u61c9"),(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u8005\u7684\u700f\u89bd\u5668\u6e32\u67d3\u51fa\u9801\u9762")))),(0,a.kt)("h1",{id:"github-pages"},"GitHub Pages"),(0,a.kt)("h3",{id:"what-is-it"},"What is it?"),(0,a.kt)("p",null,"\u901a\u5e38\uff0c\u6211\u5011\u60f3\u8981\u628a\u7db2\u7ad9\u516c\u958b\u8b93\u5927\u5bb6\u80fd\u5920\u770b\u5230\u9700\u8981\u628a\u7db2\u7ad9\u653e\u5728 server \u4e0a\uff0c\u53ef\u80fd\u662f\u79df\u4e00\u53f0\u6216\u662f\u81ea\u5df1\u67b6\u4e00\u53f0\u3002\n\u4e5f\u53ef\u4ee5\u7528\u514d\u8cbb\u7a7a\u9593\u4e4b\u985e\u7684\uff0c\u4f46\u9084\u8981\u8655\u7406 domain \u540d\u5b57\u7b49\u9ebb\u7169\u7684\u554f\u984c\u3002\nGitHub Pages \u89e3\u6c7a\u4e86\u4e00\u5c0f\u90e8\u5206\uff0c\u5b83\u8b93\u6211\u5011\u53ef\u4ee5\u628a\u975c\u614b\u7db2\u7ad9\u5728\u5b83\u8eab\u4e0a\u5448\u73fe\u3002"),(0,a.kt)("h3",{id:"how-to-do"},"How to do?"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u9700\u8981\u6709\u500b GitHub \u5e33\u865f\uff0c\u5728 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com"},"GitHub")," \u8a3b\u518a\u3002\n\u4f60\u6240\u53d6\u7684 username \u5c07\u6703\u662f\u4f60\u7684 GitHub Pages \u7db2\u5740\u7684\u4e00\u90e8\u5206\u3002\u653e\u5fc3\uff0c\u5b83\u53ef\u4ee5\u518d\u88ab\u66f4\u6539\uff0c\u4f46\u4e0d\u80fd\u8ddf\u5225\u4eba\u91cd\u8907\u3002"),(0,a.kt)("p",null,"\u518d\u4f86\uff0c\u5efa\u7acb\u4e00\u500b\u65b0\u7684 repository\uff08\u5982\u679c\u4e0d\u77e5\u9053\u4ec0\u9ebc\u662f repository \u53ef\u80fd\u8981\u627e git \u7684\u6559\u5b78\u6216\u662f\u7b49\u6211\u5beb\uff09\u3002\n",(0,a.kt)("img",{src:n(323).Z,width:"2880",height:"1106"})),(0,a.kt)("p",null,"\u53f3\u4e0a\u89d2\u7684 New repository \u6309\u4e0b\u53bb\uff0c\u53ef\u4ee5\u7c21\u55ae\u5beb\u4e0b Repository name\uff0c\u9078\u64c7 ","[Public]","\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(1790).Z,width:"2880",height:"1636"})),(0,a.kt)("p",null,"\u7136\u5f8c\u6309\u4e0b\u7da0\u8272\u7684 Create repository \u6309\u9215\uff0c\u5c31\u7372\u5f97\u7684\u4e86\u65b0\u7684\u7dda\u4e0a repository\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(4212).Z,width:"2880",height:"1496"})),(0,a.kt)("p",null,"\u8b93\u6211\u5011\u56de\u5230\u7d42\u7aef\u6a5f\uff0c\u5efa\u7acb\u4e00\u500b\u7a7a\u8cc7\u6599\u593e",(0,a.kt)("inlineCode",{parentName:"p"},"mkdir test"),"\uff0c\u4e26\u79fb\u52d5\u5230\u88e1\u9762\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"cd test"),"\uff09\u3002\n\u63a5\u8457\u628a\u525b\u525b GitHub \u4e0a\u7b2c\u4e00\u584a\u6307\u4ee4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'echo "# test" > README.md\ngit init\ngit add README.md\ngit commit -m "first commit"\ngit branch -M main\ngit remote add origin git@github.com:cpching/test.git\ngit push -u origin main\n')),(0,a.kt)("p",null,"\u5168\u90e8\u8cbc\u5230\u7d42\u7aef\u6a5f\u4e0a\u57f7\u884c\u3002"),(0,a.kt)("p",null,"\u56de\u5230 GitHub \u9801\u9762\u91cd\u65b0\u6574\u7406\u767c\u73fe\uff0c"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(6750).Z,width:"2880",height:"1332"})),(0,a.kt)("p",null,"\u63a5\u8457\u9ede\u9078 ",(0,a.kt)("inlineCode",{parentName:"p"},"setting"),"\uff0c\u627e\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"Pages"),"\uff0c\u5c07 ",(0,a.kt)("inlineCode",{parentName:"p"},"Branch")," \u8abf\u6574\u81f3 ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," \u5f8c\u6309\u4e0b ",(0,a.kt)("inlineCode",{parentName:"p"},"save"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(3201).Z,width:"2880",height:"1094"})),(0,a.kt)("p",null,"\u4f60\u5c31\u53ef\u4ee5\u900f\u904e https://","[username]",".github.io/test/ \u5b58\u53d6\u9019\u500b\u5c08\u6848\u3002"))}d.isMDXComponent=!0},1790:function(t,e,n){e.Z=n.p+"assets/images/create-repository-defb478637354cf9f9c7284582cda52c.png"},6750:function(t,e,n){e.Z=n.p+"assets/images/first-commit-3b4d7c333cd09ca93dd40a80ff791f18.png"},3201:function(t,e,n){e.Z=n.p+"assets/images/github-page-077054fdeef4ab71e66a985a3239af75.png"},323:function(t,e,n){e.Z=n.p+"assets/images/new-repository-1b5cfbdba66ad886e93b7a4aad1e4add.png"},4212:function(t,e,n){e.Z=n.p+"assets/images/online-repository-ddab3bc6de54506e86e1d31ab38b9cdc.png"}}]);