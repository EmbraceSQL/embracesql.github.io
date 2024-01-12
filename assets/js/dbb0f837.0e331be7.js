"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[183],{3642:(e,n,t)=>{t.d(n,{ZP:()=>i});var r=t(5893),a=t(1151);function s(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,r.jsx)(n.p,{children:"You are going to need:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"NodeJs >= 18"}),"\n",(0,r.jsx)(n.li,{children:"PostgreSQL >= 14"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"These examples assume you are running locally with your shell able to connect\nto your PostgreSQL with:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"psql\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Create a new database ",(0,r.jsx)(n.code,{children:"dvdrental"})," on your local PostgeSQL server."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'curl "https://embracesql.github.io/dvdrental.sql" | psql\n'})})]})}function i(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}},1521:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>x,contentTitle:()=>m,default:()=>j,frontMatter:()=>h,metadata:()=>u,toc:()=>g});var r=t(5893),a=t(1151);const s='<!doctype html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Checklist</title>\n  </head>\n  <body>\n    <div id="root"></div>\n    <script type="module" src="/src/client/main.tsx"><\/script>\n  </body>\n</html>\n',i="#root {\n\n    max-width: 100vw;\n      margin: 0 auto;\n      padding: 2rem;\n      text-align: center;\n}\n\nbody {\n  font-family: system-ui;\n  margin: 0;\n  display: flex;\n  place-items: center;\n  min-width: 100vw;\n  min-height: 100vh;\n}\n\n.card {\n  padding: 2em;\n  display: flex;\n  flex-direction: column;\n  row-gap: 1rem;\n}\n",l='import {\n  EmbraceSQLClient,\n  EmbraceSQLProvider,\n  Public,\n} from "./dvdrental-react";\nimport "./main.css";\nimport * as ReactDOM from "react-dom/client";\n\n// connect to where we mounted EmbraceSQL in our server\nconst client = new EmbraceSQLClient({\n  url: `${window.location.href}embracesql`,\n});\n\nconst App = () => {\n  // this is hooking to an AutoCRUD method to read an actor\n  const {\n    loading,\n    row: actor,\n    error,\n  } = Public.Tables.Actor.useByActorId({ actorId: 100 });\n  // \ud83e\ude84 - automatic onChange saving though the hook, with debounce to not smoke your DB!\n  // notice there is no <form> to post back or additional hooks\n  if (loading) {\n    return (\n      <div>\n        <p>Loading...</p>\n      </div>\n    );\n  }\n  if (error) {\n    return (\n      <div>\n        <p>{`{error}`}</p>\n      </div>\n    );\n  }\n  if (actor) {\n    return (\n      <div className="card">\n        <input value={actor.firstName} onChange={actor.changeFirstName} />\n        <input value={actor.lastName} onChange={actor.changeLastName} />\n      </div>\n    );\n  }\n};\n\n// Supported in React 18+\nReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(\n  <EmbraceSQLProvider client={client}>\n    <App />\n  </EmbraceSQLProvider>,\n);\n',o='import { EmbraceSQLExpressApp } from "./dvdrental";\nimport { EmbraceViteApp } from "@embracesql/vite";\nimport express from "express";\n\nconst app = express();\n\nexport const PORT = Number.parseInt(process.env["PORT"] ?? "4000");\n\n// hook EmbraceSQL middleware first to connect to the database\nconst embracesql = await EmbraceSQLExpressApp(\n  "postgres://postgres:postgres@localhost/dvdrental",\n);\n// mounting the database middleware\napp.use("/embracesql", embracesql);\n// and then hook in vite middleware to build and run your React\nconst vite = await EmbraceViteApp();\n// server react at the root\napp.use("/", vite);\n\napp.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));\n',c='{\n  "extends": "@embracesql/shared/tsconfig/react.tsconfig.json"\n}\n';var d=t(9286),p=t(3642);const h={},m="React",u={id:"React/index",title:"React",description:"EmbraceSQL generates support for React using hooks. The hooks:",source:"@site/docs/React/index.mdx",sourceDirName:"React",slug:"/React/",permalink:"/docs/React/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/"},next:{title:"Checklist Example",permalink:"/docs/React/Checklist Example/"}},x={},g=[{value:"Steps",id:"steps",level:2},{value:"Generate an Express Server",id:"generate-an-express-server",level:3},{value:"Code up an Express Server",id:"code-up-an-express-server",level:3},{value:"Run Your Server",id:"run-your-server",level:3},{value:"Generate a React Client",id:"generate-a-react-client",level:3},{value:"Code up a React App",id:"code-up-a-react-app",level:3}];function v(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"react",children:"React"}),"\n",(0,r.jsx)(n.p,{children:"EmbraceSQL generates support for React using hooks. The hooks:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Connect to any HTTP/S EmbraceSQL server endpoint"}),"\n",(0,r.jsx)(n.li,{children:"Create, Read, Update, Delete, and Refresh data (CRUD-R)"}),"\n"]}),"\n",(0,r.jsx)(p.ZP,{}),"\n",(0,r.jsx)(n.h2,{id:"steps",children:"Steps"}),"\n",(0,r.jsxs)(n.p,{children:["In this example you will end up with read-write data access from a hot loading\n",(0,r.jsx)(n.a,{href:"https://vitejs.dev",children:"Vite"})," built application without:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Writing a line of SQL"}),"\n",(0,r.jsx)(n.li,{children:"Making a POJO"}),"\n",(0,r.jsx)(n.li,{children:"Learning a new 'schema language' like in Prisma"}),"\n",(0,r.jsx)(n.li,{children:"Learning a new 'query language' like GraphQL"}),"\n",(0,r.jsxs)(n.li,{children:["Calling the database ",(0,r.jsx)(n.em,{children:"manually"})]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"generate-an-express-server",children:"Generate an Express Server"}),"\n",(0,r.jsx)(n.p,{children:"Go into a nice blank directory. This is the 'server side'."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"npm install @embracesql/vite\nnpm pkg set type=module\nmkdir -p ./src\nnpx embracesqlcli generate express --database postgres://postgres:postgres@localhost/dvdrental > ./src/dvdrental.ts\n"})}),"\n",(0,r.jsx)(n.p,{children:"Yeah -- that's it, hard to believe I know..."}),"\n",(0,r.jsx)(n.h3,{id:"code-up-an-express-server",children:"Code up an Express Server"}),"\n",(0,r.jsx)(n.p,{children:"Create two files as shown."}),"\n",(0,r.jsx)(d.Z,{language:"json",title:"tsconfig.json",children:c}),"\n",(0,r.jsx)(d.Z,{language:"typescript",title:"./src/server/main.ts",children:o}),"\n",(0,r.jsx)(n.h3,{id:"run-your-server",children:"Run Your Server"}),"\n",(0,r.jsx)(n.p,{children:"Make sure the server starts -- this will even hot reload the server -- and\nweb page we're about to build."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"npx tsx watch ./src/server/main.ts\n"})}),"\n",(0,r.jsx)(n.p,{children:"At this point, if you are getting data -- it's time to make a react app!"}),"\n",(0,r.jsx)(n.h3,{id:"generate-a-react-client",children:"Generate a React Client"}),"\n",(0,r.jsx)(n.p,{children:"Generate the client side, react hook code:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"mkdir -p src/client\nnpx embracesqlcli generate react --database postgres://postgres:postgres@localhost/dvdrental > ./src/client/dvdrental-react.ts\n"})}),"\n",(0,r.jsx)(n.h3,{id:"code-up-a-react-app",children:"Code up a React App"}),"\n",(0,r.jsx)(n.p,{children:"Here is a super minimal React application to get you a single Actor\nfrom the database, and allow saving to the database without you writing\na line of SQL, or additional schema, or even a server."}),"\n",(0,r.jsx)(n.p,{children:"Gonna need an html page entry point."}),"\n",(0,r.jsx)(d.Z,{language:"html",title:"index.html",children:s}),"\n",(0,r.jsxs)(n.p,{children:["And attach a react component to ",(0,r.jsx)(n.code,{children:"#root"}),"."]}),"\n",(0,r.jsx)(d.Z,{language:"tsx",title:"./src/client/main.tsx",children:l}),"\n",(0,r.jsx)(n.p,{children:"And just a tiny bit of CSS:"}),"\n",(0,r.jsx)(d.Z,{language:"css",title:"./src/client/main.css",children:i}),"\n",(0,r.jsxs)(n.p,{children:["OK - the Express server should now be serving both EmbraceSQL and a fine\nReact app connected to it. ",(0,r.jsx)(n.a,{href:"http://localhost:3000",children:"Check it out"}),"."]})]})}function j(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(v,{...e})}):v(e)}}}]);