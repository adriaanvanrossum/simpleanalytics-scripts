/* Simple Analytics - Privacy friendly analytics (docs.simpleanalytics.com/script; 2021-12-30; aeb6; v8) */

!function(s,e,t){try{var n="sa_loaded";if(!s||!0===s[n])return;s[n]=!0;var r="https:",a="error",i=s.console,o="doNotTrack",u=s.navigator,c=s.location,p=c.hostname,l=s.document,f=u.userAgent,h="Not sending request ",d=!1,m=encodeURIComponent,g=decodeURIComponent,v=JSON.stringify,y=s.addEventListener,w="https://"+t,_=undefined,b=l.documentElement||{},E="language",O="Height",x="scroll",S="true",A=u.userAgentData,M=x+O,T="offset"+O,D="client"+O,B="pagehide",P="platform",$="platformVersion",k="https://docs.simpleanalytics.com",q=/(bot|spider|crawl)/i.test(f)&&!/(cubot)/i.test(f),C=s.screen,H=function(e){i&&i.warn&&i.warn("Simple Analytics:",e)},R=Date.now,j=function(){var t=s.crypto||s.msCrypto,e=[1e7]+-1e3+-4e3+-8e3+-1e11,n=/[018]/g;try{return e.replace(n,function(e){return(e^t.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)})}catch(r){return e.replace(n,function(e){var t=16*Math.random()|0;return(e<2?t:3&t|8).toString(16)})}},I=function(e){return"function"==typeof e},U=function(){for(var e={},t=arguments,n=0;n<t.length;n++){var r=t[n];if(r)for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},V=function(e,t){var n=c.search.match(new RegExp("[?&]("+e+")=([^?&]+)","gi")),r=n?n.map(function(e){return e.split(/[?&=]/).slice(-2)}):[];if(r[0])return t?r[0]:r[0][1]},N=function(t,e){t=U(se,le,t),ie&&(t.params=v(ie.map(function(e){var t=V(e,!0);if(t)return{key:t[0],value:t[1]}}).filter(Boolean)));var n=new Image;e&&(n.onerror=e,n.onload=e),n.src=w+"/simple.gif?"+Object.keys(t).filter(function(e){return t[e]!=_}).map(function(e){return m(e)+"="+m(t[e])}).join("&")+"&time="+Date.now()},z=function(e){e=e.message||e,H(e),N({type:a,error:e,url:ee+c.pathname})};y(a,function(e){e.filename&&-1<e.filename.indexOf(t)&&z(e.message)},!1);var L,W="pushState",F=s.dispatchEvent,G=R(),J=0;try{L=Intl.DateTimeFormat().resolvedOptions().timeZone}catch(ke){}var Y=l.currentScript||l.querySelector('script[src*="'+t+'"]'),Z=function(e,t){return e&&e.getAttribute("data-"+t)},K=e.mode||Z(Y,"mode"),Q=!!($e=e.collectDnt)===$e?e.collectDnt:Z(Y,"ignore-dnt")==S||Z(Y,"skip-dnt")==S||Z(Y,"collect-dnt")==S,X=e.hostname||Z(Y,"hostname"),ee=X||p,te=!("false"==Z(Y,"auto-collect")||!1===e.autoCollect),ne=function(e){return Array.isArray(e)?e:"string"==typeof e&&e.length?e.split(/, ?/):[]},re=e.saGlobal||Z(Y,"sa-global")||"sa",ae=ne(e.ignorePages||Z(Y,"ignore-pages")),ie=ne(e.allowParams||Z(Y,"allow-params")),oe=e.strictUtm||Z(Y,"strict-utm"),ce=u.webdriver||s.__nightmare||"callPhantom"in s||"_phantom"in s||"phantom"in s||q,se={version:"custom_events_8",ua:f,https:c.protocol==r,timezone:L,hostname:ee,page_id:j(),session_id:j()};if(ce&&(se.bot=!0),se.sri=!1,A&&(se.mobile=A.mobile,se.brands=v(A.brands)),l.doctype||H("Add DOCTYPE html for more accurate dimensions"),ee!==p&&(se.hostname_original=p),!Q&&o in u&&"1"==u[o])return H(h+"when "+o+" is enabled. See "+k+"/dnt");-1!=p.indexOf(".")&&!/^[0-9.:]+$/.test(p)||X||H("Set a hostname when sending data from "+p+". See "+k+"/overwrite-domain-name");var ue,pe,le={},fe=(l.referrer||"").replace(p,ee).replace(/^https?:\/\/((m|l|w{2,3}([0-9]+)?)\.)?([^?#]+)(.*)$/,"$4").replace(/^([^/]+)$/,"$1")||_,he="(utm_)"+(oe?"":"?"),de={source:V(he+"source"+(oe?"":"|ref")),medium:V(he+"medium"),campaign:V(he+"campaign"),term:V(he+"term"),content:V(he+"content"),referrer:fe},me=0,ge="sendBeacon",ve=function(e,t){var n={type:"append",original_id:t?e:se.page_id};n.duration=Math.round((R()-G-me)/1e3),me=0,G=R(),n.scrolled=Math.max(0,J,we()),!t&&ge in u?u[ge](w+"/append",v(U(se,n))):N(n)};s.addEventListener("visibilitychange",function(){l.hidden?("on"+B in s||ve(),pe=R()):me+=R()-pe},!1),y(B,ve,!1);var ye=l.body||{},we=function(){try{var e=b[D]||0,t=Math.max(ye[M]||0,ye[T]||0,b[D]||0,b[M]||0,b[T]||0);return Math.min(100,5*Math.round(100*((b.scrollTop||0)+e)/t/5))}catch(n){return 0}};y("load",function(){J=we(),y(x,function(){J<we()&&(J=we())},!1)});var _e=function(e){var t="";try{t=e||g(c.pathname)}catch(ke){}if(!function(e){for(var t in ae){var n=ae[t];if(n){var r="/"==n[0]?n:"/"+n;try{if(r===e||new RegExp(r.replace(/\*/gi,"(.*)"),"gi").test(e))return!0}catch(a){return!1}}}return!1}(t))return"hash"==K&&c.hash&&(t+=c.hash.split("?")[0]),t;H(h+"because "+t+" is ignored")},be=function(e,t){var n=_e(t);if(n&&ue!=n){ue=n,le.path=n,le.viewport_width=Math.max(b.clientWidth||0,s.innerWidth||0)||null,le.viewport_height=Math.max(b[D]||0,s.innerHeight||0)||null,u[E]&&(le[E]=u[E]),C&&(le.screen_width=C.width,le.screen_height=C.height);var r=s.performance,a="navigation",i=r&&r.getEntriesByType&&r.getEntriesByType(a)[0]&&r.getEntriesByType(a)[0].type?-1<["reload","back_forward"].indexOf(r.getEntriesByType(a)[0].type):r&&r[a]&&-1<[1,2].indexOf(r[a].type),o=!!fe&&l.referrer.split("/")[2]==p;le.unique=!e&&!i&&!o;var c=function(){d=!0,function(e,t,n){e&&ve(""+se.page_id,!0),se.page_id=j();var r=ee+_e();N(U(t?{referrer:n?fe:null}:de,{id:se.page_id,type:"pageview"})),fe=r}(e,e||i,o)};if(d)c();else try{A&&I(A.getHighEntropyValues)?A.getHighEntropyValues([P,$]).then(function(e){se.os_name=e[P],se.os_version=e[$],c()})["catch"](c):c()}catch(ke){c()}}},Ee=s.history,Oe=Ee?Ee.pushState:_;te&&Oe&&Event&&F&&(Ee.pushState=(Pe=Ee[Be=W],function(){var e,t=arguments,n=Pe.apply(this,t);return"function"==typeof Event?e=new Event(Be):(e=l.createEvent("Event")).initEvent(Be,!0,!0),e.arguments=t,F(e),n}),y(W,function(){be(1)},!1),y("popstate",function(){be(1)},!1)),te&&"hash"==K&&"onhashchange"in s&&y("hashchange",function(){be(1)},!1),te?be():s.sa_pageview=function(e){be(0,e)};var xe=["string","number"],Se=function(e,t){var n=I(e),r=I(t)?t:function(){};if(xe.indexOf(typeof e)<0&&!n)return H("event is not a string: "+e),r();try{if(n&&(e=e(),xe.indexOf(typeof e)<0))return H("event function output is not a string: "+e),r()}catch(a){return H("in your event function: "+a.message),r()}(e=(""+e).replace(/[^a-z0-9]+/gi,"_").replace(/(^_|_$)/g,""))&&N(U(de,{type:"event",event:e}),r)},Ae=function(e,t){Se(e,t)};s[re]||(s[re]=Ae);var Me=s[re],Te=Me&&Me.q?Me.q:[];for(var De in s[re]=Ae,Te)Object.prototype.hasOwnProperty.call(Te,De)&&(Array.isArray(Te[De])?Se.apply(null,Te[De]):Se(Te[De]))}catch(ke){z(ke)}var Be,Pe,$e}(window,{},"<!--# echo var="http_host" default="" -->");
//# sourceMappingURL=e.js.map