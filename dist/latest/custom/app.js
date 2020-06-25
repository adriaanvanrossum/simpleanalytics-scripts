/* Simple Analytics - Privacy friendly analytics (docs.simpleanalytics.com/script; 2020-06-25; a262) */

!function(s,e,n){var r,i,t;if(s)try{var u="https:",a="error",o=s.console,c="doNotTrack",p=s.navigator,f=s.location,h=f.hostname,l=s.document,d=p.userAgent,g="Not sending request ",m=encodeURIComponent,v=decodeURIComponent,y=JSON.stringify,w=s.addEventListener,_="https://"+n,E=undefined,b=l.documentElement||{},x="language",O="Height",A="scroll",M=A+O,S="offset"+O,T="client"+O,k=s.screen,$=p.webdriver||s.__nightmare||"callPhantom"in s||"_phantom"in s||"phantom"in s||/(bot|spider|crawl)/i.test(d)||s.chrome&&(""===p.languages||!(p.plugins instanceof PluginArray)),q={version:3};$&&(q.bot=!0);var B=function(e){o&&o.warn&&o.warn("Simple Analytics:",e)},C=Date.now,D=function(){var n=s.crypto||s.msCrypto,e=[1e7]+-1e3+-4e3+-8e3+-1e11,t=/[018]/g;try{return e.replace(t,function(e){return(e^n.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)})}catch(r){return e.replace(t,function(e){var n=16*Math.random()|0;return(e<2?n:3&n|8).toString(16)})}},P=function(){for(var e={},n=arguments,t=0;t<n.length;t++){var r=n[t];if(r)for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},R=function(e){var n=f.search.match(new RegExp("[?&]("+e+")=([^?&]+)","gi")),t=n?n.map(function(e){return e.split("=")[1]}):[];if(t&&t[0])return t[0]},I=function(n,e){n=P(q,n);var t=new Image;e&&(t.onerror=e,t.onload=e),t.src=_+"/simple.gif?"+Object.keys(n).filter(function(e){return n[e]!=E}).map(function(e){return m(e)+"="+m(n[e])}).join("&")},j=function(e){e=e.message||e,B(e),I({type:a,error:e,url:V+f.pathname})};w(a,function(e){e.filename&&-1<e.filename.indexOf(n)&&j(e.message)},!1);var F,H="pushState",N=s.dispatchEvent,U=C(),z=0;try{F=Intl.DateTimeFormat().resolvedOptions().timeZone}catch(be){}var L=l.querySelector('script[src*="'+n+'"]'),W=function(e,n){return e&&e.getAttribute("data-"+n)},G=e.mode||W(L,"mode"),J=!!(t=e.skipDnt)===t?e.skipDnt:"true"==W(L,"ignore-dnt")||"true"==W(L,"skip-dnt"),V=e.hostname||W(L,"hostname")||h,Y=!("false"==W(L,"auto-collect")||!1===e.autoCollect),Z=e.saGlobal||W(L,"sa-global")||"sa_event",K=e.ignorePages||W(L,"ignore-pages"),Q=Array.isArray(K)?K:"string"==typeof K&&K.length?K.split(/, ?/):[];if(q.hostname=V,l.doctype||B("Add DOCTYPE html for more accurate dimensions"),V!==h&&(q.hostname_original=h),!J&&c in p&&"1"==p[c])return B(g+"when "+c+" is enabled");if(-1==h.indexOf(".")||/^[0-9]+$/.test(h.replace(/\./g,"")))return B(g+"from "+h);var X,ee,ne={},te=D(),re=(l.referrer||"").replace(h,V).replace(/^https?:\/\/((m|l|w{2,3}([0-9]+)?)\.)?([^?#]+)(.*)$/,"$4").replace(/^([^/]+)$/,"$1")||E,ie="(utm_)?",ae={source:R(ie+"source|ref"),medium:R(ie+"medium"),campaign:R(ie+"campaign"),term:R(ie+"term"),content:R(ie+"content"),referrer:re},oe=0;s.addEventListener("visibilitychange",function(){l.hidden?ee=C():oe+=C()-ee},!1);var ce="sendBeacon",se=function(e,n){var t={type:"append",original_id:n?e:te};t.duration=Math.round((C()-U+oe)/1e3),oe=0,U=C(),t.scrolled=Math.max(0,z,pe()),!n&&ce in p?p[ce](_+"/append",y(P(q,t))):I(t)};w("unload",se,!1);var ue=l.body||{},pe=function(){try{var e=b[T]||0,n=Math.max(ue[M]||0,ue[S]||0,b[T]||0,b[M]||0,b[S]||0);return Math.min(100,5*Math.round(100*((b.scrollTop||0)+e)/n/5))}catch(t){return 0}};w("load",function(){z=pe(),w(A,function(){z<pe()&&(z=pe())},!1)});var fe=function(e){var n=e||v(f.pathname);if(!function(e){for(var n in Q){var t=Q[n];if(t){var r="/"==t[0]?t:"/"+t;try{if(r===e||new RegExp(r.replace(/\*/gi,"(.*)"),"gi").test(e))return!0}catch(i){return!1}}}return!1}(n))return"hash"==G&&f.hash&&(n+=f.hash.split("?")[0]),n;B(g+"because "+n+" is ignored")},he=function(e,n){var t,r,i,a,o,c=fe(n);c&&X!=c&&(t={path:X=c,viewport_width:Math.max(b.clientWidth||0,s.innerWidth||0)||null,viewport_height:Math.max(b[T]||0,s.innerHeight||0)||null},p[x]&&(t[x]=p[x]),k&&(t.screen_width=k.width,t.screen_height=k.height),i="navigation",a=(r=s.performance)&&r.getEntriesByType&&r.getEntriesByType(i)[0]&&r.getEntriesByType(i)[0].type?-1<["reload","back_forward"].indexOf(r.getEntriesByType(i)[0].type):r&&r[i]&&-1<[1,2].indexOf(r[i].type),o=!!re&&re.split("/")[0]==V,t.unique=!e&&!a&&!o,ne=t,function(e,n,t){e&&se(""+te,!0),te=D(),ne.id=te;var r=V+fe();I(P(ne,n?{referrer:t?re:null}:ae,{https:f.protocol==u,timezone:F,type:"pageview"})),re=r}(e,e||a,o))},le=s.history,de=le?le.pushState:E;Y&&de&&Event&&N&&(le.pushState=(i=le[r=H],function(){var e,n=arguments,t=i.apply(this,n);return"function"==typeof Event?e=new Event(r):(e=l.createEvent("Event")).initEvent(r,!0,!0),e.arguments=n,N(e),t}),w(H,function(){he(1)},!1),w("popstate",function(){he(1)},!1)),Y&&"hash"==G&&"onhashchange"in s&&w("hashchange",function(){he(1)},!1),Y?he():s.sa_pageview=function(e){he(0,e)};var ge=D(),me=["string","number"],ve=function(e,n){var t=e instanceof Function,r=n instanceof Function?n:function(){};if(me.indexOf(typeof e)<0&&!t)return B("event is not a string: "+e),r();try{if(t&&(e=e(),me.indexOf(typeof e)<0))return B("event function output is not a string: "+e),r()}catch(i){return B("in your event function: "+i.message),r()}(e=(""+e).replace(/[^a-z0-9]+/gi,"_").replace(/(^_|_$)/g,""))&&I(P(ae,$?{bot:!0}:{},{type:"event",event:e,page_id:ne.id,session_id:ge}),r)},ye=function(e,n){ve(e,n)};s[Z]||(s[Z]=ye);var we=s[Z],_e=we&&we.q?we.q:[];for(var Ee in s[Z]=ye,_e)ve(_e[Ee])}catch(be){j(be)}}(window,{},"<!--# echo var="http_host" default="" -->");
//# sourceMappingURL=app.js.map