"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3382],{2532:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>h});var i=n(5893),s=n(1151);const a='import { Public } from "./checklist-react";\nimport AddIcon from "@mui/icons-material/Add";\nimport DeleteIcon from "@mui/icons-material/Delete";\nimport { Button, Checkbox, IconButton, TextField } from "@mui/material";\nimport Grid from "@mui/material/Unstable_Grid2";\n\ntype Props = {\n  // we can use the exact type generated from the database complete with autocomplete\n  // no need to \'keep types in sync\' - just embrace the database!\n  checklistId: Public.Tables.Checklist.Row["id"];\n};\n\n/**\n * A data grid displaying data bound to the `checklist_item` table via EmbraceSQL.\n */\nexport function ChecklistItems({ checklistId }: Props) {\n  // data hooked to the checklist id\n  const { rows, addRow, deleteRow } =\n    Public.Tables.ChecklistItem.useByChecklistId({ checklistId });\n\n  return (\n    // just a single editable text field -- EmbraceSQL has automatic saving\n    // for text fields, debounced on change as the user types - values go\n    // to the databse\n    <Grid container spacing={1}>\n      {rows.map((row) => {\n        console.log(row);\n        return (\n          <Grid key={row.rowNumberInResultset} xs={12} container>\n            <Grid\n              xs={1}\n              sx={{\n                display: "flex",\n                justifyContent: "center",\n                alignItems: "center",\n              }}\n            >\n              <Checkbox\n                checked={row.checked}\n                onChange={row.changeChecked}\n                inputProps={{ "aria-label": "controlled" }}\n              />\n            </Grid>\n            <Grid xs={10}>\n              <TextField\n                variant="standard"\n                value={row.title}\n                label={row.title ? " " : "Name your item..."}\n                onChange={row.changeTitle}\n                fullWidth\n                helperText={\n                  row.createdAt\n                    ? `Created: ${row.createdAt.toLocaleDateString()}`\n                    : ` `\n                }\n              />\n            </Grid>\n            <Grid\n              xs={1}\n              sx={{\n                display: "flex",\n                justifyContent: "center",\n                alignItems: "center",\n              }}\n            >\n              <IconButton\n                onClick={() => void deleteRow(row.rowNumberInResultset)}\n              >\n                <DeleteIcon />\n              </IconButton>\n            </Grid>\n          </Grid>\n        );\n      })}\n      <Grid container>\n        <Grid>\n          <Button\n            color="primary"\n            startIcon={<AddIcon />}\n            onClick={() => void addRow()}\n          >\n            Add\n          </Button>\n        </Grid>\n      </Grid>\n    </Grid>\n  );\n}\n';var o=n(9286);const r={},c="Create Items",l={id:"React/Checklist Example/items",title:"Create Items",description:"Now we'll associate a parent Checklist with ChecklistItems.",source:"@site/docs/React/Checklist Example/05-items.mdx",sourceDirName:"React/Checklist Example",slug:"/React/Checklist Example/items",permalink:"/docs/React/Checklist Example/items",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create Checklists",permalink:"/docs/React/Checklist Example/checklists"},next:{title:"AutoCRUD",permalink:"/docs/autocrud"}},d={},h=[{value:"Steps",id:"steps",level:2},{value:"Create a ChecklistsItem Component",id:"create-a-checklistsitem-component",level:3}];function m(e){const t={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"create-items",children:"Create Items"}),"\n",(0,i.jsx)(t.p,{children:"Now we'll associate a parent Checklist with ChecklistItems.\nEmbraceSQL makes this easy with automatically generated hooks."}),"\n",(0,i.jsx)(t.h2,{id:"steps",children:"Steps"}),"\n",(0,i.jsx)(t.h3,{id:"create-a-checklistsitem-component",children:"Create a ChecklistsItem Component"}),"\n",(0,i.jsxs)(t.p,{children:["We're using another grid to ",(0,i.jsx)(t.em,{children:"CRUD"})," ChecklistItems. The read operation is hooked\nto a prop that is the parent Checklist ",(0,i.jsx)(t.code,{children:"id"}),"."]}),"\n",(0,i.jsx)(o.Z,{language:"tsx",title:"./src/client/checklistitems.tsx",children:a})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}}}]);