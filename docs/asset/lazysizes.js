!function(e){var t=function(a,f,l){"use strict";var m,y,W,i,h,e,c,P,s,D,I,n,k,o,u,p,v,z,g,E,F,C,t,O,$,r,d,J,V,X,b,L,j,A,U,G,K,M,T,w,N,Q,Y,Z,ee,te,_,ne,ae,ie,le,x,S,q,se,B,oe,re,de,H,ce,ue,fe,me,ye,he,pe,ve={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125},R=a.lazySizesConfig||a.lazysizesConfig||{};for(pe in ve)pe in R||(R[pe]=ve[pe]);return f&&f.getElementsByClassName?(y=f.documentElement,W=a.HTMLPictureElement,h="getAttribute",e=a[i="addEventListener"].bind(a),c=a.setTimeout,P=a.requestAnimationFrame||c,s=a.requestIdleCallback,D=/^picture$/i,I=["load","error","lazyincluded","_lazyloaded"],n={},k=Array.prototype.forEach,o=function(e,t){return n[t]||(n[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),n[t].test(e[h]("class")||"")&&n[t]},u=function(e,t){o(e,t)||e.setAttribute("class",(e[h]("class")||"").trim()+" "+t)},p=function(e,t){(t=o(e,t))&&e.setAttribute("class",(e[h]("class")||"").replace(t," "))},v=function(t,n,e){var a=e?i:"removeEventListener";e&&v(t,n),I.forEach(function(e){t[a](e,n)})},z=function(e,t,n,a,i){var l=f.createEvent("Event");return(n=n||{}).instance=m,l.initEvent(t,!a,!i),l.detail=n,e.dispatchEvent(l),l},g=function(e,t){var n;!W&&(n=a.picturefill||R.pf)?(t&&t.src&&!e[h]("srcset")&&e.setAttribute("srcset",t.src),n({reevaluate:!0,elements:[e]})):t&&t.src&&(e.src=t.src)},E=function(e,t){return(getComputedStyle(e,null)||{})[t]},F=function(e,t,n){for(n=n||e.offsetWidth;n<R.minSize&&t&&!e._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode;return n},ye=[],he=me=[],we._lsFlush=Te,C=we,t=function(n,e){return e?function(){C(n)}:function(){var e=this,t=arguments;C(function(){n.apply(e,t)})}},O=function(e){function t(){var e=l.now()-a;e<99?c(t,99-e):(s||i)(i)}var n,a,i=function(){n=null,e()};return function(){a=l.now(),n=n||c(t,99)}},ae=/^img$/i,ie=/^iframe$/i,le="onscroll"in a&&!/(gle|ing)bot/.test(navigator.userAgent),q=-1,se=function(e){return(Q=null==Q?"hidden"==E(f.body,"visibility"):Q)||!("hidden"==E(e.parentNode,"visibility")&&"hidden"==E(e,"visibility"))},Y=Ee,ee=S=x=0,te=R.throttleDelay,_=R.ricTimeout,ne=s&&49<_?function(){s(Ce,{timeout:_}),_!==R.ricTimeout&&(_=R.ricTimeout)}:t(function(){c(Ce)},!0),oe=t(be),re=function(e){oe({target:e.target})},de=t(function(t,e,n,a,i){var l,s,o,r,d;(s=z(t,"lazybeforeunveil",e)).defaultPrevented||(a&&(n?u(t,R.autosizesClass):t.setAttribute("sizes",a)),n=t[h](R.srcsetAttr),a=t[h](R.srcAttr),i&&(l=(r=t.parentNode)&&D.test(r.nodeName||"")),o=e.firesLoad||"src"in t&&(n||a||l),s={target:t},u(t,R.loadingClass),o&&(clearTimeout(j),j=c(ge,2500),v(t,re,!0)),l&&k.call(r.getElementsByTagName("source"),Le),n?t.setAttribute("srcset",n):a&&!l&&(ie.test(t.nodeName)?(e=a,0==(d=(r=t).getAttribute("data-load-mode")||R.iframeLoadMode)?r.contentWindow.location.replace(e):1==d&&(r.src=e)):t.src=a),i&&(n||l)&&g(t,{src:a})),t._lazyRace&&delete t._lazyRace,p(t,R.lazyClass),C(function(){var e=t.complete&&1<t.naturalWidth;o&&!e||(e&&u(t,R.fastLoadedClass),be(s),t._lazyCache=!0,c(function(){"_lazyCache"in t&&delete t._lazyCache},9)),"lazy"==t.loading&&S--},!0)}),ce=O(function(){R.loadMode=3,B()}),$={_:function(){U=l.now(),m.elements=f.getElementsByClassName(R.lazyClass),b=f.getElementsByClassName(R.lazyClass+" "+R.preloadClass),e("scroll",B,!0),e("resize",B,!0),e("pageshow",function(e){var t;e.persisted&&(t=f.querySelectorAll("."+R.loadingClass)).length&&t.forEach&&P(function(){t.forEach(function(e){e.complete&&H(e)})})}),a.MutationObserver?new MutationObserver(B).observe(y,{childList:!0,subtree:!0,attributes:!0}):(y[i]("DOMNodeInserted",B,!0),y[i]("DOMAttrModified",B,!0),setInterval(B,999)),e("hashchange",B,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach(function(e){f[i](e,B,!0)}),/d$|^c/.test(f.readyState)?Me():(e("load",Me),f[i]("DOMContentLoaded",B),c(Me,2e4)),m.elements.length?(Ee(),C._lsFlush()):B()},checkElems:B=function(e){var t;(e=!0===e)&&(_=33),Z||(Z=!0,(t=te-(l.now()-ee))<0&&(t=0),e||t<9?ne():c(ne,t))},unveil:H=function(e){var t,n,a,i;e._lazyRace||!(!(i="auto"==(a=(n=ae.test(e.nodeName))&&(e[h](R.sizesAttr)||e[h]("sizes"))))&&L||!n||!e[h]("src")&&!e.srcset||e.complete||o(e,R.errorClass))&&o(e,R.lazyClass)||(t=z(e,"lazyunveilread").detail,i&&r.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,S++,de(e,t,i,a,n))},_aLSL:Ae},V=t(function(e,t,n,a){var i,l,s;if(e._lazysizesWidth=a,e.setAttribute("sizes",a+="px"),D.test(t.nodeName||""))for(l=0,s=(i=t.getElementsByTagName("source")).length;l<s;l++)i[l].setAttribute("sizes",a);n.detail.dataAttr||g(e,n.detail)}),r={_:function(){J=f.getElementsByClassName(R.autosizesClass),e("resize",X)},checkElems:X=O(function(){var e,t=J.length;if(t)for(e=0;e<t;e++)ze(J[e])}),updateElem:ze},d=function(){!d.i&&f.getElementsByClassName&&(d.i=!0,r._(),$._())},c(function(){R.init&&d()}),m={cfg:R,autoSizer:r,loader:$,init:d,uP:g,aC:u,rC:p,hC:o,fire:z,gW:F,rAF:C}):{init:function(){},cfg:R,noSupport:!0};function ze(e,t,n){var a=e.parentNode;a&&(n=F(e,a,n),(t=z(e,"lazybeforesizes",{width:n,dataAttr:!!t})).defaultPrevented||(n=t.detail.width)&&n!==e._lazysizesWidth&&V(e,a,t,n))}function ge(e){S--,e&&!(S<0)&&e.target||(S=0)}function Ee(){var e,t,n,a,i,l,s,o,r,d,c,u=m.elements;if((A=R.loadMode)&&S<8&&(e=u.length)){for(t=0,q++;t<e;t++)if(u[t]&&!u[t]._lazyRace)if(!le||m.prematureUnveil&&m.prematureUnveil(u[t]))H(u[t]);else if((s=u[t][h]("data-expand"))&&(i=+s)||(i=x),r||(r=!R.expand||R.expand<1?500<y.clientHeight&&500<y.clientWidth?500:370:R.expand,d=(m._defEx=r)*R.expFactor,c=R.hFac,Q=null,x<d&&S<1&&2<q&&2<A&&!f.hidden?(x=d,q=0):x=1<A&&1<q&&S<6?r:0),o!==i&&(G=innerWidth+i*c,K=innerHeight+i,l=-1*i,o=i),d=u[t].getBoundingClientRect(),(N=d.bottom)>=l&&(M=d.top)<=K&&(w=d.right)>=l*c&&(T=d.left)<=G&&(N||w||T||M)&&(R.loadHidden||se(u[t]))&&(L&&S<3&&!s&&(A<3||q<4)||function(e,t){var n,a=e,i=se(e);for(M-=t,N+=t,T-=t,w+=t;i&&(a=a.offsetParent)&&a!=f.body&&a!=y;)(i=0<(E(a,"opacity")||1))&&"visible"!=E(a,"overflow")&&(n=a.getBoundingClientRect(),i=w>n.left&&T<n.right&&N>n.top-1&&M<n.bottom+1);return i}(u[t],i))){if(H(u[t]),a=!0,9<S)break}else!a&&L&&!n&&S<4&&q<4&&2<A&&(b[0]||R.preloadAfterLoad)&&(b[0]||!s&&(N||w||T||M||"auto"!=u[t][h](R.sizesAttr)))&&(n=b[0]||u[t]);n&&!a&&H(n)}}function Ce(){Z=!1,ee=l.now(),Y()}function be(e){var t=e.target;t._lazyCache?delete t._lazyCache:(ge(e),u(t,R.loadedClass),p(t,R.loadingClass),v(t,re),z(t,"lazyloaded"))}function Le(e){var t,n=e[h](R.srcsetAttr);(t=R.customMedia[e[h]("data-media")||e[h]("media")])&&e.setAttribute("media",t),n&&e.setAttribute("srcset",n)}function Ae(){3==R.loadMode&&(R.loadMode=2),ce()}function Me(){L||(l.now()-U<999?c(Me,999):(L=!0,R.loadMode=3,B(),e("scroll",Ae,!0)))}function Te(){var e=he;for(he=me.length?ye:me,fe=!(ue=!0);e.length;)e.shift()();ue=!1}function we(e,t){ue&&!t?e.apply(this,arguments):(he.push(e),fe||(fe=!0,(f.hidden?c:P)(Te)))}}(e,e.document,Date);e.lazySizes=t,"object"==typeof module&&module.exports&&(module.exports=t)}("undefined"!=typeof window?window:{}),function(e,t){function n(){t(e.lazySizes),e.removeEventListener("lazyunveilread",n,!0)}t=t.bind(null,e,e.document),"object"==typeof module&&module.exports?t(require("lazysizes")):"function"==typeof define&&define.amd?define(["lazysizes"],t):e.lazySizes?n():e.addEventListener("lazyunveilread",n,!0)}(window,function(r,d,E){"use strict";var C,c,u,b,o,f,a,n,i,m,L,l,y,A,e,s,h,p,v,z,t,g,M;function T(){v.length&&(h=0,v.d())}function w(){for(var e=0,t=l.length;e<t;e++)!E.hC(l[e],M.lazyClass)&&x(l[e])&&E.aC(l[e],M.lazyClass)}function N(e){var t;(t=e.match(n))?this.urls[t[1]]=C.map[t[2]]||t[2]:this.urls.include=C.map[e]||e}function _(e){var t,n;return e=e.trim(),(t=(t=(e=C.map[e]||e).match(i))?(n=t[1],{condition:M.include.conditions[t[3]]||M.customMedia[t[3]]||t[2]||null,name:t[3]}):(n=e,{condition:null,name:""})).urls={},(C.map[n]||n).split(a).forEach(N,t),!t.urls.include&&t.urls.amd&&(this.saved=!0,t.initial=this),t}function x(e){var t,n,a,i,l,s,o=e.lazyInclude;if(o&&o.candidates)for(t=0;t<o.candidates.length&&(a=e,s=void 0,s=!(i=n=o.candidates[t]).condition,i.condition&&(u||((c=c||d.querySelector(C.contentElement))?(l=(y(c,":after").getPropertyValue("content")||"none").replace(m,""),u={},l&&(u[l]=1),(l=(y(c,":before").getPropertyValue("content")||"none").replace(m,""))&&(u[l]=1)):u={}),u[i.name]?s=!0:r.matchMedia&&"string"==typeof i.condition?s=(matchMedia(i.condition)||{}).matches:"function"==typeof i.condition&&(s=i.condition(a,i))),!s);t++);return n&&n!=o.current?n:null}function S(n,e,t){var a,i,l,s;f[n]?t&&(!0===f[n]?setTimeout(t):f[n].push(t)):(a=d.createElement(!0===e?"script":"link"),i=d.getElementsByTagName("script")[0],e?(a.src=n,a.async=!1):(a.rel="stylesheet",a.href=n),f[n]=[],f[a.href]=f[n],t&&(s=function(e){if("readystatechange"!=e.type||o[e.target.readyState]){var t=f[n];for(a.removeEventListener("load",s),a.removeEventListener("error",s),a.removeEventListener("readystatechange",s),a.removeEventListener("loadcssdefined",s),l&&clearInterval(l),f[n]=!0,f[a.href]=!0;t.length;)t.shift()()}},f[a.href][0]=t,e||(l=setInterval(function(){!function(e){for(var t=!1,n=d.styleSheets,a=e.href,i=0,l=n.length;i<l;i++)if(n[i].href==a){t=!0;break}return t}(a)||s({})},60)),a.addEventListener("load",s),a.addEventListener("error",s),a.addEventListener("readystatechange",s),a.addEventListener("loadcssdefined",s)),i.parentNode.insertBefore(a,i))}function q(e){e&&"function"==typeof e.lazytransform&&e.lazytransform(this)}function B(e){e&&"function"==typeof e.lazyunload&&e.lazyunload(this)}function H(e){e&&"function"==typeof e.lazyload&&e.lazyload(this)}function R(e){var t,n,i,l,s,o,a,r,d,c,u,f,m,y,h,p,v,z,g=(t=e).getAttribute("data-include")||"";return(n=t.lazyInclude)&&n.str==g&&!C.allowReload||(z={saved:!1,content:null},!(g=(n={str:g,candidates:(C.map[g]||g).split(b).map(_,z)}).candidates.length)||n.candidates[g-1].condition?(z.saved=!0,n.candidates.push({urls:{},condition:null,name:"initial",content:z})):z.saved&&1==n.candidates.length&&(z.saved=!1),(n.initialContent=z).saved&&(z.content=t.innerHTML),1<(t.lazyInclude=n).candidates.length?E.aC(t,"lazyconditionalinclude"):E.rC(t,"lazyconditionalinclude")),n.candidates.length&&L.contains(e)&&((g=x(e))&&(l=g,v=(i=e).lazyInclude.current||null,z={candidate:l,openArgs:["GET",l.urls.include,!0],sendData:null,xhrModifier:null,content:l.content&&l.content.content||l.content,oldCandidate:v},E.fire(i,"lazyincludeload",z).defaultPrevented?A.d():(h=function(){s&&o&&!a&&p()},p=function(){var e=s.status,t=!(null!=(a=s.content||s.responseText)||!v||!v.urls.include),n={candidate:l,content:a,text:s.responseText||s.content,response:s.response,xml:s.responseXML,isSuccess:!("status"in s)||200<=e&&e<300||304===e,oldCandidate:v,insert:!0,resetHTML:t},a={target:i,details:n,detail:n};l.modules=o,v&&v.modules&&(v.modules.forEach(B,a),v.modules=null,n.resetHTML)&&null==n.content&&l.initial&&l.initial.saved&&(n.content=l.initial.content),o.forEach(q,a),e=E.fire(i,"lazyincludeloaded",n),n.insert&&n.isSuccess&&!e.defaultPrevented&&null!=n.content&&n.content!=i.innerHTML&&(i.innerHTML=n.content),A.d(),o.forEach(H,a),setTimeout(function(){E.fire(i,"lazyincluded",n)}),o=s=null},i.lazyInclude.current=l,i.setAttribute("data-currentinclude",l.name),l.urls.css&&(a=!0,f=l.urls.css,r=function(){a=!1,h()},d=(f=f.split("|,|")).length-1,f.forEach(function(e,t){S(e,!1,t==d?r:null)})),null==z.content&&l.urls.include?(f=z,c=function(e){s=e,h()},(u=new XMLHttpRequest).addEventListener("readystatechange",function(){var e=this.DONE||4;this.readyState===e&&(c(u),u=null)},!1),u.open.apply(u,f.openArgs),u.setRequestHeader("X-Requested-With","XMLHttpRequest"),f.xhrModifier&&f.xhrModifier(u,f.candidate),u.send(f.sendData)):s=z,l.urls.amd||l.urls.module?(f=function(){o=Array.prototype.slice.call(arguments),h()},l.urls.amd?(z=l.urls.amd,m=f,y=(z=z.split("|,|")).length-1,E.cfg.requireJs?E.cfg.requireJs(z,m):z.forEach(function(e,t){S(e,t==y?m:null)})):(z=l.urls.module,E.cfg.systemJs?E.cfg.systemJs(z,f):S(z,f))):o=[],h())),1)}d.getElementsByClassName&&(b=/\s*,+\s+/,o={complete:1,loaded:1},f={},a=/\s+/,n=/^(amd|css|module)\:(.+)/i,i=/(.+)\s+(\(\s*(.+)\s*\))/,m=/['"]/g,L=d.documentElement,l=d.getElementsByClassName("lazyconditionalinclude"),y=function(e,t){var n=e.ownerDocument.defaultView;return(n=n.opener?n:r).getComputedStyle(e,t||null)||{getPropertyValue:function(){},isNull:!0}},s=2,p=h=0,v=[],z=function(){clearTimeout(e),e=setTimeout(T,999)},A={q:function(e){var t=null==e.getAttribute("data-lazyqueue");t&&(p++,s=3),s<h?v[t?"unshift":"push"](e):R(e)&&(h++,z())},d:function(){if(h&&h--,0<p&&(--p||(s=2)),!(s<h)){for(;v.length;)if(R(v.shift())){h++;break}z()}}},t=function(e){clearTimeout(g),u=null,g=setTimeout(w,"resize"==e.type?31:0)},(M=E&&E.cfg).include||(M.include={}),(C=M.include).contentElement||(C.contentElement="html"),C.conditions||(C.conditions={}),C.map||(C.map={}),addEventListener("lazybeforeunveil",function(e){e.detail.instance==E&&!e.defaultPrevented&&e.target.getAttribute("data-include")&&(A.q(e.target),e.detail.firesLoad=!0)},!1),addEventListener("resize",t,!1),addEventListener("lazyrefreshincludes",t,!1))});