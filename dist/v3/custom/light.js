/* Simple Analytics - Privacy friendly analytics (docs.simpleanalytics.com/script; 2020-06-25; dc9a) */

!function(o,e,t){var n,r,a,i,c,p,u,s;if(o)try{var m="https:",f=o.console,d="doNotTrack",l=o.navigator,g=o.location,y=g.hostname,v=o.document,h=l.userAgent,w="Not sending request ",O=encodeURIComponent,b=decodeURIComponent,E=JSON.stringify,T=o.addEventListener,x="https://"+t,B=undefined,S=(v.documentElement,"language"),$=/(bot|spider|crawl)/i.test(h),A={version:3};$&&(A.bot=!0);var I,R=function(e){f&&f.warn&&f.warn("Simple Analytics:",e)},_=(Date.now,function(){var t=o.crypto||o.msCrypto,e=[1e7]+-1e3+-4e3+-8e3+-1e11,n=/[018]/g;try{return e.replace(n,function(e){return(e^t.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)})}catch(r){return e.replace(n,function(e){var t=16*Math.random()|0;return(e<2?t:3&t|8).toString(16)})}}),j=function(){for(var e={},t=arguments,n=0;n<t.length;n++){var r=t[n];if(r)for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},k=function(e){var t=g.search.match(new RegExp("[?&]("+e+")=([^?&]+)","gi")),n=t?t.map(function(e){return e.split("=")[1]}):[];if(n&&n[0])return n[0]},C=function(t,e){t=j(A,t),(new Image).src=x+"/simple.gif?"+Object.keys(t).filter(function(e){return t[e]!=B}).map(function(e){return O(e)+"="+O(t[e])}).join("&")};try{I=Intl.DateTimeFormat().resolvedOptions().timeZone}catch(Z){}var N=v.querySelector('script[src*="'+t+'"]'),U=function(e,t){return e&&e.getAttribute("data-"+t)},q=(e.mode||U(N,"mode"),e.hostname||U(N,"hostname")||y);if((A.hostname=q)!==y&&(A.hostname_original=y),d in l&&"1"==l[d])return R(w+"when "+d+" is enabled");if(-1==y.indexOf(".")||/^[0-9]+$/.test(y.replace(/\./g,"")))return R(w+"from "+y);var D,z={},F=_(),H=(v.referrer||"").replace(y,q).replace(/^https?:\/\/((m|l|w{2,3}([0-9]+)?)\.)?([^?#]+)(.*)$/,"$4").replace(/^([^/]+)$/,"$1")||B,J="(utm_)?",L={source:k(J+"source|ref"),medium:k(J+"medium"),campaign:k(J+"campaign"),term:k(J+"term"),content:k(J+"content"),referrer:H},M="sendBeacon",P=function(e,t){var n={type:"append",original_id:t?e:F};!t&&M in l?l[M](x+"/append",E(j(A,n))):C(n)};T("unload",P,!1);var V=function(e){return e||b(g.pathname)};(s=V(r))&&D!=s&&(a={path:D=s},l[S]&&(a[S]=l[S]),c="navigation",p=(i=o.performance)&&i.getEntriesByType&&i.getEntriesByType(c)[0]&&i.getEntriesByType(c)[0].type?-1<["reload","back_forward"].indexOf(i.getEntriesByType(c)[0].type):i&&i[c]&&-1<[1,2].indexOf(i[c].type),u=!!H&&H.split("/")[0]==q,z=a,function(e,t,n){e&&P(""+F,!0),F=_(),z.id=F;var r=q+V();C(j(z,t?{referrer:n?H:null}:L,{https:g.protocol==m,timezone:I,type:"pageview"})),H=r}(n,n||p,u))}catch(Z){R(Z)}}(window,{},"<!--# echo var="http_host" default="" -->");
//# sourceMappingURL=light.js.map