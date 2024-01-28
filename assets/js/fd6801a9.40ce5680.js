"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6615],{3656:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>c});var i=n(5893),d=n(1151);n(9286);const a={},r="Middleware",t={id:"middleware",title:"Middleware",description:"It's a common pattern: middlware. EmbraceSQL uses this pattern inside the",source:"@site/docs/middleware.mdx",sourceDirName:".",slug:"/middleware",permalink:"/docs/middleware",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Express",permalink:"/docs/express"},next:{title:"NextJS",permalink:"/docs/nextjs"}},l={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Values",id:"values",level:2}];function o(e){const s={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"middleware",children:"Middleware"}),"\n",(0,i.jsx)(s.p,{children:"It's a common pattern: middlware. EmbraceSQL uses this pattern inside the\ndatabase invocation stack to allow you to:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["view and modify ",(0,i.jsx)(s.code,{children:"parameters"})]}),"\n",(0,i.jsxs)(s.li,{children:["view and modify ",(0,i.jsx)(s.code,{children:"values"})]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(s.p,{children:["When EmbraceSQL say ",(0,i.jsx)(s.code,{children:"parameters"}),", it means data used to filter data in ",(0,i.jsx)(s.code,{children:"WHERE"}),"\nclauses."]}),"\n",(0,i.jsxs)(s.p,{children:["Middleware is provides the ability to ",(0,i.jsx)(s.code,{children:"get"})," and ",(0,i.jsx)(s.code,{children:"set"})," ",(0,i.jsx)(s.code,{children:"parameters"}),"."]}),"\n",(0,i.jsx)(s.p,{children:"You can use this for:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"dynamic query alternation"}),"\n",(0,i.jsx)(s.li,{children:"security"}),"\n",(0,i.jsx)(s.li,{children:"logging"}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"values",children:"Values"}),"\n",(0,i.jsxs)(s.p,{children:["When EmbraceSQL says ",(0,i.jsx)(s.code,{children:"values"})," it means data that will be sent to and stored\nin the database via ",(0,i.jsx)(s.code,{children:"INSERT"})," and ",(0,i.jsx)(s.code,{children:"UPDATE"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["Middleware is provides the ability to ",(0,i.jsx)(s.code,{children:"get"})," and ",(0,i.jsx)(s.code,{children:"set"})," ",(0,i.jsx)(s.code,{children:"values"}),"."]}),"\n",(0,i.jsx)(s.p,{children:"You can use this for:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"an in-code alternative to row modifying triggers"}),"\n",(0,i.jsx)(s.li,{children:"default values that rely on code outside the database"}),"\n",(0,i.jsx)(s.li,{children:"validating input that relies on code outside the database"}),"\n",(0,i.jsx)(s.li,{children:"calling external APIs before finally going to the database"}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}}}]);