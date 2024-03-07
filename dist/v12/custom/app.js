/* Simple Analytics - Privacy friendly analytics (docs.simpleanalytics.com/script; 2024-03-07; 3ec0; SRI-version; v12) */

!function(l,t,e,n,p){try{var f=undefined,h=!0,d=!1,r="true",a="https:",m="pageview",u="event",i="error",o=l.console,c="doNotTrack",g=l.navigator,s=l.location,v=s.host,y=l.document,_=g.userAgent,w="Not sending request ",b=w+"when ",E=d,O=encodeURIComponent,x=decodeURIComponent,S=JSON.stringify,M=l.addEventListener,k="https://"+e,A=y.documentElement||{},q="language",j="Height",D="scroll",$=g.userAgentData,C=D+j,H="offset"+j,R="client"+j,P="pagehide",T="platform",U="platformVersion",I="https://docs.simpleanalytics.com",V=0,B=/(bot|spider|crawl)/i.test(_)&&!/(cubot)/i.test(_),N=l.screen,z=y.currentScript||y.querySelector('script[src*="'+e+'"]');p=function(){var t=[].slice.call(arguments);return t.unshift("Simple Analytics:"),Function.prototype.apply.call(o.warn,o,t)};var F=function(t,e){p("Error in your "+t+" function:",e)},W=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},G=function(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")},J=function(t,e){return t&&t.getAttribute("data-"+e)},L=function(t){return Array.isArray(t)?t:"string"==typeof t&&t.length?t.split(/, ?/):[]},Y=function(t){return t&&t.constructor===Object},Z=function(){for(var t={},e=arguments,n=0;n<e.length;n++){var r=e[n];if(Y(r))for(var a in r)W(r,a)&&(t[a]=r[a])}return t},K=l.sa_settings,Q=K||Object.keys(t).length;t=Z(t,K),Q&&p("Settings",t);var X=L(t.ignoreMetrics||J(z,"ignore-metrics")),tt=function(e){return 0===X.filter(function(t){return new RegExp("^"+e).test(t)}).length},et=Date.now,nt=function(){var e=l.crypto||l.msCrypto,t=[1e7]+-1e3+-4e3+-8e3+-1e11,n=/[018]/g;try{return t.replace(n,function(t){return(t^e.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)})}catch(r){return t.replace(n,function(t){var e=16*Math.random()|0;return(t<2?e:3&e|8).toString(16)})}},rt=function(t){return"function"==typeof t},at="namespace",it=t[at]||J(z,at)||"sa",ot=l[it+"_metadata"],ct=function(t,e){Y(ot)&&(t=Z(t,ot));var n=l[kt];if(!rt(n))return t;try{return Z(t,n.call(l,Z(t,e)))}catch(r){F("metadata",r)}},st=t.strictUtm||J(z,"strict-utm")==r,ut=function(a){return s.search.slice(1).split("&").filter(function(t){var e=a||!tt("ut"),n=xt.map(G).join("|"),r=e?"^("+n+")=":"^((utm_)"+(st?"":"?")+"(source|medium|content|term|campaign)"+(st?"":"|ref")+"|"+n+")=";return e&&!xt.length?d:new RegExp(r).test(t)}).join("&")||f},lt=it+"_loaded";if(l[lt]==h)return p(w+"twice");l.sa_event_loaded=h,l[lt]=h;var pt=function(e,t,n){e=n?e:Z(Dt,Ht,e),g.brave&&!n&&(e.brave=h),g._duckduckgoloader_&&!n&&(e.duck=h);var r=new Image;t&&(r.onerror=t,r.onload=t),r.src=k+"/simple.gif?"+Object.keys(e).filter(function(t){return e[t]!=f}).map(function(t){return O(t)+"="+O(e[t])}).join("&")+"&time="+Date.now()},ft=function(t){if(t)return t.replace(/^(https?:\/\/)?((m|l|w{2,3}([0-9]+)?)\.)?([^?#]+)(.*)$/,"$5")},ht=ft(t.hostname||J(z,"hostname")),dt=ft(ht||v),mt={version:"custom_app_12",hostname:dt};n=function(t){t=t.stack?t+" "+t.stack:t,p(t),pt(Z(mt,{type:i,error:t,path:s.pathname}),f,h)},M(i,function(t){t.filename&&-1<t.filename.indexOf(e)&&n(t.message)},d);var gt,vt=et(),yt=0,_t=t.mode||J(z,"mode"),wt=!!(ae=t.collectDnt)===ae?t.collectDnt:J(z,"ignore-dnt")==r||J(z,"skip-dnt")==r||J(z,"collect-dnt")==r,bt=!("false"==J(z,"auto-collect")||t.autoCollect===d),Et=t.saGlobal||J(z,"sa-global")||it+"_"+u,Ot=L(t.ignorePages||J(z,"ignore-pages")),xt=L(t.allowParams||J(z,"allow-params")),St=L(t.nonUniqueHostnames||J(z,"non-unique-hostnames")),Mt=t.pathOverwriter||J(z,"path-overwriter"),kt=t.metadataCollector||J(z,"metadata-collector");try{gt=tt("c")?Intl.DateTimeFormat().resolvedOptions().timeZone:f}catch(ie){p(ie)}var At=l.phantom,qt=g.webdriver||l.__nightmare||l.callPhantom||l._phantom||At&&!At.solana||l.__polypane||l._bot||B||Math.random()==Math.random(),jt=tt("t")||tt("scro");qt&&(mt.bot=h);var Dt=Z(mt,{ua:tt("us")?_:f,https:s.protocol==a,timezone:gt,page_id:jt?nt():f,session_id:tt("se")?nt():f});if(Dt.sri=h,$&&(Dt.mobile=$.mobile,Dt.brands=S($.brands)),y.doctype||p("Add DOCTYPE html for accurate dimensions"),dt!==v&&(Dt.hostname_original=v),!wt&&c in g&&"1"==g[c])return p(b+c+" is enabled. See "+I+"/dnt");-1!=v.indexOf(".")&&!/^[0-9.:]+$/.test(v)||ht||p("Set hostname on "+v+". See "+I+"/overwrite-domain-name");var $t,Ct,Ht={},Rt=function(){return ft((y.referrer||"").replace(v,dt))},Pt=Rt(),Tt=0,Ut=function(t,e){var n;jt&&(n=Z(mt,{type:"append",original_id:e?t:Dt.page_id}),tt("t")&&(n.duration=Math.round((et()-vt-Tt)/1e3)),Tt=0,vt=et(),tt("scro")&&(n.scrolled=Math.max(0,yt,Vt())),e||!g.sendBeacon?pt(n,f,h):g.sendBeacon(k+"/append",S(n)))};M("visibilitychange",function(){y.hidden?("on"+P in l||Ut(),Ct=et()):Tt+=et()-Ct},d),M(P,Ut,d);var It=y.body||{},Vt=function(){try{var t=A[R]||0,e=Math.max(It[C]||0,It[H]||0,A[R]||0,A[C]||0,A[H]||0);return Math.min(100,5*Math.round(100*((A.scrollTop||0)+t)/e/5))}catch(ie){return p(ie),0}};M("load",function(){yt=Vt(),M(D,function(){yt<Vt()&&(yt=Vt())},d)});var Bt,Nt,zt,Ft=function(t){var e="";try{e=t||x(s.pathname)}catch(ie){p(ie)}var n=l[Mt];if(rt(n))try{e=n.call(l,{path:e})||e}catch(ie){F("path",ie)}if(!function(t){for(var e in Ot){var n=Ot[e];if(n){var r="/"==n[0]?n:"/"+n;if(r===t||new RegExp("^"+G(r).replace(/\\\*/gi,"(.*)")+"$","i").test(t))return h}}return d}(e))return"hash"==_t&&s.hash&&(e+=s.hash.split("?")[0]),e;p(b+"ignoring "+e)},Wt=function(t,e,n){var r=Ft(e);if(r&&$t!=r){$t=r,Ht.path=r,tt("v")&&(Ht.viewport_width=Math.max(A.clientWidth||0,l.innerWidth||0)||null,Ht.viewport_height=Math.max(A[R]||0,l.innerHeight||0)||null),tt("l")&&g[q]&&(Ht[q]=g[q]),N&&tt("sc")&&(Ht.screen_width=N.width,Ht.screen_height=N.height);var a,i=l.performance,o="navigation";try{a=i.getEntriesByType(o)[0].type}catch(ie){p(ie)}zt=a?-1<["reload","back_forward"].indexOf(a):i&&i[o]&&-1<[1,2].indexOf(i[o].type);var c=Pt?Pt.split("/")[0]:f;Nt=Pt?-1<St.indexOf(c)||c==v:d,Ht.unique=/__cf_/.test(Rt())||t||zt?d:!Nt,n=ct(n,{type:m,path:Ht.path});var s=function(){E=h,function(t,e,n,r){t&&Ut(""+Dt.page_id,h),jt&&(Dt.page_id=nt());var a=dt+Ft();pt({id:Dt.page_id,type:m,referrer:!e||n?Pt:null,query:ut(e),metadata:S(r)}),Bt=Pt,Pt=a,V++}(t,t||zt||!tt("r"),Nt,n)};if(E)s();else try{$&&rt($.getHighEntropyValues)?$.getHighEntropyValues([T,U]).then(function(t){Dt.os_name=t[T],Dt.os_version=t[U],s()})["catch"](s):s()}catch(u){s()}}},Gt=l.history,Jt=Gt?Gt.pushState:f,Lt=l.dispatchEvent,Yt="pushState";bt&&Jt&&Event&&Lt&&(Gt.pushState=(re=Gt[ne=Yt],function(){var t,e=arguments,n=re.apply(this,e);return rt(Event)?t=new Event(ne):(t=y.createEvent("Event")).initEvent(ne,h,h),t.arguments=e,Lt(t),n}),M(Yt,function(){Wt(1)},d),M("popstate",function(){Wt(1)},d)),bt&&"hash"==_t&&"onhashchange"in l&&M("hashchange",function(){Wt(1)},d),bt&&Wt(),l.sa_pageview=function(t,e){Wt(0,t,e)};var Zt=["string","number"],Kt=function(t,e,n){!n&&rt(e)&&(n=e);var r=rt(t),a=rt(n)?n:function(){},i=typeof t;if(Zt.indexOf(i)<0&&!r)return F(Et,u+" can't be "+i),a();try{if(r){var o=t();if(Zt.indexOf(typeof o)<0)return F(Et,t+" returns no string: "+o),a();t=o}}catch(ie){return F(Et,ie),a()}t=(""+t).replace(/[^a-z0-9]+/gi,"_").replace(/(^_|_$)/g,"");var c={type:u,event:t},s=!zt&&V<2;e=ct(e,c),t&&pt(Z(c,{id:nt(),query:ut(!s),referrer:(s||Nt)&&tt("r")?Bt:null,metadata:S(e)}),a)},Qt=function(t,e,n){Kt(t,e,n)};l[Et]||(l[Et]=Qt);var Xt=l[Et],te=Xt&&Xt.q?Xt.q:[];for(var ee in l[Et]=Qt,te)W(te,ee)&&(Array.isArray(te[ee])?Kt.apply(null,te[ee]):Kt(te[ee]))}catch(oe){n(oe)}var ne,re,ae}(window,{},"<!--# echo var="http_host" default="" -->");
//# sourceMappingURL=app.js.map