"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[971],{9925:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=s(5893),n=s(1151);const r={sidebar_position:0},d="Introduction",o={id:"index",title:"Introduction",description:"EmbraceSQL for data access -- you write the SQL -- we\u2019ll do the REST!",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",next:{title:"AutoCRUD",permalink:"/docs/autocrud"}},i={},c=[{value:"Getting Started",id:"getting-started",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"introduction",children:"Introduction"}),"\n",(0,a.jsxs)(t.p,{children:["EmbraceSQL for data access -- you write the ",(0,a.jsx)(t.strong,{children:"SQL"})," -- we\u2019ll do the ",(0,a.jsx)(t.strong,{children:"REST"}),"!"]}),"\n",(0,a.jsxs)(t.p,{children:["Learn about the ",(0,a.jsx)(t.a,{href:"/docs/problems",children:"Problems"})," with data access. Then ",(0,a.jsx)(t.a,{href:"#getting-started",children:"Get Started"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,a.jsx)(t.p,{children:"You will need:"}),"\n",(0,a.jsxs)(t.p,{children:["This example assumes a sample DVD rental database, source at ",(0,a.jsx)(t.a,{target:"_blank",href:s(8958).Z+"",children:"dvdrental.sql"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["You can use this database for testing with a local postgres, such as ",(0,a.jsx)(t.a,{href:"https://postgresapp.com",children:"Postgres.app"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"Create a sample dvdrental database if you like with:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"psql --file dvdrental.sql\n"})}),"\n",(0,a.jsx)(t.p,{children:"Going with this dvdrental example, assuming you are in the root directory\nof your typescript project."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"mkdir -p ./src\nnpx embracesqlcli generate node --database postgres://postgres:postgres@localhost/dvdrental > ./src/dvdrental.ts\n\n"})}),"\n",(0,a.jsx)(t.p,{children:"Now you can use your fully typed database:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:'import { Database } from "./src/dvdrental";\n\nconst db = await Database.connect(\n  "postgres://postgres:postgres@localhost:5432/dvdrental",\n);\n// calling a stored database function with positional, typed arguments.\nconst value = await db.Public.LastDay({ _0: new Date() });\nawait db.disconnect();\n'})}),"\n",(0,a.jsxs)(t.p,{children:["Learn about ",(0,a.jsx)(t.a,{href:"/docs/autocrud",children:"AutoCRUD"})," to get at all the tables."]}),"\n",(0,a.jsxs)(t.p,{children:["Lear about ",(0,a.jsx)(t.a,{href:"/docs/sql",children:"SQL Scripts"})," to get any data you want -- all strongly typed."]})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},8958:(e,t,s)=>{s.d(t,{Z:()=>a});const a=s.p+"assets/files/dvdrental-fce04e68ea2322fb1e46aa23368b3c55.sql"}}]);