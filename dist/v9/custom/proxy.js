/* Simple Analytics - Privacy friendly analytics (docs.simpleanalytics.com/script; 2022-07-23; 3ea0; SRI-version; v9) */

!function(l,t,e,n){try{var i=undefined,p=!0,f=!1,r="true",a="https:",h="pageview",c="event",s="error",o=l.console,u="doNotTrack",d=l.navigator,m=l.location,g=m.host,v=l.document,y=d.userAgent,_="Not sending request ",w=f,b=encodeURIComponent,E=decodeURIComponent,x=JSON.stringify,O=l.addEventListener,S="https://"+e,A=v.documentElement||{},q="language",M="Height",T="scroll",B=d.userAgentData,D=T+M,j="offset"+M,C="client"+M,H="pagehide",P="platform",R="platformVersion",$="https://docs.simpleanalytics.com",U=/(bot|spider|crawl)/i.test(y)&&!/(cubot)/i.test(y),k=l.screen,I=v.currentScript||v.querySelector('script[src*="'+e+'"]'),V=function(t){o&&o.warn&&o.warn("Simple Analytics:",t)},N=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},z=function(t,e){return t&&t.getAttribute("data-"+e)},W=function(t){return Array.isArray(t)?t:"string"==typeof t&&t.length?t.split(/, ?/):[]},F=W(t.ignoreMetrics||z(I,"ignore-metrics")),G=function(e){return 0===F.filter(function(t){return new RegExp("^"+e).test(t)}).length},J=Date.now,L=function(){var e=l.crypto||l.msCrypto,t=[1e7]+-1e3+-4e3+-8e3+-1e11,n=/[018]/g;try{return t.replace(n,function(t){return(t^e.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)})}catch(r){return t.replace(n,function(t){var e=16*Math.random()|0;return(t<2?e:3&e|8).toString(16)})}},Y=function(t){return"function"==typeof t},Z=function(t){return t&&t.constructor===Object},K=function(){for(var t={},e=arguments,n=0;n<e.length;n++){var r=e[n];if(Z(r))for(var a in r)N(r,a)&&(t[a]=r[a])}return t},Q="namespace",X=t[Q]||z(I,Q)||"sa",tt=l[X+"_metadata"],et=function(t,e){Z(tt)&&(t=K(t,tt));var n=l[_t];if(!Y(n))return t;try{return K(t,n.call(l,K(e,t)))}catch(r){V(s+" in your metadata function: "+r)}},nt=t.strictUtm||z(I,"strict-utm")==r,rt=function(a){return m.search.slice(1).split("&").filter(function(t){var e=a||!G("ut"),n=gt.join("|"),r=e?"^("+n+")=":"^((utm_)"+(nt?"":"?")+"(source|medium|content|term|campaign)"+(nt?"":"|ref")+"|"+n+")=";return e&&!gt.length?f:new RegExp(r).test(t)}).join("&")||i},at=X+"_loaded";if(l[at]==p)return V(_+"twice");l.sa_event_loaded=p,l[at]=p;var it=function(n,r,a){return wt(function(t){n=a?n:K(xt,At,n),t&&!a&&(n.brave=p);var e=new Image;r&&(e.onerror=r,e.onload=r),e.src=S+"/simple.gif?"+Object.keys(n).filter(function(t){return n[t]!=i}).map(function(t){return b(t)+"="+b(n[t])}).join("&")+"&time="+Date.now()})};n=function(t){t=t.message||t,V(t),it({type:s,error:t,url:ft+m.pathname})},O(s,function(t){t.filename&&-1<t.filename.indexOf(e)&&n(t.message)},f);var ot,ct=J(),st=0,ut=t.mode||z(I,"mode"),lt=!!(Gt=t.collectDnt)===Gt?t.collectDnt:z(I,"ignore-dnt")==r||z(I,"skip-dnt")==r||z(I,"collect-dnt")==r,pt=t.hostname||z(I,"hostname"),ft=pt||g,ht=!("false"==z(I,"auto-collect")||t.autoCollect===f),dt=t.saGlobal||z(I,"sa-global")||X+"_"+c,mt=W(t.ignorePages||z(I,"ignore-pages")),gt=W(t.allowParams||z(I,"allow-params")),vt=W(t.nonUniqueHostnames||z(I,"non-unique-hostnames")),yt=t.pathOverwriter||z(I,"path-overwriter"),_t=t.metadataCollector||z(I,"metadata-collector"),wt=function(t){d.brave?d.brave.isBrave().then(function(){t(p)})["catch"](function(){t(f)}):t(f)};try{ot=G("c")?Intl.DateTimeFormat().resolvedOptions().timeZone:i}catch(Jt){}var bt=d.webdriver||l.__nightmare||l.callPhantom||l._phantom||l.phantom||l.__polypane||l._bot||U,Et=G("t")||G("scro"),xt={version:"custom_proxy_9",ua:G("us")?y:i,https:m.protocol==a,timezone:ot,hostname:ft,page_id:Et?L():i,session_id:G("se")?L():i};if(bt&&(xt.bot=p),xt.sri=p,B&&(xt.mobile=B.mobile,xt.brands=x(B.brands)),v.doctype||V("Add DOCTYPE html for accurate dimensions"),ft!==g&&(xt.hostname_original=g),!lt&&u in d&&"1"==d[u])return V(_+"when "+u+" is enabled. See "+$+"/dnt");-1!=g.indexOf(".")&&!/^[0-9.:]+$/.test(g)||pt||V("Set hostname on "+g+". See "+$+"/overwrite-domain-name");var Ot,St,At={},qt=(v.referrer||"").replace(g,ft).replace(/^https?:\/\/((m|l|w{2,3}([0-9]+)?)\.)?([^?#]+)(.*)$/,"$4").replace(/^([^/]+)$/,"$1")||i,Mt=0,Tt=function(t,e){var n;Et&&(n={type:"append",hostname:ft,original_id:e?t:xt.page_id},G("t")&&(n.duration=Math.round((J()-ct-Mt)/1e3)),Mt=0,ct=J(),G("scro")&&(n.scrolled=Math.max(0,st,Dt())),e||!d.sendBeacon?it(n,i,p):d.sendBeacon(S+"/append",x(n)))};O("visibilitychange",function(){v.hidden?("on"+H in l||Tt(),St=J()):Mt+=J()-St},f),O(H,Tt,f);var Bt=v.body||{},Dt=function(){try{var t=A[C]||0,e=Math.max(Bt[D]||0,Bt[j]||0,A[C]||0,A[D]||0,A[j]||0);return Math.min(100,5*Math.round(100*((A.scrollTop||0)+t)/e/5))}catch(n){return 0}};O("load",function(){st=Dt(),O(T,function(){st<Dt()&&(st=Dt())},f)});var jt=function(t){var e="";try{e=t||E(m.pathname)}catch(Jt){}var n=l[yt];if(Y(n)&&(e=n.call(l,e)),!function(t){for(var e in mt){var n=mt[e];if(n){var r="/"==n[0]?n:"/"+n;try{if(r===t||new RegExp(r.replace(/\*/gi,"(.*)"),"gi").test(t))return p}catch(a){return f}}}return f}(e))return"hash"==ut&&m.hash&&(e+=m.hash.split("?")[0]),e;V(_+", ignored "+e)},Ct=function(t,e,n){var r=jt(e);if(r&&Ot!=r){Ot=r,At.path=r,G("v")&&(At.viewport_width=Math.max(A.clientWidth||0,l.innerWidth||0)||null,At.viewport_height=Math.max(A[C]||0,l.innerHeight||0)||null),G("l")&&d[q]&&(At[q]=d[q]),k&&G("sc")&&(At.screen_width=k.width,At.screen_height=k.height);var a=l.performance,i="navigation",o=a&&a.getEntriesByType&&a.getEntriesByType(i)[0]&&a.getEntriesByType(i)[0].type?-1<["reload","back_forward"].indexOf(a.getEntriesByType(i)[0].type):a&&a[i]&&-1<[1,2].indexOf(a[i].type),c=v.referrer.split("/")[2],s=qt?-1<vt.indexOf(c)||c==g:f;At.unique=t||o?f:!s,n=et(n,{type:h,path:At.path});var u=function(){w=p,function(t,e,n,r){t&&Tt(""+xt.page_id,p),Et&&(xt.page_id=L());var a=ft+jt();it({id:xt.page_id,type:h,referrer:!e||n?qt:null,query:rt(e),metadata:x(r)}),qt=a}(t,t||o||!G("r"),s,n)};if(w)u();else try{B&&Y(B.getHighEntropyValues)?B.getHighEntropyValues([P,R]).then(function(t){xt.os_name=t[P],xt.os_version=t[R],u()})["catch"](u):u()}catch(Jt){u()}}},Ht=l.history,Pt=Ht?Ht.pushState:i,Rt=l.dispatchEvent,$t="pushState";ht&&Pt&&Event&&Rt&&(Ht.pushState=(Ft=Ht[Wt=$t],function(){var t,e=arguments,n=Ft.apply(this,e);return Y(Event)?t=new Event(Wt):(t=v.createEvent("Event")).initEvent(Wt,p,p),t.arguments=e,Rt(t),n}),O($t,function(){Ct(1)},f),O("popstate",function(){Ct(1)},f)),ht&&"hash"==ut&&"onhashchange"in l&&O("hashchange",function(){Ct(1)},f),ht?Ct():l.sa_pageview=function(t,e){Ct(0,t,e)};var Ut=["string","number"],kt=function(t,e,n){!n&&Y(e)&&(n=e);var r=Y(t),a=Y(n)?n:function(){};if(Ut.indexOf(typeof t)<0&&!r)return V(c+" isn't a string: "+t),a();try{if(r&&(t=t(),Ut.indexOf(typeof t)<0))return V(c+" function output isn't a string: "+t),a()}catch(o){return V(s+" in your event function: "+o),a()}t=(""+t).replace(/[^a-z0-9]+/gi,"_").replace(/(^_|_$)/g,"");var i={type:c,event:t};e=et(e,i),t&&it(K(i,{query:rt(),metadata:x(e)}),a)},It=function(t,e){kt(t,e)};l[dt]||(l[dt]=It);var Vt=l[dt],Nt=Vt&&Vt.q?Vt.q:[];for(var zt in l[dt]=It,Nt)N(Nt,zt)&&(Array.isArray(Nt[zt])?kt.apply(null,Nt[zt]):kt(Nt[zt]))}catch(Jt){n(Jt)}var Wt,Ft,Gt}(window,{},"<!--# echo var="proxy_hostname" default="" --><!--# echo var="proxy_path" default="/simple" -->");
//# sourceMappingURL=proxy.js.map