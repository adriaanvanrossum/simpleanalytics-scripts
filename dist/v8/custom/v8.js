/* Simple Analytics - Privacy friendly analytics (docs.simpleanalytics.com/script; 2021-12-30; a6c7; SRI-version; v8) */

!function(s,e,t,n){try{var r=n+"_loaded";if(!s||!0===s[r])return;s[r]=!0;var a="https:",i="error",o=s.console,c="doNotTrack",u=s.navigator,p=s.location,l=p.hostname,f=s.document,h=u.userAgent,d="Not sending request ",m=!1,g=encodeURIComponent,v=decodeURIComponent,y=JSON.stringify,w=s.addEventListener,_="https://"+t,b=undefined,E=f.documentElement||{},O="language",x="Height",S="scroll",A="true",M=u.userAgentData,T=S+x,D="offset"+x,B="client"+x,P="pagehide",$="platform",k="platformVersion",q="https://docs.simpleanalytics.com",C=/(bot|spider|crawl)/i.test(h)&&!/(cubot)/i.test(h),H=s.screen,R=function(e){o&&o.warn&&o.warn("Simple Analytics:",e)},j=Date.now,I=function(){var t=s.crypto||s.msCrypto,e=[1e7]+-1e3+-4e3+-8e3+-1e11,n=/[018]/g;try{return e.replace(n,function(e){return(e^t.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)})}catch(r){return e.replace(n,function(e){var t=16*Math.random()|0;return(e<2?t:3&t|8).toString(16)})}},U=function(e){return"function"==typeof e},V=function(){for(var e={},t=arguments,n=0;n<t.length;n++){var r=t[n];if(r)for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},N=function(e,t){var n=p.search.match(new RegExp("[?&]("+e+")=([^?&]+)","gi")),r=n?n.map(function(e){return e.split(/[?&=]/).slice(-2)}):[];if(r[0])return t?r[0]:r[0][1]},z=function(t,e){t=V(ue,fe,t),oe&&(t.params=y(oe.map(function(e){var t=N(e,!0);if(t)return{key:t[0],value:t[1]}}).filter(Boolean)));var n=new Image;e&&(n.onerror=e,n.onload=e),n.src=_+"/simple.gif?"+Object.keys(t).filter(function(e){return t[e]!=b}).map(function(e){return g(e)+"="+g(t[e])}).join("&")+"&time="+Date.now()},L=function(e){e=e.message||e,R(e),z({type:i,error:e,url:te+p.pathname})};w(i,function(e){e.filename&&-1<e.filename.indexOf(t)&&L(e.message)},!1);var W,F="pushState",G=s.dispatchEvent,J=j(),Y=0;try{W=Intl.DateTimeFormat().resolvedOptions().timeZone}catch(qe){}var Z=f.currentScript||f.querySelector('script[src*="'+t+'"]'),K=function(e,t){return e&&e.getAttribute("data-"+t)},Q=e.mode||K(Z,"mode"),X=!!(ke=e.collectDnt)===ke?e.collectDnt:K(Z,"ignore-dnt")==A||K(Z,"skip-dnt")==A||K(Z,"collect-dnt")==A,ee=e.hostname||K(Z,"hostname"),te=ee||l,ne=!("false"==K(Z,"auto-collect")||!1===e.autoCollect),re=function(e){return Array.isArray(e)?e:"string"==typeof e&&e.length?e.split(/, ?/):[]},ae=e.saGlobal||K(Z,"sa-global")||n,ie=re(e.ignorePages||K(Z,"ignore-pages")),oe=re(e.allowParams||K(Z,"allow-params")),ce=e.strictUtm||K(Z,"strict-utm"),se=u.webdriver||s.__nightmare||"callPhantom"in s||"_phantom"in s||"phantom"in s||C,ue={version:"custom_latest_8",ua:h,https:p.protocol==a,timezone:W,hostname:te,page_id:I(),session_id:I()};if(se&&(ue.bot=!0),ue.sri=!0,M&&(ue.mobile=M.mobile,ue.brands=y(M.brands)),f.doctype||R("Add DOCTYPE html for more accurate dimensions"),te!==l&&(ue.hostname_original=l),!X&&c in u&&"1"==u[c])return R(d+"when "+c+" is enabled. See "+q+"/dnt");-1!=l.indexOf(".")&&!/^[0-9.:]+$/.test(l)||ee||R("Set a hostname when sending data from "+l+". See "+q+"/overwrite-domain-name");var pe,le,fe={},he=(f.referrer||"").replace(l,te).replace(/^https?:\/\/((m|l|w{2,3}([0-9]+)?)\.)?([^?#]+)(.*)$/,"$4").replace(/^([^/]+)$/,"$1")||b,de="(utm_)"+(ce?"":"?"),me={source:N(de+"source"+(ce?"":"|ref")),medium:N(de+"medium"),campaign:N(de+"campaign"),term:N(de+"term"),content:N(de+"content"),referrer:he},ge=0,ve="sendBeacon",ye=function(e,t){var n={type:"append",original_id:t?e:ue.page_id};n.duration=Math.round((j()-J-ge)/1e3),ge=0,J=j(),n.scrolled=Math.max(0,Y,_e()),!t&&ve in u?u[ve](_+"/append",y(V(ue,n))):z(n)};s.addEventListener("visibilitychange",function(){f.hidden?("on"+P in s||ye(),le=j()):ge+=j()-le},!1),w(P,ye,!1);var we=f.body||{},_e=function(){try{var e=E[B]||0,t=Math.max(we[T]||0,we[D]||0,E[B]||0,E[T]||0,E[D]||0);return Math.min(100,5*Math.round(100*((E.scrollTop||0)+e)/t/5))}catch(n){return 0}};w("load",function(){Y=_e(),w(S,function(){Y<_e()&&(Y=_e())},!1)});var be=function(e){var t="";try{t=e||v(p.pathname)}catch(qe){}if(!function(e){for(var t in ie){var n=ie[t];if(n){var r="/"==n[0]?n:"/"+n;try{if(r===e||new RegExp(r.replace(/\*/gi,"(.*)"),"gi").test(e))return!0}catch(a){return!1}}}return!1}(t))return"hash"==Q&&p.hash&&(t+=p.hash.split("?")[0]),t;R(d+"because "+t+" is ignored")},Ee=function(e,t){var n=be(t);if(n&&pe!=n){pe=n,fe.path=n,fe.viewport_width=Math.max(E.clientWidth||0,s.innerWidth||0)||null,fe.viewport_height=Math.max(E[B]||0,s.innerHeight||0)||null,u[O]&&(fe[O]=u[O]),H&&(fe.screen_width=H.width,fe.screen_height=H.height);var r=s.performance,a="navigation",i=r&&r.getEntriesByType&&r.getEntriesByType(a)[0]&&r.getEntriesByType(a)[0].type?-1<["reload","back_forward"].indexOf(r.getEntriesByType(a)[0].type):r&&r[a]&&-1<[1,2].indexOf(r[a].type),o=!!he&&f.referrer.split("/")[2]==l;fe.unique=!e&&!i&&!o;var c=function(){m=!0,function(e,t,n){e&&ye(""+ue.page_id,!0),ue.page_id=I();var r=te+be();z(V(t?{referrer:n?he:null}:me,{id:ue.page_id,type:"pageview"})),he=r}(e,e||i,o)};if(m)c();else try{M&&U(M.getHighEntropyValues)?M.getHighEntropyValues([$,k]).then(function(e){ue.os_name=e[$],ue.os_version=e[k],c()})["catch"](c):c()}catch(qe){c()}}},Oe=s.history,xe=Oe?Oe.pushState:b;ne&&xe&&Event&&G&&(Oe.pushState=($e=Oe[Pe=F],function(){var e,t=arguments,n=$e.apply(this,t);return"function"==typeof Event?e=new Event(Pe):(e=f.createEvent("Event")).initEvent(Pe,!0,!0),e.arguments=t,G(e),n}),w(F,function(){Ee(1)},!1),w("popstate",function(){Ee(1)},!1)),ne&&"hash"==Q&&"onhashchange"in s&&w("hashchange",function(){Ee(1)},!1),ne?Ee():s.sa_pageview=function(e){Ee(0,e)};var Se=["string","number"],Ae=function(e,t){var n=U(e),r=U(t)?t:function(){};if(Se.indexOf(typeof e)<0&&!n)return R("event is not a string: "+e),r();try{if(n&&(e=e(),Se.indexOf(typeof e)<0))return R("event function output is not a string: "+e),r()}catch(a){return R("in your event function: "+a.message),r()}(e=(""+e).replace(/[^a-z0-9]+/gi,"_").replace(/(^_|_$)/g,""))&&z(V(me,{type:"event",event:e}),r)},Me=function(e,t){Ae(e,t)};s[ae]||(s[ae]=Me);var Te=s[ae],De=Te&&Te.q?Te.q:[];for(var Be in s[ae]=Me,De)Object.prototype.hasOwnProperty.call(De,Be)&&(Array.isArray(De[Be])?Ae.apply(null,De[Be]):Ae(De[Be]))}catch(qe){L(qe)}var Pe,$e,ke}(window,{},"<!--# echo var="http_host" default="" -->","sa_event");
//# sourceMappingURL=v8.js.map