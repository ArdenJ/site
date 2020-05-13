(this.webpackJsonpardenj=this.webpackJsonpardenj||[]).push([[0],{13:function(e,n,t){e.exports=t(23)},23:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(7),o=t.n(i),l=t(2),c=t(10),d=t(1),m={textPrimary:"#191414",textSecondary:"#101010",accent1:"#ff6666",screenWidth:{medium:"(min-width: 424px)",large:"(min-width: 824px)"}};function u(){var e=Object(l.a)(["\n\n@import url('href=\"https://fonts.googleapis.com/css?family=Lato:700|Montserrat:500,700&display=swap\"');\n    \n    * {\n        padding: 0;\n        margin: 0;\n    }\n    \n    html, body {\n        font-family: 'Lato', sans-serif;\n    }\n    *, *::after, *::before {\n        box-sizing: border-box;\n    }\n    body {\n        overflow-x: hidden;\n        align-items: center;\n        color: ",";\n        height: 100vh;\n        width: 100vw;\n        text-rendering: optimizeLegibility;\n        line-height: 1.5;\n    }\n    \n    h1, h2, h3, h4, h5, h6 {\n        font-family: 'Montserrat', sans-serif;\n        font-weight: 700;\n        line-height: 1;\n    }\n\n    .hidden {\n        display: none !important;\n        transform: translateY(-100%);\n        opacity: 0;\n        transition-duration: 1s;\n    }\n"]);return u=function(){return e},e}var s=Object(d.b)(u(),(function(e){return e.theme.textPrimary}));function h(){var e=Object(l.a)(["\n  background-color: ",";\n  margin: auto;\n  display: grid;\n\n  @media screen and (min-width: 1000px){\n    grid-template-columns: auto auto;\n    width: 80vw;\n  }\n\n  @media screen and (min-width: 2000px) {\n    width: 60vw;\n    max-height: 40vh !important; \n  }\n"]);return h=function(){return e},e}function p(e){return r.a.createElement(f,null,e.children)}var f=d.c.main(h(),(function(e){return e.theme.bodyPrimary}));function g(){var e=Object(l.a)(["\n  padding: 2rem;\n\n  h1 {\n    width: 100%;\n    font-size: 6rem;\n    font-weight: 900;\n    background-image: repeating-linear-gradient(\n    -45deg,\n    #191414,\n    #191414 6px,\n    #fff 3px,\n    #fff 10px\n  );\n\n    background-clip: text;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n  }\n\n  @media screen and "," {\n    display: flex;\n    align-items: center;\n    font-size: 8rem;\n  }\n  @media screen and "," {\n    font-size: 8rem;\n  }\n"]);return g=function(){return e},e}function b(e){return r.a.createElement(y,null,e.children)}var y=d.c.main(g(),(function(e){return e.theme.screenWidth.medium}),(function(e){return e.theme.screenWidth.large}));function v(){var e=Object(l.a)(["\n  padding: 2rem;\n  max-width: 80%;\n\n  ul {\n    list-style: none;\n    display: inline-flex;\n    flex-direction: row;\n\n    > li {\n      padding: 1rem 1rem 0 0;\n    }\n\n    button {\n      background: none;\n      border: none;\n      text-decoration: underline;\n      cursor: pointer;\n    }\n\n    button, a {\n      color: ",";\n      font-size: 1rem;\n      transition-duration: 0.5s;\n    }\n\n    button:hover, a:hover {\n    transition-duration: 0.6s;\n    transition-delay: 0.4s;\n    text-decoration: underline;\n    }\n  }\n\n  @media screen and "," {\n    display: flex;\n    align-items: center;\n    max-width: 80%;\n    align-self: right;\n    display: flex;\n    justify-content: space-between;\n  }\n\n  @media screen and (min-width: 1000px){\n    /* padding-top: 15vh; */\n  }\n\n"]);return v=function(){return e},e}function w(e){return r.a.createElement(x,null,e.children)}var x=d.c.main(v(),(function(e){return e.theme.textSecondary}),(function(e){return e.theme.screenWidth.large}));function E(){var e=Object(l.a)(["\n  height: 100%;\n  max-width: 100%;\n\n  border: 3px solid black;\n  border-radius: 10px;\n\n  padding: 1rem;\n  margin: 1rem 0;\n\n  @media screen and "," {\n    flex-direction: column;\n    .summary {\n      max-width: 80%;\n      padding-left: 1rem;\n    }\n    .content {\n      width: 100%;\n      height: 100%;\n      display: flex;\n      flex-direction: row;\n    }\n  }\n\n  a {\n    color: black;\n  }\n\n\n  .titleContainer {\n    min-width: 35%;\n  }\n\n  .summary {\n    width: 100%;\n  }\n\n\n"]);return E=function(){return e},e}var k=function(e){var n=e.title,t=e.summary,a=e.demo,i=e.repo;return r.a.createElement(j,null,r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"titleContainer"},r.a.createElement("h2",null,n),r.a.createElement("a",{href:a,rel:"noopener noreferrer",target:"_blank"},"demo"),"\xa0",r.a.createElement("a",{href:i,rel:"noopener noreferrer",target:"_blank"},"repo")),r.a.createElement("div",{className:"summary"},t)))},j=d.c.article(E(),(function(e){return e.theme.screenWidth.large})),A=[{title:"Auth API",summary:"A CRUD-functional authentication/authorization API using JSON Web Tokens and an opinionated GraphQL endpoint. Users can create unique accounts, log in and out, and delete their accounts.",tech:["TypeScript","Apollo Server","Node","Prisma2 (Migrate)","Postgres","Docker","BCryptjs","JWT"],demo:"https://drive.google.com/file/d/1zOqEtA6WHoQzJJETmJy3nmZ7ob0oqy9u/preview",repo:"https://github.com/ArdenJ/gql-auth-api"},{title:"XState Video Player",summary:"This is one of my first proper attempts of using a finite state machine to control app state. Users can play and pause the video and drag the progress bar to navigate through the video.",tech:["React","XState","Styled-Components / inline CSS","Webpack"],demo:"https://s9php.sse.codesandbox.io/",repo:"https://github.com/ArdenJ/videoplayer"},{title:"Apollo/React Calendar",summary:"A simple calendar that parses events from a GraphQL API to a calendar component. Users can create, read, update, and delete events, as well as cycle through months using the UI.",tech:["TypeScript","React","Apollo","Node","Styled-Components","Webpack"],demo:"https://drive.google.com/file/d/1eiy_-kSahI7kw28D-icBHoDfMv2voY3T/preview",repo:"https://github.com/ArdenJ/calendar"},{title:"React Audio Player",summary:"A component that extends the html audio element and renders encoded data including the track title, and album art.",tech:["React","Styled-Components"],demo:"https://w9c0x.csb.app/",repo:"https://github.com/ArdenJ/audioplayer"}].map((function(e,n){return r.a.createElement(k,{key:n,title:e.title,summary:e.summary,demo:e.demo,repo:e.repo})}));function S(){var e=Object(l.a)(["\n  padding: 0 2rem;\n\n  @media screen and "," {\n\n    height: 100vh;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: flex-end;\n    top: 0;\n  }\n"]);return S=function(){return e},e}function C(){var e=Object(l.a)(["\n  min-width: 300px;\n  margin: 0 auto;\n  color: #000;\n  display: flex;\n  justify-content: space-between;\n  background-color: ",";\n\n  span {\n    padding: 1rem;\n  }\n\n  button {\n    background: none;\n    border: none;\n    color: #000;\n    font-size: 2.5rem;\n  }\n"]);return C=function(){return e},e}var J=d.c.div(C(),(function(e){return e.theme.accent1})),W=d.c.section(S(),(function(e){return e.theme.screenWidth.large})),I=function(){var e=Object(a.useState)(!1),n=Object(c.a)(e,2),t=n[0],i=n[1];var o=setTimeout((function(){return i(!1)}),3e3);function l(){return!0===t&&clearTimeout(o),!1===t&&clearTimeout(o),function(){var e=document.createElement("textarea");e.value="j.gaddas@outlook.com",document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)}(),i(!0),o}return r.a.createElement(d.a,{theme:m},r.a.createElement(s,null),r.a.createElement(p,null,r.a.createElement("div",{className:"content2"},r.a.createElement(b,null,r.a.createElement("h1",null,"hi I'm",r.a.createElement("br",null),"arden")),r.a.createElement(w,null,r.a.createElement("div",null,"and I'm a software developer based in London. I've been coding for over a year and mainly work with ",r.a.createElement("strong",null,"JavaScript/TypeScript"),", ",r.a.createElement("strong",null,"Node"),", and ",r.a.createElement("strong",null,"GraphQL"),". Perhaps more importantly, I'm an enthusiastic team member, who is highly-motivated by technical and creative challenges. ",r.a.createElement("span",{role:"img","aria-label":"nerd-face"},"\ud83e\udd13"),r.a.createElement("br",null),r.a.createElement("strong",null,"I am also actively looking for my first role - so, if you think I might be a good fit for your team, please do get in touch!"),r.a.createElement("br",null),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.github.com/ArdenJ",target:"blank",rel:"noopener noreferrer"},"github")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/arden-james/",target:"blank",rel:"noopener noreferrer"},"linkedin")),r.a.createElement("li",null,r.a.createElement("button",{onClick:function(){return l()}},"email")))))),r.a.createElement(W,null,A)),r.a.createElement((function(){return r.a.createElement("div",{id:"alert",style:{position:"fixed",top:"0",opacity:1,width:"100vw",display:"flex",justifyContent:"spaceAround"}},r.a.createElement(J,{className:t?"":"hidden"},r.a.createElement("span",null,"copied to clipboard!"),r.a.createElement("button",{onClick:function(){return i(!t)}},r.a.createElement("span",null,"\xd7"))))}),null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[13,1,2]]]);
//# sourceMappingURL=main.397d6c09.chunk.js.map