(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{131:function(e,t){},137:function(e,t,n){},262:function(e,t,n){},274:function(e,t){},276:function(e,t){},291:function(e,t){},331:function(e,t){},333:function(e,t){},365:function(e,t){},366:function(e,t){},371:function(e,t){},373:function(e,t){},380:function(e,t){},399:function(e,t){},475:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n(253),c=n(136),r=n(5),i=(n(262),n(137),n(254)),s=n.n(i),l=n(6),p=n(12),u={};u.email=Object({NODE_ENV:"production",PUBLIC_URL:"/reactJWT",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_JWT:"cc87fcfd48930cc25795524677a7033fab8a9b2b012c58956a001244c4a6c32e",REACT_APP_GOOGLE_CLIENTID:"796862051841-u21s62ekivlponlpdd3vlbkbuh6vln8g.apps.googleusercontent.com",REACT_APP_FIREBASE:"AIzaSyCdMWZ25HYgn5YeXOLY6Ogw9qwpxJP4Cpo"}).REACT_APP_GOOGLE_EMAIL,u.key=Object({NODE_ENV:"production",PUBLIC_URL:"/reactJWT",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_JWT:"cc87fcfd48930cc25795524677a7033fab8a9b2b012c58956a001244c4a6c32e",REACT_APP_GOOGLE_CLIENTID:"796862051841-u21s62ekivlponlpdd3vlbkbuh6vln8g.apps.googleusercontent.com",REACT_APP_FIREBASE:"AIzaSyCdMWZ25HYgn5YeXOLY6Ogw9qwpxJP4Cpo"}).REACT_APP_GOOGLE_KEY,u.spreadsheetId=Object({NODE_ENV:"production",PUBLIC_URL:"/reactJWT",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_JWT:"cc87fcfd48930cc25795524677a7033fab8a9b2b012c58956a001244c4a6c32e",REACT_APP_GOOGLE_CLIENTID:"796862051841-u21s62ekivlponlpdd3vlbkbuh6vln8g.apps.googleusercontent.com",REACT_APP_FIREBASE:"AIzaSyCdMWZ25HYgn5YeXOLY6Ogw9qwpxJP4Cpo"}).REACT_APP_GOOGLE_SHEET;var d=new(0,n(263).GoogleSpreadsheet)(u.spreadsheetId);function b(){var e=new Date;e.setUTCHours(e.getUTCHours());var t=e.getHours().toString().padStart(2,"0"),n=e.getMinutes().toString().padStart(2,"0"),a=e.getDate().toString().padStart(2,"0"),o=(e.getMonth()+1).toString().padStart(2,"0"),c=e.getFullYear().toString().slice(-2);return"".concat(t,":").concat(n," ").concat(a,"/").concat(o,"/").concat(c)}function O(){return(O=Object(p.a)(Object(l.a)().mark((function e(t){var n,a;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.useServiceAccountAuth({client_email:u.email,private_key:u.key});case 3:return e.next=5,d.loadInfo();case 5:return n=d.sheetsByIndex[0],a={Email:t.email,DateISO:b(),Nome:t.name},console.log(a),e.next=10,n.addRow(a);case 10:if(!e.sent){e.next=13;break}return e.abrupt("return",!0);case 13:e.next=20;break;case 15:return e.prev=15,e.t0=e.catch(0),console.log("erro inserindo sheet"),console.log(e.t0.message),e.abrupt("return",!1);case 20:case"end":return e.stop()}}),e,null,[[0,15]])})))).apply(this,arguments)}var f=function(e){return O.apply(this,arguments)},j=n(94),g=n.n(j),E={baseURL:""};E.loginPage=E.baseURL+"auth/login",E.profilePage=E.baseURL+"page";var v=E,S=n(460),_={jwt:"cc87fcfd48930cc25795524677a7033fab8a9b2b012c58956a001244c4a6c32e"},h="access_token",m={getSessionData:function(){try{var e=g.a.get(h);if(!e)throw new Error("No Auth Cookie");var t=S.verify(e,_.jwt);if(t.exp&&t.exp<Date.now()/1e3)throw this.removeSessionData(),new Error("Token Expired");return t}catch(n){return console.log(n.message),window.location.href=v.loginpage,null}},saveSessionData:function(e){var t={email:e.email,exp:Math.floor(Date.now()/1e3)+7200},n=S.sign(t,_.jwt);g.a.set(h,n,{expires:1/24})},removeSessionData:function(){g.a.remove(h)}},T=n(4),P=n(15),x="796862051841-u21s62ekivlponlpdd3vlbkbuh6vln8g.apps.googleusercontent.com";var A=function(){return Object(P.jsxs)("div",{className:"GoogleLogin",children:[Object(P.jsx)("button",{onClick:function(){m.saveSessionData({email:"teste"})},children:"TESTE"}),Object(P.jsx)(s.a,{clientId:x,buttonText:"Continue with Google",onSuccess:function(e){console.log(e),f(e.profileObj)?alert("Ponto registrado"):alert("Falha no ponto"),m.saveSessionData(e.profileObj),v.profileData=e.profileObj,Object(T.r)(v.profilePage)},onFailure:console.log,cookiePolicy:"single_host_origin"}),Object(P.jsx)("button",{onClick:function(){m.getSessionData()&&Object(T.r)(v.profilePage)},children:"TESTE2"})]})};var C=function(){return Object(P.jsxs)("div",{className:"Header",children:[Object(P.jsx)("div",{className:"espacamento"}),Object(P.jsx)("h1",{children:"Bater ponto na ECS"}),Object(P.jsx)("div",{className:"espacamento"})]})};var D=function(){return Object(P.jsxs)("div",{className:"App",children:[Object(P.jsx)(C,{}),Object(P.jsx)(A,{})]})},R=n(11),w=n(255),I=Object(w.a)({apiKey:"AIzaSyCdMWZ25HYgn5YeXOLY6Ogw9qwpxJP4Cpo",authDomain:"myapp-d87de.firebaseapp.com",projectId:"myapp-d87de",storageBucket:"myapp-d87de.appspot.com",messagingSenderId:"101658274836",appId:"1:101658274836:web:364eb204ab277197d30b01"}),L=n(74),k=Object(L.b)(I),y=function(){var e=Object(a.useState)(null),t=Object(R.a)(e,2),n=t[0],o=t[1];return Object(a.useEffect)((function(){!function(){var e=m.getSessionData();if(e){var t=e.email,n="users/"+btoa(t),a=Object(L.c)(k,n);Object(L.a)(a).then((function(e){if(e.exists()){var n=e.val();o(n)}else{console.log("No data available");var c={email:t,name:v.profileData.name,profilePictureUrl:v.profileData.imageUrl};Object(L.d)(a,c),o(c)}})).catch((function(e){console.error("Error fetching data:",e)}))}}()}),[]),Object(P.jsx)("div",{children:n?Object(P.jsxs)("div",{children:[Object(P.jsx)("h2",{children:"Profile Information"}),Object(P.jsxs)("div",{children:[Object(P.jsx)("strong",{children:"Name:"})," ",n.name]}),Object(P.jsxs)("div",{children:[Object(P.jsx)("strong",{children:"Email:"})," ",n.email]}),Object(P.jsx)("div",{children:Object(P.jsx)("img",{src:n.profilePictureUrl,alt:"Profile",style:{maxWidth:"100px",maxHeight:"100px"}})})]}):Object(P.jsx)("p",{children:"Loading profile data..."})})},W=Object(c.a)([{path:"/",element:Object(P.jsx)(D,{})},{path:v.loginPage,element:Object(P.jsx)(D,{})},{path:v.profilePage,element:Object(P.jsx)(y,{})}]);o.createRoot(document.getElementById("root")).render(Object(P.jsx)(a.StrictMode,{children:Object(P.jsx)(r.b,{router:W})}))}},[[475,1,2]]]);
//# sourceMappingURL=main.f63d98f5.chunk.js.map