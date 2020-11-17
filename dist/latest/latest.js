/* Simple Analytics - Privacy friendly analytics (docs.simpleanalytics.com/script; 2020-11-17; 53d3) */

!function(s,e,t){var r,i,n;if(s)try{var u="https:",a="error",o=s.console,c="doNotTrack",p=s.navigator,f=s.location,l=f.hostname,h=s.document,d=p.userAgent,g="Not sending request ",m=encodeURIComponent,v=decodeURIComponent,y=JSON.stringify,w=s.addEventListener,_="https://queue."+t,E=undefined,b=h.documentElement||{},O="language",x="Height",M="scroll",S=M+x,T="offset"+x,A="client"+x,q="pagehide",$=/(bot|spider|crawl)/i.test(d)&&!/(cubot)/i.test(d),B=s.screen,C=p.webdriver||s.__nightmare||"callPhantom"in s||"_phantom"in s||"phantom"in s||$,D={version:"cdn_latest_5"};C&&(D.bot=!0);var R=function(e){o&&o.warn&&o.warn("Simple Analytics:",e)},k=Date.now,I=function(){var t=s.crypto||s.msCrypto,e=[1e7]+-1e3+-4e3+-8e3+-1e11,n=/[018]/g;try{return e.replace(n,function(e){return(e^t.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)})}catch(r){return e.replace(n,function(e){var t=16*Math.random()|0;return(e<2?t:3&t|8).toString(16)})}},P=function(){for(var e={},t=arguments,n=0;n<t.length;n++){var r=t[n];if(r)for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},j=function(e){var t=f.search.match(new RegExp("[?&]("+e+")=([^?&]+)","gi")),n=t?t.map(function(e){return e.split("=")[1]}):[];if(n&&n[0])return n[0]},F=function(t,e){t=P(D,t);var n=new Image;e&&(n.onerror=e,n.onload=e),n.src=_+"/simple.gif?"+Object.keys(t).filter(function(e){return t[e]!=E}).map(function(e){return m(e)+"="+m(t[e])}).join("&")},N=function(e){e=e.message||e,R(e),F({type:a,error:e,url:Z+f.pathname})};w(a,function(e){e.filename&&-1<e.filename.indexOf(t)&&N(e.message)},!1);var U,z="pushState",H=s.dispatchEvent,L=k(),W=0;try{U=Intl.DateTimeFormat().resolvedOptions().timeZone}catch(xe){}var G=h.querySelector('script[src*="'+t+'"]'),J=function(e,t){return e&&e.getAttribute("data-"+t)},V=e.mode||J(G,"mode"),Y=!!(n=e.collectDnt)===n?e.collectDnt:"true"==J(G,"ignore-dnt")||"true"==J(G,"skip-dnt"),Z=e.hostname||J(G,"hostname")||l,K=!("false"==J(G,"auto-collect")||!1===e.autoCollect),Q=e.saGlobal||J(G,"sa-global")||"sa_event",X=e.ignorePages||J(G,"ignore-pages"),ee=Array.isArray(X)?X:"string"==typeof X&&X.length?X.split(/, ?/):[];if(D.hostname=Z,h.doctype||R("Add DOCTYPE html for more accurate dimensions"),Z!==l&&(D.hostname_original=l),!Y&&c in p&&"1"==p[c])return R(g+"when "+c+" is enabled");if(-1==l.indexOf(".")||/^[0-9]+$/.test(l.replace(/\./g,"")))return R(g+"from "+l);var te,ne,re={},ie=I(),ae=(h.referrer||"").replace(l,Z).replace(/^https?:\/\/((m|l|w{2,3}([0-9]+)?)\.)?([^?#]+)(.*)$/,"$4").replace(/^([^/]+)$/,"$1")||E,oe="(utm_)?",ce={source:j(oe+"source|ref"),medium:j(oe+"medium"),campaign:j(oe+"campaign"),term:j(oe+"term"),content:j(oe+"content"),referrer:ae},se=0,ue="sendBeacon",pe=function(e,t){var n={type:"append",original_id:t?e:ie};n.duration=Math.round((k()-L-se)/1e3),se=0,L=k(),n.scrolled=Math.max(0,W,le()),!t&&ue in p?p[ue](_+"/append",y(P(D,n))):F(n)};s.addEventListener("visibilitychange",function(){h.hidden?("on"+q in s||pe(),ne=k()):se+=k()-ne},!1),w(q,pe,!1);var fe=h.body||{},le=function(){try{var e=b[A]||0,t=Math.max(fe[S]||0,fe[T]||0,b[A]||0,b[S]||0,b[T]||0);return Math.min(100,5*Math.round(100*((b.scrollTop||0)+e)/t/5))}catch(n){return 0}};w("load",function(){W=le(),w(M,function(){W<le()&&(W=le())},!1)});var he=function(e){var t=e||v(f.pathname);if(!function(e){for(var t in ee){var n=ee[t];if(n){var r="/"==n[0]?n:"/"+n;try{if(r===e||new RegExp(r.replace(/\*/gi,"(.*)"),"gi").test(e))return!0}catch(i){return!1}}}return!1}(t))return"hash"==V&&f.hash&&(t+=f.hash.split("?")[0]),t;R(g+"because "+t+" is ignored")},de=function(e,t){var n,r,i,a,o,c=he(t);c&&te!=c&&(n={path:te=c,viewport_width:Math.max(b.clientWidth||0,s.innerWidth||0)||null,viewport_height:Math.max(b[A]||0,s.innerHeight||0)||null},p[O]&&(n[O]=p[O]),B&&(n.screen_width=B.width,n.screen_height=B.height),i="navigation",a=(r=s.performance)&&r.getEntriesByType&&r.getEntriesByType(i)[0]&&r.getEntriesByType(i)[0].type?-1<["reload","back_forward"].indexOf(r.getEntriesByType(i)[0].type):r&&r[i]&&-1<[1,2].indexOf(r[i].type),o=!!ae&&ae.split("/")[0]==Z,n.unique=!e&&!a&&!o,re=n,function(e,t,n){e&&pe(""+ie,!0),ie=I(),re.id=ie;var r=Z+he();F(P(re,t?{referrer:n?ae:null}:ce,{https:f.protocol==u,timezone:U,type:"pageview"})),ae=r}(e,e||a,o))},ge=s.history,me=ge?ge.pushState:E;K&&me&&Event&&H&&(ge.pushState=(i=ge[r=z],function(){var e,t=arguments,n=i.apply(this,t);return"function"==typeof Event?e=new Event(r):(e=h.createEvent("Event")).initEvent(r,!0,!0),e.arguments=t,H(e),n}),w(z,function(){de(1)},!1),w("popstate",function(){de(1)},!1)),K&&"hash"==V&&"onhashchange"in s&&w("hashchange",function(){de(1)},!1),K?de():s.sa_pageview=function(e){de(0,e)};var ve=I(),ye=["string","number"],we=function(e,t){var n=e instanceof Function,r=t instanceof Function?t:function(){};if(ye.indexOf(typeof e)<0&&!n)return R("event is not a string: "+e),r();try{if(n&&(e=e(),ye.indexOf(typeof e)<0))return R("event function output is not a string: "+e),r()}catch(i){return R("in your event function: "+i.message),r()}(e=(""+e).replace(/[^a-z0-9]+/gi,"_").replace(/(^_|_$)/g,""))&&F(P(ce,C?{bot:!0}:{},{type:"event",event:e,page_id:re.id,session_id:ve}),r)},_e=function(e,t){we(e,t)};s[Q]||(s[Q]=_e);var Ee=s[Q],be=Ee&&Ee.q?Ee.q:[];for(var Oe in s[Q]=_e,be)we(be[Oe])}catch(xe){N(xe)}}(window,{},"simpleanalyticscdn.com");
//# sourceMappingURL=latest.js.map