/* Simple Analytics - Privacy friendly analytics (docs.simpleanalytics.com/script; 2021-04-13; d72d) */

!function(u,e,t,n){try{var r=n+"_loaded";if(!u||!0===u[r])return;u[r]=!0;var p="https:",i="error",a=u.console,o="doNotTrack",f=u.navigator,l=u.location,h=l.hostname,d=u.document,c=f.userAgent,s="Not sending request ",g=!1,m=encodeURIComponent,v=decodeURIComponent,y=JSON.stringify,w=u.addEventListener,_="https://"+t,b=undefined,E=d.documentElement||{},x="language",O="Height",A="scroll",M=f.userAgentData,S=A+O,T="offset"+O,D="client"+O,$="pagehide",q="platform",B="platformVersion",C=/(bot|spider|crawl)/i.test(c)&&!/(cubot)/i.test(c),H=u.screen,R=f.webdriver||u.__nightmare||"callPhantom"in u||"_phantom"in u||"phantom"in u||C,k={version:"custom_latest_7",ua:c};R&&(k.bot=!0),k.sri=!0,M&&(k.mobile=M.mobile,k.brands=y(M.brands));var I=function(e){a&&a.warn&&a.warn("Simple Analytics:",e)},P=Date.now,V=function(){var t=u.crypto||u.msCrypto,e=[1e7]+-1e3+-4e3+-8e3+-1e11,n=/[018]/g;try{return e.replace(n,function(e){return(e^t.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)})}catch(r){return e.replace(n,function(e){var t=16*Math.random()|0;return(e<2?t:3&t|8).toString(16)})}},j=function(e){return"function"==typeof e},N=function(){for(var e={},t=arguments,n=0;n<t.length;n++){var r=t[n];if(r)for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},U=function(e){var t=l.search.match(new RegExp("[?&]("+e+")=([^?&]+)","gi")),n=t?t.map(function(e){return e.split("=")[1]}):[];if(n&&n[0])return n[0]},z=function(t,e){t=N(k,t);var n=new Image;e&&(n.onerror=e,n.onload=e),n.src=_+"/simple.gif?"+Object.keys(t).filter(function(e){return t[e]!=b}).map(function(e){return m(e)+"="+m(t[e])}).join("&")},L=function(e){e=e.message||e,I(e),z({type:i,error:e,url:ee+l.pathname})};w(i,function(e){e.filename&&-1<e.filename.indexOf(t)&&L(e.message)},!1);var W,F="pushState",G=u.dispatchEvent,J=P(),Y=0;try{W=Intl.DateTimeFormat().resolvedOptions().timeZone}catch(qe){}var Z=d.querySelector('script[src*="'+t+'"]'),K=function(e,t){return e&&e.getAttribute("data-"+t)},Q=e.mode||K(Z,"mode"),X=!!($e=e.collectDnt)===$e?e.collectDnt:"true"==K(Z,"ignore-dnt")||"true"==K(Z,"skip-dnt"),ee=e.hostname||K(Z,"hostname")||h,te=!("false"==K(Z,"auto-collect")||!1===e.autoCollect),ne=e.saGlobal||K(Z,"sa-global")||n,re=e.ignorePages||K(Z,"ignore-pages"),ie=Array.isArray(re)?re:"string"==typeof re&&re.length?re.split(/, ?/):[];if(k.hostname=ee,d.doctype||I("Add DOCTYPE html for more accurate dimensions"),ee!==h&&(k.hostname_original=h),!X&&o in f&&"1"==f[o])return I(s+"when "+o+" is enabled");if(-1==h.indexOf(".")||/^[0-9]+$/.test(h.replace(/\./g,"")))return I(s+"from "+h);var ae,oe,ce={},se=V(),ue=(d.referrer||"").replace(h,ee).replace(/^https?:\/\/((m|l|w{2,3}([0-9]+)?)\.)?([^?#]+)(.*)$/,"$4").replace(/^([^/]+)$/,"$1")||b,pe="(utm_)?",fe={source:U(pe+"source|ref"),medium:U(pe+"medium"),campaign:U(pe+"campaign"),term:U(pe+"term"),content:U(pe+"content"),referrer:ue},le=0,he="sendBeacon",de=function(e,t){var n={type:"append",original_id:t?e:se};n.duration=Math.round((P()-J-le)/1e3),le=0,J=P(),n.scrolled=Math.max(0,Y,me()),!t&&he in f?f[he](_+"/append",y(N(k,n))):z(n)};u.addEventListener("visibilitychange",function(){d.hidden?("on"+$ in u||de(),oe=P()):le+=P()-oe},!1),w($,de,!1);var ge=d.body||{},me=function(){try{var e=E[D]||0,t=Math.max(ge[S]||0,ge[T]||0,E[D]||0,E[S]||0,E[T]||0);return Math.min(100,5*Math.round(100*((E.scrollTop||0)+e)/t/5))}catch(n){return 0}};w("load",function(){Y=me(),w(A,function(){Y<me()&&(Y=me())},!1)});var ve=function(e){var t="";try{t=e||v(l.pathname)}catch(qe){}if(!function(e){for(var t in ie){var n=ie[t];if(n){var r="/"==n[0]?n:"/"+n;try{if(r===e||new RegExp(r.replace(/\*/gi,"(.*)"),"gi").test(e))return!0}catch(i){return!1}}}return!1}(t))return"hash"==Q&&l.hash&&(t+=l.hash.split("?")[0]),t;I(s+"because "+t+" is ignored")},ye=function(e,t){var n=ve(t);if(n&&ae!=n){var r={path:ae=n,viewport_width:Math.max(E.clientWidth||0,u.innerWidth||0)||null,viewport_height:Math.max(E[D]||0,u.innerHeight||0)||null};f[x]&&(r[x]=f[x]),H&&(r.screen_width=H.width,r.screen_height=H.height);var i=u.performance,a="navigation",o=i&&i.getEntriesByType&&i.getEntriesByType(a)[0]&&i.getEntriesByType(a)[0].type?-1<["reload","back_forward"].indexOf(i.getEntriesByType(a)[0].type):i&&i[a]&&-1<[1,2].indexOf(i[a].type),c=!!ue&&d.referrer.split("/")[2]==h;r.unique=!e&&!o&&!c,ce=r;var s=function(){g=!0,function(e,t,n){e&&de(""+se,!0),se=V(),ce.id=se;var r=ee+ve();z(N(ce,t?{referrer:n?ue:null}:fe,{https:l.protocol==p,timezone:W,type:"pageview"})),ue=r}(e,e||o,c)};if(g)s();else try{M&&j(M.getHighEntropyValues)?M.getHighEntropyValues([q,B]).then(function(e){k.os_name=e[q],k.os_version=e[B],s()})["catch"](s):s()}catch(qe){s()}}},we=u.history,_e=we?we.pushState:b;te&&_e&&Event&&G&&(we.pushState=(De=we[Te=F],function(){var e,t=arguments,n=De.apply(this,t);return"function"==typeof Event?e=new Event(Te):(e=d.createEvent("Event")).initEvent(Te,!0,!0),e.arguments=t,G(e),n}),w(F,function(){ye(1)},!1),w("popstate",function(){ye(1)},!1)),te&&"hash"==Q&&"onhashchange"in u&&w("hashchange",function(){ye(1)},!1),te?ye():u.sa_pageview=function(e){ye(0,e)};var be=V(),Ee=["string","number"],xe=function(e,t){var n=j(e),r=j(t)?t:function(){};if(Ee.indexOf(typeof e)<0&&!n)return I("event is not a string: "+e),r();try{if(n&&(e=e(),Ee.indexOf(typeof e)<0))return I("event function output is not a string: "+e),r()}catch(i){return I("in your event function: "+i.message),r()}(e=(""+e).replace(/[^a-z0-9]+/gi,"_").replace(/(^_|_$)/g,""))&&z(N(fe,R?{bot:!0}:{},{type:"event",event:e,page_id:ce.id,session_id:be}),r)},Oe=function(e,t){xe(e,t)};u[ne]||(u[ne]=Oe);var Ae=u[ne],Me=Ae&&Ae.q?Ae.q:[];for(var Se in u[ne]=Oe,Me)xe(Me[Se])}catch(qe){L(qe)}var Te,De,$e}(window,{},"<!--# echo var="http_host" default="" -->","sa_event");
//# sourceMappingURL=latest.js.map