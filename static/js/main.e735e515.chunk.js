(this.webpackJsonpapp_2=this.webpackJsonpapp_2||[]).push([[2],{28:function(e,t,n){"use strict";var a=n(2);n(1);t.a=function(e){return e?Object(a.jsx)("div",{className:"loading u-text-center",children:Object(a.jsxs)("div",{className:"lds-spinner",children:[Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{})]})}):null}},42:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(1),r=n(18),i=n.n(r),s=n(26),l=n(4),o=n(12),d=function(){var e=Object(l.f)();return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("header",{className:"header",children:[Object(a.jsx)("h1",{className:"header__logo",children:Object(a.jsx)(o.b,{to:"/games",style:{textDecoration:"none"},children:"RAWGC"})}),Object(a.jsxs)("div",{className:"search-bar",children:[Object(a.jsx)("button",{className:"search-bar__button",children:Object(a.jsx)(s.c,{className:"search-bar__icon"})}),Object(a.jsx)("input",{type:"text",className:"search-bar__input",onChange:function(t){e.push({pathname:"/games",search:"?search=".concat(t.target.value)})},placeholder:"Search for name"})]}),Object(a.jsx)(o.b,{className:"btn u-uppercase",to:"/login",style:{marginRight:"1rem",textDecoration:"none"},children:"Login"}),Object(a.jsx)(o.b,{className:"btn u-uppercase",to:"/register",style:{textDecoration:"none"},children:"Sign up"})]})})},j=Object(c.lazy)((function(){return Promise.all([n.e(1),n.e(8),n.e(7)]).then(n.bind(null,307))})),u=Object(c.lazy)((function(){return Promise.all([n.e(12),n.e(10)]).then(n.bind(null,303))})),b=[{path:"/login",exact:!0,component:Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,304))}))},{path:"/register",exact:!0,component:Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(11)]).then(n.bind(null,305))}))},{path:"/games/:slug",exact:!0,component:Object(c.lazy)((function(){return Promise.all([n.e(1),n.e(4),n.e(6)]).then(n.bind(null,308))}))},{path:"/games",exact:!0,component:j},{path:"*",component:u}],h=n(28);var O=function(){var e=Object(c.useCallback)((function(e){var t=null;return e.length>0&&(t=e.map((function(e,t){var n=e.path,c=e.exact,r=e.component;return Object(a.jsx)(l.a,{path:n,exact:c,component:r},t)}))),Object(a.jsx)(l.c,{children:t})}),[]);return Object(a.jsx)(o.a,{children:Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)("div",{style:{margin:"2rem 0px"},children:[Object(a.jsx)(d,{}),Object(a.jsx)(c.Suspense,{fallback:Object(a.jsx)(h.a,{loading:!0,className:"u-text-center"}),children:e(b)})]})})})},p=function(e){e&&e instanceof Function&&n.e(13).then(n.bind(null,306)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))},g=(n(42),n(11)),v=n(30),x=n(31),m=n(14),f=n(15),y=n(5),E=n(7),_={loading:!1,nextUrl:null,games:[]};function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E.b:return Object(y.a)(Object(y.a)({},e),{},{loading:!0});case E.c:return Object(y.a)(Object(y.a)({},e),{},{loading:!1,nextUrl:t.payload.nextUrl,games:[].concat(Object(f.a)(e.games),Object(f.a)(t.payload.fetchedData))});default:return e}}var C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E.b:case E.c:return Object(y.a)(Object(y.a)({},e),{},Object(m.a)({},t.payload.btnActive,S(e[t.payload.btnActive],t)));default:return e}},N={genres:[]};var A={loading:!1,data:[]};var D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E.d:return Object(y.a)(Object(y.a)({},e),{},{loading:!0});case E.e:return Object(y.a)(Object(y.a)({},e),{},{loading:!1,data:Object(y.a)(Object(y.a)({},e.data),{},Object(m.a)({},t.payload.keygame,[t.payload.data,Object(y.a)({},t.payload.imgScreenshots)]))});default:return e}},T={videoId:null};var F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E.g:return{videoId:t.payload};case E.a:return{videoId:null};default:return e}},G=Object(g.combineReducers)({collectionGenres:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E.f:return Object(y.a)(Object(y.a)({},e),{},{loading:!1,genres:Object(f.a)(t.payload.fetchedData)});default:return e}},collectionGame:C,collectionGamesDetail:D,actionVideo:F}),I=[v.a],w=Object(g.createStore)(G,Object(x.composeWithDevTools)(g.applyMiddleware.apply(void 0,I))),P=n(25);i.a.render(Object(a.jsx)(P.a,{store:w,children:Object(a.jsx)(O,{})}),document.getElementById("root")),p()},7:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"f",(function(){return r})),n.d(t,"d",(function(){return i})),n.d(t,"e",(function(){return s})),n.d(t,"g",(function(){return l})),n.d(t,"a",(function(){return o}));var a="FETCH_GAMES_REQUEST",c="FETCH_GAMES_SUCCESS",r="FETCH_GENRES_SUCCESS",i="FETCH_GAME_DEATAIL",s="FETCH_GAME_DEATAIL_SUCCESS",l="OPEN_VIDEO",o="CLOSE_VIDEO"}},[[44,3,5]]]);
//# sourceMappingURL=main.e735e515.chunk.js.map