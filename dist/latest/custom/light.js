/* Simple Analytics - Privacy friendly analytics (docs.simpleanalytics.com/script; 2020-01-24; 05a6) */

!function(e,t){if(e){function n(e){c&&c.warn&&c.warn("Simple Analytics: "+e)}function r(e,t){return e&&e.getAttribute("data-"+t)}var a,s,i="https:",o="https://"+t+"/v2/post",c=e.console,u="doNotTrack",h="pageviews",p="events",d=e.navigator,l=d.userAgent,f=e.location,m=e.document,g=f.hostname,v="Not sending requests ",w="localhost",y=e.addEventListener,S="pushState",b=e.dispatchEvent,E=m.querySelector('script[src*="'+t+'"]'),T=r(E,"mode"),q="true"===r(E,"skip-dnt");r(E,"sa-global");if(!q&&u in d&&"1"===d[u])return n(v+"when "+u+" is enabled");if(g===w||"file:"===f.protocol)return n(v+"from "+w);if(!l||-1<l.search(/(bot|spider|crawl)/gi))return n(v+"because bot detected");try{function R(e){var t=f.search.match(new RegExp("[?&]("+e+")=([^?&]+)","gi")),n=t?t.map(function(e){return e.split("=")[1]}):[];if(n&&n[0])return n[0]}var $;try{$=Intl.DateTimeFormat().resolvedOptions().timeZone}catch(L){}function x(e){return Math.round((Date.now()-(e||0))/1e3)}var A,H="(utm_)?",I={version:2,hostname:g,https:f.protocol===i,timezone:$,width:e.innerWidth,source:{source:R(H+"source|source|ref"),medium:R(H+"medium"),campaign:R(H+"campaign"),referrer:(m.referrer||"").replace(/^https?:\/\/((m|l|w{2,3}([0-9]+)?)\.)?([^?#]+)(.*)$/,"$4").replace(/^([^/]+)\/$/,"$1")||undefined},pageviews:[]},N="sendBeacon",O=JSON.stringify,k=N in d&&!1===/ip(hone|ad)(.*)os\s([1-9]|1[0-2])_/i.test(l);k&&y("unload",function(){I[h][I[h].length-1];I.time=x(),d[N](o,O(I))},!1);function C(e){var t=f.pathname;if("hash"===T&&f.hash&&(t+=f.hash.split("?")[0]),A!==t){var n={path:A=t,added:x()};!function(e,t,n){var r=I[h],a=r?r.length:0;a&&r[a-1];if(e===p);else if(r.push(t),k)return;var s=new XMLHttpRequest;s.open("POST",o,!0),n&&delete I.source,I.time=x(),s.setRequestHeader("Content-Type","text/plain; charset=UTF-8"),s.send(O(I)),delete I[h],delete I[p]}(h,n,e)}}var D=e.history;if((D?D.pushState:null)&&Event&&b){y(S,function(){C(1)},!(D.pushState=(s=D[a=S],function(){var e=s.apply(this,arguments),t=new Event(a);return t.arguments=arguments,b(t),e}))),y("popstate",function(){C(1)},!1)}"hash"===T&&"onhashchange"in e&&y("hashchange",function(){C(1)},!1),C()}catch(L){n(L.message);var F=o+"image.gif";L.message&&(F=F+"?error="+encodeURIComponent(L.message)),(new Image).src=F}}}(window,"<!--# echo var="http_host" default="" -->");