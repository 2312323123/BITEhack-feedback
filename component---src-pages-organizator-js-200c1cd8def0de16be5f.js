"use strict";(self.webpackChunkbitehack=self.webpackChunkbitehack||[]).push([[954],{4919:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(7294),r="main_frame-module--flame--QnRcA",c="main_frame-module--spark_off--FUVJF";function u(e){var t=e.turnedOn,n=e.setTurnedOn,u=e.newWindowY,l=e.lastWindowY,s=(0,a.useState)(!1),m=s[0],o=s[1],i=(0,a.useState)(!1),d=i[0],f=i[1],w=(0,a.useState)(!1),_=w[0],E=w[1],v=(0,a.useRef)(null);return(0,a.useLayoutEffect)((function(){t?_||(u>l.current?(o(!0),f(!1),clearTimeout(v.current),v.current=setTimeout((function(){return o(!1)}),200)):(o(!1),f(!0),clearTimeout(v.current),v.current=setTimeout((function(){return f(!1)}),200))):(o(!0),setTimeout((function(){o(!1),f(!0),setTimeout((function(){f(!1)}),1e3)}),1200),n(!0),E(!0),setTimeout((function(){return E(!1)}),2200))}),[t,u,l.current]),a.createElement("div",{className:"main_frame-module--main_frame_container--0MLJL"},a.createElement("div",{className:"main_frame-module--main_frame_frame--g9G+R "+(t?"main_frame-module--main_frame_frame_opened--q7mJw":"")},a.createElement("div",{className:m?"main_frame-module--spark_1--exwAC":c},a.createElement("div",{className:r})),a.createElement("div",{className:m?"main_frame-module--spark_2--oZ0el":c},a.createElement("div",{className:r})),a.createElement("div",{className:d?"main_frame-module--spark_3--kv72U":c},a.createElement("div",{className:r})),a.createElement("div",{className:d?"main_frame-module--spark_4--zo+aG":c},a.createElement("div",{className:r}))))}},4117:function(e,t,n){n.r(t),n.d(t,{Head:function(){return l}});var a=n(7294),r=(n(1597),n(5408)),c=n(6767),u=n(4919),l=function(){return a.createElement("title",null,"Home Page")};t.default=function(e){var t=e.location,n=(0,a.useState)(!!t.state&&t.state.turnedOn),l=n[0],s=n[1],m=(0,a.useState)(!!t.state&&t.state.blurOn),o=m[0],i=m[1],d=(0,a.useState)(!!t.state&&t.state.electronicOn),f=d[0],w=d[1],_=(0,a.useRef)(t.state?t.state.lastWindowY:window.scrollY),E=(0,a.useState)(t.state?t.state.newWindowY:window.scrollY),v=E[0],O=E[1],Y=(0,a.useState)(!!t.state&&t.state.contentScrolled),k=Y[0],S=Y[1];return(0,a.useEffect)((function(){window.onscroll=function(){_.current=v,O(window.scrollY),console.count("UseEffect entered")}}),[v,O,_.current]),a.createElement(a.Fragment,null,a.createElement(r.Z,{turnedOn:l,setTurnedOn:s,lastWindowY:_,newWindowY:v,blurOn:o,setBlurOn:i,electronicOn:f,setElectronicOn:w,contentScrolled:k,setContentScrolled:S}),a.createElement(c.Z,{newWindowY:v,lastWindowY:_}),a.createElement(u.Z,{turnedOn:l,setTurnedOn:s,lastWindowY:_,newWindowY:v}),a.createElement("div",{style:{height:"120vh"}},"hemlo"))}}}]);
//# sourceMappingURL=component---src-pages-organizator-js-200c1cd8def0de16be5f.js.map