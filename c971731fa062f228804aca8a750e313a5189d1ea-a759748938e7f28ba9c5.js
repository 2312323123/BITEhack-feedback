"use strict";(self.webpackChunkbitehack=self.webpackChunkbitehack||[]).push([[531],{6082:function(e,n,M){M.d(n,{Z:function(){return o}});var t=M(7294),a="footer-module--footer_link--g4sh2",c="footer-module--footer_primary--1Di7Y",r="footer-module--footer_secondary--RvaL9",i=M(8206);function o(){return t.createElement(t.Fragment,null,t.createElement("footer",{className:"footer-module--footer--M7sYz"},t.createElement("div",null,t.createElement("p",{className:c},"Organizator"),t.createElement("img",{className:"footer-module--footer_logo--vNn2L",src:i.Z})),t.createElement("div",{className:"footer-module--footer_center--hrBR+"},t.createElement("p",{className:c},"Stowarzyszenie Studentów BEST AGH Kraków"),t.createElement("p",{className:r},"I DS Alfa Blok 1"),t.createElement("p",{className:r},"ul. Reymonta 17/E14"),t.createElement("p",{className:r},"30-059 Kraków"),t.createElement("a",{className:a,href:"https://www.newsite.best.krakow.pl/"},"www.BEST.krakow.pl")),t.createElement("div",null,t.createElement("p",{className:c},"Koordynator Projektu"),t.createElement("p",{className:r},"Paweł Zaręba"),t.createElement("a",{className:a,href:"mailto:pawel.zareba@best.krakow.pl"},"pawel.zareba@best.krakow.pl"))))}},4919:function(e,n,M){M.d(n,{Z:function(){return r}});var t=M(7294),a="main_frame-module--flame--QnRcA",c="main_frame-module--spark_off--FUVJF";function r(e){var n=e.turnedOn,M=e.setTurnedOn,r=e.newWindowY,i=e.lastWindowY,o=(0,t.useState)(!1),N=o[0],z=o[1],u=(0,t.useState)(!1),l=u[0],j=u[1],D=(0,t.useState)(!1),m=D[0],g=D[1],I=(0,t.useRef)(null);return(0,t.useLayoutEffect)((function(){n?m||(r>i.current?(z(!0),j(!1),clearTimeout(I.current),I.current=setTimeout((function(){return z(!1)}),200)):(z(!1),j(!0),clearTimeout(I.current),I.current=setTimeout((function(){return j(!1)}),200))):(z(!0),setTimeout((function(){z(!1),j(!0),setTimeout((function(){j(!1)}),1e3)}),1200),M(!0),g(!0),setTimeout((function(){return g(!1)}),2200))}),[n,r,i.current]),t.createElement("div",{className:"main_frame-module--main_frame_container--0MLJL"},t.createElement("div",{className:"main_frame-module--main_frame_frame--g9G+R "+(n?"main_frame-module--main_frame_frame_opened--q7mJw":"")},t.createElement("div",{className:N?"main_frame-module--spark_1--exwAC":c},t.createElement("div",{className:a})),t.createElement("div",{className:N?"main_frame-module--spark_2--oZ0el":c},t.createElement("div",{className:a})),t.createElement("div",{className:l?"main_frame-module--spark_3--kv72U":c},t.createElement("div",{className:a})),t.createElement("div",{className:l?"main_frame-module--spark_4--zo+aG":c},t.createElement("div",{className:a}))))}},9233:function(e,n,M){M.d(n,{Z:function(){return D}});var t=M(7294),a=M(1597),c="nav_content_big_screen-module--nav_button_background--SDLVy",r="nav_content_big_screen-module--nav_button_background_container--a7eNf",i=M(3154);function o(e){var n=(0,t.useState)(!0),M=n[0],o=n[1],N=e.newWindowY,z=e.lastWindowY;return(0,t.useEffect)((function(){N>z.current?o(!1):o(!0)}),[N,z.current]),(0,t.useEffect)((function(){setTimeout((function(){return o(!0)}),0)}),[]),t.createElement("nav",{className:"nav_content_big_screen-module--nav--x1Jgy "+(M?"":"nav_content_big_screen-module--hidden--S-J+4")},t.createElement("img",{src:i.Z,alt:"BITEhack logo text"}),t.createElement("div",{className:r},t.createElement("div",{className:c},t.createElement(a.rU,{to:"/",state:{turnedOn:e.turnedOn,lastWindowY:e.lastWindowY.current,newWindowY:e.newWindowY,blurOn:e.blurOn,electronicOn:e.electronicOn,contentScrolled:e.contentScrolled}},"O projekcie"))),t.createElement("div",{className:r},t.createElement("div",{className:c},t.createElement(a.rU,{to:"/organizator",state:{turnedOn:e.turnedOn,lastWindowY:e.lastWindowY.current,newWindowY:e.newWindowY,blurOn:e.blurOn,electronicOn:e.electronicOn,contentScrolled:e.contentScrolled},style:{zIndex:50,position:"fixed"}},"Organizatorzy"))),t.createElement("div",{className:r},t.createElement("div",{className:c},t.createElement(a.rU,{to:"/regulamin",state:{turnedOn:e.turnedOn,lastWindowY:e.lastWindowY.current,newWindowY:e.newWindowY,blurOn:e.blurOn,electronicOn:e.electronicOn,contentScrolled:e.contentScrolled}},"Regulamin"))))}var N="navbutton-module--bar--Q-xhk";function z(e){return t.createElement("div",{style:{position:"fixed",right:0,top:0,userSelect:"none"},onMouseUp:function(){e.click()},className:"navbutton-module--bars--HR4N+"},t.createElement("div",{className:N+" navbutton-module--bar_1--vTIM1 "+(e.menuOpened?" navbutton-module--bar_1_open--By3TN":"")}),t.createElement("div",{className:N+" navbutton-module--bar_2--8n5T5 "+(e.menuOpened?" navbutton-module--bar_2_open--B1lOd":"")}),t.createElement("div",{className:N+" navbutton-module--bar_3--edFNe "+(e.menuOpened?" navbutton-module--bar_3_open--Y4YLv":"")}))}var u="navoption-module--nav_option--YfHH9",l="navoption-module--tak--gnsyU";function j(e){var n={fontSize:"1.25rem",color:"white",fontFamily:"'Open Sans', Verdana",textDecoration:"none"},M=function(){e.click()};return t.createElement("div",{className:"navbar-module--nav_content_container--M1MBV "+(e.menuOpened?"navbar-module--nav_content_container_opened--hSKPM":"navbar-module--nav_content_container_closed--IsSr1")},t.createElement("img",{src:i.Z,alt:"BITEhack logo text",className:"navbar-module--nav_content_logo--N2DcD "+(e.menuOpened?"navbar-module--nav_content_logo_opened--UnhgU":"navbar-module--nav_content_logo_closed--w9--Z")}),t.createElement("div",{onClick:function(){return M()},style:{transitionDelay:"0s"},className:u+" "+(e.menuOpened?"":l)},t.createElement(a.rU,{to:"/#opis",style:n,state:{turnedOn:e.turnedOn,lastWindowY:e.lastWindowY.current,newWindowY:e.newWindowY,blurOn:e.blurOn,electronicOn:e.electronicOn,contentScrolled:e.contentScrolled}},"Opis")),t.createElement("div",{onClick:function(){return M()},style:{transitionDelay:"0.08s"},className:u+" "+(e.menuOpened?"":l)},t.createElement(a.rU,{to:"/#kategorie",style:n,state:{turnedOn:e.turnedOn,lastWindowY:e.lastWindowY.current,newWindowY:e.newWindowY,blurOn:e.blurOn,electronicOn:e.electronicOn,contentScrolled:e.contentScrolled}},"Kategorie")),t.createElement("div",{onClick:function(){return M()},style:{transitionDelay:"0.16s"},className:u+" "+(e.menuOpened?"":l)},t.createElement(a.rU,{to:"/#oprojekcie",style:n,state:{turnedOn:e.turnedOn,lastWindowY:e.lastWindowY.current,newWindowY:e.newWindowY,blurOn:e.blurOn,electronicOn:e.electronicOn,contentScrolled:e.contentScrolled}},"O projekcie, przebieg")),t.createElement("div",{onClick:function(){return M()},style:{transitionDelay:"0.24s"},className:u+" "+(e.menuOpened?"":l)},t.createElement(a.rU,{to:"/#cozyskasz",style:n,state:{turnedOn:e.turnedOn,lastWindowY:e.lastWindowY.current,newWindowY:e.newWindowY,blurOn:e.blurOn,electronicOn:e.electronicOn,contentScrolled:e.contentScrolled}},"Co zyskasz")),t.createElement("div",{onClick:function(){return M()},style:{transitionDelay:"0.32s"},className:u+" "+(e.menuOpened?"":l)+" navoption-module--number_5--nSIav"},t.createElement(a.rU,{to:"/organizator",style:n,state:{turnedOn:e.turnedOn,lastWindowY:e.lastWindowY.current,newWindowY:e.newWindowY,blurOn:e.blurOn,electronicOn:e.electronicOn,contentScrolled:e.contentScrolled}},"Organizator")),t.createElement("div",{onClick:function(){return M()},style:{transitionDelay:"0.4s"},className:u+" "+(e.menuOpened?"":l)},t.createElement(a.rU,{to:"/regulamin",style:n,state:{turnedOn:e.turnedOn,lastWindowY:e.lastWindowY.current,newWindowY:e.newWindowY,blurOn:e.blurOn,electronicOn:e.electronicOn,contentScrolled:e.contentScrolled}},"Regulamin")))}function D(e){var n=(0,t.useState)(!1),M=n[0],a=n[1],c=function(){a(!M)};return t.createElement(t.Fragment,null,t.createElement(z,{click:c,menuOpened:M}),t.createElement(j,{click:c,menuOpened:M,turnedOn:e.turnedOn,setTurnedOn:e.setTurnedOn,lastWindowY:e.lastWindowY,newWindowY:e.newWindowY,blurOn:e.blurOn,setBlurOn:e.setBlurOn,electronicOn:e.electronicOn,setElectronicOn:e.setElectronicOn,contentScrolled:e.contentScrolled,setContentScrolled:e.setContentScrolled}),t.createElement(o,{turnedOn:e.turnedOn,setTurnedOn:e.setTurnedOn,lastWindowY:e.lastWindowY,newWindowY:e.newWindowY,blurOn:e.blurOn,setBlurOn:e.setBlurOn,electronicOn:e.electronicOn,setElectronicOn:e.setElectronicOn,contentScrolled:e.contentScrolled,setContentScrolled:e.setContentScrolled}))}},6767:function(e,n,M){M.d(n,{Z:function(){return i}});var t=M(7294),a="moving_background-module--speed_1_child--efHQk",c="moving_background-module--speed_2_child--fDMov",r="moving_background-module--speed_3_child--1MXdZ";function i(e){var n=(0,t.useState)(!0),M=n[0],i=n[1],o=(0,t.useState)({}),N=o[0],z=o[1],u=e.newWindowY,l=e.lastWindowY;return(0,t.useLayoutEffect)((function(){var e=function(){for(var e=window.innerWidth,n=window.innerHeight,M=e*n,a=Math.floor(M/1e4),c=Math.floor(a/2),r=Math.floor(a/3.5),i="",o="",N="",u=0;u<a;u++)i+=Math.round(Math.random()*e)+"px "+Math.round(Math.random()*n)+"px #888,";i=i.slice(0,-1);for(var l=0;l<c;l++)o+=Math.round(Math.random()*e)+"px "+Math.round(Math.random()*n)+"px #888,";o=o.slice(0,-1);for(var j=0;j<r;j++)N+=Math.round(Math.random()*e)+"px "+Math.round(Math.random()*n)+"px #888,";N=N.slice(0,-1),z({content_1:t.createElement("div",{style:{width:"2px",height:"2px",borderRadius:"50%",boxShadow:i}}),content_2:t.createElement("div",{style:{width:"3px",height:"3px",borderRadius:"50%",boxShadow:o}}),content_3:t.createElement("div",{style:{width:"5px",height:"5px",borderRadius:"50%",boxShadow:N}})})};e(),window.addEventListener("resize",e)}),[]),(0,t.useEffect)((function(){u>l.current?i(!0):i(!1)}),[u,l.current]),(0,t.useEffect)((function(){setTimeout((function(){return i(!0)}),0)}),[]),t.createElement("div",{className:"moving_background-module--main_background--FS5qJ"},t.createElement("div",{style:M?{}:{animationPlayState:"paused"},className:"moving_background-module--speed_1_container--7E-tQ"},t.createElement("div",{className:a},N.content_1),t.createElement("div",{className:a},N.content_1),t.createElement("div",{className:a},N.content_1)),t.createElement("div",{style:M?{}:{animationPlayState:"paused"},className:"moving_background-module--speed_2_container--CjcMa"},t.createElement("div",{className:c},N.content_2),t.createElement("div",{className:c},N.content_2),t.createElement("div",{className:c},N.content_2)),t.createElement("div",{style:M?{}:{animationPlayState:"paused"},className:"moving_background-module--speed_3_container--u4ar2"},t.createElement("div",{className:r},N.content_3),t.createElement("div",{className:r},N.content_3),t.createElement("div",{className:r},N.content_3)))}},7406:function(e,n,M){M.d(n,{Z:function(){return a}});var t=M(7294);function a(e){return t.createElement("h1",{className:"space_header-module--space_header--52sRx"},e.header)}},2099:function(e,n,M){M(7294)},9643:function(e,n,M){M(7294)},6707:function(e,n,M){M.r(n),M.d(n,{Head:function(){return x},default:function(){return k}});var t=M(7294),a=M(9233),c=M(6767),r=M(4919),i=(M(2099),M(9643),M(7406)),o=M(9981);function N(e){return t.createElement("p",{className:"space_paragraph-module--space_paragraph--ySk7U"},e.paragraph)}var z=M.p+"static/BITEhack_logo-f0d72fe3e078d24a324f11082ea0feac.svg",u=M(3154),l="landing_page-module--header_panel_text_wrapper--li7NO";function j(){return t.createElement("header",{className:"landing_page-module--header--wok8B"},t.createElement("aside",{className:"landing_page-module--header_panel_1--QOBRa"},t.createElement("div",{className:l},t.createElement("p",{className:"landing_page-module--header_panel_1_text--0348D"},"HACKATHON"))),t.createElement("section",{className:"landing_page-module--header_panel_2--dGKFj"},t.createElement("img",{className:"landing_page-module--header_img_logo--GkjZU",src:z,alt:"BITEhack logo image"}),t.createElement("img",{className:"landing_page-module--header_img_text--rIRF+",src:u.Z,alt:"BITEhack logo text"}),t.createElement("div",{className:"landing_page-module--header_button_container--3P1Ls"},t.createElement("div",{className:"landing_page-module--header_button--zThtH"},"ZAPISZ SIĘ"))),t.createElement("aside",{className:"landing_page-module--header_panel_3--7mVmb"},t.createElement("div",{className:l},t.createElement("p",{className:"landing_page-module--header_panel_3_text--gEyeY"},"14 - 15 STYCZNIA 2023"))))}var D="categories-module--category--tnrg9",m="categories-module--category_header--fBTby";function g(){return t.createElement(t.Fragment,null,t.createElement(i.Z,{header:"KATEGORIE"}),t.createElement("section",{className:"categories-module--categories_container--c6vt1"},t.createElement("div",{className:D},t.createElement("h2",{className:m},"KLASYCZNA"),t.createElement(N,{paragraph:"Przed Tobą i Twoją\r drużyną możliwość \r programowania w \r dowolnym języku i \r przy użyciu \r dowolnej \r technologii. W \r czasie trwania \r BITEhacka Twoim \r zadaniem będzie \r twórcze \r rozwiązanie \r zadanego \r problemu, poprzez \r nadanie swoim \r pomysłom \r odpowiedniego \r kształtu."})),t.createElement("div",{className:D},t.createElement("h2",{className:m},"ROBOTYCZNA"),t.createElement(N,{paragraph:"Twoim zadaniem\r oraz Twojej \r drużyny będzie \r zbudowanie i \r zaprogramowanie \r od podstaw \r działającego \r robota, a to \r wszystko przy \r kompleksowym \r wsparciu \r mentorów. Używać \r będziesz platformy \r programistycznej, \r dodatkowych \r narzędzi, a także \r innych niezbędnych\r komponentów."})),t.createElement("div",{className:D},t.createElement("h2",{className:m},"AI"),t.createElement(N,{paragraph:"Wraz z zespołem\r stworzycie \r kompletne \r rozwiązanie \r informatyczne, \r procesu lub obiekt \r dynamiczny, przy \r pomocy \r najnowszych \r technologii \r opierających się na \r sztucznej \r inteligencji. Wasze \r rozwiązanie musi \r spełniać założenia \r określone w \r temacie kategorii, \r ogłoszone w chwili \r rozpoczęcia \r wydarzenia."}))))}var I="sponsors-module--sponsor_image--bBuHq",s=M(8242),d=M(3974),y=M(4047),E=M(2289),A=M(2116),T=M(3541);function O(){return t.createElement(t.Fragment,null,t.createElement(i.Z,{header:"SPONSOR GŁÓWNY"}),t.createElement("img",{src:s.Z,className:"sponsors-module--main_sponsor_image--leHV+",alt:"main sponsor"}),t.createElement("div",{style:{height:"2.5vh"}}),t.createElement(i.Z,{header:"SPONSORZY"}),t.createElement("div",{className:"sponsors-module--sponsors--0o8Lj"},t.createElement("img",{src:d.Z,className:I,alt:"sponsor"}),t.createElement("img",{src:T.Z,className:I,alt:"sponsor"}),t.createElement("img",{src:y.Z,className:I,alt:"sponsor"}),t.createElement("img",{src:E.Z,className:I,alt:"sponsor"}),t.createElement("img",{src:A.Z,className:I,alt:"sponsor"})))}var w=M(6082);function L(e){var n=e.contentScrolled,M=e.setContentScrolled;return(0,t.useEffect)((function(){n||M(!0)}),[n,M]),t.createElement("main",{id:"opis",className:o.h+" "+(n?o.i:"")},t.createElement(j,null),t.createElement("div",{style:{height:"5vh"}}),t.createElement("div",{style:{height:"5vh"}}),t.createElement(N,{paragraph:"Programowanie to Twoja pasja? Interesujesz się tematyką AI lub\r\nrobotyką? Jeśli na któreś z tych pytań odpowiedziałeś tak, to \r\nkoniecznie weź swoich znajomych i zapiszcie się na BITEhacka, \r\ndzięki któremu spędzicie wspólnie weekend i rozwiniecie swoje \r\npasje."}),t.createElement("div",{style:{height:"7.5vh"}}),t.createElement(i.Z,{header:"CZAS"}),t.createElement(N,{paragraph:"Twój team będzie miał 24 godziny na opracowanie\r\ninnowacyjnego rozwiązania i przygotowanie prototypu aplikacji \r\nczy też oprogramowania lub stworzenie zwycięskiej wersji \r\nrobota. Jesteście gotowi na niezapomnianą przygodę? Zapisz \r\nsię już teraz."}),t.createElement("div",{style:{height:"7.5vh"}}),t.createElement(i.Z,{header:"ATRAKCJE"}),t.createElement(N,{paragraph:"W przerwie od kreatywnego myślenia będziecie mieli okazję\r\nporozmawiać z potencjalnymi pracodawcami. Partner Główny- \r\nIBM przeprowadzi specjalnie dla Was Speed recruitment."}),t.createElement("div",{id:"kategorie",style:{height:"7.5vh"}}),t.createElement(g,null),t.createElement("div",{id:"oprojekcie",style:{height:"7.5vh"}}),t.createElement(i.Z,{header:"O PROJEKCIE"}),t.createElement(i.Z,{header:"Co to tak naprawdę jest BITEhack?"}),t.createElement(N,{paragraph:"BITEhack (BEST IT Extended Hackathon) jest konkursem\r\nprogramistyczno- robotycznym skierowanym dla wszystkich \r\nstudentów organizowanym w Klubie Studio zaraz przy Akademii \r\nGórniczo-Hutniczej w Krakowie. Zeszłoroczna edycja została \r\nrozszerzona o kategorie AI, która ciesząc się dużym \r\nzainteresowaniem została z nami również w tym roku. \r\nWydarzenie zakłada wykonanie innowacyjnych projektów w \r\nczasie nie przekraczającym doby. Zespół może się składać \r\nmaksymalnie z 4 osób."}),t.createElement("div",{style:{height:"7.5vh"}}),t.createElement(i.Z,{header:"PRZEBIEG WYDARZENIA"}),t.createElement(N,{paragraph:"Uczestnicy hackathonu mają 24 godziny na zaproponowanie i\r\nprzedstawienie własnego pomysłu na zadany w temacie \r\nproblem.\r\nWyniki końcowe zespołów oceniać będzie jury składające się z \r\nprzedstawicieli sponsorów BITEhacka oraz pracowników \r\nnaukowych Akademii Górniczo-Hutniczej. "}),t.createElement("div",{id:"cozyskasz",style:{height:"7.5vh"}}),t.createElement(i.Z,{header:"CZY WARTO?"}),t.createElement(N,{paragraph:"Dzięki zapisom na wydarzenie możecie spędzić wspólnie czas ze\r\nznajomymi, poznać innych kreatywnych studentów, nabyć \r\npotrzebnego doświadczenia i nauczyć się rozwiązywania \r\nproblemów pracując w zespole. Hackathon jest również świetną \r\nokazją do nawiązania kontaktów z przedstawicielami \r\nnajwiększych firm na krakowskim rynku IT. Będziecie mieli \r\nrównież okazję na wzięcie udziału w speed recruitment \r\npoprowadzonym przez naszego Partnera Głównego. Kolejna \r\ntaka okazja dopiero za rok!"}),t.createElement("div",{id:"sponsorzy",style:{height:"5vh"}}),t.createElement(O,null),t.createElement(w.Z,null))}var k=function(e){var n=e.location,M=(0,t.useState)(!!n.state&&n.state.turnedOn),i=M[0],o=M[1],N=(0,t.useState)(!!n.state&&n.state.blurOn),z=N[0],u=N[1],l=(0,t.useState)(!!n.state&&n.state.electronicOn),j=l[0],D=l[1],m=(0,t.useRef)(n.state?n.state.lastWindowY:window.scrollY),g=(0,t.useState)(n.state?n.state.newWindowY:window.scrollY),I=g[0],s=g[1],d=(0,t.useState)(!!n.state&&n.state.contentScrolled),y=d[0],E=d[1];return(0,t.useEffect)((function(){window.onscroll=function(){m.current=I,s(window.scrollY),console.count("UseEffect entered")}}),[I,s,m.current]),(0,t.useEffect)((function(){window.matchMedia("(min-width: 50rem)").matches&&window.scrollTo(0,0)}),[]),t.createElement(t.Fragment,null,t.createElement(a.Z,{turnedOn:i,setTurnedOn:o,lastWindowY:m,newWindowY:I,blurOn:z,setBlurOn:u,electronicOn:j,setElectronicOn:D,contentScrolled:y,setContentScrolled:E}),t.createElement(c.Z,{newWindowY:I,lastWindowY:m}),t.createElement(r.Z,{turnedOn:i,setTurnedOn:o,lastWindowY:m,newWindowY:I}),t.createElement(L,{contentScrolled:y,setContentScrolled:E}))},x=function(){return t.createElement(t.Fragment,null,t.createElement("meta",{charset:"UTF-8"}),t.createElement("title",null,"BITEhack 2023"),t.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),t.createElement("link",{rel:"icon",type:"image/x-icon",href:"../images/favicon.ico"}),t.createElement("meta",{name:"description",content:"BITEhack jest konkursem programistyczno- robotycznym dla studentów organizowanym w Klubie Studio zaraz przy Akademii Górniczo-Hutniczej w Krakowie."}),t.createElement("meta",{name:"author",content:"Maciej Piotrowski"}))}},9981:function(e,n,M){M.d(n,{h:function(){return a},i:function(){return t}});var t="main_content-module--content_scrolled--TxWfb",a="main_content-module--main_content--kdNns"},3154:function(e,n){n.Z="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTg4IiBoZWlnaHQ9IjU1IiB2aWV3Qm94PSIwIDAgMTg4IDU1IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00OC40NDkxIDI3Ljc0NjdDNDguMDg3MSAyNy41MjA0IDQ3LjY4NjcgMjcuMzM5MyA0Ny4yNDEgMjcuMTA2Mkw0Ny43OTMgMjYuNzEyM0M1MC4xNTI3IDI0Ljk5OSA1MC4zMjAxIDIwLjkzNCA0Ny4zMTc5IDE5LjMzNkM0Ni45MzM4IDE5LjEzNiA0Ni41MzUzIDE4Ljk2NSA0Ni4xMjU2IDE4LjgyNDVDNDUuMDAyNyAxOC40NjgzIDQzLjgyODIgMTguMzAyMyA0Mi42NTA2IDE4LjMzMzNDMzkuODQ3NSAxOC4zMTUyIDM3LjA0NDQgMTguMzMzMyAzNC4yMzkgMTguMzMzM0MzNC4wNjQ4IDE4LjMzMzMgMzMuODg4NCAxOC4zNTM3IDMzLjcyNTUgMTguMzYyOEMzMy42MTQ2IDE5LjEwMjkgMzMuNjQ4NSAzNi4yNDM0IDMzLjc2MzkgMzYuNjU5OUgzNC4yMzY4QzM3LjIyMDkgMzYuNjU5OSA0MC4yMDQ5IDM2LjY1OTkgNDMuMTkxMyAzNi42NTk5QzQzLjkxNDUgMzYuNjU2NSA0NC42MzY4IDM2LjYwODkgNDUuMzU0MSAzNi41MTczQzQ2LjQ1NTMgMzYuNDAzMyA0Ny41MTcyIDM2LjA0NTMgNDguNDYyNyAzNS40NjkzQzQ4Ljk3MDkgMzUuMTY4OSA0OS40MDY1IDM0Ljc2IDQ5LjczODUgMzQuMjcxN0M1MC4wNzA1IDMzLjc4MzQgNTAuMjkwNyAzMy4yMjc5IDUwLjM4MzQgMzIuNjQ0N0M1MC40NTczIDMyLjE3ODUgNTAuNDgwMSAzMS43MDU3IDUwLjQ1MTMgMzEuMjM0NkM1MC40MzEzIDMwLjUzMyA1MC4yMzggMjkuODQ3MyA0OS44ODg3IDI5LjIzODdDNDkuNTM5MyAyOC42MzAxIDQ5LjA0NDcgMjguMTE3NSA0OC40NDkxIDI3Ljc0NjdaTTM3LjkwNDEgMjEuNTc2OEMzOC4wMjUgMjEuNTUxMyAzOC4xNDc0IDIxLjUzMzkgMzguMjcwNiAyMS41MjQ3QzM5LjY2MiAyMS41MjQ3IDQxLjA1NTYgMjEuNDk1MyA0Mi40NDQ3IDIxLjU0MDVDNDMuMDAyNSAyMS41NjQ0IDQzLjU1MzQgMjEuNjczNiA0NC4wNzgyIDIxLjg2NDJDNDQuODY3NyAyMi4xNDI2IDQ1LjI3MDQgMjIuNzUzNyA0NS4yODg1IDIzLjYwOTNDNDUuMzIwNCAyMy45OTk0IDQ1LjIyODIgMjQuMzg5NyA0NS4wMjUgMjQuNzI0M0M0NC44MjE5IDI1LjA1ODggNDQuNTE4MiAyNS4zMjA2IDQ0LjE1NzMgMjUuNDcyQzQzLjU5NDEgMjUuNzIzNCA0Mi45ODIxIDI1Ljg0NjQgNDIuMzY1NSAyNS44MzE5QzQwLjk5MjMgMjUuODUgMzkuNjE5IDI1LjgzMTkgMzguMjQ1NyAyNS44MzE5QzM4LjEzMjcgMjUuODIyMiAzOC4wMjA4IDI1LjgwMzMgMzcuOTEwOSAyNS43NzUzTDM3LjkwNDEgMjEuNTc2OFpNNDYuMDg5NCAzMi4wMkM0Ni4wMDI2IDMyLjI5MDcgNDUuODUwMiAzMi41MzU4IDQ1LjY0NTcgMzIuNzMzMkM0NS40NDEyIDMyLjkzMDcgNDUuMTkxIDMzLjA3NDQgNDQuOTE3NSAzMy4xNTE2QzQ0LjM1MDcgMzMuMzMyOCA0My43NjI5IDMzLjQ0IDQzLjE2ODcgMzMuNDcwOEM0MS40OSAzMy41MTE1IDM5LjgwOSAzMy40ODY2IDM4LjEyODEgMzMuNDg2NkMzOC4wNzYgMzMuNDgwNiAzOC4wMjQ1IDMzLjQ3IDM3Ljk3NDIgMzMuNDU0OUMzNy44NTQzIDMzLjA3NDcgMzcuODExMyAyOS45NzYxIDM3LjkxOTkgMjguOTY2N0MzOC4xMDU0IDI4Ljk2NjcgMzguMjYzOCAyOC45MzcyIDM4LjQyMjIgMjguOTM3MkMzOS45NDAyIDI4LjkzNzIgNDEuNDU4MyAyOC45MDc4IDQyLjk3NjQgMjguOTM3MkM0My41OTAxIDI4Ljk1NDIgNDQuMTk4OCAyOS4wNTMyIDQ0Ljc4NjMgMjkuMjMxNUM0Ni4xNzU0IDI5LjY1MDIgNDYuNDQyNCAzMC45ODc5IDQ2LjA4OTQgMzIuMDJaIiBmaWxsPSJ3aGl0ZSIvPg0KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04Mi43NzE4IDI5LjAxODdIODcuODA1NkM4OC4zNjY3IDI5LjAxODcgODguOTM2OCAyOS4wMTg3IDg5LjQ4ODggMjkuMDE4N0M5MC4wNDA4IDI5LjAxODcgOTAuNTk1MSAyOS4wMzY4IDkxLjE1NjIgMjkuMDAyOVYyNS43MzkxQzkwLjkzIDI1LjczOTEgOTAuNzE3MyAyNS43MTE5IDkwLjUwNDYgMjUuNzExOUg4My4zMzc0QzgzLjEyOTIgMjUuNzExOSA4Mi45MjExIDI1LjY5MzggODIuNzAxNiAyNS42ODQ4VjIxLjczOTdIODguNDg0M0M4OS4xMTc4IDIxLjczOTcgODkuNzUxMyAyMS43Mzk3IDkwLjM4NDcgMjEuNzM5N0M5MS4wMTgyIDIxLjczOTcgOTEuNjM1OCAyMS43NjkxIDkyLjI4MDYgMjEuNzEyNUM5Mi4yODA2IDIwLjU1ODIgOTIuMzAzMiAxOS40NjUgOTIuMjgwNiAxOC4zNTZINzguNTIwOFYzNi41OTQyQzc5LjIyMjEgMzYuNzAwNiA5Mi4xOTAxIDM2LjY3MTIgOTIuNjAxOSAzNi41NjQ4VjMzLjI0NjdIODIuNzQwMUM4Mi42MjAyIDMyLjU5MjYgODIuNjQyOCAyOS40NDY1IDgyLjc3MTggMjkuMDE4N1oiIGZpbGw9IndoaXRlIi8+DQo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTYwLjI4MTMgMTguNDA1OEM2MC4xOTA4IDE5LjEyMSA2MC4yMjAzIDIxLjM2NCA2MC4zMzc5IDIxLjc4NzNDNjEuMjgxMyAyMS43ODczIDYyLjIzODMgMjEuNzg3MyA2My4xOTUzIDIxLjc4NzNDNjQuMTUyMyAyMS43ODczIDY1LjEwMDIgMjEuNzg3MyA2Ni4xMDI1IDIxLjc4NzNWMzIuMzkzNEM2Ni4xMDI1IDMzLjA5OTYgNjYuMTAyNSAzMy44MDU4IDY2LjEwMjUgMzQuNTExOUM2Ni4xMDI1IDM1LjIxODEgNjYuMTAyNSAzNS45MDg0IDY2LjExNiAzNi41OTQyQzY2Ljk3OCAzNi42OTM4IDY5Ljg5MiAzNi42NjIxIDcwLjMyODYgMzYuNTQ0NVYyMS43ODczSDczLjIzOEM3NC4yMDYzIDIxLjc4NzMgNzUuMTc2OSAyMS44MDA4IDc2LjE2NzggMjEuNzc1OVYxOC40MTAzQzc1LjY5NSAxOC4yODgxIDYwLjcyMDIgMTguMjg4MSA2MC4yODEzIDE4LjQwNThaIiBmaWxsPSJ3aGl0ZSIvPg0KPHBhdGggZD0iTTU3LjkwNiAxOC4zNTgySDUzLjc0MzJWMzYuNjIxNEg1Ny45MDZWMTguMzU4MloiIGZpbGw9IndoaXRlIi8+DQo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE1NS42MjEgMjMuMDM0NEMxNTUuMzExIDIyLjk4IDE1NS4wMjMgMjMuMDA3MiAxNTQuNzQ1IDIyLjk3NTVDMTU0LjI3IDIyLjkxNjcgMTUzLjkzMyAyMy4xMDkxIDE1My41OTQgMjMuNDI4MkMxNTEuMDI2IDI1Ljc5NTcgMTQ4LjQ0MiAyOC4xNDUxIDE0NS44NjUgMzAuNTAxMkMxNDUuNzM0IDMwLjYxODkgMTQ1LjU5OCAzMC43Mjc2IDE0NS40NjUgMzAuODQ3NUwxNDUuMzQ3IDMwLjgwNjhWMjIuNjY3N0MxNDUuMzQ3IDIxLjc2MjMgMTQ1LjM0NyAyMC44NTcgMTQ1LjM0NyAxOS45NTE2QzE0NS4zNDcgMTkuMDQ2MyAxNDUuMzYzIDE4LjE1NjggMTQ1LjMzNCAxNy4yNjI4SDE0NC4wOThDMTQzLjk4MSAxNy45NDE4IDE0NC4wMTIgMzYuMjAyNyAxNDQuMTMgMzYuNjEyM0gxNDUuMzIyQzE0NS4zMjIgMzYuNDAxOCAxNDUuMzQ1IDM2LjIyNTMgMTQ1LjM0NSAzNi4wNDY1QzE0NS4zNDUgMzUuMDMyNSAxNDUuMzQ1IDM0LjAwOTUgMTQ1LjM0NSAzMy4wMDY4QzE0NS4zMzUgMzIuODgyMSAxNDUuMzU0IDMyLjc1NjggMTQ1LjQwMiAzMi42NDExQzE0NS40NDkgMzIuNTI1NCAxNDUuNTI0IDMyLjQyMjcgMTQ1LjYxOSAzMi4zNDE0QzE0Ni42MTkgMzEuNDUxOSAxNDcuNjAzIDMwLjU0NDIgMTQ4LjU5NCAyOS42NDM0QzE0OC42ODQgMjkuNTU5NyAxNDguNzg2IDI5LjQ4OTUgMTQ4LjkxNSAyOS4zODk5QzE0OS4wNjQgMjkuNTcxIDE0OS4yMDUgMjkuNzMxNyAxNDkuMzM2IDI5Ljg5OTJDMTUxLjAzNyAzMi4wMzczIDE1Mi43MzkgMzQuMTc0NyAxNTQuNDQyIDM2LjMxMTNDMTU0LjUzOSAzNi40MzU4IDE1NC42NjggMzYuNjEyMyAxNTQuNzg4IDM2LjYyMTRDMTU1LjI4MyAzNi42ODY2IDE1NS43ODUgMzYuNjcyMSAxNTYuMjc1IDM2LjU3ODRDMTU0LjEyMyAzMy44NjIzIDE1Mi4wMTQgMzEuMjA5NyAxNDkuODc5IDI4LjUxNjNDMTUxLjgwNiAyNi42Nzg0IDE1My43NDUgMjQuODk3MSAxNTUuNjIxIDIzLjAzNDRaIiBmaWxsPSJ3aGl0ZSIvPg0KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMDguNjQyIDI2LjgwMjlDMTA4LjIwMyAyNC45NTE0IDEwNy4xMDQgMjMuNjg0IDEwNS4yNDkgMjMuMTQzQzEwNC4yNzEgMjIuODY2MyAxMDMuMjQ1IDIyLjgwMTUgMTAyLjI0IDIyLjk1MjlDMTAwLjU2MyAyMy4xNzkyIDk5LjE4NTUgMjMuOTEwMyA5OC4yMjYzIDI1LjM0NTNDOTguMTM2NiAyNS40NTQ5IDk4LjAzOTEgMjUuNTU3OCA5Ny45MzQ0IDI1LjY1MzFDOTcuOTM0NCAyMi43ODc3IDk3LjkzNDQgMjAuMDI4NiA5Ny45MzQ0IDE3LjI2MDVIOTYuNjc2NVYzNi42MTkxSDk3LjkzNDRWMzYuMDAzNUM5Ny45MzQ0IDMzLjkwMzEgOTcuOTM0NCAzMS44MDI3IDk3LjkzNDQgMjkuNzA0NUM5Ny45Mjk4IDI5LjIxNiA5Ny45NjM4IDI4LjcyNzggOTguMDM2MiAyOC4yNDQ3Qzk4LjMzNDggMjYuNDEzNiA5OS4yNzE1IDI1LjA1NzggMTAxLjA1OSAyNC4zOTY5QzEwMi4xMDIgMjQuMDEzOSAxMDMuMjMzIDIzLjkzNTUgMTA0LjMxOSAyNC4xNzA2QzEwNS44NzUgMjQuNDk0MiAxMDYuOTEyIDI1LjQyIDEwNy4zMDcgMjYuOTcwNEMxMDcuNDU4IDI3LjU4MzggMTA3LjUzMyAyOC4yMTMgMTA3LjUzNCAyOC44NDQ0QzEwNy41NjEgMzEuMjE0MiAxMDcuNTM0IDMzLjU4NjIgMTA3LjU0NSAzNS45NTZDMTA3LjU0NSAzNi4xNjg3IDEwNy41NjUgMzYuMzc5MiAxMDcuNTc0IDM2LjYxOTFIMTA4LjgyMUMxMDguODM1IDM2LjQ0MDMgMTA4Ljg1MyAzNi4yODE5IDEwOC44NTMgMzYuMTIzNUMxMDguODUzIDMzLjU5MDcgMTA4Ljg2NiAzMS4wNTU4IDEwOC44NTMgMjguNTIzQzEwOC44NDUgMjcuOTQzNyAxMDguNzc0IDI3LjM2NyAxMDguNjQyIDI2LjgwMjlaIiBmaWxsPSJ3aGl0ZSIvPg0KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMjMuOTc5IDI2LjU0OTRDMTIzLjYxNyAyNC42OTM0IDEyMi41MTEgMjMuNTMwMSAxMjAuNjc0IDIzLjA4MTlDMTIwLjMwMiAyMi45OTI1IDExOS45MjQgMjIuOTM0OSAxMTkuNTQyIDIyLjkwOTlDMTE3LjQzMiAyMi43NjUgMTE1LjQ4OCAyMy4yNDI2IDExMy43NjQgMjQuNTA3OEMxMTMuNjM1IDI0LjYxMTQgMTEzLjUxMSAyNC43MjE3IDExMy4zOTMgMjQuODM4M0wxMTQuMDM4IDI1Ljc0MzZDMTE0LjE2OSAyNS42NDQgMTE0LjI1MyAyNS41NzYxIDExNC4zMzkgMjUuNTE3M0MxMTUuMTIgMjQuOTEyNCAxMTYuMDE5IDI0LjQ3NzEgMTE2Ljk3NyAyNC4yMzlDMTE3LjkzNiAyNC4wMDA5IDExOC45MzMgMjMuOTY1MiAxMTkuOTA3IDI0LjEzNDRDMTIxLjQzOCAyNC4zODExIDEyMi40NTYgMjUuMzc5MiAxMjIuNjk0IDI2LjkwOTNDMTIyLjggMjcuNTg4MyAxMjIuNzkzIDI4LjI2NzMgMTIyLjg0MyAyOS4wNDgySDEyMi4xNDJDMTIwLjc2OSAyOS4wNDgyIDExOS4zOTMgMjkuMDI1NSAxMTguMDE4IDI5LjA0ODJDMTE3LjMzMyAyOS4wNTggMTE2LjY1MSAyOS4xMzM4IDExNS45ODEgMjkuMjc0NUMxMTQuOTA3IDI5LjUwMDggMTEzLjk4OCAzMC4wMjgyIDExMy40MzYgMzEuMDQ0NUMxMTIuOTc4IDMxLjg5OTYgMTEyLjg3MiAzMi44OTk2IDExMy4xMzkgMzMuODMyMUMxMTMuNDA2IDM0Ljc2NDcgMTE0LjAyNSAzNS41NTY2IDExNC44NjYgMzYuMDM5N0MxMTUuMjE1IDM2LjIyNzcgMTE1LjU4MyAzNi4zNzkzIDExNS45NjMgMzYuNDkyNEMxMTYuODg5IDM2Ljc1NjggMTE3Ljg1OSAzNi44Mjc3IDExOC44MTQgMzYuNzAwNkMxMjAuMzUgMzYuNTM3NyAxMjEuNjY5IDM1Ljk0MDEgMTIyLjU5NCAzNC42Mzg3QzEyMi42NjQgMzQuNTYxOSAxMjIuNzQgMzQuNDkwOCAxMjIuODIxIDM0LjQyNTlDMTIyLjkxOCAzNS4xOTMyIDEyMi43NzggMzUuODk3MSAxMjIuOTEzIDM2LjU5NDJIMTI0LjA3NEMxMjQuMDc0IDM2LjQzMzUgMTI0LjA5OSAzNi4zMDkxIDEyNC4wOTkgMzYuMTg0NkMxMjQuMDk5IDMzLjM4MDMgMTI0LjA5OSAzMC41NzM3IDEyNC4wOTkgMjcuNzY5NEMxMjQuMDk3IDI3LjM1OTggMTI0LjA1NyAyNi45NTEzIDEyMy45NzkgMjYuNTQ5NFpNMTIyLjggMzIuNTc2OEMxMjIuNzc3IDMyLjczNzQgMTIyLjcyMSAzMi44OTE1IDEyMi42MzUgMzMuMDI5NEMxMjEuODUyIDM0LjYxMzggMTIwLjU1NCAzNS40ODc1IDExOC44MDUgMzUuNjY0QzExNy44ODggMzUuNzgzNSAxMTYuOTU2IDM1LjY3NjIgMTE2LjA5IDM1LjM1MTdDMTE1LjQ1MiAzNS4xMjQ1IDExNC45MjQgMzQuNjYzNCAxMTQuNjE0IDM0LjA2MTZDMTE0LjMwMyAzMy40NTk5IDExNC4yMzIgMzIuNzYyNCAxMTQuNDE2IDMyLjExMDVDMTE0LjQ4MyAzMS43NzE2IDExNC42MzEgMzEuNDUzOCAxMTQuODQ3IDMxLjE4MzlDMTE1LjA2MiAzMC45MTQxIDExNS4zNCAzMC43MDAxIDExNS42NTYgMzAuNTYwMUMxMTYuMDg3IDMwLjMzMyAxMTYuNTU5IDMwLjE5MjQgMTE3LjA0NSAzMC4xNDU5QzExOC45MzYgMzAuMDk4NCAxMjAuODMyIDMwLjEyNTUgMTIyLjgxNCAzMC4xMjU1QzEyMi44IDMwLjk1ODQgMTIyLjgwOSAzMS43Njg3IDEyMi43OTEgMzIuNTc2OEgxMjIuOFoiIGZpbGw9IndoaXRlIi8+DQo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEzNC44IDI0LjA1OTdDMTM2LjQ3NiAyNC4wMjEyIDEzNy45MjIgMjQuNTc1NyAxMzkuMDAxIDI1LjkyMjRDMTM5LjA1NCAyNS45Nzc0IDEzOS4xMTEgMjYuMDI4OCAxMzkuMTcxIDI2LjA3NjNMMTQwLjA5NiAyNS4zOTczQzEzOS42MTYgMjQuNjQzNyAxMzguOTQzIDI0LjAzMzIgMTM4LjE0NiAyMy42Mjk2QzEzNi44MzMgMjIuOTUyOCAxMzUuMzM3IDIyLjcxNDggMTMzLjg3OSAyMi45NTA2QzEzMS4yMzcgMjMuMzMzMSAxMjkuMzg2IDI0LjczNjQgMTI4LjQ0OSAyNy4yNTFDMTI3Ljk4IDI4LjUyNDggMTI3Ljg3NSAyOS45MDQxIDEyOC4xNDQgMzEuMjM0NkMxMjguNTk2IDMzLjU4NjIgMTI5Ljg3IDM1LjI5MjggMTMyLjA5OSAzNi4yNDEyQzEzMy4zMTEgMzYuNzQwMiAxMzQuNjM0IDM2LjkwNDQgMTM1LjkzMSAzNi43MTY1QzEzNi42OSAzNi42NDM5IDEzNy40MjYgMzYuNDIxMiAxMzguMDk4IDM2LjA2MTRDMTM4Ljc3IDM1LjcwMTYgMTM5LjM2NCAzNS4yMTE5IDEzOS44NDUgMzQuNjIwNkMxMzkuOTI3IDM0LjUwMSAxNDAuMDAzIDM0LjM3NzEgMTQwLjA3MSAzNC4yNDk0TDEzOS4xNjYgMzMuNTg2MkMxMzkuMDU4IDMzLjY5OTQgMTM4Ljk3IDMzLjc4NzcgMTM4Ljg4OCAzMy44ODA1QzEzOC40NjQgMzQuMzc2MiAxMzcuOTQzIDM0Ljc4MTEgMTM3LjM1OSAzNS4wNzFDMTM2LjI4NiAzNS41NzQzIDEzNS4wODQgMzUuNzMyNCAxMzMuOTE4IDM1LjUyMzdDMTMyLjgxMSAzNS4zNyAxMzEuNzg0IDM0Ljg2IDEzMC45OTIgMzQuMDcwNkMxMjkuMDgxIDMyLjE4OTcgMTI4Ljc2NCAyOC43MDE5IDEzMC4zMTQgMjYuMzk3N0MxMzEuMzkxIDI0LjgxNzkgMTMyLjk0IDI0LjEwMDQgMTM0LjggMjQuMDU5N1oiIGZpbGw9IndoaXRlIi8+DQo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE2OS42NzkgMjcuMjEyNkMxNjkuNjc5IDI2LjU4NzkgMTY5Ljc0NSAyNi42NjcxIDE2OS4xNjMgMjYuNDMxN0wxNTguODAyIDIyLjI2NDhDMTU4LjY1NCAyMi4yMDYgMTU4LjUwMSAyMi4xNjA3IDE1OC4zMTMgMjIuMDk1MVYyMy43MTM0QzE2MS40NjUgMjQuOTU4MiAxNjQuNjA3IDI2LjE5NzggMTY3LjczOCAyNy40MzIxQzE2Ny43MzggMjcuNDcwNiAxNjcuNzQ5IDI3LjUwOTEgMTY3Ljc1NCAyNy41NDc1QzE2NC42MTYgMjguODA4MiAxNjEuNDYgMzAuMDIxNCAxNTguMjgzIDMxLjI5NTdDMTU4LjI4MyAzMS42ODk1IDE1OC4yODMgMzIuMDY3NSAxNTguMjgzIDMyLjQ0NTVDMTU4LjI4MyAzMi41NjU0IDE1OC4zMDggMzIuNjg3NyAxNTguMzMzIDMyLjg5ODFMMTY5LjY3IDI4LjM3MTRDMTY5LjY3OSAyNy45MzQ2IDE2OS42NzkgMjcuNTcyNCAxNjkuNjc5IDI3LjIxMjZaIiBmaWxsPSJ3aGl0ZSIvPg0KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMC4wNzg4IDI3LjQ4NDJMMjkuNjM3NCAyMy43MTU2VjIyLjA2NzlMMTguMzI1NCAyNi42MTczVjI4LjM3MzdMMjkuNjM3NCAzMi45MDA0VjMxLjI3OThMMjQuODg2NCAyOS40MDM1QzIzLjMyNTMgMjguNzgxMSAyMS43NDM5IDI4LjE5MDMgMjAuMDc4OCAyNy40ODQyWiIgZmlsbD0id2hpdGUiLz4NCjwvc3ZnPg0K"},8206:function(e,n){n.Z="data:image/png;base64,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"},8242:function(e,n,M){n.Z=M.p+"static/picture1-16f0a67966b15b6daabe04ce1cf19ade.jpg"},3974:function(e,n,M){n.Z=M.p+"static/picture2-f68704417ed6539f89a836e017b70f1c.jpg"},4047:function(e,n,M){n.Z=M.p+"static/picture4-16b3f200f34f1c8ae32c0e4dc7db7cda.jpg"},2289:function(e,n,M){n.Z=M.p+"static/picture5-0e735f8f777a6da17df33c27ea39a64d.jpg"},2116:function(e,n,M){n.Z=M.p+"static/picture6-3c753d41789f11a98d6591dff03c5f03.jpg"},3541:function(e,n,M){n.Z=M.p+"static/picture7-a46fb1e28fca416b5e1c6ade096b052e.jpg"}}]);
//# sourceMappingURL=c971731fa062f228804aca8a750e313a5189d1ea-a759748938e7f28ba9c5.js.map