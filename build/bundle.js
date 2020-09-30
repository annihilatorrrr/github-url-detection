var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function s(t){t.forEach(e)}function i(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t){return null==t?"":t}function r(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function c(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function m(){return d(" ")}function p(){return d("")}function f(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function g(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function h(t,e){t.value=null==e?"":e}let b;function w(t){b=t}const v=[],$=[],y=[],R=[],_=Promise.resolve();let S=!1;function k(t){y.push(t)}let P=!1;const L=new Set;function x(){if(!P){P=!0;do{for(let t=0;t<v.length;t+=1){const e=v[t];w(e),C(e.$$)}for(w(null),v.length=0;$.length;)$.pop()();for(let t=0;t<y.length;t+=1){const e=y[t];L.has(e)||(L.add(e),e())}y.length=0}while(v.length);for(;R.length;)R.pop()();S=!1,P=!1,L.clear()}}function C(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(k)}}const U=new Set;function W(t,e){t&&t.i&&(U.delete(t),t.i(e))}function E(t,e){t.d(1),e.delete(t.key)}function j(t,e){-1===t.$$.dirty[0]&&(v.push(t),S||(S=!0,_.then(x)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function T(o,a,r,l,u,d,m=[-1]){const p=b;w(o);const f=a.props||{},g=o.$$={fragment:null,ctx:null,props:d,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(p?p.$$.context:[]),callbacks:n(),dirty:m,skip_bound:!1};let h=!1;if(g.ctx=r?r(o,f,(t,e,...n)=>{const s=n.length?n[0]:e;return g.ctx&&u(g.ctx[t],g.ctx[t]=s)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](s),h&&j(o,t)),e}):[],g.update(),h=!0,s(g.before_update),g.fragment=!!l&&l(g.ctx),a.target){if(a.hydrate){const t=function(t){return Array.from(t.childNodes)}(a.target);g.fragment&&g.fragment.l(t),t.forEach(c)}else g.fragment&&g.fragment.c();a.intro&&W(o.$$.fragment),function(t,n,o){const{fragment:a,on_mount:r,on_destroy:l,after_update:c}=t.$$;a&&a.m(n,o),k(()=>{const n=r.map(e).filter(i);l?l.push(...n):s(n),t.$$.on_mount=[]}),c.forEach(k)}(o,a.target,a.anchor),x()}w(p)}var O=["400","401","402","403","404","405","406","407","408","409","410","411","412","413","414","415","416","417","418","419","420","421","422","423","424","425","426","427","428","429","430","431","500","501","502","503","504","505","506","507","508","509","510","511","about","access","account","admin","anonymous","any","api","apps","attributes","auth","billing","blob","blog","bounty","branches","business","businesses","c","cache","case-studies","categories","central","certification","changelog","cla","cloud","codereview","collection","collections","comments","commit","commits","community","companies","compare","contact","contributing","cookbook","coupons","customer-stories","customer","customers","dashboard","dashboards","design","develop","developer","diff","discover","discussions","docs","downloads","downtime","editor","editors","edu","enterprise","events","explore","featured","features","files","fixtures","forked","garage","ghost","gist","gists","graphs","guide","guides","help","help-wanted","home","hooks","hosting","hovercards","identity","images","inbox","individual","info","integration","interfaces","introduction","invalid-email-address","investors","issues","jobs","join","journal","journals","lab","labs","languages","launch","layouts","learn","legal","library","linux","listings","lists","login","logos","logout","mac","maintenance","malware","man","marketplace","mention","mentioned","mentioning","mentions","migrating","milestones","mine","mirrors","mobile","navigation","network","new","news","none","nonprofit","nonprofits","notices","notifications","oauth","offer","open-source","organisations","organizations","orgs","pages","partners","payments","personal","plans","plugins","popular","popularity","posts","press","pricing","professional","projects","pulls","raw","readme","recommendations","redeem","releases","render","reply","repositories","resources","restore","revert","save-net-neutrality","saved","scraping","search","security","services","sessions","settings","shareholders","shop","showcases","signin","signup","site","spam","sponsors","ssh","staff","starred","stars","static","status","statuses","storage","store","stories","styleguide","subscriptions","suggest","suggestion","suggestions","support","suspended","talks","teach","teacher","teachers","teaching","team","teams","ten","terms","timeline","topic","topics","tos","tour","train","training","translations","tree","trending","updates","username","users","visualization","w","watching","wiki","windows","works-with","www0","www1","www2","www3","www4","www5","www6","www7","www8","www9"];const M=t=>Boolean(document.querySelector(t)),q=(t=location)=>String(gt(t)).startsWith("blame/"),F=(t=location)=>ct(t)||V(t),G=(t=location)=>String(gt(t)).startsWith("commits"),N=(t=location)=>String(gt(t)).startsWith("compare"),z=(t=location)=>!A(t)&&/^$|^(orgs\/[^/]+\/)?dashboard(\/|$)/.test(ft(t)),A=(t=location)=>t.hostname.startsWith("gist.")||"gist"===t.pathname.split("/",2)[1],B=(t=location)=>["issues","pulls"].includes(t.pathname.split("/",2)[1]),H=(t=location)=>/^issues\/\d+/.test(gt(t))&&"GitHub · Where software is built"!==document.title,I=(t=location)=>"issues/new"===gt(t),D=()=>M('meta[name="hovercard-subject-tag"][content^="organization"]'),J=(t=location)=>/^orgs\/[^/]+\/teams\/[^/]+($|\/discussions)/.test(ft(t)),Q=(t=location)=>/^pull\/\d+/.test(gt(t))&&!K(t),K=(t=location)=>/^pull\/\d+\/conflicts/.test(gt(t)),V=(t=location)=>/^pull\/\d+\/commits\/[\da-f]{5,40}/.test(gt(t)),X=(t=location)=>/^pull\/\d+$/.test(gt(t)),Y=(t=location)=>/^pull\/\d+\/commits$/.test(gt(t)),Z=(t=location)=>/^pull\/\d+\/files/.test(gt(t)),tt=(t=location)=>/^[^/]+\/[^/]+/.test(ft(t))&&!O.includes(t.pathname.split("/",2)[1])&&!z(t)&&!A(t)&&!rt(t),et=(t=location)=>/^labels\/.+|^milestones\/\d+(?!\/edit)/.test(gt(t)),nt=(t=location)=>st(t)||it(t)||et(t),st=(t=location)=>String(gt(t)).startsWith("pulls"),it=(t=location)=>String(gt(t)).startsWith("issues")&&!/^issues\/(\d+|new|templates)($|\/)/.test(gt(t)),ot=(t=location)=>""===gt(t),at=t=>{const e=gt(null!=t?t:location);if(""===e)return!0;if(t)return/^tree\/[^/]+$/.test(e);const n=ht();return String(e).startsWith("tree/")&&document.title.startsWith(n)&&!document.title.endsWith(n)},rt=(t=location)=>"search"===t.pathname.slice(1).split("/")[2],lt=(t=location)=>at(t)||String(gt(t)).startsWith("tree/"),ct=(t=location)=>/^commit\/[\da-f]{5,40}/.test(gt(t)),ut=(t=location)=>String(gt(t)).startsWith("blob/"),dt=()=>M(".user-profile-nav"),mt=(t=location)=>Q(t)||H(t)||F(t)||J(t),pt=()=>document.querySelector('meta[name="user-login"]').getAttribute("content"),ft=(t=location)=>t.pathname.replace(/^\/|\/$/g,""),gt=(t=location)=>{if(tt(t))return ft(t).split("/").slice(2).join("/")},ht=t=>{if(!t){const e=document.querySelector('[property="og:url"]');t=e?new URL(e.content,location.origin):location}return t.pathname.slice(1).split("/",2).join("/")},bt={getUsername:pt,getCleanPathname:ft,getRepoPath:gt,getRepoURL:ht};var wt=Object.freeze({__proto__:null,canUserEditOrganization:()=>D()&&M('.pagehead-tabs-item[href$="/settings/profile"]'),canUserEditRepo:()=>tt()&&M('.reponav-item[href$="/settings"], [data-tab-item="settings-tab"]'),hasCode:(t=location)=>mt(t)||lt(t)||ut(t)||A(t)||N(t)||q(t),hasComments:mt,hasRichTextEditor:(t=location)=>mt(t)||I(t)||N(t),is404:()=>"Page not found · GitHub"===document.title,is500:()=>"Server Error · GitHub"===document.title||"Unicorn! · GitHub"===document.title||"504 Gateway Time-out"===document.title,isActionJobRun:(t=location)=>String(gt(t)).startsWith("runs/"),isBlame:q,isBranches:(t=location)=>String(gt(t)).startsWith("branches"),isCommit:F,isCommitList:(t=location)=>G(t)||Y(t),isCompare:N,isConversation:(t=location)=>H(t)||X(t),isConversationList:(t=location)=>B(t)||nt(t),isDashboard:z,isEditingFile:(t=location)=>String(gt(t)).startsWith("edit"),isEditingRelease:(t=location)=>String(gt(t)).startsWith("releases/edit"),isEmptyRepo:()=>M('[aria-label="Cannot fork because repository is empty."]'),isEmptyRepoRoot:()=>ot()&&!M('link[rel="canonical"]'),isEnterprise:(t=location)=>"github.com"!==t.hostname&&"gist.github.com"!==t.hostname,isFileFinder:(t=location)=>String(gt(t)).startsWith("find/"),isForkedRepo:()=>M('meta[name="octolytics-dimension-repository_is_fork"][content="true"]'),isGist:A,isGlobalConversationList:B,isGlobalSearchResults:(t=location)=>"/search"===t.pathname&&null!==new URLSearchParams(t.search).get("q"),isIssue:H,isLabelList:(t=location)=>"labels"===gt(t),isMarketplaceAction:(t=location)=>t.pathname.startsWith("/marketplace/actions/"),isMilestone:(t=location)=>/^milestone\/\d+/.test(gt(t)),isMilestoneList:(t=location)=>"milestones"===gt(t),isNewIssue:I,isNewRelease:(t=location)=>"releases/new"===gt(t),isNewRepo:(t=location)=>"/new"===t.pathname,isNotifications:(t=location)=>"notifications"===ft(t),isOrganizationDiscussion:J,isOrganizationProfile:D,isOwnOrganizationProfile:()=>D()&&!M('[href*="contact/report-abuse?report="]'),isOwnUserProfile:()=>ft()===pt(),isPR:Q,isPRCommit:V,isPRCommit404:()=>V()&&document.title.startsWith("Commit range not found · Pull Request"),isPRCommitList:Y,isPRConflicts:K,isPRConversation:X,isPRFile404:()=>Z()&&document.title.startsWith("Commit range not found · Pull Request"),isPRFiles:Z,isPRList:(t=location)=>"/pulls"===t.pathname||"pulls"===gt(t),isProject:(t=location)=>/^projects\/\d+/.test(gt(t)),isQuickPR:(t=location)=>N(t)&&/[?&]quick_pull=1(&|$)/.test(t.search),isReleasesOrTags:(t=location)=>/^tags$|^releases($|\/tag)/.test(gt(t)),isRepo:tt,isRepoCommitList:G,isRepoConversationList:nt,isRepoHome:ot,isRepoIssueList:it,isRepoMainSettings:(t=location)=>"settings"===gt(t),isRepoPRList:st,isRepoRoot:at,isRepoSearch:rt,isRepoSettings:(t=location)=>String(gt(t)).startsWith("settings"),isRepoTaxonomyConversationList:et,isRepoTree:lt,isSingleCommit:ct,isSingleFile:ut,isSingleGist:(t=location)=>A(t)&&/^\/(gist\/)?[^/]+\/[\da-f]{32}$/.test(t.pathname),isSingleTag:(t=location)=>/^(releases\/tag)/.test(gt(t)),isTrending:(t=location)=>"/trending"===t.pathname||t.pathname.startsWith("/trending/"),isUserProfile:dt,isUserProfileFollowersTab:()=>dt()&&"followers"===new URLSearchParams(location.search).get("tab"),isUserProfileFollowingTab:()=>dt()&&"following"===new URLSearchParams(location.search).get("tab"),isUserProfileMainTab:()=>M('[aria-label="User profile"] > .selected:first-child'),isUserProfileRepoTab:()=>dt()&&"repositories"===new URLSearchParams(location.search).get("tab"),isUserProfileStarsTab:()=>dt()&&"stars"===new URLSearchParams(location.search).get("tab"),utils:bt});function vt(t,e,n){const s=t.slice();return s[4]=e[n].name,s[5]=e[n].detect,s[6]=e[n].result,s}function $t(e){let n;return{c(){n=u("p"),n.textContent="URL entered isn’t valid"},m(t,e){l(t,n,e)},p:t,d(t){t&&c(n)}}}function yt(t){let e,n,s=[],i=new Map,o=t[2];const a=t=>t[4];for(let e=0;e<o.length;e+=1){let n=vt(t,o,e),r=a(n);i.set(r,s[e]=St(r,n))}return{c(){e=u("pre"),n=u("code");for(let t=0;t<s.length;t+=1)s[t].c()},m(t,i){l(t,e,i),r(e,n);for(let t=0;t<s.length;t+=1)s[t].m(n,null)},p(t,e){if(4&e){const o=t[2];s=function(t,e,n,s,i,o,a,r,l,c,u,d){let m=t.length,p=o.length,f=m;const g={};for(;f--;)g[t[f].key]=f;const h=[],b=new Map,w=new Map;for(f=p;f--;){const t=d(i,o,f),r=n(t);let l=a.get(r);l?s&&l.p(t,e):(l=c(r,t),l.c()),b.set(r,h[f]=l),r in g&&w.set(r,Math.abs(f-g[r]))}const v=new Set,$=new Set;function y(t){W(t,1),t.m(r,u),a.set(t.key,t),u=t.first,p--}for(;m&&p;){const e=h[p-1],n=t[m-1],s=e.key,i=n.key;e===n?(u=e.first,m--,p--):b.has(i)?!a.has(s)||v.has(s)?y(e):$.has(i)?m--:w.get(s)>w.get(i)?($.add(s),y(e)):(v.add(i),m--):(l(n,a),m--)}for(;m--;){const e=t[m];b.has(e.key)||l(e,a)}for(;p;)y(h[p-1]);return h}(s,e,a,1,t,o,i,n,E,St,null,vt)}},d(t){t&&c(e);for(let t=0;t<s.length;t+=1)s[t].d()}}}function Rt(t){let e,n,s,i=t[4]+"";return{c(){e=u("div"),n=d(i),s=d("() // undeterminable via URL"),f(e,"class","undefined svelte-1mf70v2")},m(t,i){l(t,e,i),r(e,n),r(e,s)},p(t,e){4&e&&i!==(i=t[4]+"")&&g(n,i)},d(t){t&&c(e)}}}function _t(t){let e,n,s,i,o,m,p=t[4]+"",h=String(t[6])+"";return{c(){e=u("div"),n=d(p),s=d("(url) // "),i=u("span"),o=d(h),f(i,"class","svelte-1mf70v2"),f(e,"class",m=a(String(t[6]))+" svelte-1mf70v2")},m(t,a){l(t,e,a),r(e,n),r(e,s),r(e,i),r(i,o)},p(t,s){4&s&&p!==(p=t[4]+"")&&g(n,p),4&s&&h!==(h=String(t[6])+"")&&g(o,h),4&s&&m!==(m=a(String(t[6]))+" svelte-1mf70v2")&&f(e,"class",m)},d(t){t&&c(e)}}}function St(t,e){let n,s;function i(t,e){return t[5]?_t:Rt}let o=i(e),a=o(e);return{key:t,first:null,c(){n=p(),a.c(),s=p(),this.first=n},m(t,e){l(t,n,e),a.m(t,e),l(t,s,e)},p(t,e){o===(o=i(t))&&a?a.p(t,e):(a.d(1),a=o(t),a&&(a.c(),a.m(s.parentNode,s)))},d(t){t&&c(n),a.d(t),t&&c(s)}}}function kt(e){let n,s,i,o,a,d,g,b,w,v,$,y,R,_,S;function k(t,e){return t[1]?yt:$t}let P=k(e),L=P(e);return{c(){n=u("label"),s=u("span"),s.textContent="URL:",i=m(),o=u("input"),a=m(),d=u("datalist"),g=u("option"),b=u("option"),w=u("option"),v=u("option"),$=u("option"),y=m(),L.c(),R=p(),f(o,"type","text"),f(o,"placeholder",Pt),f(o,"autocomplete","off"),f(o,"autocorrect","off"),f(o,"list","url-examples"),f(o,"class","svelte-1mf70v2"),g.__value="https://github.big-corp.com/gist/",g.value=g.__value,b.__value="https://github.com/marketplace/actions/urlchecker-action",b.value=b.__value,w.__value="https://github.com/sindresorhus/refined-github/pull/148",w.value=w.__value,v.__value="https://github.com/sindresorhus/refined-github/edit/master/readme.md",v.value=v.__value,$.__value="https://github.com/sindresorhus/refined-github/commit/5b614b9035f2035b839f48b4db7bd5c3298d526f",$.value=$.__value,f(d,"id","url-examples")},m(t,c){var u,m,p,f;l(t,n,c),r(n,s),r(n,i),r(n,o),h(o,e[0]),l(t,a,c),l(t,d,c),r(d,g),r(d,b),r(d,w),r(d,v),r(d,$),l(t,y,c),L.m(t,c),l(t,R,c),_||(u=o,m="input",p=e[3],u.addEventListener(m,p,f),S=()=>u.removeEventListener(m,p,f),_=!0)},p(t,[e]){1&e&&o.value!==t[0]&&h(o,t[0]),P===(P=k(t))&&L?L.p(t,e):(L.d(1),L=P(t),L&&(L.c(),L.m(R.parentNode,R)))},i:t,o:t,d(t){t&&c(n),t&&c(a),t&&c(d),t&&c(y),L.d(t),t&&c(R),_=!1,S()}}}const Pt="https://github.com/fregante/github-url-detection";function Lt(t,e,n){let s,{url:i=""}=e,o=[];return t.$$set=t=>{"url"in t&&n(0,i=t.url)},t.$$.update=()=>{if(1&t.$$.dirty)try{new URL(i||Pt),n(1,s=!0)}catch(t){n(1,s=!1)}3&t.$$.dirty&&s&&n(2,o=Object.entries(wt).map(([t,e])=>{if("function"==typeof e)return String(e).startsWith("()")?{name:t}:{name:t,detect:e,result:e(new URL(i||Pt))}}).filter(Boolean).sort((t,e)=>t.result||e.result?t.result?e.result?0:-1:1:t.detect||e.detect?t.detect?e.detect?0:1:-1:void 0))},[i,s,o,function(){i=this.value,n(0,i)}]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),T(this,t,Lt,kt,o,{url:0})}}({target:document.querySelector("main")})}();
//# sourceMappingURL=bundle.js.map
