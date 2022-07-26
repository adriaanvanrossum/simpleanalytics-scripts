/* Simple Analytics - Privacy friendly analytics (docs.simpleanalytics.com/script; 2022-07-26; 6604; SRI-version; v9) */

!function(f,t,e,n,h){try{var i=undefined,d=!0,m=!1,r="true",a="https:",g="pageview",s="event",o="error",c=f.console,u="doNotTrack",v=f.navigator,l=f.location,y=l.host,_=f.document,p=v.userAgent,w="Not sending request ",b=w+"when ",x=m,E=encodeURIComponent,O=decodeURIComponent,S=JSON.stringify,A=f.addEventListener,q="https://"+e,M=_.documentElement||{},$="language",D="Height",j="scroll",k=v.userAgentData,C=j+D,H="offset"+D,P="client"+D,R="pagehide",T="platform",U="platformVersion",I="https://docs.simpleanalytics.com",V=/(bot|spider|crawl)/i.test(p)&&!/(cubot)/i.test(p),B=f.screen,N=_.currentScript||_.querySelector('script[src*="'+e+'"]');h=function(){var t=[].slice.call(arguments);t.unshift("Simple Analytics: "),Function.prototype.bind.call(c.warn,c).apply(c,t)};var z=function(t,e){h("Error in your "+t+" function:",e)},F=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},W=function(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")},G=function(t,e){return t&&t.getAttribute("data-"+e)},J=function(t){return Array.isArray(t)?t:"string"==typeof t&&t.length?t.split(/, ?/):[]},L=J(t.ignoreMetrics||G(N,"ignore-metrics")),Y=function(e){return 0===L.filter(function(t){return new RegExp("^"+e).test(t)}).length},Z=Date.now,K=function(){var e=f.crypto||f.msCrypto,t=[1e7]+-1e3+-4e3+-8e3+-1e11,n=/[018]/g;try{return t.replace(n,function(t){return(t^e.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)})}catch(r){return t.replace(n,function(t){var e=16*Math.random()|0;return(t<2?e:3&e|8).toString(16)})}},Q=function(t){return"function"==typeof t},X=function(t){return t&&t.constructor===Object},tt=function(){for(var t={},e=arguments,n=0;n<e.length;n++){var r=e[n];if(X(r))for(var a in r)F(r,a)&&(t[a]=r[a])}return t},et="namespace",nt=t[et]||G(N,et)||"sa",rt=f[nt+"_metadata"],at=function(t,e){X(rt)&&(t=tt(t,rt));var n=f[Et];if(!Q(n))return t;try{return tt(t,n.call(f,tt(t,e)))}catch(r){z("metadata",r)}},it=t.strictUtm||G(N,"strict-utm")==r,ot=function(a){return l.search.slice(1).split("&").filter(function(t){var e=a||!Y("ut"),n=wt.map(W).join("|"),r=e?"^("+n+")=":"^((utm_)"+(it?"":"?")+"(source|medium|content|term|campaign)"+(it?"":"|ref")+"|"+n+")=";return e&&!wt.length?m:new RegExp(r).test(t)}).join("&")||i},ct=nt+"_loaded";if(f[ct]==d)return h(w+"twice");f.sa_event_loaded=d,f[ct]=d;var st=function(e,t,n){e=n?e:tt(At,$t,e),v.brave&&!n&&(e.brave=d);var r=new Image;t&&(r.onerror=t,r.onload=t),r.src=q+"/simple.gif?"+Object.keys(e).filter(function(t){return e[t]!=i}).map(function(t){return E(t)+"="+E(e[t])}).join("&")+"&time="+Date.now()},ut=t.hostname||G(N,"hostname"),lt=ut||y,pt={version:"custom_proxy_9",hostname:lt};n=function(t){t=t.stack?t+" "+t.stack:t,h(t),st(tt(pt,{type:o,error:t,path:l.pathname}),i,d)},A(o,function(t){t.filename&&-1<t.filename.indexOf(e)&&n(t.message)},m);var ft,ht=Z(),dt=0,mt=t.mode||G(N,"mode"),gt=!!(Yt=t.collectDnt)===Yt?t.collectDnt:G(N,"ignore-dnt")==r||G(N,"skip-dnt")==r||G(N,"collect-dnt")==r,vt=!("false"==G(N,"auto-collect")||t.autoCollect===m),yt=t.saGlobal||G(N,"sa-global")||nt+"_"+s,_t=J(t.ignorePages||G(N,"ignore-pages")),wt=J(t.allowParams||G(N,"allow-params")),bt=J(t.nonUniqueHostnames||G(N,"non-unique-hostnames")),xt=t.pathOverwriter||G(N,"path-overwriter"),Et=t.metadataCollector||G(N,"metadata-collector");try{ft=Y("c")?Intl.DateTimeFormat().resolvedOptions().timeZone:i}catch(Zt){h(Zt)}var Ot=v.webdriver||f.__nightmare||f.callPhantom||f._phantom||f.phantom||f.__polypane||f._bot||V,St=Y("t")||Y("scro");Ot&&(pt.bot=d);var At=tt(pt,{ua:Y("us")?p:i,https:l.protocol==a,timezone:ft,page_id:St?K():i,session_id:Y("se")?K():i});if(At.sri=d,k&&(At.mobile=k.mobile,At.brands=S(k.brands)),_.doctype||h("Add DOCTYPE html for accurate dimensions"),lt!==y&&(At.hostname_original=y),!gt&&u in v&&"1"==v[u])return h(b+u+" is enabled. See "+I+"/dnt");-1!=y.indexOf(".")&&!/^[0-9.:]+$/.test(y)||ut||h("Set hostname on "+y+". See "+I+"/overwrite-domain-name");var qt,Mt,$t={},Dt=(_.referrer||"").replace(y,lt).replace(/^https?:\/\/((m|l|w{2,3}([0-9]+)?)\.)?([^?#]+)(.*)$/,"$4").replace(/^([^/]+)$/,"$1")||i,jt=0,kt=function(t,e){var n;St&&(n=tt(pt,{type:"append",original_id:e?t:At.page_id}),Y("t")&&(n.duration=Math.round((Z()-ht-jt)/1e3)),jt=0,ht=Z(),Y("scro")&&(n.scrolled=Math.max(0,dt,Ht())),e||!v.sendBeacon?st(n,i,d):v.sendBeacon(q+"/append",S(n)))};A("visibilitychange",function(){_.hidden?("on"+R in f||kt(),Mt=Z()):jt+=Z()-Mt},m),A(R,kt,m);var Ct=_.body||{},Ht=function(){try{var t=M[P]||0,e=Math.max(Ct[C]||0,Ct[H]||0,M[P]||0,M[C]||0,M[H]||0);return Math.min(100,5*Math.round(100*((M.scrollTop||0)+t)/e/5))}catch(Zt){return h(Zt),0}};A("load",function(){dt=Ht(),A(j,function(){dt<Ht()&&(dt=Ht())},m)});var Pt=function(t){var e="";try{e=t||O(l.pathname)}catch(Zt){h(Zt)}var n=f[xt];if(Q(n))try{e=n.call(f,{path:e})||e}catch(Zt){z("path",Zt)}if(!function(t){for(var e in _t){var n=_t[e];if(n){var r="/"==n[0]?n:"/"+n;if(r===t||new RegExp("^"+W(r).replace(/\\\*/gi,"(.*)")+"$","i").test(t))return d}}return m}(e))return"hash"==mt&&l.hash&&(e+=l.hash.split("?")[0]),e;h(b+"ignoring "+e)},Rt=function(t,e,n){var r=Pt(e);if(r&&qt!=r){qt=r,$t.path=r,Y("v")&&($t.viewport_width=Math.max(M.clientWidth||0,f.innerWidth||0)||null,$t.viewport_height=Math.max(M[P]||0,f.innerHeight||0)||null),Y("l")&&v[$]&&($t[$]=v[$]),B&&Y("sc")&&($t.screen_width=B.width,$t.screen_height=B.height);var a,i=f.performance,o="navigation";try{a=i.getEntriesByType(o)[0].type}catch(Zt){h(Zt)}var c=a?-1<["reload","back_forward"].indexOf(a):i&&i[o]&&-1<[1,2].indexOf(i[o].type),s=_.referrer.split("/")[2],u=Dt?-1<bt.indexOf(s)||s==y:m;$t.unique=t||c?m:!u,n=at(n,{type:g,path:$t.path});var l=function(){x=d,function(t,e,n,r){t&&kt(""+At.page_id,d),St&&(At.page_id=K());var a=lt+Pt();st({id:At.page_id,type:g,referrer:!e||n?Dt:null,query:ot(e),metadata:S(r)}),Dt=a}(t,t||c||!Y("r"),u,n)};if(x)l();else try{k&&Q(k.getHighEntropyValues)?k.getHighEntropyValues([T,U]).then(function(t){At.os_name=t[T],At.os_version=t[U],l()})["catch"](l):l()}catch(p){l()}}},Tt=f.history,Ut=Tt?Tt.pushState:i,It=f.dispatchEvent,Vt="pushState";vt&&Ut&&Event&&It&&(Tt.pushState=(Lt=Tt[Jt=Vt],function(){var t,e=arguments,n=Lt.apply(this,e);return Q(Event)?t=new Event(Jt):(t=_.createEvent("Event")).initEvent(Jt,d,d),t.arguments=e,It(t),n}),A(Vt,function(){Rt(1)},m),A("popstate",function(){Rt(1)},m)),vt&&"hash"==mt&&"onhashchange"in f&&A("hashchange",function(){Rt(1)},m),vt?Rt():f.sa_pageview=function(t,e){Rt(0,t,e)};var Bt=["string","number"],Nt=function(t,e,n){!n&&Q(e)&&(n=e);var r=Q(t),a=Q(n)?n:function(){},i=typeof t;if(Bt.indexOf(i)<0&&!r)return z(yt,s+" can't be "+i),a();try{if(r){var o=t();if(Bt.indexOf(typeof o)<0)return z(yt,t+" returns no string: "+o),a();t=o}}catch(Zt){return z(yt,Zt),a()}t=(""+t).replace(/[^a-z0-9]+/gi,"_").replace(/(^_|_$)/g,"");var c={type:s,event:t};e=at(e,c),t&&st(tt(c,{query:ot(),metadata:S(e)}),a)},zt=function(t,e){Nt(t,e)};f[yt]||(f[yt]=zt);var Ft=f[yt],Wt=Ft&&Ft.q?Ft.q:[];for(var Gt in f[yt]=zt,Wt)F(Wt,Gt)&&(Array.isArray(Wt[Gt])?Nt.apply(null,Wt[Gt]):Nt(Wt[Gt]))}catch(Kt){n(Kt)}var Jt,Lt,Yt}(window,{},"<!--# echo var="proxy_hostname" default="" --><!--# echo var="proxy_path" default="/simple" -->");
//# sourceMappingURL=proxy.js.map