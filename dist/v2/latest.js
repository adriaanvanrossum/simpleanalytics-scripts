/* Simple Analytics - Privacy friendly analytics (docs.simpleanalytics.com/script; 2020-01-24; 7cc5) */

!function(d,e){if(d){function l(e){o&&o.warn&&o.warn("Simple Analytics: "+e)}function t(e,t){return e&&e.getAttribute("data-"+t)}var n,r,a="https:",i=a+"//",h=i+"queue."+e+"/v2/post",p=i+"online."+e+"/v1/visit",o=d.console,s="doNotTrack",f="pageviews",m="events",c=d.navigator,u=c.userAgent,v=d.location,g=d.document,y=v.hostname,w="Not sending requests ",T="localhost",E="Content-Type",q="text/plain; charset=UTF-8",b=d.addEventListener,S="pushState",M=d.dispatchEvent,x=Date.now(),D=0,O=g.querySelector('script[src*="'+e+'"]'),R=t(O,"mode"),B="true"===t(O,"skip-dnt"),H=t(O,"sa-global")||"sa";if(!B&&s in c&&"1"===c[s])return l(w+"when "+s+" is enabled");if(y===T||"file:"===v.protocol)return l(w+"from "+T);if(!u||-1<u.search(/(bot|spider|crawl)/gi))return l(w+"because bot detected");try{function L(e){var t=v.search.match(new RegExp("[?&]("+e+")=([^?&]+)","gi")),n=t?t.map(function(e){return e.split("=")[1]}):[];if(n&&n[0])return n[0]}var $;try{$=Intl.DateTimeFormat().resolvedOptions().timeZone}catch(te){}var k="(utm_)?",A={version:2,hostname:y,https:v.protocol===a,timezone:$,width:d.innerWidth,source:{source:L(k+"source|source|ref"),medium:L(k+"medium"),campaign:L(k+"campaign"),referrer:(g.referrer||"").replace(/^https?:\/\/((m|l|w{2,3}([0-9]+)?)\.)?([^?#]+)(.*)$/,"$4").replace(/^([^/]+)\/$/,"$1")||undefined},pageviews:[]},C=0,I=null;d.addEventListener("visibilitychange",function(){g.hidden?I=Date.now():C+=Date.now()-I},!1);function N(e){return Math.round((Date.now()-(e||0))/1e3)}var _,F="sendBeacon",P=JSON.stringify,U=F in c&&!1===/ip(hone|ad)(.*)os\s([1-9]|1[0-2])_/i.test(u);U&&b("unload",function(){var e=A[f][A[f].length-1];e.duration=N(x+C),C=0;var t=Math.max(0,D,W());t&&(e.scrolled=t),A.time=N(),c[F](h,P(A))},!1);var X="scroll",z=g.body||{},J=g.documentElement||{},W=function(){var e="Height",t=X+e,n="offset"+e,r="client"+e,a=J[r]||0,i=Math.max(z[t]||0,z[n]||0,J[r]||0,J[t]||0,J[n]||0);return Math.min(100,5*Math.round(100*((J.scrollTop||0)+a)/i/5))};b("load",function(){D=W(),b(X,function(){D<W()&&(D=W())},!1)});function Z(e,t,n){var r=A[f],a=r?r.length:0,i=a?r[a-1]:null;if(e===m){var o=""+t;if(i?i[m]?i[m].push(o):i[m]=[o]:U&&l("Couldn't save event '"+o+"'"),U)return;delete A[f],A[m]=[o]}else{a&&(i.duration=N(x+C),i.scrolled=D),r.push(t);try{var s=new XMLHttpRequest;s.open("POST",p,!0),s.setRequestHeader(E,q),s.send(P(A))}catch(u){}if(U)return x=Date.now(),C=0,void(D=d.setTimeout(W,500))}var c=new XMLHttpRequest;c.open("POST",h,!0),n&&delete A.source,A.time=N(),c.setRequestHeader(E,q),c.send(P(A)),delete A[f],delete A[m]}function j(e){var t=v.pathname;if("hash"===R&&v.hash&&(t+=v.hash.split("?")[0]),_!==t){var n={path:_=t,added:N()};try{var r=d.performance,a="navigation",i=r&&r.getEntriesByType&&r.getEntriesByType(a)[0]&&r.getEntriesByType(a)[0].type?-1<["reload","back_forward"].indexOf(r.getEntriesByType(a)[0].type):r&&r[a]&&-1<[1,2].indexOf(r[a].type);n.unique=!e&&!i&&(!g.referrer||g.referrer.split("/")[2]!==y)}catch(o){n.error=o.message}Z(f,n,e)}}var G=d.history;if((G?G.pushState:null)&&Event&&M){G.pushState=(r=G[n=S],function(){var e=r.apply(this,arguments),t=new Event(n);return t.arguments=arguments,M(t),e}),b(S,function(){j(1)},!1),b("popstate",function(){j(1)},!1)}"hash"===R&&"onhashchange"in d&&b("hashchange",function(){j(1)},!1),j();function K(e){Z(m,e)}d[H]||(d[H]=K);var Q=d[H],V=Q&&Q.q?Q.q:[];for(var Y in d[H]=K,V)Z(m,V[Y])}catch(te){l(te.message);var ee=h+"image.gif";te.message&&(ee=ee+"?error="+encodeURIComponent(te.message)),(new Image).src=ee}}}(window,"simpleanalyticscdn.com");