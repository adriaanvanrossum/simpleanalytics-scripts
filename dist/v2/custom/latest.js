/* Simple Analytics - Privacy friendly analytics (docs.simpleanalytics.com/script; 2020-02-23; 5bf2) */

!function(o,n){if(o){function c(){return Math.random().toString(36).slice(2)}var s,u="https:",t="error",r=o.console,e="doNotTrack",i=o.navigator,f=o.location,p=o.document,a="Not sending requests ",h=encodeURIComponent,d=decodeURIComponent,m=JSON.stringify,l=o.addEventListener,v="https://"+n,y=undefined,g=function(e){r&&r.warn&&r.warn("Simple Analytics:",e)},w=function(e){return Math.round((Date.now()-(e||0))/1e3)};try{s=Intl.DateTimeFormat().resolvedOptions().timeZone}catch(ie){}l(t,function(e){e.filename&&-1<e.filename.indexOf(n)&&re(e.message)},!1);function E(e,n){return e&&e.getAttribute("data-"+n)}var O,b,x="pushState",S=o.dispatchEvent,T=Date.now(),M=0,_=p.querySelector('script[src*="'+n+'"]'),q=E(_,"mode"),B="true"==E(_,"skip-dnt"),D=E(_,"hostname")||f.hostname,k=E(_,"sa-global")||"sa_event";if(!B&&e in i&&"1"==i[e])return g(a+"when "+e+" is enabled");if(-1==D.indexOf("."))return g(a+"from localhost");try{function I(e){var n=f.search.match(new RegExp("[?&]("+e+")=([^?&]+)","gi")),t=n?n.map(function(e){return e.split("=")[1]}):[];if(t&&t[0])return t[0]}function $(){for(var e={},n=0;n<arguments.length;n++){var t=arguments[n];if(t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}var j,N,R={},A=c(),C={version:2,hostname:D},F="(utm_)?",H={source:I(F+"source|source|ref"),medium:I(F+"medium"),campaign:I(F+"campaign"),referrer:(p.referrer||"").replace(/^https?:\/\/((m|l|w{2,3}([0-9]+)?)\.)?([^?#]+)(.*)$/,"$4").replace(/^([^/]+)\/$/,"$1")||y},L=0;o.addEventListener("visibilitychange",function(){p.hidden?N=Date.now():L+=Date.now()-N},!1);function U(e,n){var t={type:"append",original_id:n?e:A};t.duration=w(T+L),T=L=0,t.scrolled=Math.max(0,M,Z());var r=$(C,t);r.time=w(),n?te(r):i[z](v+"/append",m(r))}var z="sendBeacon";z in i&&l("unload",U,!1);var J="scroll",P=p.body||{},W=p.documentElement||{},Z=function(){try{var e="Height",n=J+e,t="offset"+e,r="client"+e,i=W[r]||0,a=Math.max(P[n]||0,P[t]||0,W[r]||0,W[n]||0,W[t]||0);return Math.min(100,5*Math.round(100*((W.scrollTop||0)+i)/a/5))}catch(o){return 0}};l("load",function(){M=Z(),l(J,function(){M<Z()&&(M=Z())},!1)});function G(e){var n=d(f.pathname);if("hash"==q&&f.hash&&(n+=f.hash.split("?")[0]),j!=n){var t={path:j=n},r=o.performance,i="navigation",a=r&&r.getEntriesByType&&r.getEntriesByType(i)[0]&&r.getEntriesByType(i)[0].type?-1<["reload","back_forward"].indexOf(r.getEntriesByType(i)[0].type):r&&r[i]&&-1<[1,2].indexOf(r[i].type);t.unique=!e&&!a&&(!p.referrer||p.referrer.split("/")[2]!=D),R=t,function(e,n){e&&U(""+A,!0),A=c(),R.id=A,te($(R,C,n?null:H,{https:f.protocol==u,timezone:s,width:o.innerWidth,type:"pageview"}))}(e,e||a)}}var K=o.history;if((K?K.pushState:y)&&Event&&S){K.pushState=(b=K[O=x],function(){var e,n=b.apply(this,arguments);return"function"==typeof Event?e=new Event(O):(e=document.createEvent("Event")).initEvent(O,!0,!0),e.arguments=arguments,S(e),n}),l(x,function(){G(1)},!1),l("popstate",function(){G(1)},!1)}"hash"==q&&"onhashchange"in o&&l("hashchange",function(){G(1)},!1),G();function Q(e){try{e=""+e instanceof Function?e():e}catch(n){g("in your event function: "+n.message),e="event_errored"}te($(C,H,{type:"event",event:e,event_id:X}))}function V(e){Q(e)}var X=c();o[k]||(o[k]=V);var Y=o[k],ee=Y&&Y.q?Y.q:[];for(var ne in o[k]=V,ee)Q(ee[ne])}catch(ie){re(ie)}}function te(n){n.time=w(),(new Image).src=v+"/simple.gif?"+Object.keys(n).map(function(e){return n[e]!=y?h(e)+"="+h(n[e]):""}).join("&")}function re(e){e=e.message||e,g(e),te({type:t,error:e,url:D+f.pathname})}}(window,"<!--# echo var="http_host" default="" -->");