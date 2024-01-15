"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8267],{7403:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>f,frontMatter:()=>c,metadata:()=>p,toc:()=>u});var r=n(5893),i=n(1151);const o="SELECT\n  film_id,\n  title,\n  release_year,\n  rating,\n  -- nested array so we don't need multiple trips to the database\n  -- this is a nice way to embrace SQL!\n  -- this is also a query that won't parse well with off the shelf\n  -- postgres client drivers, but we'll generate strong types automatically\n  ARRAY(\n\t  SELECT\n\t    first_name || ' ' || last_name\n\t  FROM\n\t    public.actor JOIN public.film_actor fa USING (actor_id)\n\t  WHERE\n        fa.film_id = f.film_id\n  ) AS actors\n\nFROM \n  public.film f",a='"use client";\n\nimport {\n  EmbraceSQLClient,\n  EmbraceSQLProvider,\n  Scripts,\n} from "../../client/dvdrental-react";\n\nconst Report = () => {\n  // this is hooking the SQL Script\n  const { rows } = Scripts.MovieListing.useMovieListing();\n\n  if (rows) {\n    // fully typed data from the report -- autocomplete away\n    return (\n      <div\n        style={{ display: "flex", flexDirection: "column", maxWidth: "40em" }}\n      >\n        {rows.map((row) => (\n          <div\n            style={{\n              display: "flex",\n              flexDirection: "column",\n              marginBottom: "1em",\n            }}\n          >\n            <div style={{ display: "flex", flexDirection: "row" }}>\n              <div style={{ flex: 3, textAlign: "start" }}>\n                {row.title}{" "}\n                <span style={{ fontSize: "0.5em", fontStyle: "italic" }}>\n                  {row.rating}\n                </span>\n              </div>\n              <div style={{ flex: 1, textAlign: "end" }}>{row.releaseYear}</div>\n            </div>\n            <div\n              style={{\n                display: "flex",\n                flexDirection: "row",\n                flexWrap: "wrap",\n              }}\n            >\n              {row.actors.map((actor) => (\n                <div style={{ marginRight: "1em", fontSize: "0.75em" }}>\n                  {actor}\n                </div>\n              ))}\n            </div>\n          </div>\n        ))}\n      </div>\n    );\n  } else {\n    return null;\n  }\n};\n\nexport default function Page() {\n  // connect to where we mounted EmbraceSQL in our server\n  const client = new EmbraceSQLClient({\n    url: `/embracesql`,\n  });\n  // set up the EmbraceSQL context\n  return (\n    <EmbraceSQLProvider client={client}>\n      <Report />\n    </EmbraceSQLProvider>\n  );\n}\n';var s=n(9286),l=n(1430);const c={},d="SQL Script Report",p={id:"React/Cookbook/report",title:"SQL Script Report",description:"How often do you need to write a report? Like -- all the time. Query the database",source:"@site/docs/React/Cookbook/report.mdx",sourceDirName:"React/Cookbook",slug:"/React/Cookbook/report",permalink:"/docs/React/Cookbook/report",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Stored Procedure",permalink:"/docs/React/Cookbook/procedure"},next:{title:"AutoCRUD",permalink:"/docs/autocrud"}},h={},u=[{value:"Requirements",id:"requirements",level:2},{value:"Steps",id:"steps",level:2},{value:"Write an SQL Script",id:"write-an-sql-script",level:3},{value:"Generate Code",id:"generate-code",level:3},{value:"Code React",id:"code-react",level:3}];function m(e){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",p:"p",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"sql-script-report",children:"SQL Script Report"}),"\n",(0,r.jsx)(t.p,{children:"How often do you need to write a report? Like -- all the time. Query the database\nand get it on the page."}),"\n",(0,r.jsx)(t.p,{children:"This example even shows a 'trick' for using PostgreSQL arrays to get a report\nin one trip to the database."}),"\n",(0,r.jsx)(t.p,{children:"EmbraceSQL lets you ... write SQL ... in a plain SQL file, which lets your\neditor help you out."}),"\n",(0,r.jsx)(t.h2,{id:"requirements",children:"Requirements"}),"\n",(0,r.jsxs)(t.p,{children:["Make sure you are read as specified in the ",(0,r.jsx)(t.a,{href:"./",children:"Cookbook"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"steps",children:"Steps"}),"\n",(0,r.jsx)(t.h3,{id:"write-an-sql-script",children:"Write an SQL Script"}),"\n",(0,r.jsx)(t.p,{children:"Here is our SQL, we're going to make a report of all the movies in the sample\ndatabase, along with their actors. Using an ARRAY, which you might have avoided\nin the past becuase it is a pain to deal with using off the shelf PostgreSQL drivers."}),"\n",(0,r.jsx)(s.Z,{language:"sql",title:"./sql/movie_listing.sql",children:o}),"\n",(0,r.jsx)(t.h3,{id:"generate-code",children:"Generate Code"}),"\n",(0,r.jsx)(t.p,{children:"Now that there is a SQL Script - regenerate from the database. If you are already\nrunning NextJS, it'll hot reload."}),"\n",(0,r.jsx)(s.Z,{language:"shell",children:l.Z}),"\n",(0,r.jsx)(t.h3,{id:"code-react",children:"Code React"}),"\n",(0,r.jsx)(t.p,{children:"Hook generated, you just need to import the generated code away you go!"}),"\n",(0,r.jsx)(t.p,{children:"No mapping code written by you. \u23f0 saved."}),"\n",(0,r.jsx)(s.Z,{language:"tsx",title:"src/app/report/page.tsx",children:a})]})}function f(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},1430:(e,t,n)=>{n.d(t,{Z:()=>r});const r="#!/usr/bin/env bash\n\nmkdir -p src/server\nnpx embracesqlcli generate node --database postgres://postgres:postgres@localhost/dvdrental --sqlScriptsFrom ./sql > ./src/server/dvdrental.ts\n\nmkdir -p src/client\nnpx embracesqlcli generate react --database postgres://postgres:postgres@localhost/dvdrental --sqlScriptsFrom ./sql > ./src/client/dvdrental-react.ts"}}]);