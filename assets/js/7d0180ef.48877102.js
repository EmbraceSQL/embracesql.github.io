"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7277],{4528:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>p,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>h,toc:()=>u});var t=s(5893),a=s(1151);const r="import { MiddlewareContext, Next } from \"./types\";\n\n/**\n * Database ROLE based access control.\n *\n * If a ROLE header is supplied, switch to that ROLE for the current\n * transaction.\n */\nexport default async function databaseRole(\n  context: MiddlewareContext,\n  next: Next,\n) {\n  // ROLE header is well known -- and generated -- header\n  if (context.request?.options?.headers?.ROLE) {\n    // call into the database in the current transaction setting the\n    // role for the remainder of the transaction\n    // the 'actual' query will run with this ROLE set, and this different\n    // permissions that your initial database connection\n    await context.sql.unsafe(\n      `SET LOCAL SESSION AUTHORIZATION '${context.request.options.headers.ROLE}';`,\n    );\n  }\n  return next();\n}\n",i='import { Database } from "../../src/marshalling";\n\ndescribe("The database can", () => {\n  let db: Database;\n  beforeAll(async () => {\n    // no spanning transaction to roll back in this test\n    // this is read only and testing the \'live\' path\n    // that would be used in an actual application\n    db = await Database.connect(\n      "postgres://postgres:postgres@localhost:5432/marshalling",\n    );\n  });\n  afterAll(async () => {\n    await db.disconnect();\n  });\n  it("call a proc with an allowed role", async () => {\n    const ret = await db.Api.Procedures.Echo.call(\n      {\n        message: "Hello",\n      },\n      { headers: { ROLE: "postgres" } },\n    );\n    expect(ret).toBe("Hello");\n  });\n  it("call a proc with an disallowed role", async () => {\n    await expect(async () => {\n      const ret = await db.Api.Procedures.Echo.call(\n        {\n          message: "Hello",\n        },\n        { headers: { ROLE: "no_access" } },\n      );\n      console.assert(ret);\n    }).rejects.toThrow();\n  });\n});\n',o='import { EmbraceSQLExpressApp, Database } from "../../src/marshalling";\nimport { EmbraceSQLClient } from "../../src/marshalling-browser";\nimport { Express } from "express";\nimport { Server } from "http";\n\ndescribe("EmbraceSQLExpress can", () => {\n  const PORT = "4445";\n  let app: Express;\n  let server: Server;\n  let database: Database;\n  let client: EmbraceSQLClient;\n  beforeAll(async () => {\n    const postgresUrl =\n      "postgres://postgres:postgres@localhost:5432/marshalling";\n    database = await Database.connect(postgresUrl);\n    // running express in process\n    app = await EmbraceSQLExpressApp(postgresUrl, database);\n    // use this client\n    client = new EmbraceSQLClient({ url: `http://localhost:${PORT}` });\n    return new Promise<void>((resolve) => {\n      server = app.listen(PORT, () => {\n        resolve();\n      });\n    });\n  });\n  afterAll(async () => {\n    await database.disconnect();\n    return new Promise<void>((resolve) => {\n      server.close(() => resolve());\n    });\n  });\n  it("call a proc with an allowed role", async () => {\n    const ret = await client.Api.Procedures.Echo.call(\n      {\n        message: "Hello",\n      },\n      { headers: { ROLE: "postgres" } },\n    );\n    expect(ret).toBe("Hello");\n  });\n  it("call a proc with an disallowed role", async () => {\n    await expect(async () => {\n      const ret = await client.Api.Procedures.Echo.call(\n        {\n          message: "Hello",\n        },\n        { headers: { ROLE: "no_access" } },\n      );\n      console.assert(ret);\n    }).rejects.toThrow();\n  });\n});\n';var c=s(9286);const l={},d="Security",h={id:"security",title:"Security",description:"EmbraceSQL also embraces security \ud83d\udc6e.",source:"@site/docs/security.mdx",sourceDirName:".",slug:"/security",permalink:"/docs/security",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Problems",permalink:"/docs/problems"},next:{title:"SQL Scripts",permalink:"/docs/sql"}},p={},u=[{value:"Database Security",id:"database-security",level:2},{value:"<code>ROLE</code> Based Security",id:"role-based-security",level:2},{value:"Express Middleware",id:"express-middleware",level:2},{value:"NextJS Functions",id:"nextjs-functions",level:2}];function x(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"security",children:"Security"}),"\n",(0,t.jsx)(n.p,{children:"EmbraceSQL also embraces security \ud83d\udc6e."}),"\n",(0,t.jsxs)(n.p,{children:["However, we don't pretend to know your security requirements, so we provide\nthe ability to inject ",(0,t.jsx)(n.a,{href:"./middleware",children:"middleware"})," into the EmbraceSQL processing stack to\nlet you secure however you"]}),"\n",(0,t.jsx)(n.h2,{id:"database-security",children:"Database Security"}),"\n",(0,t.jsx)(n.p,{children:"Most folks won't do this, but you plenty well can have a database user for\neach of your actual users, and collect their username and password, send those\nalong on the database connection URL (make sure HTTPS!) and use the database\nas the security provider."}),"\n",(0,t.jsx)(n.p,{children:"Old \ud83c\udf93."}),"\n",(0,t.jsxs)(n.h2,{id:"role-based-security",children:[(0,t.jsx)(n.code,{children:"ROLE"})," Based Security"]}),"\n",(0,t.jsxs)(n.p,{children:["The SQL standard has a notion of ",(0,t.jsx)(n.code,{children:"ROLE"})," that you can use to set permissions\nwithin your database. EmbraceSQL comes out of the box with ",(0,t.jsx)(n.code,{children:"ROLE"})," based security\navailable."]}),"\n",(0,t.jsxs)(n.p,{children:["The idea is straightforward, when you go to invoke an EmbraceSQL request, you\nsupply a ",(0,t.jsx)(n.code,{children:"ROLE"})," header, and that becomes the database ",(0,t.jsx)(n.code,{children:"ROLE"})," for the invocation\nof the query."]}),"\n",(0,t.jsxs)(n.p,{children:["This way one single ",(0,t.jsx)(n.em,{children:"service account"})," can switch security level on the fly."]}),"\n",(0,t.jsx)(c.Z,{language:"typescript",children:r}),"\n",(0,t.jsxs)(n.p,{children:["Here is an example of using a ",(0,t.jsx)(n.code,{children:"ROLE"})," header in a ",(0,t.jsx)(n.em,{children:"server side"})," scenario."]}),"\n",(0,t.jsx)(c.Z,{language:"typescript",children:i}),"\n",(0,t.jsxs)(n.p,{children:["Here is an example of passing along a ",(0,t.jsx)(n.code,{children:"ROLE"})," via HTTP client. Note that for\nthis to be a ",(0,t.jsx)(n.em,{children:"secure"})," security approach, you will need to prevent client\nside tampering."]}),"\n",(0,t.jsx)(c.Z,{language:"typescript",children:o}),"\n",(0,t.jsx)(n.h2,{id:"express-middleware",children:"Express Middleware"}),"\n",(0,t.jsx)(n.p,{children:"If you are using EmbraceSQL mounted in Express, everything you already know\nabout middleware still applies for authentication and authorization."}),"\n",(0,t.jsx)(n.p,{children:"Some ideas:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Use JWT to identify individual users and then set the database ",(0,t.jsx)(n.code,{children:"ROLE"})," header."]}),"\n",(0,t.jsxs)(n.li,{children:["Use user session cookies to set the database ",(0,t.jsx)(n.code,{children:"ROLE"})," header."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"nextjs-functions",children:"NextJS Functions"}),"\n",(0,t.jsxs)(n.p,{children:["Similar to Express, in your route handler running server side,\nyou can intercept and set the ",(0,t.jsx)(n.code,{children:"ROLE"})," header before transmission to the database."]})]})}function m(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}}}]);