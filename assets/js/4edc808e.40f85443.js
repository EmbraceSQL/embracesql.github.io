"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4173],{455:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>g,frontMatter:()=>d,metadata:()=>l,toc:()=>h});var n=a(5893),s=a(1151),r=a(8410);const i='// import the generated database access object\nimport { Database } from "./dvdrental";\n\n// connect with a good old fashioned Postgres connection string\nconst db = await Database.connect(\n  "postgres://postgres:postgres@localhost:5432/dvdrental",\n);\n// calling a stored database function with positional, typed parameters.\nconst value = await db.Public.Procedures.LastDay.call({\n  argument_0: new Date(),\n});\nconsole.log(value);\n// bye now \ud83d\udc4b\nawait db.disconnect();\n';var o=a(9286);const d={sidebar_position:0},c="Introduction",l={id:"index",title:"Introduction",description:"Love SQL? Love TypeScript? Hate ORMs. You're \ud83c\udfe1.",source:"@site/docs/index.mdx",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",next:{title:"React",permalink:"/docs/React/"}},p={},h=[{value:"Steps",id:"steps",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Create a Database",id:"create-a-database",level:3},{value:"Generate Code with EmbraceSQL",id:"generate-code-with-embracesql",level:3},{value:"Configure TypeScript",id:"configure-typescript",level:3},{value:"Create a Node Program",id:"create-a-node-program",level:3},{value:"Test It!",id:"test-it",level:3}];function u(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsx)(t.p,{children:"Love SQL? Love TypeScript? Hate ORMs. You're \ud83c\udfe1."}),"\n",(0,n.jsx)(t.h2,{id:"steps",children:"Steps"}),"\n",(0,n.jsx)(t.h3,{id:"requirements",children:"Requirements"}),"\n",(0,n.jsx)(t.p,{children:"You will need:"}),"\n",(0,n.jsxs)(t.p,{children:["This example assumes a sample DVD rental database, source at ",(0,n.jsx)(t.a,{target:"_blank",href:a(4201).Z+"",children:"dvdrental.sql"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["You can use this database for testing with a local postgres, such as ",(0,n.jsx)(t.a,{href:"https://postgresapp.com",children:"Postgres.app"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"create-a-database",children:"Create a Database"}),"\n",(0,n.jsx)(t.p,{children:"Create a sample dvdrental database if you like with:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:'curl "https://embracesql.github.io/dvdrental.sql" | psql\n'})}),"\n",(0,n.jsx)(t.h3,{id:"generate-code-with-embracesql",children:"Generate Code with EmbraceSQL"}),"\n",(0,n.jsx)(t.p,{children:"Going with this dvdrental example, assuming you are in the root directory\nof your typescript project."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"npm install @embracesql/express\nnpm pkg set type=module\nmkdir -p ./src\nnpx embracesqlcli generate node --database postgres://postgres:postgres@localhost/dvdrental > ./src/dvdrental.ts\n\n"})}),"\n",(0,n.jsx)(t.h3,{id:"configure-typescript",children:"Configure TypeScript"}),"\n",(0,n.jsx)(t.p,{children:"Preconfigured ready to go TypeScript config."}),"\n",(0,n.jsx)(o.Z,{language:"json",title:"tsconfig.json",children:r.Z}),"\n",(0,n.jsx)(t.h3,{id:"create-a-node-program",children:"Create a Node Program"}),"\n",(0,n.jsx)(t.p,{children:"Now you can use your fully typed database from TypeScript in Node."}),"\n",(0,n.jsx)(o.Z,{language:"typescript",title:"./src/main.ts",children:i}),"\n",(0,n.jsx)(t.h3,{id:"test-it",children:"Test It!"}),"\n",(0,n.jsx)(t.p,{children:"Time to run. Database access end to end with no mapping."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"npx tsx ./src/main.ts\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Learn about ",(0,n.jsx)(t.a,{href:"/docs/autocrud",children:"AutoCRUD"})," to get at all the tables in your database\nwithout writing data access or re-modeling your database with an ORM."]}),"\n",(0,n.jsxs)(t.p,{children:["Lear about ",(0,n.jsx)(t.a,{href:"/docs/sql",children:"SQL Scripts"})," to get any data you want -- all strongly typed\n-- with any SQL script you can imagine."]})]})}function g(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},4201:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/dvdrental-4d6577857fddaf4cb22828b45f57ee97.sql"},8410:(e,t,a)=>{a.d(t,{Z:()=>n});const n='{\n  "extends": "@embracesql/shared/tsconfig/tsconfig.json"\n}\n'}}]);