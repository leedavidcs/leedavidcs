(this.webpackJsonpleedavidcs=this.webpackJsonpleedavidcs||[]).push([[0],[,function(e,t,a){e.exports={root:"styles_root__g3zvY",header:"styles_header__2D4FY",name:"styles_name__2SvLq",occupation:"styles_occupation__3ZZgy",contact:"styles_contact__1YgVf",iconText:"styles_iconText__1p0bO",jobType:"styles_jobType__1BC_0",qualifications:"styles_qualifications__213Qj",skills:"styles_skills__3JHNm",skillsSection:"styles_skillsSection__WGStA"}},,,function(e,t,a){e.exports={background:"#fff",onBackground:"#000",brand:"#639",onBrand:"#fff",secondary:"cyan",hoverSecondary:"#0077ad"}},function(e,t,a){e.exports={root:"styles_root__7stxd",header:"styles_header__19veU",subheader:"styles_subheader__3h6b4",info:"styles_info__1E2vw"}},function(e,t,a){e.exports={controlContainer:"styles_controlContainer__1BHcf",downloadBtn:"styles_downloadBtn__38eki",sourceContainer:"styles_sourceContainer__1vkVI"}},function(e,t,a){e.exports={root:"styles_root__1xIyJ",header:"styles_header__10l2-",title:"styles_title__1wAA2"}},function(e,t,a){e.exports={root:"styles_root__2N3W6",icon:"styles_icon__3nVst"}},,,function(e,t,a){e.exports={root:"styles_root__3GXtA"}},function(e,t,a){e.exports={root:"styles_root__2z61C"}},,function(e,t,a){e.exports={root:"styles_root__2mXiu"}},function(e,t,a){e.exports={root:"styles_root__2jeEB"}},function(e,t,a){e.exports=a(26)},,,,,function(e,t,a){e.exports={background:"#fff",onBackground:"#000",brand:"#639",onBrand:"#fff",secondary:"cyan",hoverSecondary:"#0077ad"}},,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(10),l=a.n(r),s=(a(21),a(2)),i=a(11),c=a.n(i),d=function(e){var t=e.children,a=e.className,n=e.columnGap,r=void 0===n?12:n;return o.a.createElement("div",{className:Object(s.a)(c.a.root,a),style:{columnGap:r}},t)};d.Column=function(e){var t=e.children,a=e.className;return o.a.createElement("div",{className:a},t)};var m=a(8),u=a.n(m),f=function(e){var t=e.children,a=e.className,n=e.icon,r=e.text;return o.a.createElement("div",{className:Object(s.a)(u.a.root,a)},n&&o.a.createElement(n,{className:u.a.icon,size:12}),r||t)},h=a(12),p=a.n(h),E=Object(n.forwardRef)((function(e,t){var a=e.children,n=e.className,r=e.style;return o.a.createElement("div",{className:Object(s.a)(p.a.root,n),style:r,ref:t},a)}));E.displayName="LetterPage";var g=a(13),v=a.n(g),y=a(6),_=a.n(y),b=function(e){var t=e.children,a=e.className,r=e.fileName,l=e.onComplete,s=Object(n.useRef)(null);return o.a.createElement("div",{className:a},o.a.createElement("div",{className:_.a.controlContainer},o.a.createElement(v.a,{filename:r,onComplete:l,options:{unit:"in",format:[612,792]},targetRef:s},(function(e){var t=e.toPdf;return o.a.createElement("button",{className:_.a.downloadBtn,onClick:t,type:"button"},"Download Resume")}))),o.a.createElement("div",{className:_.a.sourceContainer},o.a.cloneElement(t,{ref:s})))},S=a(7),N=a.n(S),w=function(e){var t=e.children,a=e.className,n=e.icon,r=e.title;return o.a.createElement("section",{className:Object(s.a)(N.a.root,a)},o.a.createElement("div",{className:N.a.header},n&&o.a.createElement(n),o.a.createElement("h2",{className:N.a.title},r)),t)},k=a(3),C=a(5),x=a.n(C),L=function(e){var t=e.children,a=e.className,n=e.locationInfo,r=e.subheader,l=e.subheaderColor,i=e.timeInfo,c=e.title;return o.a.createElement("section",{className:Object(s.a)(x.a.root,a)},c&&o.a.createElement("h3",{className:x.a.header},c),r&&o.a.createElement("h4",{className:x.a.subheader,style:{color:l}},r),(i||n)&&o.a.createElement("div",{className:x.a.info},i&&o.a.createElement(f,{icon:k.a,text:i}),n&&o.a.createElement(f,{icon:k.e,text:n})),t)},j=a(14),A=a.n(j),T=a(15),R=a.n(T),B=function(e){var t=e.children,a=e.className;return o.a.createElement("ul",{className:Object(s.a)(R.a.root,a)},t)};B.Li=function(e){var t=e.children,a=e.className;return o.a.createElement("li",{className:Object(s.a)(A.a.root,a)},o.a.createElement("div",null,t))};var I=B,J=a(4),O=a.n(J),D=a(1),W=a.n(D),F=Object(n.forwardRef)((function(e,t){return o.a.createElement(E,{className:W.a.root,ref:t},o.a.createElement("div",{className:W.a.skills},o.a.createElement(w,{className:W.a.contact,title:"Contact"},o.a.createElement(f,{className:W.a.iconText,icon:k.c,text:"github.com/leedavidcs"}),o.a.createElement(f,{icon:k.d,text:"linkedin.com/in/leedavidcs"}),o.a.createElement(f,{icon:k.b,text:"jobs.lee.david.cs@gmail.com"})),o.a.createElement(w,{title:"Summary"},o.a.createElement("p",null,"Full Stack engineer, with hands-on experience in start-ups, serving various key roles in software development."),o.a.createElement("p",null,"Advanced expertise in TypeScript and Node.js development with React, Apollo + GraphQL."),o.a.createElement("p",null,"Demonstrated skill in researching emerging technologies, identifying opportunities to streamline existing processes and collaborating in a dynamic environment.")),o.a.createElement(w,{title:"Skills"},o.a.createElement(L,{className:W.a.skillsSection,subheader:"Languages",subheaderColor:O.a.secondary},"TypeScript, JavaScript"),o.a.createElement(L,{className:W.a.skillsSection,subheader:"Frontend",subheaderColor:O.a.secondary},"HTML5, CSS3, React, Apollo Client, JSS, Sass, Storybook, Redux, RxJS, Styled-Components"),o.a.createElement(L,{className:W.a.skillsSection,subheader:"Backend",subheaderColor:O.a.secondary},"Node.js, Next.js, Serverless, GraphQL, Nexus, Prisma, Apollo Server, DataLoader, MongoDB, Postgres, Redis, Socket.io, Koa, Express"),o.a.createElement(L,{className:W.a.skillsSection,subheader:"Tooling + Misc.",subheaderColor:O.a.secondary},"Webpack, Stripe, Twilio, Nodemailer, Mjml, Jest, ESLint, Linux, VSCode, Git, Jira, Confluence, Trello, Docker, Travis, SonarQube, Insomnia, Slack, Figma")),o.a.createElement(w,{title:"Education"},o.a.createElement(L,{title:"University of California, San Diego",subheader:"BS in Computer Science",subheaderColor:O.a.secondary,timeInfo:"Graduated: June 2017"}))),o.a.createElement("div",{className:W.a.qualifications},o.a.createElement("header",{className:W.a.header},o.a.createElement("h1",{className:W.a.name},"David Lee"),o.a.createElement("h2",{className:W.a.occupation},"Software Engineer")),o.a.createElement(w,{title:"Professional Experience"},o.a.createElement(L,{title:o.a.createElement(n.Fragment,null,"Full Stack Engineer\xa0",o.a.createElement("span",{className:W.a.jobType},"(full-time)")),subheader:"Onfleet",timeInfo:"Jan 2019 - Dec 2019",locationInfo:"San Francisco, CA"},o.a.createElement(I,null,o.a.createElement(I.Li,null,"Directed the migration of the legacy CoffeeScript + Restify backend monolith to TypeScript, Serverless + GraphQL with increases to integration and unit testing."),o.a.createElement(I.Li,null,"Moved legacy ES5, AngularJS + LESS code to TypeScript, React + Styled-Components, with snapshot testing through Jest + Storybook."),o.a.createElement(I.Li,null,"Rewrote the Stripe billing logic, and the Twilio communications proxying service, once the legacy for both began to fail more frequently."))),o.a.createElement(L,{title:o.a.createElement(n.Fragment,null,"Software Engineer\xa0",o.a.createElement("span",{className:W.a.jobType},"(full-time)")),subheader:"Outward Inc.",timeInfo:"Jan 2018 - Jan 2019",locationInfo:"San Jose, CA"},o.a.createElement(I,null,o.a.createElement(I.Li,null,"Implemented all client-side features for a 3D monogramming app that supported more use-cases and produced higher-fidelity product images than Adobe's Scene7 for Williams-Sonoma."),o.a.createElement(I.Li,null,"Worked with project managers in driving requirements and timelines; talked to clients directly to assist integration; and organized and led meetings with QA, production and the dev-ops teams to coordinate successful releases."),o.a.createElement(I.Li,null,"Created a RESTful service for Bassett Furniture's new consumer site, including the customer/designer interactions and authentication."))),o.a.createElement(L,{title:o.a.createElement(n.Fragment,null,"Software Engineer\xa0",o.a.createElement("span",{className:W.a.jobType},"(contract)")),subheader:"Newport Asia LLC",timeInfo:"June 2016 - Dec 2017",locationInfo:"San Francisco, CA"},o.a.createElement(I,null,o.a.createElement(I.Li,null,"Created tools that aggregated and produced visualizations of market data and income models through use of Bloomberg's API."))),o.a.createElement(L,{title:o.a.createElement(n.Fragment,null,"Software Engineer\xa0",o.a.createElement("span",{className:W.a.jobType},"(intern)")),subheader:"Bosera Int'l",timeInfo:"June 2015 - Aug 2015",locationInfo:"Central, Hong Kong"},o.a.createElement(I,null,o.a.createElement(I.Li,null,"Collaborated with department managers to gather technical requirements and decide on wireframes and timelines."),o.a.createElement(I.Li,null,"Built data visualization modules for the company's revamped site.")))),o.a.createElement(w,{title:"Personal Projects"},o.a.createElement(I,null,o.a.createElement(I.Li,null,"Built a serverless application where users can purchase IexCloud stock data, paper trade, view data on a data-grid, and build webhooks that allows users to structure data received through GraphQL."),o.a.createElement(I.Li,null,"Leveraged Mjml-React to create visually consistent emails across most email-clients/browsers in React."),o.a.createElement(I.Li,null,"Migrated a Serverless, Koa + GraphQL SDL, Mongoose repo to Next, Nexus + Prisma.")))))}));F.displayName="Resume";var G=function(){return o.a.createElement("div",{className:"appRoot"},o.a.createElement(b,{fileName:"lee_david_resume.pdf"},o.a.createElement(F,null)))},P=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function M(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(G,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/leedavidcs",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/leedavidcs","/service-worker.js");P?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):M(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):M(t,e)}))}}()}],[[16,1,2]]]);
//# sourceMappingURL=main.6089998e.chunk.js.map