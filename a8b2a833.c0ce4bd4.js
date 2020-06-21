(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{143:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return u}));var a=t(2),o=t(6),r=t(0),i=t(168),c=t(171),d=t(169),l={id:"hello-world",title:"Hello, World!",keywords:["javascript","table","javascript table","gridjs","grid js"]},s={id:"examples/hello-world",isDocsHomePage:!1,title:"Hello, World!",description:"You can interact with the following editor!",source:"@site/docs/examples/hello-world.md",permalink:"/docs/examples/hello-world",editUrl:"https://github.com/grid-js/website/edit/master/docs/examples/hello-world.md",lastUpdatedBy:"Afshin Mehrabani",lastUpdatedAt:1592139438,sidebar:"sidebar",previous:{title:"\ud83d\udc9a Vue",permalink:"/docs/integrations/vue"},next:{title:"From HTML Table",permalink:"/docs/examples/from"}},p=[],m={rightToc:p};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},m,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"You can interact with the following editor!"))),Object(i.b)(d.a,{children:"\nconst grid = new Grid({\n  columns: ['Name', 'Email', 'Phone Number'],\n  data: [\n    ['John', 'john@example.com', '(353) 01 222 3333'],\n    ['Mark', 'mark@gmail.com',   '(01) 22 888 4444']\n  ]\n});\n",transformCode:function(e){return"\nfunction () {\n  "+e+"\n  \n  useEffect(() => {\n    grid.render(document.getElementById('wrapper'));\n  });\n  \n  return (\n    <div id=\"wrapper\" />\n  );\n}\n"},live:!0,scope:{Grid:c.b,CodeBlock:d.a,useEffect:r.useEffect},mdxType:"CodeBlock"}),Object(i.b)("br",null),Object(i.b)("p",null,"Or you can update the config using ",Object(i.b)("inlineCode",{parentName:"p"},"updateConfig"),":"),Object(i.b)(d.a,{children:"\nconst grid = new Grid({\n  data: [\n    ['John', 'john@example.com', '(353) 01 222 3333'],\n    ['Mark', 'mark@gmail.com',   '(01) 22 888 4444']\n  ]\n}).updateConfig({\n  columns: ['Name', 'Email', 'Phone Number'],\n});\n",transformCode:function(e){return"\nfunction () {\n  const wrapper = useRef(null);\n  \n  "+e+'\n  \n  useEffect(() => {\n    grid.render(wrapper.current);\n  });\n  \n  return (\n    <div id="wrapper" ref={wrapper} />\n  );\n}\n'},live:!0,scope:{Grid:c.b,CodeBlock:d.a,useEffect:r.useEffect,useRef:r.useRef},mdxType:"CodeBlock"}))}u.isMDXComponent=!0}}]);