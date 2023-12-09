"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4585],{8874:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>o});var r=t(5893),n=t(1151);const a={},c="SQL Scripts",l={id:"sql",title:"SQL Scripts",description:"You can create a directory tree full of parameterized SQL scripts that",source:"@site/docs/sql.md",sourceDirName:".",slug:"/sql",permalink:"/docs/sql",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Security",permalink:"/docs/security"}},i={},o=[{value:"Example",id:"example",level:2}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"sql-scripts",children:"SQL Scripts"}),"\n",(0,r.jsx)(s.p,{children:"You can create a directory tree full of parameterized SQL scripts that\nEmbraceSQL will inspect and generate strongly typed TypeScript wrappers."}),"\n",(0,r.jsx)(s.p,{children:"These wrappers are callable as async functions, with typed parameter inputs and\ntyped row outputs. No need to ever create 'pojo' types to get intellisense on\nyour queries ever again!"}),"\n",(0,r.jsx)(s.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(s.p,{children:"... specify the root folder where to look for scripts"}),"\n",(0,r.jsxs)(s.p,{children:["You can look in the ",(0,r.jsx)(s.a,{href:"/docs/",children:"intro"})," to see how to generate the dvdrental code\nused in these example snippets."]}),"\n",(0,r.jsxs)(s.p,{children:["You can even have ",(0,r.jsx)(s.code,{children:".sql"})," file scripts that will generate typed wrappers."]}),"\n",(0,r.jsxs)(s.p,{children:["Make a file ",(0,r.jsx)(s.code,{children:"./src/sql/pick.sql"}),". Notice the use of Postgres style parameters with ",(0,r.jsx)(s.code,{children:"$number"}),"\nwhere ",(0,r.jsx)(s.code,{children:"number"})," is one based."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sql",children:"SELECT\n    *\nFROM\n    public.film\nWHERE\n    title = $1\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Generate some code -- notice the ",(0,r.jsx)(s.code,{children:"--sqlScriptsFrom"})," switch."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"embracesql generate typescript-node --database postgres://postgres:postgres@localhost/dvdrental --sqlScriptsFrom ./src/sql > ./src/dvdrental.ts\n\n"})}),"\n",(0,r.jsx)(s.p,{children:"And call your SQL script as a strongly typed function"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-typescript",children:'import { Database } from "./src/dvdrental";\n    \nconst db = await Database.connect("postgres://postgres:postgres@localhost:5432/dvdrental");\nconst value = await db.Scripts.Sql.Sample.pick({ _1: "Basic Easy" });\nawait db.disconnect();\n'})})]})}function p(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);