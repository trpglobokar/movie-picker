(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t,n){},104:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(16),o=n.n(i),c=(n(87),n(26)),l=n.n(c),s=n(37),u=n(18),d=n(14),m=n(21),p=n(19),f=n(30),h=n(20),v=n(7),b=n(34),g=n(140),O=n(141),j=n(77),y=n(147),E=n(8),x=n(127),k=n(143),w=n(128),M=n(129),C=n(106),G=n(142),R=n(130),S=n(76),I=n.n(S);function L(){var e=Object(v.a)(["\n  min-width: 500px;\n  display: flex;\n  flex-direction: column;\n  padding: 0 24px 24px 24px;\n"]);return L=function(){return e},e}function _(){var e=Object(v.a)(["\n  flex-grow: 1;\n"]);return _=function(){return e},e}var F=[{id:"43",name:"AFI's 100 Most Thrilling American Films"},{id:"338",name:"Disney Classic Collection"},{id:"932",name:"Girls With Guns"},{id:"2469",name:"Best Picture Winners - The Golden Globes"},{id:"3321",name:"Anime Movies"},{id:"3945",name:"Good Science Fiction Flicks"},{id:"108073",name:"Rocky's Recommended Movies"},{id:"108351",name:"Rocky's To Watch List"}],D=Object(E.a)(b.a)(_()),B=E.a.div(L()),A=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(m.a)(this,Object(p.a)(t).call(this,e))).handleClick=function(e){n.setState({modalOpen:!0})},n.handleClose=function(e){n.setState({modalOpen:!1})},n.state={modalOpen:!1,defaultLists:F},n}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(s.a)(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"renderSampleLists",value:function(){var e=this.props,t=e.editListId,n=e.listId;return this.state.defaultLists.map(function(e){return r.a.createElement(x.a,{key:e.id,control:r.a.createElement(k.a,{checked:n===e.id,onChange:t,value:e.id}),label:e.name})})}},{key:"render",value:function(){var e=this.state.modalOpen;return r.a.createElement(w.a,{position:"static",color:"secondary"},r.a.createElement(M.a,null,r.a.createElement(D,{variant:"h6",color:"inherit"},"Movie Picker"),r.a.createElement(b.a,{variant:"h6",color:"inherit"},this.props.listName),r.a.createElement(C.a,{"aria-label":"EditList","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:this.handleClick,color:"inherit"},r.a.createElement(I.a,null))),r.a.createElement(G.a,{onClose:this.handleClose,"aria-labelledby":"simple-dialog-title",open:e},r.a.createElement(R.a,{id:"simple-dialog-title"},"Change Movie List"),r.a.createElement(B,null,this.renderSampleLists())))}}]),t}(a.Component),T=n(146);function N(){var e=Object(v.a)(["\n  margin-bottom: 32px;\n"]);return N=function(){return e},e}var W=E.a.div(N()),P=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.selectedRating,n=e.setRating;return r.a.createElement(W,null,r.a.createElement(b.a,{variant:"h6"},"Minimum Rating: ",t,"/10"),r.a.createElement("br",null),r.a.createElement(T.a,{defaultValue:t,"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",onChange:function(e,t){n(t)},step:.5,marks:!0,min:1,max:10}))}}]),t}(a.Component),H=n(148),J=n(131),U=n(144),V=n(36);function z(){var e=Object(v.a)(["\n  min-width: 160px;\n"]);return z=function(){return e},e}function K(){var e=Object(v.a)(["\n  width: 100%;\n"]);return K=function(){return e},e}function $(){var e=Object(v.a)(["\n  flex-direction: row!important;\n"]);return $=function(){return e},e}var q=Object(E.a)(J.a)($()),Q=Object(E.a)(H.a)(K()),X=Object(E.a)(x.a)(z()),Y=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"renderFormGroup",value:function(){var e=this,t=V.genres.map(function(t){return r.a.createElement(X,{key:t.id,control:r.a.createElement(U.a,{checked:e.props.selectedGenres.includes(t.id.toString()),onChange:e.props.toggleGenre,value:t.id.toString()}),label:t.name})});return r.a.createElement(q,null,t)}},{key:"render",value:function(){return console.log("this.props",this.props),r.a.createElement("div",null,r.a.createElement(Q,{component:"fieldset"},r.a.createElement(b.a,{variant:"h6"},"Genres"),this.renderFormGroup()))}}]),t}(a.Component);function Z(){var e=Object(v.a)(["\n  height: calc(100vh - 96px);\n  overflow: scroll;\n  background-color: white;\n  box-shadow: 0px 0px 20px #00000057;\n  padding: 16px;\n"]);return Z=function(){return e},e}var ee=E.a.div(Z()),te=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).setGenre=function(e){var t=e.currentTarget.value,a=n.props.selectedGenres;a.includes(t)?a=a.filter(function(e){return e!==t}):a.push(t),n.props.updateSelections(a,n.props.selectedRating)},n.setRating=function(e){n.props.updateSelections(n.props.selectedGenres,e)},n}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement(ee,null,r.a.createElement(P,{selectedRating:this.props.selectedRating,setRating:this.setRating}),r.a.createElement(Y,{selectedGenres:this.props.selectedGenres,toggleGenre:this.setGenre}))}}]),t}(a.Component),ne=n(132),ae=n(133),re=n(134),ie=n(135),oe=n(136);function ce(){var e=Object(v.a)(["\n  height: 100%;\n  overflow: scroll;\n"]);return ce=function(){return e},e}var le=Object(E.a)(ne.a)(ce()),se=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement(le,null,this.props.movies.map(function(e){var t=e.genre_ids.map(function(e){return V.genres.find(function(t){return t.id===e}).name});return r.a.createElement(ae.a,{key:e.id,alignItems:"flex-start"},r.a.createElement(re.a,null,r.a.createElement(ie.a,{src:"https://image.tmdb.org/t/p/w92/"+e.backdrop_path})),r.a.createElement(oe.a,{primary:e.title,secondary:t.join(", ")}))}))}}]),t}(a.Component),ue=n(137),de=n(138),me=n(139);function pe(){var e=Object(v.a)(["\n  margin: 8px;\n"]);return pe=function(){return e},e}function fe(){var e=Object(v.a)(["\n  width: 75%;\n"]);return fe=function(){return e},e}function he(){var e=Object(v.a)(["\n  height: 300px;\n  width: 220px;\n  background-image: url(https://image.tmdb.org/t/p/w370_and_h556_bestv2",");\n  background-position: top;\n  background-repeat: no-repeat;\n  background-size: contain;\n  margin-right: 16px;\n"]);return he=function(){return e},e}function ve(){var e=Object(v.a)(["\n  display: flex;\n  margin-bottom: 8px;\n"]);return ve=function(){return e},e}function be(){var e=Object(v.a)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  padding: 0 24px 24px 24px;\n"]);return be=function(){return e},e}function ge(){var e=Object(v.a)(["\n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n"]);return ge=function(){return e},e}function Oe(){var e=Object(v.a)(["\n  position: absolute;\n  bottom: 0;\n  right: 0;\n"]);return Oe=function(){return e},e}var je=E.a.div(Oe()),ye=Object(E.a)(ue.a)(ge()),Ee=E.a.div(be()),xe=E.a.div(ve()),ke=E.a.div(he(),function(e){return e.posterPath}),we=E.a.div(fe()),Me=Object(E.a)(de.a)(pe()),Ce=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(m.a)(this,Object(p.a)(t).call(this,e))).handleClick=function(e){var t=n.props.filteredMovies,a=t[Math.floor(Math.random()*Math.floor(t.length))];n.setState({recommendedMovie:a,modalOpen:!0})},n.handleClose=function(e){n.setState({recommendedMovie:{id:"",genre_ids:[]},modalOpen:!1})},n.state={recommendedMovie:{id:"",genre_ids:[]},modalOpen:!1},n}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state,t=e.modalOpen,n=e.recommendedMovie,a="https://www.themoviedb.org/movie/".concat(n.id),i=n.genre_ids.map(function(e){return V.genres.find(function(t){return t.id===e}).name}).join(", ");return console.log("recommendedMovie",n),r.a.createElement(je,null,r.a.createElement(ye,{color:"primary",variant:"extended","aria-label":"Choose for Me",onClick:this.handleClick},"Choose for Me"),r.a.createElement(G.a,{onClose:this.handleClose,"aria-labelledby":"simple-dialog-title",open:t},r.a.createElement(R.a,{id:"simple-dialog-title"},"Recommended Movie:"," ",r.a.createElement(me.a,{href:a,rel:"noopener noreferrer",target:"_blank"},n.title)),r.a.createElement(Ee,null,r.a.createElement(xe,null,r.a.createElement(ke,{posterPath:n.poster_path}),r.a.createElement(we,null,r.a.createElement(b.a,null,r.a.createElement("b",null,"Release Date:")," ",n.release_date),r.a.createElement(b.a,null,r.a.createElement("b",null,"Genres:")," ",i),r.a.createElement(b.a,null,r.a.createElement("b",null,"Description:")," ",n.overview))),r.a.createElement(Me,{variant:"contained",color:"primary",onClick:this.handleClick},"Give me another"))))}}]),t}(a.Component);n(103);function Ge(){var e=Object(v.a)(["\n  margin: 16px 32px 0 32px;\n  max-height: calc(100vh - 96px);\n  overflow: scroll;\n"]);return Ge=function(){return e},e}function Re(){var e=Object(v.a)(["\n  margin-right: 16px !important;\n"]);return Re=function(){return e},e}function Se(){var e=Object(v.a)(["\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return Se=function(){return e},e}function Ie(){var e=Object(v.a)(["\n  height: 100%;\n"]);return Ie=function(){return e},e}var Le=Object(j.a)({palette:{primary:{main:"#23B5D3",contrastText:"#FBFBFB"},secondary:{main:"#071013",contrastText:"#FBFBFB"}},typography:{fontFamily:["Khand","Raleway","typeface-roboto","Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),useNextVariants:!0}}),_e=E.a.div(Ie()),Fe=E.a.div(Se()),De=Object(E.a)(b.a)(Re()),Be=E.a.div(Ge()),Ae=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(m.a)(this,Object(p.a)(t).call(this,e))).editListId=n.editListId.bind(Object(f.a)(n)),n.state={listId:"108073",listName:"",listDescription:"",isLoaded:!1,recommendedMovie:"",seenBy:["Jake","Rocky"],selectedGenres:[],selectedRating:1,movies:[],filteredMovies:[]},n}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(s.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=this.state.listId,this._loadMovies(t);case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"_loadMovies",value:function(){var e=Object(s.a)(l.a.mark(function e(t){var n,a,r,i,o,c,s,u;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=[],a="https://api.themoviedb.org/4/list/".concat(t,"?api_key=").concat("43a2c46891bb2b3bb8fccd7b04ce1f02","&language=en-US"),r=a,i=!1,o="",c="",e.prev=6;case 7:if(i){e.next=20;break}return e.next=10,fetch(r);case 10:return s=e.sent,e.next=13,s.json();case 13:u=e.sent,o=u.description,c=u.name,n=n.concat(u.results),u.page<u.total_pages?r="".concat(a,"&page=").concat(u.page+1):i=!0,e.next=7;break;case 20:e.next=25;break;case 22:e.prev=22,e.t0=e.catch(6),alert(e.t0);case 25:this.setState({isLoaded:!0,listDescription:o,listId:t,listName:c,movies:n,filteredMovies:n});case 26:case"end":return e.stop()}},e,this,[[6,22]])}));return function(t){return e.apply(this,arguments)}}()},{key:"editListId",value:function(){var e=Object(s.a)(l.a.mark(function e(t){var n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=t.currentTarget.value,this._loadMovies(n);case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"filterDaMovies",value:function(e,t){return this.state.movies.filter(function(e){return e.vote_average>t}).filter(function(t){return e.every(function(e){return t.genre_ids.includes(parseInt(e))})})}},{key:"render",value:function(){var e=this;return this.state.isLoaded?r.a.createElement(y.a,{theme:Le},r.a.createElement(_e,null,r.a.createElement(A,{editListId:this.editListId,listId:this.state.listId,listName:this.state.listName}),r.a.createElement(O.a,{container:!0},r.a.createElement(O.a,{item:!0,xs:4},r.a.createElement(te,{selectedRating:this.state.selectedRating,selectedGenres:this.state.selectedGenres,updateSelections:function(t,n){var a=e.filterDaMovies(t,n);e.setState({selectedGenres:t,selectedRating:n,filteredMovies:a})}})),r.a.createElement(O.a,{item:!0,xs:8},r.a.createElement(Be,null,r.a.createElement(se,{movies:this.state.filteredMovies})))),r.a.createElement(Ce,{filteredMovies:this.state.filteredMovies}))):r.a.createElement(y.a,{theme:Le},r.a.createElement(Fe,null,r.a.createElement(De,null,"Loading..."),r.a.createElement(g.a,null)))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Ae,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},36:function(e){e.exports={genres:[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}]}},82:function(e,t,n){e.exports=n(104)},87:function(e,t,n){}},[[82,1,2]]]);
//# sourceMappingURL=main.12e70270.chunk.js.map