(this.webpackJsonpwp=this.webpackJsonpwp||[]).push([[0],{28:function(t,e,n){},29:function(t,e,n){},48:function(t,e,n){},50:function(t,e,n){},55:function(t,e,n){},56:function(t,e,n){"use strict";n.r(e);var r=n(3),c=n.n(r),a=n(21),s=n.n(a),i=(n(28),n(29),n(2)),u=n.n(i),o=n(5),l=n(6),f=n(7),b="archive1x.wordpress.com",p=10,d=n(9),h=n.n(d),j={parseContent:function(t){return(new DOMParser).parseFromString(t,"text/html").querySelector("p").innerText},parseEncodedContent:function(t){return t&&t.length>4?t.substring(0,4)+t.substring(12):null},convertToObject:function(t){var e=atob(t);if(e&&"string"===typeof e)return JSON.parse(e)},fetchArchiveItem:function(){var t=Object(o.a)(u.a.mark((function t(e){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get(e).then((function(t){return t.data}));case 2:return n=t.sent,console.log(n),t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m={fetchPostsUrl:function(t,e,n){return"https://public-api.wordpress.com/rest/v1.1/sites/".concat(t,"/posts?number=").concat(n,"&page=").concat(e,"&fields=title,content")},fetchSearchPostsUrl:function(t,e,n,r){return"https://public-api.wordpress.com/rest/v1.1/sites/".concat(t,"/posts?number=").concat(n,"&page=").concat(e,"&fields=title,content&search=").concat(r)},fetchWpContent:function(){var t=Object(o.a)(u.a.mark((function t(){var e,n,r,c,a,s,i=arguments;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=i.length>0&&void 0!==i[0]?i[0]:b,n=i.length>1&&void 0!==i[1]?i[1]:b,r=i.length>2&&void 0!==i[2]?i[2]:p,c=i.length>3?i[3]:void 0,a=null,a=c?m.fetchSearchPostsUrl(e,n,r,c):m.fetchPostsUrl(e,n,r),t.prev=6,t.next=9,h.a.get(a).then((function(t){return t.data}));case 9:return s=t.sent,t.abrupt("return",s);case 13:return t.prev=13,t.t0=t.catch(6),t.abrupt("return",null);case 16:case"end":return t.stop()}}),t,null,[[6,13]])})));return function(){return t.apply(this,arguments)}}()},v=m,w={fetchDefaultContent:function(){var t=Object(o.a)(u.a.mark((function t(e,n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=6;break}return t.next=3,v.fetchWpContent(b,e,p,n);case 3:return t.abrupt("return",t.sent);case 6:return t.next=8,v.fetchWpContent(b,e,p);case 8:return t.abrupt("return",t.sent);case 9:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),fetchDataAndTransform:function(){var t=Object(o.a)(u.a.mark((function t(e,n){var r,c,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.fetchDefaultContent(e,n);case 2:return r=t.sent,c=[],r.posts.forEach((function(t,e){var n=t.content,r=t.title,a=j.parseContent(n),s=j.parseEncodedContent(a),i=j.convertToObject(s),u=Object(f.a)(Object(f.a)({},i),{},{title:r});c.push(u)})),a={found:r.found,posts:c},t.abrupt("return",a);case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},O=w,x=(n(48),["Metadata","Archive BitTorrent","BitTorrent","Thumbnail","BitTorrentContents","Text"]),g=[".NFO","__ia_thumb.jpg","Musafirboy Official.url"].map((function(t){return t.toLowerCase()})),k="ORIGINAL",C=k,N={fileLinks:function(t){if(!t)return[];if(t.dark)return[];var e=t.server,n=t.dir,r=t.files,c=t.metadata,a=[];if(r&&r.length>0)if(a=r.filter((function(t){return-1===x.indexOf(t.format)})).filter((function(t){return!function(t){var e=!1;return g.forEach((function(n){-1!==t.indexOf(n.toLowerCase())&&(e=!0)})),e}(t.name)})).filter((function(t){return"original"===t.source})),C===k){var s=c.identifier;a=a.map((function(t){return"https://".concat("archive.org","/download/").concat(s,"/").concat(t.name)}))}else a=a.map((function(t){return"https://".concat(e).concat(n,"/").concat(t.name)}));return console.log("FILES: ",a),a},downloadUrl:function(t){var e,n=null===t||void 0===t||null===(e=t.metadata)||void 0===e?void 0:e.identifer;return"https://archive.org/download/".concat(n)}},L=n(0),y=function(t){var e=t.url,n=t.fullLink,r=function(t,e){if(e){var n=t;return n=(n=(n=(n=n.replace("[","%5B")).replace("]","%5D")).replace(")","%29")).replace("(","%28")}return t.split("/").pop()};return function(t){try{return new URL(t),!0}catch(e){return console.log("ERR >> Invalid Link ",t),!1}}(e)&&Object(L.jsx)("a",{href:r(e,!0),target:"_blank",rel:"noreferrer",className:"ArchiveLinkTitle",children:r(e,n)})},S=(n(50),function(t){var e=t.title,n=t.url,c=Object(r.useState)(!1),a=Object(l.a)(c,2),s=a[0],i=a[1],b={status:"loading",items:null},p=Object(r.useState)(b),d=Object(l.a)(p,2),h=d[0],m=d[1],v=function(){var t=Object(o.a)(u.a.mark((function t(e){var n,r,c,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=s,i((function(t){return!t})),n){t.next=11;break}return m((function(t){return Object(f.a)(Object(f.a)({},t),{},{initialState:b})})),r=(r=e.replace("/details/","/metadata/")).replace("http://","https://"),t.next=8,j.fetchArchiveItem(r);case 8:c=t.sent,a=N.fileLinks(c),m((function(t){return Object(f.a)(Object(f.a)({},t),{},{status:"fetched",items:a})}));case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),w=["www-tamilblasters-re-","www-tamil-blasters-pl-","www-tamilblasters-re-","www-tamil-blasters-one-","www-1-tamil-mv-mx-","-torrent","www-tamil-blasters-ws-","www-tamil-blasters-nl-","www-tamil-blasters-me-","www-tamilblasters-me-","www-tamil-blasters-re-","www-tamil-blasters-uk-","www-tmil-blasters-me-","www-tamil-blasters-net-"];return Object(L.jsxs)("div",{className:"LinkItem",children:[Object(L.jsxs)("div",{className:"TitleItem",children:[Object(L.jsxs)("div",{children:[Object(L.jsx)("span",{className:"dot"}),Object(L.jsx)("a",{href:n,target:"_blank",rel:"noreferrer",children:function(t){var e="".concat(t);try{w.forEach((function(e){t=t.replace(e,"")}));var n=t.match(/((19|20)(\d{2}))/);if(n&&n.length>0){var r=t.split("-"+n[0]+"-");t=r[0]+" (".concat(n[0],") ")+r[1]}return t}catch(c){return e}}(e)}),Object(L.jsx)("span",{className:"resolution-badge badge badge-secondary",children:function(t){return t.includes("-720-p-")?"720p":t.includes("-1080-p-")?"1080p":null}(e)})]}),Object(L.jsx)("button",{className:"btn btn-default btn-sm links-btn",onClick:function(){return v(n)},children:"".concat(s?"- ":"+ "," Links")})]}),s&&Object(L.jsxs)("div",{className:"fileLinks",children:["loading"===h.status&&Object(L.jsx)("div",{children:" Loading... "}),"fetched"===h.status&&Object(L.jsxs)("ul",{children:[h.items&&0===h.items.length&&Object(L.jsx)("li",{children:"No Items"},n),h.items&&h.items.map((function(t){return Object(L.jsx)("li",{className:"file-link",children:Object(L.jsx)(y,{url:t,fullLink:false})})}))]})]})]})}),T=n(22),I=n(23),A=function(){var t=Object(r.useState)([]),e=Object(l.a)(t,2),n=e[0],c=e[1],a=Object(r.useState)(0),s=Object(l.a)(a,2),i=s[0],f=s[1],b=Object(r.useState)(1),d=Object(l.a)(b,2),h=d[0],j=d[1],m=Object(r.useState)(null),v=Object(l.a)(m,2),w=v[0],x=v[1],g=function(){var t=Object(o.a)(u.a.mark((function t(e){var n,r,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.fetchDataAndTransform(e);case 2:n=t.sent,r=n.found,a=n.posts,f(r),c(a);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),k=function(){var t=Object(o.a)(u.a.mark((function t(e){var n,r,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return j(e),t.next=3,O.fetchDataAndTransform(e,w);case 3:n=t.sent,r=n.found,a=n.posts,f(r),c(a);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(r.useEffect)((function(){w?k(h):g(h)}),[h]),Object(L.jsxs)("div",{className:"container Home",children:[Object(L.jsx)("div",{children:Object(L.jsxs)("h2",{children:["Archive WP"," - Page ",h]})}),Object(L.jsxs)("div",{children:[Object(L.jsx)("input",{type:"text",placeholder:"Search..",onKeyUp:function(t){return x(t.target.value)}}),Object(L.jsx)("button",{className:"btn btn-secondary btn-search",onClick:function(){return k(1)},children:Object(L.jsx)(T.a,{icon:I.a})})]}),Object(L.jsx)("div",{className:"LinkItemsContainer",children:n.map((function(t){return Object(L.jsx)(S,{url:t.url,title:t.title},t.url)}))}),Object(L.jsxs)("div",{className:"btn-container",children:[Object(L.jsx)("button",{className:"btn btn-info",disabled:1==h,onClick:function(){h>1&&j((function(t){return t-1}))},children:"Previous"}),Object(L.jsx)("button",{className:"btn btn-info",disabled:h==Math.ceil(i/p),onClick:function(){j((function(t){return t+1}))},children:"Next"})]})]})};n(55);var P=function(){return Object(L.jsx)("div",{className:"App",children:Object(L.jsx)(A,{})})},E=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,57)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),r(t),c(t),a(t),s(t)}))};s.a.render(Object(L.jsx)(c.a.StrictMode,{children:Object(L.jsx)(P,{})}),document.getElementById("root")),E()}},[[56,1,2]]]);
//# sourceMappingURL=main.5ac9ffdd.chunk.js.map