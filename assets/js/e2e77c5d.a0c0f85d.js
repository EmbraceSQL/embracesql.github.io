"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4159],{9056:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>i});var r=n(5893),t=n(1151);const a={},c="Express",o={id:"express",title:"Express",description:"EmbraceSQL generates an Express Application object suitable for mounting",source:"@site/docs/express.md",sourceDirName:".",slug:"/express",permalink:"/docs/express",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Catalog Based Generation",permalink:"/docs/catalog"},next:{title:"Problems",permalink:"/docs/problems"}},l={},i=[{value:"Example",id:"example",level:2}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"express",children:"Express"}),"\n",(0,r.jsxs)(s.p,{children:["EmbraceSQL generates an Express ",(0,r.jsx)(s.code,{children:"Application"})," object suitable for mounting\nat any location with ",(0,r.jsx)(s.code,{children:"use"})," into an existing express setup, or run directly\nwith ",(0,r.jsx)(s.code,{children:"listen"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(s.p,{children:["You can look in the ",(0,r.jsx)(s.a,{href:"/docs/",children:"intro"})," to see how to generate the dvdrental code\nused in these example snippets."]}),"\n",(0,r.jsx)(s.p,{children:"Once you have a database, you can generate the express application:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"npm install @embracesql/express\nmkdir -p ./src\nnpx embracesql generate express --database postgres://postgres:postgres@localhost/dvdrental > ./src/dvdrental.ts\n"})}),"\n",(0,r.jsxs)(s.p,{children:["And a very simple express server ",(0,r.jsx)(s.code,{children:"index.ts"}),", assumes top level ",(0,r.jsx)(s.code,{children:"await"})," -- put ",(0,r.jsx)(s.code,{children:'"type": "module"'}),"\nin your package json. And, provided handy tsconfig settings that work great with\n",(0,r.jsx)(s.code,{children:"tsx"})," and ",(0,r.jsx)(s.code,{children:"typescript"})," 5+."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"tsconfig.json"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{\n  "extends": "@embracesql/shared/tsconfig/tsconfig.json"\n}\n\n'})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"./src/express.ts"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-typescript",children:'import { EmbraceSQLExpressApp } from "./dvdrental";\n\n// this is an express application\nconst app = await EmbraceSQLExpressApp(\n  "postgres://postgres:postgres@localhost/dvdrental",\n);\napp.listen(3000);\n\n'})}),"\n",(0,r.jsx)(s.p,{children:"Start that server:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"npx tsx ./src/express.ts\n"})}),"\n",(0,r.jsx)(s.p,{children:"And curl for some data:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:'curl -X POST http://localhost:3000 \\\n   -H \'Content-Type: application/json\' \\\n   -d \'{"operation":"Public.Actor.byActorId","parameters":{"actorId": 1}}\'\n'})})]})}function p(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);