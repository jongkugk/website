(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{123:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return c})),r.d(n,"metadata",(function(){return l})),r.d(n,"rightToc",(function(){return m})),r.d(n,"default",(function(){return u}));var t=r(2),s=r(6),i=r(0),a=r(151),o=r(154),d=r(153),c={id:"server-side-sort",title:"Server Side Sorting"},l={id:"examples/server-side-sort",title:"Server Side Sorting",description:"Simply add server config to the sort block to enable server-side sorting:",source:"@site/docs/examples/server-side-sort.md",permalink:"/docs/examples/server-side-sort",editUrl:"https://github.com/grid-js/website/edit/master/docs/examples/server-side-sort.md",lastUpdatedBy:"Afshin Mehrabani",lastUpdatedAt:1591827716,sidebar:"sidebar",previous:{title:"Server Side Pagination",permalink:"/docs/examples/server-side-pagination"},next:{title:"Cell formatting",permalink:"/docs/examples/cell-formatting"}},m=[],p={rightToc:m};function u(e){var n=e.components,r=Object(s.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},p,r,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Simply add ",Object(a.b)("inlineCode",{parentName:"p"},"server")," config to the ",Object(a.b)("inlineCode",{parentName:"p"},"sort")," block to enable server-side sorting:"),Object(a.b)(d.a,{children:"\nconst grid = new Grid({\n  sort: {\n    multiColumn: false,\n    server: {\n      url: (prev, columns) => {\n       if (!columns.length) return prev;\n       \n       const col = columns[0];\n       const dir = col.direction === 1 ? 'asc' : 'desc';\n       let colName = ['name', 'rarity'][col.index];\n       \n       return `${prev}&order=${colName}&dir=${dir}`;\n     }\n    }\n  },\n  columns: [\n   'Name',\n   'Rarity',\n   {\n     name: 'Image',\n     width: '50px',\n     sort: false,\n     formatter: (img) => html(`<center><img src='${img}'/></center>`)\n   }\n  ],\n  server: {\n    url: 'https://api.scryfall.com/cards/search?q=Inspiring',\n    then: data => data.data.map(card => [card.name, card.rarity, card.image_uris.small]),\n    total: data => data.total_cards\n  } \n});\n",transformCode:function(e){return"\nfunction () {\n  "+e+"\n \n  const wrapperRef = useRef(null);\n   \n  useEffect(() => {\n    grid.render(wrapperRef.current);\n  });\n  \n  return (\n    <div ref={wrapperRef} />\n  );\n}\n"},live:!0,scope:{Grid:o.a,CodeBlock:d.a,useEffect:i.useEffect,useRef:i.useRef,html:o.b},mdxType:"CodeBlock"}))}u.isMDXComponent=!0}}]);