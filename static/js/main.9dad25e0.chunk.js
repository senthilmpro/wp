(this.webpackJsonpwp=this.webpackJsonpwp||[]).push([[0],{40:function(t,e,n){},41:function(t,e,n){},65:function(t,e,n){},66:function(t,e,n){},69:function(t,e,n){},70:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n.n(r),a=n(32),s=n.n(a),i=(n(40),n(41),n(4)),o=n.n(i),u=n(9),l=n(11),f=n(35),p=n(33),b=n(3),d="archive1x.wordpress.com",h=10,j=n(12),m=n(16),v=n.n(m),O={parseContent:function(t){return(new DOMParser).parseFromString(t,"text/html").querySelector("p").innerText},parseEncodedContent:function(t){return t&&t.length>4?t.substring(0,4)+t.substring(12):null},convertToObject:function(t){var e=atob(t);if(e&&"string"===typeof e)return JSON.parse(e)},fetchArchiveItem:function(){var t=Object(u.a)(o.a.mark((function t(e){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.get(e).then((function(t){return t.data}));case 2:return n=t.sent,console.log(n),t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},w={fetchPostsUrl:function(t,e,n){return"https://public-api.wordpress.com/rest/v1.1/sites/".concat(t,"/posts?number=").concat(n,"&page=").concat(e,"&fields=title,content")},fetchSearchPostsUrl:function(t,e,n,r){return"https://public-api.wordpress.com/rest/v1.1/sites/".concat(t,"/posts?number=").concat(n,"&page=").concat(e,"&fields=title,content&search=").concat(r)},fetchWpContent:function(){var t=Object(u.a)(o.a.mark((function t(){var e,n,r,c,a,s,i=arguments;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=i.length>0&&void 0!==i[0]?i[0]:d,n=i.length>1&&void 0!==i[1]?i[1]:d,r=i.length>2&&void 0!==i[2]?i[2]:h,c=i.length>3?i[3]:void 0,a=null,a=c?w.fetchSearchPostsUrl(e,n,r,c):w.fetchPostsUrl(e,n,r),t.prev=6,t.next=9,v.a.get(a).then((function(t){return t.data}));case 9:return s=t.sent,t.abrupt("return",s);case 13:return t.prev=13,t.t0=t.catch(6),t.abrupt("return",null);case 16:case"end":return t.stop()}}),t,null,[[6,13]])})));return function(){return t.apply(this,arguments)}}()},x=w,g={fetchDefaultContent:function(){var t=Object(u.a)(o.a.mark((function t(e,n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=6;break}return t.next=3,x.fetchWpContent(d,e,h,n);case 3:return t.abrupt("return",t.sent);case 6:return t.next=8,x.fetchWpContent(d,e,h);case 8:return t.abrupt("return",t.sent);case 9:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),fetchDataAndTransform:function(){var t=Object(u.a)(o.a.mark((function t(e,n){var r,c,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.fetchDefaultContent(e,n);case 2:return r=t.sent,c=[],r.posts.forEach((function(t,e){var n=t.content,r=t.title,a=O.parseContent(n),s=O.parseEncodedContent(a),i=O.convertToObject(s),o=Object(j.a)(Object(j.a)({},i),{},{title:r});c.push(o)})),a={found:r.found,posts:c},t.abrupt("return",a);case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},k=g,C=["Metadata","Archive BitTorrent","BitTorrent","Thumbnail","BitTorrentContents","Text"],N=[".NFO","__ia_thumb.jpg","Musafirboy Official.url"].map((function(t){return t.toLowerCase()})),y="ORIGINAL",L=y,S={fileLinks:function(t){if(!t)return[];if(t.dark)return[];var e=t.server,n=t.dir,r=t.files,c=t.metadata,a=[];if(r&&r.length>0)if(a=r.filter((function(t){return-1===C.indexOf(t.format)})).filter((function(t){return!function(t){var e=!1;return N.forEach((function(n){-1!==t.indexOf(n.toLowerCase())&&(e=!0)})),e}(t.name)})).filter((function(t){return"original"===t.source})),L===y){var s=c.identifier;a=a.map((function(t){return"https://".concat("archive.org","/download/").concat(s,"/").concat(t.name)}))}else a=a.map((function(t){return"https://".concat(e).concat(n,"/").concat(t.name)}));return console.log("FILES: ",a),a},downloadUrl:function(t){var e,n=null===t||void 0===t||null===(e=t.metadata)||void 0===e?void 0:e.identifer;return"https://archive.org/download/".concat(n)}},A=n(1),T=function(t){var e=t.url;t.fullLink;return function(t){try{return new URL(t),!0}catch(e){return console.log("ERR >> Invalid Link ",t),!1}}(e)&&Object(A.jsx)("a",{href:function(t,e,n){if(e){var r=t;return r=(r=(r=(r=r.replaceAll("[","%5B")).replaceAll("]","%5D")).replaceAll(")","%29")).replaceAll("(","%28")}if(n){var c=t,a=c.split("/").pop(),s=encodeURIComponent(a);return s=(s=s.replaceAll(")","%29")).replaceAll("(","%28"),c=c.replace(a,s)}return t.split("/").pop()}(e,!0,!1),target:"_blank",rel:"noreferrer",className:"ArchiveLinkTitle",children:e})},I=(n(65),function(t){var e=t.title,n=t.url,c=Object(r.useState)(!1),a=Object(l.a)(c,2),s=a[0],i=a[1],f={status:"loading",items:null},p=Object(r.useState)(f),b=Object(l.a)(p,2),d=b[0],h=b[1],m=function(){var t=Object(u.a)(o.a.mark((function t(e){var n,r,c,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=s,i((function(t){return!t})),n){t.next=11;break}return h((function(t){return Object(j.a)(Object(j.a)({},t),{},{initialState:f})})),r=(r=e.replace("/details/","/metadata/")).replace("http://","https://"),t.next=8,O.fetchArchiveItem(r);case 8:c=t.sent,a=S.fileLinks(c),h((function(t){return Object(j.a)(Object(j.a)({},t),{},{status:"fetched",items:a})}));case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=["www-tamilblasters-re-","www-tamil-blasters-pl-","www-tamilblasters-re-","www-tamil-blasters-one-","www-1-tamil-mv-mx-","-torrent","www-tamil-blasters-ws-","www-tamil-blasters-nl-","www-tamil-blasters-me-","www-tamilblasters-me-","www-tamil-blasters-re-","www-tamil-blasters-uk-","www-tmil-blasters-me-","www-tamil-blasters-net-"];return Object(A.jsxs)("div",{className:"LinkItem",children:[Object(A.jsxs)("div",{className:"TitleItem",children:[Object(A.jsxs)("div",{children:[Object(A.jsx)("span",{className:"dot"}),Object(A.jsx)("a",{href:n,target:"_blank",rel:"noreferrer",style:{color:"white"},children:function(t){var e="".concat(t);try{v.forEach((function(e){t=t.replace(e,"")}));var n=t.match(/((19|20)(\d{2}))/);if(n&&n.length>0){var r=t.split("-"+n[0]+"-");t=r[0]+" (".concat(n[0],") ")+r[1]}return t}catch(c){return e}}(e)}),Object(A.jsx)("span",{className:"resolution-badge badge badge-secondary",children:function(t){return t.includes("-720-p-")?"720p":t.includes("-1080-p-")?"1080p":null}(e)})]}),Object(A.jsx)("button",{className:"btn btn-default btn-sm links-btn",onClick:function(){return m(n)},children:"".concat(s?"- ":"+ "," Links")})]}),s&&Object(A.jsxs)("div",{className:"fileLinks",children:["loading"===d.status&&Object(A.jsx)("div",{children:" Loading... "}),"fetched"===d.status&&Object(A.jsxs)("ul",{children:[d.items&&0===d.items.length&&Object(A.jsx)("li",{children:"No Items"},n),d.items&&d.items.map((function(t){return Object(A.jsx)("li",{className:"file-link",children:Object(A.jsx)(T,{url:t,fullLink:false})})}))]})]})]})}),E=(n(66),function(){var t=Object(r.useState)([]),e=Object(l.a)(t,2),n=e[0],c=e[1],a=Object(r.useState)(0),s=Object(l.a)(a,2),i=s[0],d=s[1],j=Object(b.h)().id,m=Object(b.g)();j=JSON.parse(j);var v=Object(r.useState)(j),O=Object(l.a)(v,2),w=O[0],x=O[1],g=Object(r.useState)(null),C=Object(l.a)(g,2),N=C[0],y=C[1],L=function(){var t=Object(u.a)(o.a.mark((function t(e){var n,r,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.fetchDataAndTransform(e);case 2:n=t.sent,r=n.found,a=n.posts,d(r),c(a);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),S=function(){var t=Object(u.a)(o.a.mark((function t(e){var n,r,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return x(e),t.next=3,k.fetchDataAndTransform(e,N);case 3:n=t.sent,r=n.found,a=n.posts,d(r),c(a);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(r.useEffect)((function(){N?S(w):L(w)}),[w]),Object(r.useEffect)((function(){j&&x(j)}),[j]),Object(A.jsxs)("div",{className:"container Home",children:[Object(A.jsx)("div",{children:Object(A.jsxs)("h2",{children:["Archive WP"," - Page ",w]})}),Object(A.jsxs)("div",{children:[Object(A.jsx)("input",{type:"text",placeholder:"Search..",onKeyUp:function(t){return y(t.target.value)}}),Object(A.jsx)("button",{className:"btn btn-secondary btn-search",onClick:function(){return S(1)},children:Object(A.jsx)(p.a,{icon:f.a})})]}),Object(A.jsx)("div",{className:"LinkItemsContainer",children:n.map((function(t){return Object(A.jsx)(I,{url:t.url,title:t.title},t.url)}))}),Object(A.jsxs)("div",{className:"btn-container",children:[Object(A.jsx)("button",{className:"btn btn-info",disabled:1===w,onClick:function(){w>1&&m.push("/page/".concat(w-1))},children:"Previous"}),Object(A.jsx)("button",{className:"btn btn-info",disabled:w===Math.ceil(i/h),onClick:function(){m.push("/page/".concat(w+1))},children:"Next"})]})]})}),P=n(19);n(69);var D=function(){return Object(A.jsx)("div",{className:"App",children:Object(A.jsx)(P.a,{children:Object(A.jsxs)(b.d,{children:[Object(A.jsx)(b.b,{path:"/page/:id",children:Object(A.jsx)(E,{})}),Object(A.jsx)(b.b,{exact:!0,path:"/",render:function(){return Object(A.jsx)(b.a,{to:"/page/1"})}})]})})})},U=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,71)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),r(t),c(t),a(t),s(t)}))};s.a.render(Object(A.jsx)(c.a.StrictMode,{children:Object(A.jsx)(D,{})}),document.getElementById("root")),U()}},[[70,1,2]]]);
//# sourceMappingURL=main.9dad25e0.chunk.js.map