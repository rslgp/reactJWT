(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{111:function(e,t,a){},227:function(e,t,a){},232:function(e,t){},234:function(e,t){},245:function(e,t){},247:function(e,t){},275:function(e,t){},276:function(e,t){},281:function(e,t){},283:function(e,t){},290:function(e,t){},309:function(e,t){},355:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a(206),c=a(66),i=a(15),o=(a(227),a(111),a(207)),s=a.n(o),l=a(53),u=a.n(l),j={homepage:"https://rslgp.github.io/reactJWT/#",loginPage:"auth/login",profilePage:"page",publicProfilePage:"profile/:profile_id",tagPage:"tags/:tag",allTagPage:"tags",multiTagPage:"querytags",fixURL:function(e){if(e)return e.includes("http")?e:e.includes("9")?"https://wa.me/55"+e:"https://"+e}},b=j,f=a(228),p={jwt:"eed624733ec663a2a42bc7f99a94f41e"},O="access_token",d={getSessionData:function(){try{var e=u.a.get(O);if(!e)throw new Error("No Auth Cookie");var t=f.verify(e,p.jwt);if(t.exp&&t.exp<Date.now()/1e3)throw this.removeSessionData(),new Error("Token Expired");return t}catch(a){return console.log(a.message),window.location.href=b.homepage+"/"+b.loginPage,null}},saveSessionData:function(e){var t={email:e.email,exp:Math.floor(Date.now()/1e3)+7200},a=f.sign(t,p.jwt);u.a.set(O,a,{expires:1/24})},removeSessionData:function(){u.a.remove(O)}},x=a(1),g=a(7),h=a(9),m=a(26),v=a(208),w=Object(v.a)({apiKey:"AIzaSyCdMWZ25HYgn5YeXOLY6Ogw9qwpxJP4Cpo",authDomain:"myapp-d87de.firebaseapp.com",projectId:"myapp-d87de",storageBucket:"myapp-d87de.appspot.com",messagingSenderId:"101658274836",appId:"1:101658274836:web:364eb204ab277197d30b01"}),y=Object(m.f)(w),k=function(){var e=Object(g.a)(Object(x.a)().mark((function e(t){var a,r,n,c;return Object(x.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=Object(m.a)(y,"users"),r=Object(m.g)(a,Object(m.j)("tags","array-contains-any",t)),e.next=5,Object(m.e)(r);case 5:return n=e.sent,c=[],n.forEach((function(e){var a=e.data();t.every((function(e){return a.tags.includes(e)}))&&c.push(a)})),console.log("Users with both tags:",c),e.abrupt("return",c);case 12:e.prev=12,e.t0=e.catch(0),console.error("Error fetching users:",e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),C=k,S=a(405),P=a(397),E=a(400),_=a(406),D=a(399),I=a(402),L=a(3),U=function(){var e=Object(r.useState)(""),t=Object(h.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)([]),i=Object(h.a)(c,2),o=i[0],s=i[1],l=function(){var e=Object(g.a)(Object(x.a)().mark((function e(){var t;return Object(x.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.split(",").map((function(e){return e.trim()})),e.t0=s,e.next=4,C(t);case 4:e.t1=e.sent,(0,e.t0)(e.t1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(L.jsxs)(S.a,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[Object(L.jsx)("h2",{children:"Buscador multi Tag"}),Object(L.jsx)(P.a,{type:"text",placeholder:"Insira as tags separado por virgulas (sem espa\xe7o)",value:a,onChange:function(e){n(e.target.value)},sx:{width:"100%",marginBottom:"10px"}}),Object(L.jsx)(E.a,{onClick:l,variant:"contained",children:"Buscar"}),Object(L.jsxs)(S.a,{sx:{marginTop:"10px"},children:[Object(L.jsx)("h3",{children:"Resultado:"}),Object(L.jsx)(_.a,{children:o.map((function(e,t){return Object(L.jsxs)(D.a,{children:[Object(L.jsx)(I.a,{className:"espacamento",target:"_blank",rel:"noreferrer",href:"".concat(b.homepage,"/").concat(b.publicProfilePage.split(":")[0]).concat(e.public_id),children:e.public_id}),e.name,e.publicContact?Object(L.jsx)(I.a,{className:"espacamento",href:"".concat(b.fixURL(e.publicContact)),target:"_blank",rel:"noreferrer",children:e.publicContact}):Object(L.jsx)(L.Fragment,{}),e.portfolio?Object(L.jsx)(I.a,{className:"espacamento",href:"".concat(b.fixURL(e.portfolio)),target:"_blank",rel:"noreferrer",children:"portfolio"}):Object(L.jsx)(L.Fragment,{}),e.curriculo?Object(L.jsx)(I.a,{className:"espacamento",href:"".concat(b.fixURL(e.curriculo)),target:"_blank",rel:"noreferrer",children:"curriculo"}):Object(L.jsx)(L.Fragment,{})]},t)}))})]})]})},R=a(408),N=a(212),T=a.n(N),A=Object(m.f)(w),F=function(){var e=Object(r.useState)([]),t=Object(h.a)(e,2),a=t[0],n=t[1],i=Object(r.useState)([]),o=Object(h.a)(i,2),s=o[0],l=o[1],u=Object(r.useState)(""),j=Object(h.a)(u,2),b=j[0],f=j[1],p=Object(r.useState)(!1),O=Object(h.a)(p,2),d=O[0],v=O[1];Object(r.useEffect)((function(){var e=function(){var e=Object(g.a)(Object(x.a)().mark((function e(){var t,a,r;return Object(x.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=Object(m.a)(A,"tags"),e.next=4,Object(m.e)(t);case 4:a=e.sent,r=[],a.forEach((function(e){r.push(e.id)})),n(r),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error("Error fetching tag data:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();d&&e()}),[d]);var w={placeholder:"Search for a tag",value:b,onChange:function(e,t){var a=t.newValue;f(a)}};return Object(L.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(L.jsx)("b",{style:{marginRight:"10px"},children:"All Tags:"}),Object(L.jsx)(T.a,{suggestions:s,onSuggestionsFetchRequested:function(e){var t=e.value;l(function(e){var t=e.toLowerCase();return a.filter((function(e){return e.toLowerCase().includes(t)}))}(t))},onSuggestionsClearRequested:function(){l([])},getSuggestionValue:function(e){return e},renderSuggestion:function(e){return Object(L.jsx)(S.a,{sx:{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignItems:"center"},children:Object(L.jsx)(c.a,{to:"/tags/".concat(e),className:"suggestion-link",rel:"noreferrer",target:"_blank",children:e})})},inputProps:w}),Object(L.jsx)("div",{children:Object(L.jsx)("button",{onClick:function(){v(!0)},children:"Carregar"})})]})},W="796862051841-u21s62ekivlponlpdd3vlbkbuh6vln8g.apps.googleusercontent.com";var J=function(){return Object(L.jsxs)("div",{className:"GoogleLogin",children:[Object(L.jsx)(s.a,{clientId:W,buttonText:"Continue with Google",onSuccess:function(e){console.log(e),d.saveSessionData(e.profileObj);var t=e.profileObj,a={name:t.name,imageUrl:t.imageUrl};u.a.set("profile",JSON.stringify(a)),window.location.href=b.homepage+"/"+b.profilePage},onFailure:console.log,cookiePolicy:"single_host_origin"}),Object(L.jsx)(R.a,{variant:"fullWidth",sx:{margin:"16px 0",padding:"10px",width:"70%",mx:"auto"}}),Object(L.jsx)(F,{}),Object(L.jsx)(U,{})]})};var B=function(){return Object(L.jsxs)("div",{className:"Header",children:[Object(L.jsx)("div",{className:"espacamento"}),Object(L.jsx)("h1",{children:"CollabIn"}),Object(L.jsx)("div",{className:"espacamento"})]})};var q=function(){return Object(L.jsxs)("div",{className:"App",children:[Object(L.jsx)(B,{}),Object(L.jsx)(J,{})]})},M=a(61),V=a(19),Y=a(6),G=a(403),H=a(407),K=a(404),z=Object(m.f)(w);function X(e){for(var t=0,a=0;a<e.length;a++){t=(t<<5)-t+e.charCodeAt(a)}return Math.abs(t)+Date.now()}var Z=[],Q=function(){var e=Object(r.useState)(null),t=Object(h.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)([]),i=Object(h.a)(c,2),o=i[0],s=i[1],l=Object(r.useState)(""),j=Object(h.a)(l,2),f=j[0],p=j[1],O=Object(r.useState)(""),v=Object(h.a)(O,2),w=v[0],y=v[1],k=Object(r.useState)(""),C=Object(h.a)(k,2),_=C[0],D=C[1],I=Object(r.useState)(""),U=Object(h.a)(I,2),R=U[0],N=U[1];Object(r.useEffect)((function(){function e(){return(e=Object(g.a)(Object(x.a)().mark((function e(){var t,a,r,c,i,o,l,j,b,f;return Object(x.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=d.getSessionData()){e.next=3;break}return e.abrupt("return");case 3:return a=t.email,r=btoa(a),c=Object(m.c)(z,"users",r),e.prev=6,e.next=9,Object(m.d)(c);case 9:if(!(i=e.sent).exists()){e.next=19;break}o=i.data(),n(o),o.tags&&s(o.tags),o.publicContact&&y(o.publicContact),o.portfolio&&D(o.portfolio),o.curriculo&&N(o.curriculo),e.next=39;break;case 19:return console.log("No data available"),e.prev=20,l=JSON.parse(u.a.get("profile")),u.a.remove("profile"),j={email:a,name:l.name,profilePictureUrl:l.imageUrl,tags:[]},b=X(j.email),j.public_id=b,e.next=28,Object(m.h)(c,j);case 28:return console.log(b.toString()),f=Object(m.c)(z,"public_users",b.toString()),e.next=32,Object(m.h)(f,{id:r});case 32:n(j),e.next=39;break;case 35:e.prev=35,e.t0=e.catch(20),console.log(e.t0.message),console.log("no data available create new - error");case 39:e.next=44;break;case 41:e.prev=41,e.t1=e.catch(6),console.error("Error fetching data:",e.t1);case 44:case"end":return e.stop()}}),e,null,[[6,41],[20,35]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var T=function(){if(""!==f.trim()&&!o.includes(f)){var e=f.toLowerCase();p(e);var t=[].concat(Object(V.a)(o),[e]);s(t);var r=Object(M.a)(Object(M.a)({},a),{},{tags:t});n(r),p("")}};return Object(L.jsx)("div",{children:a?Object(L.jsx)(L.Fragment,{children:Object(L.jsxs)(S.a,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(L.jsx)("h2",{children:"Profile Information"}),Object(L.jsx)(G.a,{alt:"Profile picture",src:a.profilePictureUrl,sx:{width:100,height:100,margin:"auto"}}),Object(L.jsx)(H.a,{variant:"h6",component:"h3",children:a.name}),Object(L.jsx)(H.a,{variant:"body1",children:a.email}),Object(L.jsxs)(H.a,{variant:"body1",children:["Public Id:",Object(L.jsx)("a",{target:"_blank",rel:"noreferrer",href:b.homepage+"/"+b.publicProfilePage.split(":")[0]+a.public_id,children:a.public_id})]}),Object(L.jsx)(F,{}),Object(L.jsx)(H.a,{variant:"body1",children:"Tags:"}),Object(L.jsx)(S.a,{sx:{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignItems:"center"},children:o.map((function(e,t){return Object(L.jsx)(K.a,{label:e,onDelete:function(){return function(e){var t=o.filter((function(t){return t!==e}));s(t),Z.push(e);var r=Object(M.a)(Object(M.a)({},a),{},{tags:t});n(r)}(e)},sx:{margin:"5px"}},t)}))}),Object(L.jsxs)("div",{style:{display:"flex",flexDirection:"row",width:"80%"},children:[Object(L.jsx)(P.a,{label:"Add a tag",value:f,onChange:function(e){p(e.target.value)},onKeyUp:function(e){"Enter"===e.key&&T()},sx:{width:"100%",margin:"10px -8px 0 0"}}),Object(L.jsx)(E.a,{onClick:T,style:{borderRadius:"12px",height:"60px",margin:"8px 0 0 8px",backgroundColor:"#f0f2f5"},children:"ADD"})]}),Object(L.jsx)(P.a,{label:"Add Public Contact",placeholder:"Enter contact email, number, social media",value:w,onChange:function(e){y(e.target.value)},sx:{width:"80%",margin:"10px 0"}}),Object(L.jsx)(P.a,{label:"Add portfolio URL",placeholder:"Enter portfolio URL",value:_,onChange:function(e){D(e.target.value)},sx:{width:"80%",margin:"10px 0"}}),Object(L.jsx)(P.a,{label:"Add curriculo URL",placeholder:"Enter curriculo URL",value:R,onChange:function(e){N(e.target.value)},sx:{width:"80%",margin:"10px 0"}}),Object(L.jsx)(E.a,{onClick:function(){var e=d.getSessionData();if(e){var t=e.email,r=btoa(t),n=Object(m.c)(z,"users",r),c=o;Object(m.i)(n,{tags:c,publicContact:w,portfolio:_,curriculo:R}),c.forEach(function(){var e=Object(g.a)(Object(x.a)().mark((function e(t){var r;return Object(x.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===t){e.next=6;break}return r=Object(m.c)(z,"tags",t.toLowerCase()),e.next=4,Object(m.d)(r);case 4:e.sent.exists()?Object(m.i)(r,Object(Y.a)({},a.public_id.toString(),!0)):Object(m.h)(r,Object(Y.a)({},a.public_id.toString(),!0));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Z.forEach(function(){var e=Object(g.a)(Object(x.a)().mark((function e(t){var r;return Object(x.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:""!==t&&(r=Object(m.c)(z,"tags",t.toLowerCase()),Object(m.i)(r,Object(Y.a)({},a.public_id.toString(),Object(m.b)())));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),alert("Perfil salvo")}},style:{borderRadius:"12px",height:"60px",width:"100%",marginTop:"8px",backgroundColor:"#f0f2f5"},children:"SAVE"})]})}):Object(L.jsx)("p",{children:"Loading profile data..."})})},$=a(213),ee=["email"],te=Object(m.f)(w),ae=function(){var e=Object(i.o)().profile_id,t=Object(r.useState)(null),a=Object(h.a)(t,2),n=a[0],c=a[1];return Object(r.useEffect)((function(){function t(){return(t=Object(g.a)(Object(x.a)().mark((function t(){var a,r,n,i,o,s,l;return Object(x.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=Object(m.c)(te,"public_users",e),t.prev=1,t.next=4,Object(m.d)(a);case 4:if(!(r=t.sent).exists()){t.next=14;break}return n=r.data(),i=Object(m.c)(te,"users",n.id),t.next=10,Object(m.d)(i);case 10:(o=t.sent).exists()?(s=o.data(),s.email,l=Object($.a)(s,ee),c(l)):console.log("No data available for user"),t.next=15;break;case 14:console.log("No data available for public user");case 15:t.next=20;break;case 17:t.prev=17,t.t0=t.catch(1),console.error("Error fetching data:",t.t0);case 20:case"end":return t.stop()}}),t,null,[[1,17]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),Object(L.jsx)("div",{children:n?Object(L.jsxs)(S.a,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(L.jsx)("h2",{children:"Profile Information"}),Object(L.jsx)(H.a,{variant:"h6",component:"h3",children:n.name}),n.publicContact?Object(L.jsx)(I.a,{href:"".concat(b.fixURL(n.publicContact)),target:"_blank",rel:"noreferrer",children:n.publicContact}):Object(L.jsx)(L.Fragment,{}),n.portfolio?Object(L.jsx)(I.a,{href:"".concat(b.fixURL(n.portfolio)),target:"_blank",rel:"noreferrer",children:n.portfolio}):Object(L.jsx)(L.Fragment,{}),Object(L.jsx)(G.a,{alt:"Profile picture",src:n.profilePictureUrl,sx:{width:100,height:100,margin:"auto"}}),Object(L.jsx)(H.a,{variant:"body1",children:"Tags:"}),Object(L.jsx)(S.a,{sx:{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignItems:"center"},children:n.tags.map((function(e,t){return Object(L.jsx)(K.a,{label:e,sx:{margin:"5px"}},t)}))})]}):Object(L.jsx)("p",{children:"Loading profile data..."})})},re=Object(m.f)(w),ne=function(){var e=Object(i.o)().tag,t=Object(r.useState)([]),a=Object(h.a)(t,2),n=a[0],c=a[1];return Object(r.useEffect)((function(){var t=function(){var t=Object(g.a)(Object(x.a)().mark((function t(){var a,r;return Object(x.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a=Object(m.c)(re,"tags",e),t.next=4,Object(m.d)(a);case 4:r=t.sent,console.log(r.data()),c(Object.keys(r.data())),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.error("Error fetching tag data:",t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]),Object(L.jsxs)("div",{children:[Object(L.jsxs)("h2",{children:["Users with Tag: ",e]}),Object(L.jsx)("div",{children:n.map((function(e){return Object(L.jsx)("div",{children:Object(L.jsx)("a",{target:"_blank",rel:"noreferrer",href:"".concat(b.homepage,"/").concat(b.publicProfilePage.split(":")[0]).concat(e),children:e})},e)}))})]})},ce=Object(m.f)(w),ie=function(){var e=Object(i.o)().tag,t=Object(r.useState)([]),a=Object(h.a)(t,2),n=a[0],c=a[1];return Object(r.useEffect)((function(){var e=function(){var e=Object(g.a)(Object(x.a)().mark((function e(){var t,a,r;return Object(x.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=Object(m.a)(ce,"tags"),e.next=4,Object(m.e)(t);case 4:a=e.sent,r=[],a.forEach((function(e){r.push(e.id)})),c(r),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error("Error fetching tag data:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();e()}),[e]),Object(L.jsx)("div",{children:Object(L.jsxs)(S.a,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[Object(L.jsx)("h2",{children:"All Tags:"}),Object(L.jsx)(S.a,{sx:{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignItems:"center"},children:n.map((function(e){return Object(L.jsx)(I.a,{style:{marginRight:"10px"},href:"".concat(b.homepage,"/").concat(b.tagPage.split(":")[0]).concat(e),rel:"noreferrer",target:"_blank",children:e},e)}))})]})})};""===window.location.hash&&(window.location.hash="/");var oe=Object(c.b)([{path:"/",element:Object(L.jsx)(q,{})},{path:b.loginPage,element:Object(L.jsx)(q,{})},{path:b.profilePage,element:Object(L.jsx)(Q,{})},{path:b.publicProfilePage,element:Object(L.jsx)(ae,{})},{path:b.tagPage,element:Object(L.jsx)(ne,{})},{path:b.allTagPage,element:Object(L.jsx)(ie,{})},{path:b.multiTagPage,element:Object(L.jsx)(U,{})}]);n.createRoot(document.getElementById("root")).render(Object(L.jsx)(i.b,{router:oe}))}},[[355,1,2]]]);
//# sourceMappingURL=main.70c25cca.chunk.js.map