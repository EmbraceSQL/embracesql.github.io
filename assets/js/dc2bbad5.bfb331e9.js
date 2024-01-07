"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6662],{3642:(e,n,t)=>{t.d(n,{ZP:()=>i});var a=t(5893),s=t(1151);function r(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,a.jsx)(n.p,{children:"You are going to need:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"NodeJs >= 18"}),"\n",(0,a.jsx)(n.li,{children:"PostgreSQL >= 14"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"These examples assume you are running locally with your shell able to connect\nto your PostgreSQL with:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"psql\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Create a new database ",(0,a.jsx)(n.code,{children:"dvdrental"})," on your local PostgeSQL server."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'curl "https://embracesql.github.io/dvdrental.sql" | psql\n'})})]})}function i(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(r,{...e})}):r(e)}},9722:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>h,default:()=>j,frontMatter:()=>c,metadata:()=>u,toc:()=>x});var a=t(5893),s=t(1151);const r='import { Database } from "./dvdrental";\n\n// connect\nconst database = await Database.connect(\n  "postgres://postgres:postgres@localhost:5432/dvdrental",\n);\n// (C) creating a new record\nconst theBob = await database.Public.Tables.Actor.create({\n  firstName: "Bob",\n  lastName: "Hope",\n});\nconsole.log(theBob);\n// (R) read by primary key\nconst theBobAgain = await database.Public.Tables.Actor.ByActorId.read({\n  actorId: theBob.actorId,\n});\nconsole.log(theBobAgain);\n\n// (U) or upserting -- no new record, turns into an update\ntheBob.firstName = "Robert";\nconst theRobert = await database.Public.Tables.Actor.create(theBob);\nconsole.log(theRobert);\n\n// (U) or good old fashioned update by key\nconst theRoberto = await database.Public.Tables.Actor.ByActorId.update(\n  { actorId: theRobert.actorId },\n  { firstName: "Roberto" },\n);\nconsole.log(theRoberto);\n\n// (D) finally delete\nconst deleted = await database.Public.Tables.Actor.ByActorId.delete({\n  actorId: theRoberto.actorId,\n});\n// the modified record is always returned -- which is very convenient\n// to use in client application state\nconsole.log(deleted);\n\nawait database.disconnect();\n',i='import { Database } from "./dvdrental";\n\n// connect\nconst database = await Database.connect(\n  "postgres://postgres:postgres@localhost:5432/dvdrental",\n);\n\n// update -- auto commits when the block exists\n// this is a no-news-is-good-news transaction approach\nconst updatedCustomer = await database.withTransaction(async (db) => {\n  return await db.Public.Tables.Customer.ByCustomerId.update(\n    {\n      customerId: 1,\n    },\n    { activebool: false },\n  );\n});\nconsole.log(updatedCustomer);\n\n// or to not update in a \'failed\' transaction\ntry {\n  await database.withTransaction(async (db) => {\n    await db.Public.Tables.Customer.ByCustomerId.update(\n      {\n        customerId: 1,\n      },\n      { activebool: true },\n    );\n    throw new Error("aha");\n  });\n} catch {\n  console.log("no noes... \ud83d\ude31");\n}\n\n// and let\'s verify that\nconst notUpdatedCustomer =\n  await database.Public.Tables.Customer.ByCustomerId.read({\n    customerId: 1,\n  });\nconsole.log(notUpdatedCustomer);\n\nawait database.disconnect();\n';var o=t(8410),d=t(9286),l=t(3642);const c={},h="AutoCRUD",u={id:"autocrud",title:"AutoCRUD",description:"AutoCRUD looks at tables, and their indexes and creates a functional interface",source:"@site/docs/autocrud.mdx",sourceDirName:".",slug:"/autocrud",permalink:"/docs/autocrud",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create a Client",permalink:"/docs/React/Checklist Example/client"},next:{title:"embracesqlcli",permalink:"/docs/cli"}},p={},x=[{value:"Steps",id:"steps",level:2},{value:"Generate an Node Database",id:"generate-an-node-database",level:3},{value:"Code up a Node Program",id:"code-up-a-node-program",level:3},{value:"Test It!",id:"test-it",level:3},{value:"Details",id:"details",level:2},{value:"Reads",id:"reads",level:3},{value:"Deletes",id:"deletes",level:3},{value:"Updates",id:"updates",level:3},{value:"Creates",id:"creates",level:3},{value:"Upserts",id:"upserts",level:3},{value:"Transactions",id:"transactions",level:2}];function m(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"autocrud",children:"AutoCRUD"}),"\n",(0,a.jsx)(n.p,{children:"AutoCRUD looks at tables, and their indexes and creates a functional interface\nallowing you to work with tables in a similar fashion to KV-stores."}),"\n",(0,a.jsx)(n.p,{children:"This is easier than writing your own CRUD methods, and easier that an ORM, as it\ncreates flexible database access:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Without you writing any SQL or wrapper functions"}),"\n",(0,a.jsx)(n.li,{children:"Without you specifiying any 'model' or 'pojo' data holders"}),"\n",(0,a.jsx)(n.li,{children:"Against your existing database, without making any schema changes"}),"\n",(0,a.jsx)(n.li,{children:"Without learning yet another 'schema language'"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"All you need are tables with indexes. Yes, primary keys count!"}),"\n",(0,a.jsx)(l.ZP,{}),"\n",(0,a.jsx)(n.h2,{id:"steps",children:"Steps"}),"\n",(0,a.jsx)(n.p,{children:"Here is a step by step guide to create a command line node program\nto access the dvdrental sample database."}),"\n",(0,a.jsx)(n.h3,{id:"generate-an-node-database",children:"Generate an Node Database"}),"\n",(0,a.jsx)(n.p,{children:"Go into a nice blank directory."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"npm install @embracesql/express\nnpm pkg set type=module\nmkdir -p ./src\nnpx embracesqlcli generate node --database postgres://postgres:postgres@localhost/dvdrental > ./src/dvdrental.ts\n"})}),"\n",(0,a.jsx)(n.h3,{id:"code-up-a-node-program",children:"Code up a Node Program"}),"\n",(0,a.jsxs)(n.p,{children:["We provide handy tsconfig settings that work great with ",(0,a.jsx)(n.code,{children:"tsx"})," and ",(0,a.jsx)(n.code,{children:"typescript"})," 5+."]}),"\n",(0,a.jsx)(n.p,{children:"Create two files as shown."}),"\n",(0,a.jsx)(d.Z,{language:"json",title:"tsconfig.json",children:o.Z}),"\n",(0,a.jsx)(d.Z,{language:"typescript",title:"./src/autocrud.ts",children:r}),"\n",(0,a.jsx)(n.h3,{id:"test-it",children:"Test It!"}),"\n",(0,a.jsx)(n.p,{children:"Start that server:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"npx tsx ./src/autocrud.ts\n"})}),"\n",(0,a.jsx)(n.h2,{id:"details",children:"Details"}),"\n",(0,a.jsx)(n.p,{children:"AutoCRUD generates per schema, per table, per index function calls to:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Create via ",(0,a.jsx)(n.code,{children:"INSERT"}),", with ",(0,a.jsx)(n.code,{children:"ON CONFLICT"})," support"]}),"\n",(0,a.jsxs)(n.li,{children:["Read via ",(0,a.jsx)(n.code,{children:"SELECT"})]}),"\n",(0,a.jsxs)(n.li,{children:["Update via ",(0,a.jsx)(n.code,{children:"UPDATE"})]}),"\n",(0,a.jsxs)(n.li,{children:["Delete via ",(0,a.jsx)(n.code,{children:"DELETE"})]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"You call these functions with TypeScript, with strong types for inputs and outputs -- and of course intellisense."}),"\n",(0,a.jsx)(n.p,{children:"This isn't like an ORM where you 'make sql with functions', it's like more like\nthe database is exposed as a key-value store by unique index, along with result sets\nof objects for non-unique indexes."}),"\n",(0,a.jsx)(n.p,{children:"You aren't generating SQL at runtime, instead the sql is pregenerated. This helps\non performance, and debuggability - the generated database access code is just\na single TypeScript file. Go ahead and set breakpoints in it!"}),"\n",(0,a.jsxs)(n.p,{children:["All methods utilize Postgres ",(0,a.jsx)(n.code,{children:"RETURNING"})," so you get the records modified back\nin a single trip to the database. You'll appreciate this if you have an active\ndatabase with triggers and functions that modifiy columns separate from your\nTypeScript code. Simply cache/stash/return the modified records!"]}),"\n",(0,a.jsxs)(n.p,{children:["Unique indexes, like primary keys, return a single record ",(0,a.jsx)(n.code,{children:"{Schema}.{Table}"}),"\n-- saving you the ",(0,a.jsx)(n.code,{children:"[0]"})," game."]}),"\n",(0,a.jsxs)(n.p,{children:["Non unique indexes return a ",(0,a.jsx)(n.code,{children:"List<{Schema}.{Table}>"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"reads",children:"Reads"}),"\n",(0,a.jsxs)(n.p,{children:["Reads work along indexes with methods generated of the format ",(0,a.jsx)(n.code,{children:"{Schema}.{Table}.by{IndexColumns}"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"If you need another way to read records, just add an index."}),"\n",(0,a.jsx)(n.h3,{id:"deletes",children:"Deletes"}),"\n",(0,a.jsxs)(n.p,{children:["Deletes work along indexes with methods generated of the format ",(0,a.jsx)(n.code,{children:"{Schema}.{Table}.deleteBy{IndexColumns}"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Deletes get rid of records. Nothing surprising here, unless you have foreign\nkeys without ",(0,a.jsx)(n.code,{children:"ON DELETE CASCADE"}),", in which case you won't actually be deleting\nand records after all \ud83d\ude09."]}),"\n",(0,a.jsx)(n.h3,{id:"updates",children:"Updates"}),"\n",(0,a.jsxs)(n.p,{children:["Deletes work along indexes with methods generated of the format ",(0,a.jsx)(n.code,{children:"{Schema}.{Table}.updateBy{IndexColumns}"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Updates allow partial of full updates, passing in ",(0,a.jsx)(n.code,{children:"values"})," that can be\nany subset of columns that you like. The update statement is smart in that\nit will take your new passed in values, or leave the existing database value\nwithout generating a dynamic sql string."]}),"\n",(0,a.jsxs)(n.p,{children:["This does rely on TypeScript properties you do NOT want to change to be ",(0,a.jsx)(n.code,{children:"undefined"}),"\non the passed in ",(0,a.jsx)(n.code,{children:"values"}),". The easiest way to get this is to have an inline ",(0,a.jsx)(n.code,{children:"{column: value}"}),"\npassed to ",(0,a.jsx)(n.code,{children:"values"})," for what you want to change, and omit columns you do not want to change."]}),"\n",(0,a.jsxs)(n.p,{children:["To null a column, pass ",(0,a.jsx)(n.code,{children:"null"})," for the value like ",(0,a.jsx)(n.code,{children:"{email: null}"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"If you have an active database with constraints and triggers, updates can fail, raising\nan exception back."}),"\n",(0,a.jsx)(n.h3,{id:"creates",children:"Creates"}),"\n",(0,a.jsxs)(n.p,{children:["Creates have one method per table generated of the format ",(0,a.jsx)(n.code,{children:"{Schema}.{Table}.create"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Pass in values, get a whole new row from the database. If the row exists, it will\nupsert automatically."}),"\n",(0,a.jsx)(n.p,{children:"Creating records recognizes defaults."}),"\n",(0,a.jsx)(n.p,{children:"Primary keys often have defaults defined with"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"SMALLSERIAL"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"SERIAL"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"BIGSERIAL"})}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"DEFAULT nextval()"})," from a sequence."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"These keys are created from defaults in the database.\nThis means primary key attributes are optional in TypeScript, and you probably\nwant to leave them undefined in order to have the database create you a primary key."}),"\n",(0,a.jsxs)(n.p,{children:["Columns beyond the primary key can have defaults as well, ",(0,a.jsx)(n.code,{children:"created_date"})," is a common\npattern here. To get the database default, just don't pass a value for the column."]}),"\n",(0,a.jsxs)(n.p,{children:["The good news is the ",(0,a.jsx)(n.code,{children:"RETURNING"})," record will show you the primary key as\ncreated by the database."]}),"\n",(0,a.jsxs)(n.p,{children:["You can pass in ",(0,a.jsx)(n.code,{children:"values"})," with the primary key - particularly when you\nintend to get an upsert. Or if you are on purpose 'setting' the primary key\nand bypassing the default."]}),"\n",(0,a.jsx)(n.h3,{id:"upserts",children:"Upserts"}),"\n",(0,a.jsxs)(n.p,{children:["Creates automatically upsert, turning the ",(0,a.jsx)(n.code,{children:"INSERT"})," into an ",(0,a.jsx)(n.code,{children:"UPDATE"}),", ",(0,a.jsx)(n.code,{children:"RETURNING"}),"\nthe modified record."]}),"\n",(0,a.jsx)(n.h2,{id:"transactions",children:"Transactions"}),"\n",(0,a.jsx)(n.p,{children:"What would a database library be without transactions?"}),"\n",(0,a.jsx)(n.p,{children:"Just pass a callback function, throw to abort, return clean to commit."}),"\n",(0,a.jsx)(d.Z,{language:"typescript",title:"./src/transactions.ts",children:i})]})}function j(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},8410:(e,n,t)=>{t.d(n,{Z:()=>a});const a='{\n  "extends": "@embracesql/shared/tsconfig/tsconfig.json"\n}\n'}}]);