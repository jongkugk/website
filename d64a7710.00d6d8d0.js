(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{156:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return d})),r.d(n,"metadata",(function(){return l})),r.d(n,"rightToc",(function(){return p})),r.d(n,"default",(function(){return m}));var t=r(2),a=r(6),s=r(0),o=r(168),c=r(171),i=r(169),d={id:"search",title:"Search",keywords:["javascript","table","javascript table","gridjs","grid js","search","table search","row search"]},l={id:"examples/search",isDocsHomePage:!1,title:"Search",description:"Grid.js supports global search on all rows and columns. Set search",source:"@site/docs/examples/search.md",permalink:"/docs/examples/search",editUrl:"https://github.com/grid-js/website/edit/master/docs/examples/search.md",lastUpdatedBy:"Afshin Mehrabani",lastUpdatedAt:1592139438,sidebar:"sidebar",previous:{title:"Pagination",permalink:"/docs/examples/pagination"},next:{title:"Sorting",permalink:"/docs/examples/sorting"}},p=[],u={rightToc:p};function m(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},u,r,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Grid.js supports global search on all rows and columns. Set ",Object(o.b)("inlineCode",{parentName:"p"},"search: true")," to enable the search plugin:"),Object(o.b)(i.a,{children:"\nconst grid = new Grid({\n  columns: ['Name', 'Email', 'Phone Number'],\n  search: true,\n  data: [\n    ['John', 'john@example.com', '(353) 01 222 3333'],\n    ['Mark', 'mark@gmail.com',   '(01) 22 888 4444'],\n    ['Eoin', 'eo3n@yahoo.com',   '(05) 10 878 5554'],\n    ['Nisen', 'nis900@gmail.com',   '313 333 1923']\n  ]\n});\n",transformCode:function(e){return"\nfunction () {\n  "+e+"\n \n  const wrapperRef = useRef(null);\n   \n  useEffect(() => {\n    grid.render(wrapperRef.current);\n  });\n  \n  return (\n    <div ref={wrapperRef} />\n  );\n}\n"},live:!0,scope:{Grid:c.b,CodeBlock:i.a,useEffect:s.useEffect,useRef:s.useRef},mdxType:"CodeBlock"}))}m.isMDXComponent=!0}}]);