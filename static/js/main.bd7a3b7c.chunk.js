(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,a,t){e.exports=t.p+"static/media/spinner2.584b607f.gif"},11:function(e){e.exports={genres:[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}]}},12:function(e,a,t){e.exports=t(23)},18:function(e,a,t){},23:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(9),i=t.n(c),l=t(1),o=t(2),m=t(4),s=t(3),d=t(5),u=(t(18),t(6)),v=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(m.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(r)))).state={},t.onClick=function(e){e.preventDefault(),console.log("submit")},t.onChange=function(e){var a=e.target,n=a.name,r=a.value;t.setState(Object(u.a)({},n,r))},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-dark bg-dark"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{className:"navbar-brand",href:"/MovieReviewFinder"},r.a.createElement("span",{id:"real-brand"},"Movie Review Finder")),r.a.createElement("ul",{className:"nav navbar-nav navbar-right"},r.a.createElement("li",{className:"nav-item",id:"github-icon"},r.a.createElement("a",{className:"nav-item nav-link",href:"https://github.com/mistat44/MovieReviewFinder",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{style:{fontSize:"1.3rem",marginRight:"3px"},class:"fab fa-github"})," Github")))))}}]),a}(n.Component),b=t(10),p=t.n(b);function h(){return r.a.createElement("div",null,r.a.createElement("img",{src:p.a,alt:"Loading...",style:{width:"100px",margin:"auto",display:"block",marginTop:"1rem"}}))}var g=t(11),f=t(7),E=t.n(f),N=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(m.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(r)))).state={},t.getMovieGenres=function(e,a){for(var t=[],n=0;n<e.length;n++)for(var r=0;r<a.length;r++)e[n]!==a[r].id||t.push(a[r].name);return t},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props,a=e.movie,t=e.url,n=this.getMovieGenres(a.genre_ids,g.genres).map(function(e){return r.a.createElement("li",{className:"list-group-item",key:E()()},e)}),c=E()(),i=E()(),l="#collapseOne".concat(c),o="collapseOne".concat(c),m="headingOne".concat(c),s="#collapseTwo".concat(i,"1"),d="collapseTwo".concat(i,"1"),u="headingTwo".concat(i,"1");return r.a.createElement("div",{className:"card mx-3 mb-3 pb-0 outer",id:"outer-accordion"},r.a.createElement("img",{className:"card-img-top",src:t+a.poster_path,alt:"Movie Image..."}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"text-center"},a.title," "),r.a.createElement("div",{id:"accordion"},r.a.createElement("div",{className:"card "},r.a.createElement("div",{className:"card-header m-0 p-0 ",id:m},r.a.createElement("button",{id:"no-border-button",className:"btn btn-outline-primary collapsed ","data-toggle":"collapse","data-target":l,"aria-expanded":"true","aria-controls":o},"Overview")),r.a.createElement("div",{id:o,className:"collapse","aria-labelledby":m,"data-parent":"#accordion"},r.a.createElement("div",{className:"card-body"},a.overview))),r.a.createElement("div",{className:"card "},r.a.createElement("div",{className:"card-header m-0 p-0 ",id:u},r.a.createElement("button",{id:"no-border-button",className:"btn btn-outline-primary collapsed","data-toggle":"collapse","data-target":s,"aria-expanded":"true","aria-controls":d},"Genres")),r.a.createElement("div",{id:d,className:"collapse","aria-labelledby":u,"data-parent":"#accordion"},r.a.createElement("div",{className:"card-body"},r.a.createElement("ul",{className:"list-group"},n))))),r.a.createElement("div",{className:"text-center"},r.a.createElement("button",{href:"#",id:"rating",className:"btn btn-primary mb-0 mt-2"},"Vote Average: ",a.vote_average)),r.a.createElement("div",{className:"mt-2"},r.a.createElement("h6",null,r.a.createElement("small",null,"(Votes: ",a.vote_count,")")))))}}]),a}(n.Component),y="9ea974456472389d0994c7fd70b47058",w=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(m.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(r)))).state={title:"",rating:"",imdb_id:"",poster:"",results:[],loading:!1,imgBaseURL:"http://image.tmdb.org/t/p/w185/"},t.onSubmit=function(e){e.preventDefault();var a=y;t.setState({loading:!0}),fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(a,"&query=").concat(t.state.title)).then(function(e){return e.json()}).then(function(e){return t.setState({results:e.results,loading:!1},t.setState({title:""}))}).catch(function(e){return console.log(e)})},t.onChange=function(e){var a=e.target,n=a.name,r=a.value;t.setState(Object(u.a)({},n,r))},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e,a,t=this.state,n=t.results,c=t.loading,i=t.imgBaseURL;return void 0!==n&&n.length>0?e=n.map(function(e){return r.a.createElement(N,{url:i,key:e.id,movie:e})}):void 0!==n||c?e=null:a=r.a.createElement("div",{className:"text-center"},r.a.createElement("h1",{className:"pt-4"},"No Movies Found ",r.a.createElement("i",{style:{fontSize:"2rem",marginLeft:"5px"},class:"far fa-frown-open"}))),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 m-auto"},r.a.createElement("form",{onSubmit:this.onSubmit,className:"text-white mt-5"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",name:"title",value:this.state.title,onChange:this.onChange,className:"form-control form-control-lg",placeholder:"Movie Title"})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-2 m-auto"},r.a.createElement("button",{id:"submit-button",type:"button",onClick:this.onSubmit,style:{width:"100%"},className:"btn btn-lg btn-info"},"Submit")))),r.a.createElement("br",null),r.a.createElement("hr",null),c&&r.a.createElement(h,null))),a,r.a.createElement("div",{className:"row mt-3"},r.a.createElement("div",{className:"outer-accordion"},e)))}}]),a}(n.Component),O=function(e){function a(){return Object(l.a)(this,a),Object(m.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v,null),r.a.createElement(w,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,2,1]]]);
//# sourceMappingURL=main.bd7a3b7c.chunk.js.map