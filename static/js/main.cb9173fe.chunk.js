(this.webpackJsonpPortfolio=this.webpackJsonpPortfolio||[]).push([[0],{10:function(e,t,i){e.exports={project:"Project_project__3kWkW",icon:"Project_icon__2mC0d",button:"Project_button__2TkLq",projectInfo:"Project_projectInfo__3MIMO",projectTitle:"Project_projectTitle__VHgSZ",description:"Project_description__1nkiQ"}},11:function(e,t,i){e.exports={footer:"Footer_footer__1lA4x",footerContainer:"Footer_footerContainer__2e68r",title:"Footer_title__33AtJ",containerBlock:"Footer_containerBlock__2ABwq",containerForBlock:"Footer_containerForBlock__1SWre",block:"Footer_block__2kjCn"}},12:function(e,t,i){e.exports={nav:"Nav_nav__t84LA",linkActive:"Nav_linkActive__3wZNw"}},15:function(e,t,i){e.exports={mainBlock:"Main_mainBlock__2YNOA",particles:"Main_particles__2TJil",container:"Main_container__17baB",ava:"Main_ava__18K-I",divContainerForBlock:"Main_divContainerForBlock__1R2s1",containerForBlock:"Main_containerForBlock__S2NP0",block:"Main_block__3BXut"}},21:function(e,t,i){e.exports={myProject:"MyProject_myProject__1MPGg",myProjectContsiner:"MyProject_myProjectContsiner__1VKz-",projects:"MyProject_projects__3h6_h"}},22:function(e,t,i){e.exports={skillsBlock:"Skills_skillsBlock__1BgMD",skillsContsiner:"Skills_skillsContsiner__FSNwm",skills:"Skills_skills__1nWyb"}},23:function(e,t,i){e.exports={skill:"Skill_skill__3I-pW",icon:"Skill_icon__3aqE3",projectTitle:"Skill_projectTitle__mlQzP",description:"Skill_description__10rdx"}},31:function(e,t,i){e.exports={header:"Header_header__X4Aro",headerWhite:"Header_headerWhite__3SeBW"}},36:function(e,t,i){e.exports={title:"Title_title__1RqsJ"}},37:function(e,t,i){e.exports={button:"Button_button__OvttF"}},47:function(e,t,i){},48:function(e,t,i){},5:function(e,t,i){e.exports={contact:"Contact_contact__dszAn",contactContainer:"Contact_contactContainer__3v53M",containerBlock:"Contact_containerBlock__28U0a",logo:"Contact_logo__2RG1D",containerForBlock:"Contact_containerForBlock__215Cl",block:"Contact_block__CaDXv",inputs:"Contact_inputs__2vFvG",input:"Contact_input__buJxj",textarea:"Contact_textarea__1cRx_"}},6:function(e,t,i){e.exports={container:"Conteiner_container__yrFM-"}},67:function(e,t,i){"use strict";i.r(t);var a=i(3),n=i.n(a),c=i(16),o=i.n(c),s=(i(47),i(48),i(4)),r=i(5),l=i.n(r),d=i(6),u=i.n(d),j=i(36),p=i.n(j),m=i(1),h=function(e){return Object(m.jsx)("div",{className:p.a.title,children:Object(m.jsx)("h2",{children:e.title})})},b=i(37),_=i.n(b),g=function(e){return Object(m.jsx)("div",{children:Object(m.jsx)("button",{type:"submit",className:_.a.button,children:e.title})})},v=i(8),f=i.n(v),x=i.p+"static/media/telegram.d0e3280a.svg",k=i.p+"static/media/phone-call-svgrepo-com.f1c08a4b.svg",O=i.p+"static/media/email-svgrepo-com.be0fc363.svg",S=i(9),y=i.n(S),C=function(e){var t=function(){e.setActiveModal(!1)};return Object(m.jsx)("div",{className:!1!==e.activeModal?"".concat(y.a.modal," ").concat(y.a.modal_active):y.a.modal,onClick:t,children:Object(m.jsxs)("div",{className:!1!==e.activeModal?"".concat(y.a.modal_content," ").concat(y.a.modal_content_active):y.a.modal_content,onClick:function(e){return e.stopPropagation()},children:[Object(m.jsxs)("section",{className:y.a.name_section,children:[Object(m.jsx)("h2",{}),Object(m.jsx)("p",{onClick:t,children:"\u274c"})]}),Object(m.jsx)("h2",{children:"+375(33)6436137"})]})})},M=function(){return Object(m.jsx)("div",{children:"Phone"})},w=function(e){return Object(m.jsx)(C,{activeModal:e.activeModal,setActiveModal:e.setActiveModal,children:!0===e.activeModal&&"phone"===e.titleModal&&Object(m.jsx)(M,{})})},N=function(e){var t=Object(a.useState)(""),i=Object(s.a)(t,2),n=i[0],c=i[1],o=Object(a.useState)(!1),r=Object(s.a)(o,2),d=r[0],j=r[1],p=function(e){return{backgroundImage:"url("+e+")"}},b=[{icon:p(x),data:"@vladKlopot",rerender:"https://t.me/vladKlopot"},{icon:p(O),data:"vla3ik@gmail.com",rerender:"https://mailto:vla3ik@gmail.com"},{icon:p(k),data:"+375(33)643-61-37",title:"phone"}];return Object(m.jsxs)("div",{id:"contact",className:l.a.contact,children:[Object(m.jsx)("div",{className:"".concat(u.a.container," ").concat(l.a.contactContainer),children:Object(m.jsxs)(f.a,{left:!0,children:[Object(m.jsx)(h,{title:"Contact"}),Object(m.jsx)("div",{className:l.a.containerBlock,children:b.map((function(e){return Object(m.jsxs)("div",{className:l.a.logo,children:[e.title?Object(m.jsx)("a",{onClick:function(){return t=e.title,c(t),void j(!0);var t},className:l.a.containerForBlock,children:Object(m.jsx)("div",{style:e.icon,className:l.a.block})}):Object(m.jsx)("a",{href:e.rerender,className:l.a.containerForBlock,children:Object(m.jsx)("div",{style:e.icon,className:l.a.block})}),Object(m.jsx)("p",{children:e.data})]},e.data)}))}),Object(m.jsxs)("form",{className:l.a.inputs,children:[Object(m.jsx)("input",{className:l.a.input,placeholder:"Name*"}),Object(m.jsx)("input",{className:l.a.input,placeholder:"Email*"}),Object(m.jsx)("textarea",{className:l.a.textarea,placeholder:"Message*"}),Object(m.jsx)(g,{title:"Submit"})]})]})}),Object(m.jsx)(w,{activeModal:d,setActiveModal:j,titleModal:n,setTitleModal:c})]})},B=i(11),A=i.n(B),T=i.p+"static/media/linkedin.e7404a9c.svg",P=i.p+"static/media/github.de033ac8.svg",F=i.p+"static/media/codewars-svgrepo-com.64c4a209.svg",I=function(){var e=function(e){return{backgroundImage:"url("+e+")"}},t=[{icon:e(P),rerender:"https://github.com/Vladon79"},{icon:e(F),rerender:"https://www.codewars.com/users/Vladon79"},{icon:e(T),rerender:"https://www.linkedin.com/in/%D0%B2%D0%BB%D0%B0%D0%B4-%D0%BA%D0%BB%D0%BE%D0%BF%D0%BE%D1%82-a7a320155/"}];return Object(m.jsx)("div",{className:A.a.footer,children:Object(m.jsxs)("div",{className:"".concat(u.a.container," ").concat(A.a.footerContainer),children:[Object(m.jsx)("h3",{className:A.a.title,children:"Klopot Vlad"}),Object(m.jsx)("div",{className:A.a.containerBlock,children:t.map((function(e){return Object(m.jsx)("div",{to:e.rerender,className:A.a.containerForBlock,s:!0,children:Object(m.jsx)("a",{href:e.rerender,style:e.icon,className:A.a.block})},e.rerender)}))}),Object(m.jsx)("p",{children:"\xa9 2022. All rights reserved."})]})})},D=i(12),L=i.n(D),R=i(14),H=function(){return Object(m.jsxs)("header",{className:L.a.nav,children:[Object(m.jsx)(R.Link,{activeClass:L.a.linkActive,to:"home",spy:!0,smooth:!0,offset:-70,duration:500,children:"Home"}),Object(m.jsx)(R.Link,{activeClass:L.a.linkActive,to:"aboutMe",spy:!0,smooth:!0,offset:-70,duration:500,children:"About me"}),Object(m.jsx)(R.Link,{activeClass:L.a.linkActive,to:"skills",spy:!0,smooth:!0,offset:-70,duration:500,children:"Skills"}),Object(m.jsx)(R.Link,{activeClass:L.a.linkActive,to:"myProject",spy:!0,smooth:!0,offset:-70,duration:500,children:"My project"}),Object(m.jsx)(R.Link,{activeClass:L.a.linkActive,to:"contact",spy:!0,smooth:!0,offset:-70,duration:500,children:"Contact"})]})},J=i(31),W=i.n(J),E=function(){var e,t=Object(a.useState)(0),i=Object(s.a)(t,2),n=i[0],c=i[1];function o(){c(window.pageYOffset)}return Object(a.useEffect)((function(){return window.addEventListener("scroll",o),function(){window.removeEventListener("scroll",o)}}),[window.pageYOffset]),e=n<900?W.a.header:W.a.headerWhite,Object(m.jsx)("div",{className:e,children:Object(m.jsx)(H,{})})},V=i(21),q=i.n(V),z=i(10),G=i.n(z),K=i(38),Z=i.n(K),Q=function(e){return Object(m.jsx)(Z.a,{children:Object(m.jsxs)("div",{className:G.a.project,children:[Object(m.jsx)("div",{style:e.style,className:G.a.icon,children:Object(m.jsx)("a",{className:G.a.button,href:e.rerender,children:"See More"})}),Object(m.jsxs)("div",{className:G.a.projectInfo,children:[Object(m.jsx)("h3",{className:G.a.projectTitle,children:e.title}),Object(m.jsx)("p",{className:G.a.description,children:e.description}),Object(m.jsx)("p",{className:G.a.description,children:e.technologies})]})]})})},U=i.p+"static/media/todolistImage.7aaebd7d.png",X=i.p+"static/media/networkImage.1c698481.png",Y=i.p+"static/media/cards.0ff49983.png",$=function(){var e=function(e){return{backgroundImage:"url("+e+")"}},t=[{icon:e(X),title:"Social network",description:"SPA for social actions - messaging and blogging. Implemented: login page with validation, error displaying and captcha; profile page with abilities to: view the information of the selected user, edit your profile information, change avatar, add a new post and view your published posts; dialogs page with the ability to send a message; users page with abilities to: view the list of users using pagination, subscribe and unsubscribe to any user, view any user profile.",technologies:"Technologies: JavaScript, TypeScript, React, Redux, Redux-thunk, Redux-form, Axios, Reselect, SCSS",rerender:"https://vladon79.github.io/Network/"},{icon:e(U),title:"Todolist",description:"SPA for managing to-do lists and their items. Implemented: add todolist / task, remove todolist / task, rename todolist / task, marking the completed task, displaying all / active / confirmed tasks in todolist.",technologies:"Technologies: JavaScript, TypeScript, React, Redux, Material UI, SCSS",rerender:"https://vladon79.github.io/Todolist/"},{icon:e(Y),title:"Cards",description:"SPA for learning by cards. Implemented: login page with validation; register page with validation; reset password page with validation; 404 page; profile page with abilities to: edit your profile information (change avatar and nickname), add a new card pack and edit, search, sort, view, remove and learn your card packs; packs list page with abilities to: search, sort, view and learn any card packs; learn page with abilities to answer a question and evaluate your answer.",technologies:"Technologies: JavaScript, TypeScript, React, Redux, Redux-thunk, Axios, SCSS",rerender:"https://vladon79.github.io/Project/"}];return Object(m.jsx)("div",{id:"myProject",className:q.a.myProject,children:Object(m.jsxs)("div",{className:"".concat(u.a.container," ").concat(q.a.myProjectContsiner),children:[Object(m.jsx)(h,{title:"Project"}),Object(m.jsx)("div",{className:q.a.projects,children:t.map((function(e){return Object(m.jsx)(Q,{style:e.icon,title:e.title,description:e.description,technologies:e.technologies,rerender:e.rerender},e.title)}))})]})})},ee=i(22),te=i.n(ee),ie=i(23),ae=i.n(ie),ne=function(e){return Object(m.jsx)(f.a,{bottom:!0,children:Object(m.jsxs)("div",{className:ae.a.skill,children:[Object(m.jsx)("div",{style:e.icon,className:ae.a.icon}),Object(m.jsx)("h3",{className:ae.a.projectTitle,children:e.title})]})})},ce=i.p+"static/media/logo-javascript.36ec95aa.svg",oe=i.p+"static/media/css-3.b47526a3.svg",se=i.p+"static/media/react-2.6fd2ff17.svg",re=i.p+"static/media/typescript.d768e568.svg",le=i.p+"static/media/redux.be3ada12.svg",de=i.p+"static/media/html-1.21eae339.svg",ue=i.p+"static/media/storyBook.2c8b9974.svg",je=i.p+"static/media/sass.8fc8ee01.svg",pe=i.p+"static/media/postman.1c9c7c46.svg",me=i.p+"static/media/git.23a96361.svg",he=i.p+"static/media/github_logo.495344e0.svg",be=i.p+"static/media/formik.84d78b56.svg",_e=function(){var e=function(e){return{backgroundImage:"url("+e+")"}},t=[{title:"Js",description:"JavaScript is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",icon:e(ce)},{title:"Ts",description:" TypeScript is a strict syntactical superset of JavaScript and adds optional static typing to the language.",icon:e(re)},{title:"React",description:"React is JavaScript library for building user interfaces",icon:e(se)},{title:"Redux",description:"Redux is Predictable State Container for JS Apps",icon:e(le)},{title:"HTML",description:"Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML",icon:e(de)},{title:"Css",description:"Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML",icon:e(oe)},{title:"SASS",description:"Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML",icon:e(je)},{title:"Story book",description:"Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML",icon:e(ue)},{title:"Postman",description:"Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML",icon:e(pe)},{title:"Formik",description:"Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML",icon:e(be)},{title:"GIT",description:"Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML",icon:e(me)},{title:"Github",description:"Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML",icon:e(he)}];return Object(m.jsx)("div",{id:"skills",className:te.a.skillsBlock,children:Object(m.jsxs)("div",{className:"".concat(u.a.container," ").concat(te.a.skillsContsiner),children:[Object(m.jsx)(h,{title:"Skills"}),Object(m.jsx)("div",{className:te.a.skills,children:t.map((function(e){return Object(m.jsx)(ne,{title:e.title,icon:e.icon,description:e.description},e.title)}))})]})})},ge=i(15),ve=i.n(ge),fe=i(39),xe=i.n(fe),ke=function(){return Object(m.jsx)(xe.a,{id:"tsparticles",options:{fpsLimit:100,interactivity:{events:{onClick:{enable:!0,mode:"push"},onHover:{enable:!0,mode:"repulse"},resize:!0},modes:{bubble:{distance:100,duration:2,opacity:.8,size:100},push:{quantity:4},repulse:{distance:200,duration:.4}}},particles:{color:{value:"#ffffff"},links:{color:"#ffffff",distance:150,enable:!0,opacity:.5,width:1},collisions:{enable:!0},move:{direction:"none",enable:!0,outMode:"bounce",random:!1,speed:3,straight:!1},number:{density:{enable:!0,area:800},value:80},opacity:{value:.5},shape:{type:"circle"},size:{random:!0,value:5}}}})},Oe=i(40),Se=i.n(Oe),ye=function(){var e=function(e){return{backgroundImage:"url("+e+")"}},t=[{icon:e(P),rerender:"https://github.com/Vladon79"},{icon:e(F),rerender:"https://www.codewars.com/users/Vladon79"},{icon:e(T),rerender:"https://www.linkedin.com/in/%D0%B2%D0%BB%D0%B0%D0%B4-%D0%BA%D0%BB%D0%BE%D0%BF%D0%BE%D1%82-a7a320155/"}];return Object(m.jsxs)("div",{id:"home",className:ve.a.mainBlock,children:[Object(m.jsx)(ke,{}),Object(m.jsx)("div",{className:ve.a.container,children:Object(m.jsxs)(f.a,{bottom:!0,children:[Object(m.jsx)("h3",{children:"Welcome There!"}),Object(m.jsx)("h1",{children:"I'm Klopot Vlad"}),Object(m.jsx)(Se.a,{text:["I'm front-end developer"]}),Object(m.jsx)("div",{className:ve.a.divContainerForBlock,children:t.map((function(e){return Object(m.jsx)("div",{to:e.rerender,className:ve.a.containerForBlock,children:Object(m.jsx)("a",{href:e.rerender,style:e.icon,className:ve.a.block})},e.rerender)}))})]})})]})},Ce=i(7),Me=i.n(Ce),we=i(41),Ne=i.n(we),Be=function(){return Object(m.jsx)("div",{id:"aboutMe",className:Me.a.aboutMe,children:Object(m.jsx)("div",{className:"".concat(u.a.container," ").concat(Me.a.aboutMeContainer),children:Object(m.jsxs)(f.a,{bottom:!0,children:[Object(m.jsx)(h,{title:"About me"}),Object(m.jsxs)("div",{className:Me.a.infoForMe,children:[Object(m.jsx)("div",{className:Me.a.imageContainer,children:Object(m.jsx)("section",{className:Me.a.border,children:Object(m.jsx)(Ne.a,{className:Me.a.tilt,options:{scale:1,max:25,perspective:2e3},children:Object(m.jsx)("div",{className:Me.a.image})})})}),Object(m.jsx)("div",{className:Me.a.info,children:Object(m.jsx)("p",{children:" I'm frontend developer with experience in creating SPA with React/Redux/ TypeScript in team. Now I improve my skills in this direction and expanding them with new technologies. I spend my leisure time on Codewars or by improving english skills. Open to your suggestions."})})]})]})})})};var Ae=function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(E,{}),Object(m.jsx)(ye,{}),Object(m.jsx)(Be,{}),Object(m.jsx)(_e,{}),Object(m.jsx)($,{}),Object(m.jsx)(N,{}),Object(m.jsx)(I,{})]})},Te=function(e){e&&e instanceof Function&&i.e(4).then(i.bind(null,69)).then((function(t){var i=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,o=t.getTTFB;i(e),a(e),n(e),c(e),o(e)}))},Pe=i(42);o.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(Pe.a,{children:Object(m.jsx)(Ae,{})})}),document.getElementById("root")),Te()},7:function(e,t,i){e.exports={aboutMe:"AboutMe_aboutMe__1jyHS",aboutMeContainer:"AboutMe_aboutMeContainer__3Z2eC",infoForMe:"AboutMe_infoForMe__20y6p",imageContainer:"AboutMe_imageContainer__22qcA",border:"AboutMe_border__AkTOM",tilt:"AboutMe_tilt__1BesN",image:"AboutMe_image__17hwG",info:"AboutMe_info__2rgoS"}},9:function(e,t,i){e.exports={modal:"Modal_modal__27pk3",modal_content:"Modal_modal_content__2-U5L",name_section:"Modal_name_section__NBQ6k",modal_content_active:"Modal_modal_content_active__3u2Zu",modal_active:"Modal_modal_active__2lpVb"}}},[[67,1,2]]]);
//# sourceMappingURL=main.cb9173fe.chunk.js.map