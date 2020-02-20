/* Simple Analytics - Privacy friendly analytics (docs.simpleanalytics.com/script; 2020-02-20; 9196) */

!function(o,n,t){if(o){var e="https:",r=e+"//",i=o.console,a="doNotTrack",s=o.navigator,c=o.location,u=o.document,f=c.hostname,p="Not sending requests ",h=encodeURIComponent,m=decodeURIComponent,d=JSON.stringify,v=o.addEventListener,l=function(e){i&&i.warn&&i.warn("Simple Analytics:",e)},g=function(e){return Math.round((Date.now()-(e||0))/1e3)};v("error",function(e){e.filename&&-1<e.filename.indexOf(n)&&J(e.message)},!1);function y(e,n){return e&&e.getAttribute("data-"+n)}var w,E,S="pushState",x=o.dispatchEvent,O=u.querySelector('script[src*="'+n+'"]'),T=y(O,"mode"),q="true"===y(O,"skip-dnt"),b=y(O,"sa-global")||"sa";if(!q&&a in s&&"1"===s[a])return l(p+"when "+a+" is enabled");if(-1===f.indexOf("."))return l(p+"from localhost");try{function B(e){var n=c.search.match(new RegExp("[?&]("+e+")=([^?&]+)","gi")),t=n?n.map(function(e){return e.split("=")[1]}):[];if(t&&t[0])return t[0]}var I,$,_;try{I=Intl.DateTimeFormat().resolvedOptions().timeZone}catch(L){}function k(e){var n=m(c.pathname);if("hash"===T&&c.hash&&(n+=c.hash.split("?")[0]),_!==n){var t={path:_=n},r=o.performance,i="navigation",a=r&&r.getEntriesByType&&r.getEntriesByType(i)[0]&&r.getEntriesByType(i)[0].type?-1<["reload","back_forward"].indexOf(r.getEntriesByType(i)[0].type):r&&r[i]&&-1<[1,2].indexOf(r[i].type);t.unique=!e&&!a&&(!u.referrer||u.referrer.split("/")[2]!==f),$=t,function(e){N.source=e?null:A,H(N)}(e||a)}}var N={version:2,hostname:f,https:c.protocol===e,timezone:I,width:o.innerWidth},R="(utm_)?",A={source:B(R+"source|source|ref"),medium:B(R+"medium"),campaign:B(R+"campaign"),referrer:(u.referrer||"").replace(/^https?:\/\/((m|l|w{2,3}([0-9]+)?)\.)?([^?#]+)(.*)$/,"$4").replace(/^([^/]+)\/$/,"$1")||undefined},C=o.history;if((C?C.pushState:undefined)&&Event&&x){v(S,function(){k(1)},!(C.pushState=(E=C[w=S],function(){var e,n=E.apply(this,arguments);return"function"==typeof Event?e=new Event(w):(e=document.createEvent("Event")).initEvent(w,!0,!0),e.arguments=arguments,x(e),n}))),v("popstate",function(){k(1)},!1)}"hash"===T&&"onhashchange"in o&&v("hashchange",function(){k(1)},!1),k();function D(e){try{e=""+e instanceof Function?e():e}catch(n){l("in your event function: "+n.message),e="event_errored"}N.events=[e],N.event_id=M,N.source=A,H(N)}function F(e){D(e)}var M=Math.random().toString(36).slice(2);o[b]||(o[b]=F);var U=o[b],j=U&&U.q?U.q:[];for(var z in o[b]=F,j)D(j[z])}catch(L){J(L)}}function H(e){e.pageviews=[$],e.time=g(),l(e),(new Image).src=r+t+n+"/get.gif?json="+h(d(e))}function J(e){e=e.message||e,l(e),H({error:e,url:f+c.pathname})}}(window,"<!--# echo var="http_host" default="" -->","");