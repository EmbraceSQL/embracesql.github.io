"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6615],{9193:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var t=a(5893),s=a(1151),r=a(9286);const i='import { Database, Api } from "../src/marshalling";\n\ndescribe("Database middleware can", () => {\n  let db: Database;\n  beforeAll(async () => {\n    db = await Database.connect(\n      "postgres://postgres:postgres@localhost:5432/marshalling",\n    );\n  });\n  afterAll(async () => {\n    await db.disconnect();\n  });\n  it("change a parameter", async () => {\n    // set up middleware that will change the message parameter\n    db.clear();\n    db.use(async (context, next) => {\n      // gonna change that parameter -- but middleware is pretty open type\n      // so cast/ check -- you can figure this type by \'hovering\' over\n      // `.call` in VSCode -- and they follow a generated pattern\n      const parameters = context.request\n        ?.parameters as Api.Procedures.Echo.Parameters;\n      if (parameters.message) {\n        // this clearly makes it more exciting\n        parameters.message = `${parameters.message}\u203c\ufe0f`;\n      }\n      return next();\n    });\n    const ret = await db.Api.Procedures.Echo.call(\n      {\n        message: "Hello",\n      },\n      { headers: { ROLE: "postgres" } },\n    );\n    expect(ret).toBe("Hello\u203c\ufe0f");\n  });\n  it("change a value", async () => {\n    // set up value changing middleware -- this will be on an\n    // AutoCRUD table that contains a single geometric point\n    db.clear();\n    db.use(async (context, next) => {\n      // pick out the values and cast them to a values type\n      // use this to check that we are actually working on Points\n      const values = context.request?.values as Api.Types.Points;\n      if (values.point) {\n        values.point.x += 1;\n        values.point.y += 2;\n      }\n      return next();\n    });\n    // creating a row reads back what is inserted\n    const ret = await db.Api.Tables.Points.create({\n      point: {\n        x: 0,\n        y: 0,\n      },\n    });\n    expect(ret).toMatchObject({ point: { x: 1, y: 2 } });\n  });\n});\n',l={},d="Middleware",c={id:"middleware",title:"Middleware",description:"It's a common pattern: middlware. EmbraceSQL uses this pattern inside the",source:"@site/docs/middleware.mdx",sourceDirName:".",slug:"/middleware",permalink:"/docs/middleware",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Express",permalink:"/docs/express"},next:{title:"NextJS",permalink:"/docs/nextjs"}},o={},h=[{value:"Concepts",id:"concepts",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Values",id:"values",level:2},{value:"Example",id:"example",level:2}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"middleware",children:"Middleware"}),"\n",(0,t.jsx)(n.p,{children:"It's a common pattern: middlware. EmbraceSQL uses this pattern inside the\ndatabase invocation stack to allow you to:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["view and modify ",(0,t.jsx)(n.code,{children:"parameters"})]}),"\n",(0,t.jsxs)(n.li,{children:["view and modify ",(0,t.jsx)(n.code,{children:"values"})]}),"\n",(0,t.jsxs)(n.li,{children:["provide ",(0,t.jsx)(n.a,{href:"./security",children:"security"})]}),"\n",(0,t.jsx)(n.li,{children:"run additional SQL statements in the same transaction as your actual query"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"concepts",children:"Concepts"}),"\n",(0,t.jsxs)(n.p,{children:["Middleware are just asynchronous functions with two parameters ",(0,t.jsx)(n.code,{children:"(context, next)"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Middleware acts by working on a shared ",(0,t.jsx)(n.code,{children:"context"}),".\nModifying this shared context affects the action of subsequent\nmiddlware and the final call of your actual query."]}),"\n",(0,t.jsxs)(n.p,{children:["When your middleware is complete, you call ",(0,t.jsx)(n.code,{children:"next"})," which hands off to the next\nmiddleware."]}),"\n",(0,t.jsxs)(n.p,{children:["You can throw and ",(0,t.jsx)(n.code,{children:"Error"})," at any time to abort processing a request."]}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.p,{children:["When EmbraceSQL says ",(0,t.jsx)(n.code,{children:"parameters"}),", it means data used to filter data in ",(0,t.jsx)(n.code,{children:"WHERE"}),"\nclauses."]}),"\n",(0,t.jsxs)(n.p,{children:["Middleware provides the ability to ",(0,t.jsx)(n.code,{children:"get"})," and ",(0,t.jsx)(n.code,{children:"set"})," ",(0,t.jsx)(n.code,{children:"parameters"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"You can use this for:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"dynamic query alternation"}),"\n",(0,t.jsx)(n.li,{children:"security"}),"\n",(0,t.jsx)(n.li,{children:"logging"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"values",children:"Values"}),"\n",(0,t.jsxs)(n.p,{children:["When EmbraceSQL says ",(0,t.jsx)(n.code,{children:"values"})," it means data that will be sent to and stored\nin the database via ",(0,t.jsx)(n.code,{children:"INSERT"})," and ",(0,t.jsx)(n.code,{children:"UPDATE"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Middleware provides the ability to ",(0,t.jsx)(n.code,{children:"get"})," and ",(0,t.jsx)(n.code,{children:"set"})," ",(0,t.jsx)(n.code,{children:"values"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"You can use this for:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"an in-code alternative to row modifying triggers"}),"\n",(0,t.jsx)(n.li,{children:"default values that rely on code outside the database"}),"\n",(0,t.jsx)(n.li,{children:"validating input that relies on code outside the database"}),"\n",(0,t.jsx)(n.li,{children:"calling external APIs before finally going to the database"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:"Here is an example of using middleware to affect parameters and values\nhoisted up from a unit test."}),"\n",(0,t.jsx)(r.Z,{language:"typescript",children:i})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}}}]);