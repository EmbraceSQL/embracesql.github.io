"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1258],{4525:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>x,frontMatter:()=>s,metadata:()=>p,toc:()=>h});var a=n(5893),i=n(1151);const r='<!doctype html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>EmbraceSQL Checklist</title>\n  </head>\n  <body>\n    <div id="root"></div>\n    <script type="module" src="/src/client/main.tsx"><\/script>\n  </body>\n</html>\n',c='import { App } from "./app";\nimport { EmbraceSQLClient, EmbraceSQLProvider } from "./checklist-react";\nimport { Box, Container, ThemeProvider, createTheme } from "@mui/material";\nimport React from "react";\nimport * as ReactDOM from "react-dom/client";\n\n// connect to where we mounted EmbraceSQL in our server\nconst client = new EmbraceSQLClient({\n  url: `${window.location.href}embracesql`,\n});\n\nconst theme = createTheme({});\n\n// whole application is wrapped in a provider to allow data access in any component\n// the main layout is the default theme and a nice center column\nReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(\n  <EmbraceSQLProvider client={client}>\n    <ThemeProvider theme={theme}>\n      <Container maxWidth="md">\n        <Box sx={{ height: "100vh" }}>\n          <App />\n        </Box>\n      </Container>\n    </ThemeProvider>\n  </EmbraceSQLProvider>,\n);\n',l='import { Checklists } from "./checklists";\nimport { Box } from "@mui/material";\n\n/**\n * Our simple application, controls our view transitions.\n */\nexport function App() {\n  return (\n    <Box sx={{ height: "100%" }}>\n      <Checklists />\n    </Box>\n  );\n}\n';var o=n(9286);const s={},d="Create a Client",p={id:"React/Checklist Example/client",title:"Create a Client",description:"Now we can create a react UI.",source:"@site/docs/React/Checklist Example/03-client.mdx",sourceDirName:"React/Checklist Example",slug:"/React/Checklist Example/client",permalink:"/docs/React/Checklist Example/client",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create a Server",permalink:"/docs/React/Checklist Example/server"},next:{title:"AutoCRUD",permalink:"/docs/autocrud"}},m={},h=[{value:"Steps",id:"steps",level:2},{value:"Get MUI",id:"get-mui",level:3},{value:"Create App HTML",id:"create-app-html",level:3},{value:"Create a React Main",id:"create-a-react-main",level:3},{value:"Create a React App",id:"create-a-react-app",level:3}];function u(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"create-a-client",children:"Create a Client"}),"\n",(0,a.jsx)(t.p,{children:"Now we can create a react UI."}),"\n",(0,a.jsx)(t.h2,{id:"steps",children:"Steps"}),"\n",(0,a.jsx)(t.h3,{id:"get-mui",children:"Get MUI"}),"\n",(0,a.jsx)(t.p,{children:"In our app directory, we need to add a few packages to get the MUI toolkit:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"npm install @mui/material @emotion/react @emotion/styled @mui/x-data-grid @mui/icons-material\n"})}),"\n",(0,a.jsx)(t.h3,{id:"create-app-html",children:"Create App HTML"}),"\n",(0,a.jsx)(t.p,{children:"We're making a single page app, so here is the single page."}),"\n",(0,a.jsx)(o.Z,{language:"html",title:"index.html",children:r}),"\n",(0,a.jsx)(t.h3,{id:"create-a-react-main",children:"Create a React Main"}),"\n",(0,a.jsxs)(t.p,{children:["Create the application root as shown. This will be loaded by ",(0,a.jsx)(t.code,{children:"index.html"}),"."]}),"\n",(0,a.jsx)(o.Z,{language:"tsx",title:"./src/client/main.tsx",children:c}),"\n",(0,a.jsx)(t.h3,{id:"create-a-react-app",children:"Create a React App"}),"\n",(0,a.jsx)(t.p,{children:"A very simple app at the root."}),"\n",(0,a.jsx)(o.Z,{language:"tsx",title:"./src/client/app.tsx",children:l})]})}function x(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}}}]);