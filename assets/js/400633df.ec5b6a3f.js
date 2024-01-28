"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6177],{3642:(e,n,t)=>{t.d(n,{ZP:()=>o});var r=t(5893),s=t(1151);function a(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,r.jsx)(n.p,{children:"You are going to need:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"NodeJs >= 18"}),"\n",(0,r.jsx)(n.li,{children:"PostgreSQL >= 14"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"These examples assume you are running locally with your shell able to connect\nto your PostgreSQL with:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"psql\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Create a new database ",(0,r.jsx)(n.code,{children:"dvdrental"})," on your local PostgeSQL server."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'curl "https://embracesql.github.io/dvdrental.sql" | psql\n'})})]})}function o(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},3702:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>p,default:()=>g,frontMatter:()=>d,metadata:()=>h,toc:()=>m});var r=t(5893),s=t(1151),a=t(3871);const o="\n\n.card {\n  padding: 2em;\n  display: flex;\n  flex-direction: column;\n  row-gap: 1rem;\n}\n",c='"use client";\n\nimport {\n  EmbraceSQLClient,\n  EmbraceSQLProvider,\n  Public,\n} from "../../client/dvdrental-react";\nimport "../sample.css";\n\nconst Actor = () => {\n  // this is hooking to an AutoCRUD method to read an actor\n  const { row: actor } = Public.Tables.Actor.useActorPkey({ actorId: 100 });\n  // \ud83e\ude84 - automatic onChange saving though the hook, with debounce to not smoke your DB!\n  // notice there is no <form> to post back or additional hooks\n\n  if (actor) {\n    return (\n      <div className="card">\n        <input value={actor.firstName} onChange={actor.changeFirstName} />\n        <input value={actor.lastName} onChange={actor.changeLastName} />\n      </div>\n    );\n  } else {\n    return null;\n  }\n};\n\nexport default function Page() {\n  // connect to where we mounted EmbraceSQL in our server\n  const client = new EmbraceSQLClient({\n    url: `/embracesql`,\n  });\n  return (\n    <EmbraceSQLProvider client={client}>\n      <Actor />\n    </EmbraceSQLProvider>\n  );\n}\n';var l=t(9286),i=t(3642);const d={},p="NextJS",h={id:"nextjs",title:"NextJS",description:"EmbraceSQL connects into NextJS with a single POST app route handler.",source:"@site/docs/nextjs.mdx",sourceDirName:".",slug:"/nextjs",permalink:"/docs/nextjs",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Middleware",permalink:"/docs/middleware"},next:{title:"Problems",permalink:"/docs/problems"}},u={},m=[{value:"Steps",id:"steps",level:2},{value:"NextJS App",id:"nextjs-app",level:3},{value:"Add EmbraceSQL",id:"add-embracesql",level:3},{value:"Code up a Route Handler",id:"code-up-a-route-handler",level:3},{value:"Test",id:"test",level:3},{value:"Generate a Client",id:"generate-a-client",level:3},{value:"Create a Page",id:"create-a-page",level:3}];function x(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"nextjs",children:"NextJS"}),"\n",(0,r.jsxs)(n.p,{children:["EmbraceSQL connects into NextJS with a single ",(0,r.jsx)(n.code,{children:"POST"})," app route handler."]}),"\n",(0,r.jsxs)(n.p,{children:["This provides full access to ",(0,r.jsx)(n.a,{href:"./autocrud",children:"AutoCRUD"})," and can be\nextended with your own ",(0,r.jsx)(n.a,{href:"./sql",children:"SQL"}),"."]}),"\n",(0,r.jsx)(i.ZP,{}),"\n",(0,r.jsx)(n.h2,{id:"steps",children:"Steps"}),"\n",(0,r.jsx)(n.h3,{id:"nextjs-app",children:"NextJS App"}),"\n",(0,r.jsxs)(n.p,{children:["If you have an NextJS app great! -- if not ",(0,r.jsx)(n.a,{href:"https://nextjs.org/docs/getting-started/installation",children:"Create One"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Make sure to pick TypeScript!"}),"\n",(0,r.jsx)(n.h3,{id:"add-embracesql",children:"Add EmbraceSQL"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"cd"})," into the root of your application."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"npm install @embracesql/shared\nmkdir -p ./src/server\nnpx embracesqlcli generate express --database postgres://postgres:postgres@localhost/dvdrental > ./src/server/dvdrental.ts\n"})}),"\n",(0,r.jsx)(n.h3,{id:"code-up-a-route-handler",children:"Code up a Route Handler"}),"\n",(0,r.jsx)(l.Z,{language:"typescript",title:"./src/embracesql/route.ts",children:a.Z}),"\n",(0,r.jsx)(n.h3,{id:"test",children:"Test"}),"\n",(0,r.jsx)(n.p,{children:"Start that server:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"npm run dev\n"})}),"\n",(0,r.jsx)(n.p,{children:"And curl for some data:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'curl -X POST http://localhost:3000 \\\n   -H \'Content-Type: application/json\' \\\n   -d \'{"operation":"Public.Tables.Actor.ByActorId.read","parameters":{"actorId": 1}}\'\n'})}),"\n",(0,r.jsx)(n.h3,{id:"generate-a-client",children:"Generate a Client"}),"\n",(0,r.jsxs)(n.p,{children:["It's fun to ",(0,r.jsx)(n.code,{children:"curl"})," and all, but TypeScript is about types and autocompletion."]}),"\n",(0,r.jsxs)(n.p,{children:["Generate a fully typed ",(0,r.jsx)(n.code,{children:"fetch"})," wrapping client."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"npm install @embracesql/react\nnpx embracesqlcli generate react --database postgres://postgres:postgres@localhost/dvdrental > ./src/client/dvdrental-react.ts\n"})}),"\n",(0,r.jsx)(n.h3,{id:"create-a-page",children:"Create a Page"}),"\n",(0,r.jsx)(n.p,{children:"Create as shown. This is a client component in this simple example to illlustrate\nthe power of the auto-update hooks."}),"\n",(0,r.jsx)(n.p,{children:"For fun, try typing it to get a sense of the autocomplete."}),"\n",(0,r.jsx)(l.Z,{language:"css",title:"./src/app/sample.css",children:o}),"\n",(0,r.jsx)(l.Z,{language:"tsx",title:"./src/app/actor/page.tsx",children:c})]})}function g(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},3871:(e,n,t)=>{t.d(n,{Z:()=>r});const r='import { OperationDispatcher, Database } from "../../server/dvdrental";\nimport { EmbraceSQLRequest, EmbraceSQLResponse } from "@embracesql/shared";\n\n/**\n * Connect next app route to EmbraceSQL with a plain\n * PostgreSQL connection url.\n */\nfunction embraceSQL(postgresUrl: string) {\n  let database: Database;\n  return async (req: Request) => {\n    // do we already have a connection\n    if (!database) {\n      database = await Database.connect(postgresUrl);\n    }\n    // dispatcher finds the right method for a request\n    const dispatcher = new OperationDispatcher(database);\n    try {\n      // do we have a valid request?\n      const request: EmbraceSQLRequest<object, object> = await req.json();\n      if (!request.operation && !(request.parameters || request.values)) {\n        throw new Error("Invalid Request");\n      }\n      // now we are \ud83e\udd58\n      const results = await dispatcher.dispatch(request);\n      const response: EmbraceSQLResponse<unknown, object, object> = {\n        ...request,\n        results,\n      };\n      return Response.json(response);\n    } catch (e) {\n      return new Response((e as Error)?.message, { status: 400 });\n    }\n  };\n}\n\n/**\n * NextJS POST route connection.\n */\nexport const POST = embraceSQL(\n  "postgres://postgres:postgres@localhost/dvdrental",\n);\n'}}]);