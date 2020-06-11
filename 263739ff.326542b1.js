(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{115:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return c})),n.d(r,"metadata",(function(){return p})),n.d(r,"rightToc",(function(){return u})),n.d(r,"default",(function(){return f}));var t=n(2),s=n(6),i=n(0),a=n(151),d=n(154),o=n(153),c={id:"server-side-search",title:"Server Side Search"},p={id:"examples/server-side-search",title:"Server Side Search",description:"Add server config to your search definition to enable server-side search:",source:"@site/docs/examples/server-side-search.md",permalink:"/docs/examples/server-side-search",editUrl:"https://github.com/grid-js/website/edit/master/docs/examples/server-side-search.md",lastUpdatedBy:"Afshin Mehrabani",lastUpdatedAt:1591827716,sidebar:"sidebar",previous:{title:"Import server-side data",permalink:"/docs/examples/server"},next:{title:"Server Side Pagination",permalink:"/docs/examples/server-side-pagination"}},u=[],l={rightToc:u};function f(e){var r=e.components,n=Object(s.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},l,n,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Add ",Object(a.b)("inlineCode",{parentName:"p"},"server")," config to your search definition to enable server-side search:"),Object(a.b)(o.a,{children:"\nconst grid = new Grid({\n  search: {\n    server: {\n      url: (prev, keyword) => `${prev}?search=${keyword}`\n    },\n    placeholder: 'Search in title...'\n  },\n  columns: ['Title', 'Director', 'Producer'],\n  server: {\n    url: 'https://swapi.dev/api/films/',\n    then: data => data.results.map(movie => [movie.title, movie.director, movie.producer])\n  } \n});\n",transformCode:function(e){return"\nfunction () {\n  "+e+"\n \n  const wrapperRef = useRef(null);\n   \n  useEffect(() => {\n    grid.render(wrapperRef.current);\n  });\n  \n  return (\n    <div ref={wrapperRef} />\n  );\n}\n"},live:!0,scope:{Grid:d.a,CodeBlock:o.a,useEffect:i.useEffect,useRef:i.useRef},mdxType:"CodeBlock"}))}f.isMDXComponent=!0}}]);