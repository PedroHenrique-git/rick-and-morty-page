(this["webpackJsonprick-and-morty-page"]=this["webpackJsonprick-and-morty-page"]||[]).push([[0],{92:function(n,e,t){"use strict";t.r(e);var r,i,a,c=t(0),s=t.n(c),o=t(22),d=t.n(o),p=t(11),x=t(13),l=t(4),j=t(5),b=Object(j.a)(r||(r=Object(l.a)(["\n    * {\n        margin: 0;\n        padding: 0;\n        font-family: 'Source Sans Pro', sans-serif;\n    }\n"]))),h=(t(52),t(53),t(54),t(2)),m=t(12),u=t.n(m),f=t(19),g=t(10),O=j.b.header(i||(i=Object(l.a)(["\n    background: #020d22;\n    height: 140px;\n    padding: 15px;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    .container_title_logo {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n\n        img {\n            height: 140px;\n            margin-right: 20px;\n            width: 140px;\n        }\n\n        h1 {\n            color: #fff;\n            font-weight: 100;\n            font-size: 32px;\n\n            @media (max-width: 640px) {\n                font-size: 22px;\n            }\n        }\n    }\n"]))),v=t.p+"static/media/logo.594ec865.png",w=t(1);function y(n){var e=n.title;return Object(w.jsx)(O,{children:Object(w.jsxs)("div",{className:"container_title_logo",children:[Object(w.jsx)(p.b,{to:"/",children:Object(w.jsx)("img",{src:v,alt:"rick and morty logo"})}),Object(w.jsx)("h1",{children:e})]})})}var k,_=j.b.li(a||(a=Object(l.a)(["\n    width: 400px;\n    height: 200px;\n    background: #3d3d3d;\n    border-radius: 20px;\n    font-size: 16px;\n    padding: 10px;\n    margin-top: 20px;\n    margin-right: 10px;\n    color: #fff;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    @media (max-width: 640px) {\n        margin-right: 0;\n        width: 100%;\n    }\n\n    .character_photo {\n        margin-right: 20px;\n        img {\n            border-radius: 20px;\n            height: 150px;\n            width: 150px;\n        }\n    }\n\n    .informations_character {\n        a {\n            text-decoration: none;\n            color: #fff;\n        }\n        h1 {\n            color: #fff;\n            font-size: 24px;\n            font-weight: bold;\n\n            @media (max-width: 640px) {\n                font-size: 22px;\n            }\n        }\n        p {\n            font-size: 16px;\n            margin: 10px 0;\n        }\n    }\n"])));function S(n){var e=n.id,t=n.name,r=n.status,i=n.species,a=n.type,c=n.gender,s=n.image;return Object(w.jsxs)(_,{children:[Object(w.jsx)("div",{className:"character_photo",children:Object(w.jsx)("img",{src:s,alt:t})}),Object(w.jsxs)("div",{className:"informations_character",children:[Object(w.jsx)(p.b,{to:"/character/".concat(e),children:Object(w.jsx)("h1",{children:t})}),Object(w.jsx)("p",{children:r}),Object(w.jsx)("p",{children:i}),Object(w.jsx)("p",{children:a}),Object(w.jsx)("p",{children:c})]})]},e)}var z,N,C,E=j.b.div(k||(k=Object(l.a)(["\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    background: RGBA(71, 74, 81, 0.27);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    h1 {\n        font-size: 80px;\n        color: #000;\n    }\n"])));function P(n){var e=n.msg;return Object(w.jsx)(E,{children:Object(w.jsx)("h1",{children:e})})}var R=j.b.main(z||(z=Object(l.a)(["\n    margin: 25px auto;\n    padding: 20px;\n    max-width: 1720px;\n\n    .container_cads {\n        display: flex;\n        flex-wrap: wrap;\n        align-items: center;\n        justify-content: center;\n    }\n"]))),T=j.b.div(N||(N=Object(l.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-bottom: 50px;\n\n    @media (max-width: 640px) {\n        gap: 10px;\n    }\n\n    button {\n        background: #87d5b8;\n        outline: none;\n        border: none;\n        border-radius: 10px;\n        padding: 10px;\n        font-size: 24px;\n        margin-left: 10px;\n        cursor: pointer;\n        width: 170px;\n\n        @media (max-width: 640px) {\n            margin: 0;\n            width: 150px;\n        }\n    }\n"]))),A=j.b.form(C||(C=Object(l.a)(["\n    display: flex;\n    justify-content: center;\n    margin: 30px;\n\n    @media (max-width: 640px) {\n        flex-direction: column;\n        gap: 10px;\n        align-items: center;\n    }\n\n    input {\n        border: 1px solid gray;\n        outline: none;\n        height: 25px;\n        width: 280px;\n        border-radius: 10px;\n        padding: 10px;\n        font-size: 18px;\n    }\n\n    button {\n        background: #87d5b8;\n        outline: none;\n        border: none;\n        border-radius: 10px;\n        padding: 10px;\n        font-size: 18px;\n        margin-left: 10px;\n        cursor: pointer;\n\n        @media (max-width: 640px) {\n            margin: 0px;\n            width: 280px;\n        }\n    }\n"]))),L=t(44),M=t.n(L).a.create({baseURL:"https://rickandmortyapi.com/api"});function B(){var n=Object(c.useState)([]),e=Object(g.a)(n,2),t=e[0],r=e[1],i=Object(c.useState)({count:"",prev:"",next:"",page:""}),a=Object(g.a)(i,2),s=a[0],o=a[1],d=Object(c.useState)(!0),p=Object(g.a)(d,2),l=p[0],j=p[1],b=Object(c.useState)(""),h=Object(g.a)(b,2),m=h[0],O=h[1],v=function(){var n=Object(f.a)(u.a.mark((function n(e){var t,i;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,"string"!==typeof e){n.next=12;break}return j(!1),n.next=5,M.get(e);case 5:return t=n.sent,n.next=8,t.data;case 8:i=n.sent,r(i.results),o(i.info),j(!0);case 12:n.next=18;break;case 14:n.prev=14,n.t0=n.catch(0),x.b.error(n.t0.message),j(!0);case 18:case"end":return n.stop()}}),n,null,[[0,14]])})));return function(e){return n.apply(this,arguments)}}();return Object(c.useEffect)((function(){v("/character/?page=1")}),[]),l?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(y,{title:"Rick and Morty SPA"}),Object(w.jsxs)(A,{children:[Object(w.jsx)("input",{onChange:function(n){return O(n.target.value)},type:"text",placeholder:"character name"}),Object(w.jsx)("button",{onClick:function(){return v("/character/?name=".concat(m))},type:"button",children:"Search character"})]}),Object(w.jsx)(R,{children:Object(w.jsx)("ul",{className:"container_cads",children:t.map((function(n){return Object(w.jsx)(S,{id:n.id,name:n.name,gender:n.gender,species:n.species,status:n.status,type:n.type,image:n.image})}))})}),Object(w.jsxs)(T,{children:[Object(w.jsx)("button",{type:"button",onClick:function(){return v(null===s||void 0===s?void 0:s.next)},disabled:!s.next,children:"Next"}),Object(w.jsx)("button",{type:"button",onClick:function(){return v(null===s||void 0===s?void 0:s.prev)},disabled:!s.prev,children:"Prev"})]})]}):Object(w.jsx)(P,{msg:"Loading..."})}var F,J,G=t(30),I=t(46),U=t(45),q=t.n(U),D=j.b.section(F||(F=Object(l.a)(["\n    background-image: linear-gradient(\n        to right bottom,\n        #1f202f,\n        #1b1f2f,\n        #171e2e,\n        #121d2e,\n        #0c1c2d\n    );\n    border-radius: 20px;\n    margin: 50px auto;\n    max-width: 1200px;\n    padding: 20px;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n    @media (max-width: 1240px) {\n        margin: 50px 20px;\n    }\n\n    .image {\n        margin-right: 30px;\n\n        @media (max-width: 640px) {\n            margin: 0;\n        }\n\n        img {\n            border-radius: 20px;\n        }\n    }\n\n    .title_episodes {\n        color: #f5f2f6;\n        margin-bottom: 30px;\n        text-align: center;\n        font-weight: 100;\n        text-transform: uppercase;\n    }\n\n    .character_informations {\n        margin-bottom: 50px;\n\n        display: flex;\n        align-items: center;\n\n        @media (max-width: 640px) {\n            flex-direction: column;\n            gap: 20px;\n        }\n\n        .others_informations {\n            h1 {\n                color: #f5f2f6;\n                font-size: 32px;\n                font-weight: 100;\n                text-transform: uppercase;\n            }\n            p {\n                color: #f5f2f6;\n                margin: 15px 0;\n                font-size: 20px;\n                font-weight: 100;\n\n                @media (max-width: 640px) {\n                    margin: 10px 0;\n                }\n            }\n        }\n    }\n\n    .episodes_informations {\n        width: 80%;\n    }\n"]))),H=j.b.div(J||(J=Object(l.a)(["\n    height: 100px;\n    list-style: none;\n    text-align: center;\n    color: #f5f2f6;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n"])));function K(n){var e=n.name,t=n.air_date,r=n.episode;return Object(w.jsxs)(H,{children:[Object(w.jsx)("p",{children:e}),Object(w.jsx)("p",{children:t}),Object(w.jsx)("p",{children:r})]},e)}function Q(){var n=Object(c.useState)({episode:[],gender:"",image:"",name:"",origin:{name:""},species:"",status:""}),e=Object(g.a)(n,2),t=e[0],r=e[1],i=Object(c.useState)(!0),a=Object(g.a)(i,2),s=a[0],o=a[1],d=Object(c.useState)([]),p=Object(g.a)(d,2),l=p[0],j=p[1],b=Object(h.f)().id,m=function(){var n=Object(f.a)(u.a.mark((function n(){var e,t;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,o(!1),n.next=4,M.get("/character/".concat(b));case 4:return e=n.sent,n.next=7,e.data;case 7:t=n.sent,r(t),t.episode.forEach((function(n){return O(n)})),o(!0),n.next=17;break;case 13:n.prev=13,n.t0=n.catch(0),x.b.error(n.t0.message),o(!0);case 17:case"end":return n.stop()}}),n,null,[[0,13]])})));return function(){return n.apply(this,arguments)}}(),O=function(){var n=Object(f.a)(u.a.mark((function n(e){var t,r;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,o(!1),n.next=4,fetch(e);case 4:return t=n.sent,n.next=7,t.json();case 7:r=n.sent,j((function(n){return[].concat(Object(I.a)(n),[r])})),o(!0),n.next=16;break;case 12:n.prev=12,n.t0=n.catch(0),x.b.error(n.t0.message),o(!0);case 16:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(e){return n.apply(this,arguments)}}();return Object(c.useEffect)((function(){m()}),[]),s?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(y,{title:"Rick and Morty SPA"}),Object(w.jsxs)(D,{children:[Object(w.jsxs)("div",{className:"character_informations",children:[Object(w.jsx)("div",{className:"image",children:Object(w.jsx)("img",{src:t.image,alt:t.name})}),Object(w.jsxs)("div",{className:"others_informations",children:[Object(w.jsx)("h1",{children:t.name}),Object(w.jsx)("p",{children:t.origin.name}),Object(w.jsx)("p",{children:t.species}),Object(w.jsx)("p",{children:t.status}),Object(w.jsx)("p",{children:t.gender})]})]}),Object(w.jsxs)("div",{className:"episodes_informations",children:[Object(w.jsx)("h1",{className:"title_episodes",children:"Character episode list"}),Object(w.jsx)(q.a,Object(G.a)(Object(G.a)({},{dots:!1,infinite:!0,speed:500,slidesToShow:5,slidesToScroll:5,responsive:[{breakpoint:640,settings:{slidesToShow:1,slidesToScroll:1,dots:!1}}]}),{},{children:l.map((function(n){return Object(w.jsx)(K,{air_date:n.air_date,name:n.name,episode:n.episode})}))}))]})]})]}):Object(w.jsx)(P,{msg:"Loading..."})}function V(){return Object(w.jsxs)(h.c,{children:[Object(w.jsx)(h.a,{exact:!0,path:"/",component:B}),Object(w.jsx)(h.a,{exact:!0,path:"/character/:id",component:Q}),Object(w.jsx)(h.a,{exact:!0,path:"*",component:B})]})}var W=function(){return Object(w.jsxs)(p.a,{children:[Object(w.jsx)(x.a,{}),Object(w.jsx)(b,{}),Object(w.jsx)(V,{})]})};d.a.render(Object(w.jsx)(s.a.StrictMode,{children:Object(w.jsx)(W,{})}),document.getElementById("root"))}},[[92,1,2]]]);
//# sourceMappingURL=main.7d221b2c.chunk.js.map