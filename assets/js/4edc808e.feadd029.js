"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[173],{455:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>g,frontMatter:()=>d,metadata:()=>l,toc:()=>h});var s=n(5893),a=n(1151),r=n(8410);const o='// import the generated database access object\nimport { Database } from "./dvdrental";\n\n// connect with a good old fashioned Postgres connection string\nconst db = await Database.connect(\n  "postgres://postgres:postgres@localhost:5432/dvdrental",\n);\n// calling a stored database function with positional, typed arguments.\nconst value = await db.Public.LastDay({ argument_0: new Date() });\nconsole.log(value);\n// bye now \ud83d\udc4b\nawait db.disconnect();\n';var i=n(9286);const d={sidebar_position:0},c="Introduction",l={id:"index",title:"Introduction",description:"Love SQL? Love TypeScript? Hate ORMs. You're \ud83c\udfe1.",source:"@site/docs/index.mdx",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",next:{title:"AutoCRUD",permalink:"/docs/autocrud"}},p={},h=[{value:"Getting Started",id:"getting-started",level:2}];function u(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(t.p,{children:"Love SQL? Love TypeScript? Hate ORMs. You're \ud83c\udfe1."}),"\n",(0,s.jsxs)(t.p,{children:["Learn about the ",(0,s.jsx)(t.a,{href:"/docs/problems",children:"Problems"})," with data access."]}),"\n",(0,s.jsxs)(t.p,{children:["Then ",(0,s.jsx)(t.a,{href:"#getting-started",children:"Get Started"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,s.jsx)(t.p,{children:"You will need:"}),"\n",(0,s.jsxs)(t.p,{children:["This example assumes a sample DVD rental database, source at ",(0,s.jsx)(t.a,{target:"_blank",href:n(9990).Z+"",children:"dvdrental.sql"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["You can use this database for testing with a local postgres, such as ",(0,s.jsx)(t.a,{href:"https://postgresapp.com",children:"Postgres.app"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Create a sample dvdrental database if you like with:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:'curl "https://embracesql.github.io/dvdrental.sql" | psql\n'})}),"\n",(0,s.jsx)(t.p,{children:"Going with this dvdrental example, assuming you are in the root directory\nof your typescript project."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"npm install @embracesql/express\nnpm pkg set type=module\nmkdir -p ./src\nnpx embracesqlcli generate node --database postgres://postgres:postgres@localhost/dvdrental > ./src/dvdrental.ts\n\n"})}),"\n",(0,s.jsx)(t.p,{children:"Preconfigured ready to go TypeScript config."}),"\n",(0,s.jsx)(i.Z,{language:"json",title:"tsconfig.json",children:r.Z}),"\n",(0,s.jsx)(t.p,{children:"Now you can use your fully typed database from TypeScript in Node."}),"\n",(0,s.jsx)(i.Z,{language:"typescript",title:"./src/main.ts",children:o}),"\n",(0,s.jsx)(t.p,{children:"And run it!"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"npx tsx ./src/main.ts\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Learn about ",(0,s.jsx)(t.a,{href:"/docs/autocrud",children:"AutoCRUD"})," to get at all the tables in your database\nwithout writing data access or re-modeling your database with an ORM."]}),"\n",(0,s.jsxs)(t.p,{children:["Lear about ",(0,s.jsx)(t.a,{href:"/docs/sql",children:"SQL Scripts"})," to get any data you want -- all strongly typed\n-- with any SQL script you can imagine."]})]})}function g(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},9990:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/files/dvdrental-fce04e68ea2322fb1e46aa23368b3c55.sql"},8410:(e,t,n)=>{n.d(t,{Z:()=>s});const s='{\n  "extends": "@embracesql/shared/tsconfig/tsconfig.json"\n}\n'}}]);