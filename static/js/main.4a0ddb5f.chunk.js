(this.webpackJsonp2=this.webpackJsonp2||[]).push([[0],{41:function(e,t,a){e.exports=a(71)},46:function(e,t,a){},47:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),i=a.n(l),c=(a(46),a(47),a(2)),u=a(11),o=a(10),m=a(34),s=a(35),p=a(9),d={text:"",movies:[],loading:!1,movie:[]};var v=Object(o.combineReducers)({movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;return"LOADING"===t.type?Object(p.a)(Object(p.a)({},e),{},{loading:!0}):"SEARCH_MOVIE"===t.type?Object(p.a)(Object(p.a)({},e),{},{text:t.payload,loading:!1}):"FETCH_MOVIES"===t.type?Object(p.a)(Object(p.a)({},e),{},{movies:t.payload.Search,loading:!1}):"FETCH_MOVIE"===t.type?Object(p.a)(Object(p.a)({},e),{},{movie:t.payload,loading:!1}):e}}),E=[m.a],f=Object(o.createStore)(v,{},Object(s.composeWithDevTools)(o.applyMiddleware.apply(void 0,E))),b=a(36),g=a(37),h=a(40),y=a(38),O=a(8),j=function(e){Object(h.a)(a,e);var t=Object(y.a)(a);function a(){return Object(b.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"nav-container"},r.a.createElement("nav",null,r.a.createElement("span",null,"OMDb App"),r.a.createElement("ul",{className:"navLinks"},r.a.createElement("li",null,r.a.createElement(O.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(O.b,{to:"/about"},"About")))))}}]),a}(n.Component);var N=function(e){var t=e.movie;return r.a.createElement("li",{className:"Movie"},r.a.createElement("div",{className:"movie-img"},r.a.createElement(O.b,{to:"/movie/"+t.imdbID},r.a.createElement("img",{src:t.Poster,alt:t.Title}))),r.a.createElement("div",{className:"movie-info"},r.a.createElement("p",null,t.Title)))};function M(){return r.a.createElement("div",{className:"Loader"})}var x=a(14),L=a.n(x),w=a(21),C=a(22),I=a.n(C),S=function(){return{type:"LOADING"}};var T=Object(u.b)((function(e){return{movies:e.movies.movies,loading:e.movies.loading}}),{setLoading:S})((function(e){var t=e.movies,a=e.loading;return r.a.createElement("div",null,a?r.a.createElement("div",{style:{marginTop:"100px"}},r.a.createElement(M,null)):r.a.createElement("ul",{className:"movieList"},t?t.map((function(e){return r.a.createElement(N,{key:e.imdbID,movie:e})})):null))}));var k=Object(u.b)((function(e){return{text:e.movies.text}}),{setLoading:S,searchMovie:function(e){return function(t){return t({type:"SEARCH_MOVIE",payload:e})}},fetchMovies:function(e){return function(){var t=Object(w.a)(L.a.mark((function t(a){var n;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I.a.get("https://www.omdbapi.com/?s=".concat(e,"&apikey=").concat("27c4dfc5"));case 2:return n=t.sent,t.prev=3,t.abrupt("return",a({type:"FETCH_MOVIES",payload:n.data}));case 7:t.prev=7,t.t0=t.catch(3),alert("error in fetchMovies function: searchActions.js",t.t0);case 10:case"end":return t.stop()}}),t,null,[[3,7]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.setLoading,a=e.searchMovie,n=e.fetchMovies,l=e.text;return r.a.createElement("div",{className:"search-form-container"},r.a.createElement("form",{className:"search-form",onSubmit:function(e){e.preventDefault(),""===l?alert("Please enter a search term!"):(n(l),t())}},r.a.createElement("input",{onChange:function(e){return function(e){var t=e.target.value;a(t)}(e)},type:"text",placeholder:"Search movies and TV series..."}),r.a.createElement("button",null,"Search")))}));var A=function(){return r.a.createElement("div",{className:"Home"},r.a.createElement(k,null),r.a.createElement(T,null))};function D(){return r.a.createElement("div",{className:"About"},r.a.createElement("img",{src:"https://media.giphy.com/media/kdiLau77NE9Z8vxGSO/giphy.gif",alt:"fun gif"}),r.a.createElement("div",{className:"about-text"},r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id rutrum dolor, quis finibus felis. Donec ullamcorper enim eros, sit amet maximus risus commodo sed. Duis non sapien facilisis, elementum urna ac, gravida enim. Curabitur ornare lorem mi, quis consectetur libero vulputate eget. Vivamus laoreet nulla ac mi tempus facilisis. Donec laoreet eget neque id semper. Aliquam pulvinar lectus at lectus condimentum, et rutrum ex tempus. Curabitur suscipit sapien sed suscipit porttitor. Maecenas sit amet dolor nunc. Praesent vestibulum nibh ac leo dapibus, non porta enim bibendum. Aenean pretium justo vitae sem posuere luctus ut at metus. Sed sed consequat diam. Mauris eget augue mattis, molestie diam sit amet, porta nisi. Ut ut urna at justo posuere facilisis. Proin tempor ipsum ut dolor pellentesque, sit amet placerat ligula fermentum.",r.a.createElement("br",null),r.a.createElement("br",null),"Sed ultrices vel massa a blandit. Nam sit amet fermentum felis. Vestibulum viverra sollicitudin fringilla. Donec sit amet cursus neque. Nullam cursus elementum iaculis. Fusce non nunc ac nibh blandit lacinia. Donec venenatis vulputate leo sed rutrum. Curabitur sed congue mauris. Fusce erat nisi, pharetra quis ante vel, ullamcorper hendrerit justo. Nullam consequat felis non dictum dapibus. Sed malesuada, urna sit amet bibendum pretium, nibh felis luctus nibh, sed laoreet velit neque id tortor. Nullam rhoncus sapien nec tortor sollicitudin aliquam.")))}var q=a(39);function V(){return r.a.createElement("footer",null,r.a.createElement("div",null,r.a.createElement("p",{style:{display:"flex",alignItems:"center"}},r.a.createElement("span",{style:{color:"white",marginLeft:"1rem"}},"Bryan Race")," ",r.a.createElement("a",{style:{marginLeft:"1rem"},target:"_blank",rel:"noopener noreferrer",href:"https://github.com/BrynRac"},r.a.createElement(q.a,null)))))}var H=Object(u.b)((function(e){return{loading:e.movies.loading,movie:e.movies.movie}}),{setLoading:S,fetchMovie:function(e){return function(){var t=Object(w.a)(L.a.mark((function t(a){var n;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I.a.get("https://www.omdbapi.com/?i=".concat(e,"&apikey=").concat("27c4dfc5"));case 2:return n=t.sent,t.prev=3,t.abrupt("return",a({type:"FETCH_MOVIE",payload:n.data}));case 7:t.prev=7,t.t0=t.catch(3),alert("error in fetchMovie function: searchActions.js",t.t0);case 10:case"end":return t.stop()}}),t,null,[[3,7]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.movie,a=e.loading,l=e.match,i=e.fetchMovie,c=e.setLoading;Object(n.useEffect)((function(){i(l.params.id),c()}),[i,l.params.id,c]);var u=r.a.createElement("div",{className:"MovieInfo"},r.a.createElement("div",{className:"movie-img"},r.a.createElement("img",{src:t.Poster,alt:t.Title})),r.a.createElement("div",{className:"info"},r.a.createElement("h2",null,t.Title),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("p",null,"Type: ",t.Type)),r.a.createElement("li",null,r.a.createElement("p",null,"Released: ",t.Year)),r.a.createElement("li",null,r.a.createElement("p",null,"Genre: ",t.Country)),r.a.createElement("li",null,r.a.createElement("p",null,"Country: ",t.Genre)),r.a.createElement("li",null,r.a.createElement("p",null,"Language: ",t.Language)),r.a.createElement("li",null,r.a.createElement("p",null,"Metascore: ",t.Metascore)),r.a.createElement("li",null,r.a.createElement("p",null,"imdbRating: ",t.imdbRating))),r.a.createElement("div",{className:"description"},r.a.createElement("p",null,t.Plot))),r.a.createElement(O.b,{to:"/"},r.a.createElement("button",null,"Back")));return r.a.createElement("div",null,a?r.a.createElement(M,null):u)}));var R=function(){return Object(n.useEffect)((function(){}),[]),r.a.createElement(u.a,{store:f},r.a.createElement("main",{className:"App"},r.a.createElement(j,null),r.a.createElement("div",{className:"content-container"},r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:"/",component:A}),r.a.createElement(c.a,{path:"/about",component:D}),r.a.createElement(c.a,{path:"/movie/:id",component:H}))),r.a.createElement(V,null)))};i.a.render(r.a.createElement(O.a,null,r.a.createElement(R,null)),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.4a0ddb5f.chunk.js.map