(this["webpackJsonpdevelopers-portfolio"]=this["webpackJsonpdevelopers-portfolio"]||[]).push([[0],{1:function(e){e.exports=JSON.parse('{"backgroundType":"gradient","plainBackgroundMode":"daylight","devIntro":"Nabin Giri","devDesc":"| Engineer | Programmer | Traveller ","gradientColors":"#EE7752, #E73C7E, #23A6D5, #23D5AB","icons":[{"id":0,"image":"fa-github","url":"https://github.com/NabinGiri","style":"socialicons"},{"id":1,"image":"fa-linkedin","url":"https://www.linkedin.com/in/nabin-giri","style":"socialicons"},{"id":2,"image":"fa-instagram","url":"https://www.instagram.com/nvngiri/","style":"socialicons"},{"id":3,"image":"fa-youtube","url":"https://www.youtube.com/watch?v=XUMc9QafDgw&feature=share","style":"socialicons"}],"instaLink":"https://www.instagram.com/","instaUsername":"nvngiri","instaQuerry":"/?__a=1","showInstaProfilePic":true,"aboutDev":"I am a recent graduate of the University of Central Missouri\'s MS Computer Science program with a concentration in Data Science. I am passionate about data science, machine learning, software engineering, and predictive analysis.","gitHubLink":"https://api.github.com/users/","gitHubUsername":"NabinGiri","gitHubQuerry":"/repos?sort=updated&direction=desc","projectsLength":6}')},11:function(e,t,a){},12:function(e,t,a){e.exports=a.p+"static/media/resume.0ddb5629.pdf"},25:function(e,t,a){e.exports=a(50)},30:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(22),c=a.n(s),i=(a(30),a(3)),o=a(4),l=a(6),u=a(5),m=a(7),d=a(24),h=a(23),b=a.n(h),f=a(1),p=(a(9),a(10),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).toggleHover=function(e){var t=Object(d.a)(a.state.hoverstatus);return"enter"===e.event?(t[e.icon.id]="socialiconshover",a.setState({hoverstatus:t})):"leave"===e.event?(t[e.icon.id]="socialicons",a.setState({hoverstatus:t})):void 0},a.state={backgroundType:f.backgroundType,devInfo:f.devIntro,devDesc:f.devDesc,hoverstatus:["socialicons","socialicons","socialicons","socialicons"]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=f.icons;return r.a.createElement("div",null,r.a.createElement("div",{id:"divmainbody",className:"jumbotron jumbotron-fluid bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"},r.a.createElement("div",{className:"container container-fluid text-center "},r.a.createElement("h1",{className:"display-1"},this.state.devInfo),r.a.createElement(b.a,{className:"lead"}," ",this.state.devDesc),r.a.createElement("div",{className:"p-5"},t.map((function(t){return r.a.createElement("a",{key:t.id,target:"_blank",rel:"noopener noreferrer",href:t.url,"aria-label":"My ".concat(t.image.split("-")[1])},r.a.createElement("i",{className:"fab ".concat(t.image,"  fa-3x ").concat(e.state.hoverstatus[t.id]),onMouseOver:function(){return e.toggleHover({icon:t,event:"enter"})},onMouseOut:function(){return e.toggleHover({icon:t,event:"leave"})}}))}))),r.a.createElement("a",{className:"btn btn-outline-light btn-lg",href:"#aboutme",role:"button","aria-label":"Learn more about me"},"More about me"))))}}]),t}(n.Component)),g=a(8),v=a.n(g),E=a(12),y=a.n(E),j=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){a.state.showInsta&&a.handleRequest()},a.handleRequest=function(e){v.a.get(f.instaLink+f.instaUsername+f.instaQuerry).then((function(e){return a.setState({instaProfilePic:e.data.graphql.user.profile_pic_url_hd})})).catch((function(e){return a.setState({showInsta:!1}),console.error(e.message)})).finally((function(){}))},a.state={heading:"About me",aboutDev:f.aboutDev,instaProfilePic:"",showInsta:f.showInstaProfilePic,resumeURL:y.a},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"aboutme",className:"jumbotron jumbotron-fluid m-0"},r.a.createElement("div",{className:"container container-fluid p-5"},r.a.createElement("div",{className:"row"},this.state.showInsta&&r.a.createElement("div",{className:"col-5 d-none d-lg-block align-self-center"},r.a.createElement("img",{className:"border border-secondary rounded-circle",src:this.state.instaProfilePic,alt:"profilepicture"})),r.a.createElement("div",{className:"col-lg-".concat(this.state.showInsta?"7":"12")},r.a.createElement("h1",{className:"display-4 mb-5 text-center"},this.state.heading),r.a.createElement("p",{className:"lead text-center"},this.state.aboutDev),this.state.resumeURL&&r.a.createElement("p",{className:"lead text-center"},r.a.createElement("a",{className:"btn btn-outline-dark btn-lg",href:y.a,target:"_blank",rel:"noreferrer noopener",role:"button","aria-label":"Resume/CV"},"Resume"))))))}}]),t}(n.Component),N=(a(11),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){a.handleUpdatetime()},a.handleUpdatetime=function(){var e=new Date(a.state.value.pushed_at),t=(new Date).getTime()-e.getTime(),n=Math.trunc(t/1e3/60/60);if(n<24)return a.setState({updated_at:"".concat(n.toString()," hours ago")});var r=e.getDate(),s=e.getMonth(),c=e.getFullYear();return a.setState({updated_at:"on ".concat(r," ").concat(["January","February","March","April","May","June","July","August","September","October","November","December"][s]," ").concat(c)})},a.state={value:a.props.value,updated_at:"0 mints",stargazers_count:a.props.value.stargazers_count,download_url:"".concat(a.props.value.svn_url,"/archive/master.zip"),repo_url:a.props.value.svn_url},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"card shadow-lg p-3 mb-5 bg-white rounded"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},this.state.value.name," "),r.a.createElement("p",{className:"card-text"},this.state.value.description," "),r.a.createElement("a",{href:this.state.download_url,className:"btn btn-outline-secondary mr-3"},r.a.createElement("i",{className:"fab fa-github"})," Clone Project"),r.a.createElement("a",{href:this.state.repo_url,target:" _blank",className:"btn btn-outline-secondary"},r.a.createElement("i",{className:"fab fa-github"})," Repo"),r.a.createElement("hr",null),r.a.createElement(w,{value:this.state.value.languages_url}),r.a.createElement("p",{className:"card-text"},r.a.createElement("span",{className:"text-dark card-link mr-4"},r.a.createElement("i",{className:"fab fa-github"})," Stars"," ",r.a.createElement("span",{className:"badge badge-dark"},this.state.stargazers_count)),r.a.createElement("small",{className:"text-muted"},"Updated ",this.state.updated_at)))))}}]),t}(n.Component)),w=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={data:[]},a.componentDidMount=function(){a.handleRequest()},a.handleRequest=function(){v.a.get(a.props.value).then((function(e){return a.setState({data:e.data})})).catch((function(e){return console.error(e.message)})).finally((function(){}))},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=[],a=0;for(var n in this.state.data)t.push(n),a+=this.state.data[n];return r.a.createElement("div",{className:"pb-3"},"Languages:"," ",t.map((function(t){return r.a.createElement("p",{key:t,className:"badge badge-light card-link"},t,": ",Math.trunc(e.state.data[t]/a*1e3)/10," %")})))}}]),t}(n.Component),O=N,k=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){a.handleRequest()},a.handleRequest=function(e){v.a.get(f.gitHubLink+f.gitHubUsername+f.gitHubQuerry).then((function(e){return a.setState({projectsArray:e.data.slice(0,a.state.projectsLength)})})).catch((function(e){return console.error(e.message)})).finally((function(){}))},a.state={heading:"Recent Projects",projectsArray:[],projectsLength:f.projectsLength},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"projects",className:"jumbotron jumbotron-fluid bg-transparent m-0"},r.a.createElement("div",{className:"container container-fluid p-5"},r.a.createElement("h1",{className:"display-4 pb-5"},this.state.heading),r.a.createElement("div",{className:"row"},this.state.projectsArray.map((function(e){return r.a.createElement(O,{key:e.id,id:e.id,value:e})})))))}}]),t}(n.Component),_=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={bgStyle:{backgroundColor:"#f5f5f5"}},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",{style:this.state.bgStyle,className:"mt-auto py-3 text-center"},r.a.createElement("i",{className:"fas fa-code"})," with ",r.a.createElement("i",{className:"fas fa-heart"})," by"," ",r.a.createElement("a",{className:"badge badge-dark",rel:"noopener",href:"https://github.com/NabinGiri","aria-label":"My GitHub"},"Nabin Giri")," ","using ",r.a.createElement("i",{className:"fab fa-react"}),r.a.createElement("p",null,r.a.createElement("small",{className:"text-muted"}," ","Project code is open source. Feel free to fork and make your own version.")))}}]),t}(n.Component),D=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(p,null),r.a.createElement(j,null),r.a.createElement(k,null),r.a.createElement(_,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[25,1,2]]]);
//# sourceMappingURL=main.e88cadcd.chunk.js.map