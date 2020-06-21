(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{127:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return d})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return u}));var r=t(2),i=t(6),a=t(0),s=t(168),c=t(171),o=t(169),d={id:"server-side",title:"Server-side setup"},l={id:"server-side",isDocsHomePage:!1,title:"Server-side setup",description:"Grid.js supports server-side storage by default which basically takes care of sending HTTP calls to a server backend, pulling and",source:"@site/docs/server-side.md",permalink:"/docs/server-side",editUrl:"https://github.com/grid-js/website/edit/master/docs/server-side.md",lastUpdatedBy:"Afshin Mehrabani",lastUpdatedAt:1592342160,sidebar:"sidebar",previous:{title:"Configuration",permalink:"/docs/config"},next:{title:"data",permalink:"/docs/config/data"}},p=[{value:"<code>server</code> config",id:"server-config",children:[]},{value:"Client-side search",id:"client-side-search",children:[]},{value:"Server-side search",id:"server-side-search",children:[]}],b={rightToc:p};function u(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Grid.js supports server-side storage by default which basically takes care of sending HTTP calls to a server backend, pulling and\nparsing the results and feeding the pipeline with the received data. "),Object(s.b)("p",null,"In addition to that, components like search, sort and pagination\ncan be connected to a server-side backend. Simply add ",Object(s.b)("inlineCode",{parentName:"p"},"server")," option to the existing plugin configurations to enable server-side functionality."),Object(s.b)("p",null,"Lets setup a Grid.js instance that pulls from a server-side API."),Object(s.b)("h2",{id:"server-config"},Object(s.b)("inlineCode",{parentName:"h2"},"server")," config"),Object(s.b)("p",null,"First of all, make sure you have defined the generic ",Object(s.b)("inlineCode",{parentName:"p"},"server")," config in your Grid.js instance:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js",metastring:"{3-8}","{3-8}":!0}),"const grid = new Grid({\n  columns: ['Title', 'Director', 'Producer'],\n  server: {\n    url: 'https://swapi.dev/api/films/',\n    then: data => data.results.map(movie => \n      [movie.title, movie.director, movie.producer]\n    )\n  } \n});\n")),Object(s.b)("p",null,"Here we are basically telling the instance that:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Our data source is a ",Object(s.b)("inlineCode",{parentName:"li"},"ServerStorage")," (instead of in-memory storage)."),Object(s.b)("li",{parentName:"ul"},"The base URL is ",Object(s.b)("inlineCode",{parentName:"li"},"https://swapi.dev/api/films/")),Object(s.b)("li",{parentName:"ul"},"Once we have received the data, let's feed the table with ",Object(s.b)("inlineCode",{parentName:"li"},"movie.title"),", ",Object(s.b)("inlineCode",{parentName:"li"},"movie.director")," and ",Object(s.b)("inlineCode",{parentName:"li"},"movie.producer")," which is\nour table columns (",Object(s.b)("inlineCode",{parentName:"li"},"then")," function)")),Object(s.b)("p",null,"The HTTP method is implicitly set to ",Object(s.b)("inlineCode",{parentName:"p"},"GET")," but we can change it to ",Object(s.b)("inlineCode",{parentName:"p"},"POST")," using the ",Object(s.b)("inlineCode",{parentName:"p"},"method")," property:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js",metastring:"{4}","{4}":!0}),"const grid = new Grid({\n  server: {\n    method: 'POST',\n    // ...\n  } \n});\n")),Object(s.b)("p",null,"At this point, we have a fully functional server-side table, lets take a look!"),Object(s.b)(o.a,{children:"\nconst grid = new Grid({\n  columns: ['Title', 'Director', 'Producer'],\n  server: {\n    url: 'https://swapi.dev/api/films/',\n    then: data => data.results.map(movie => [movie.title, movie.director, movie.producer])\n  } \n});\n",transformCode:function(e){return"\nfunction () {\n  "+e+"\n \n  const wrapperRef = useRef(null);\n   \n  useEffect(() => {\n    grid.render(wrapperRef.current);\n  });\n  \n  return (\n    <div ref={wrapperRef} />\n  );\n}\n"},live:!0,scope:{Grid:c.b,CodeBlock:o.a,useEffect:a.useEffect,useRef:a.useRef},mdxType:"CodeBlock"}),Object(s.b)("br",null),Object(s.b)("p",null,"Awesome! Now lets take a look at the search plugin."),Object(s.b)("h2",{id:"client-side-search"},"Client-side search"),Object(s.b)("p",null,"Using Grid.js, you can pull your data from a server-side backend and let the ",Object(s.b)("strong",{parentName:"p"},"client-side search")," handle the search functionality.\nGrid.js is smart enough to understand that you want to pull the data once and then run the search on existing rows:"),Object(s.b)(o.a,{children:"\nconst grid = new Grid({\n  search: true,\n  columns: ['Title', 'Director', 'Producer'],\n  server: {\n    url: 'https://swapi.dev/api/films/',\n    then: data => data.results.map(movie => [movie.title, movie.director, movie.producer])\n  } \n});\n",transformCode:function(e){return"\nfunction () {\n  "+e+"\n \n  const wrapperRef = useRef(null);\n   \n  useEffect(() => {\n    grid.render(wrapperRef.current);\n  });\n  \n  return (\n    <div ref={wrapperRef} />\n  );\n}\n"},live:!0,scope:{Grid:c.b,CodeBlock:o.a,useEffect:a.useEffect,useRef:a.useRef},mdxType:"CodeBlock"}),Object(s.b)("br",null),Object(s.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(s.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(s.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(s.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"In this example, we are pulling the data once and only during the initial load of the library."))),Object(s.b)("p",null,"Great! Now, lets connect the search plugin to the server."),Object(s.b)("h2",{id:"server-side-search"},"Server-side search"),Object(s.b)("p",null,"All Grid.js plugins support server-side storage. All you need to do is defining the behaviour of each component using the\n",Object(s.b)("inlineCode",{parentName:"p"},"url")," or ",Object(s.b)("inlineCode",{parentName:"p"},"body")," parameters:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js",metastring:"{3}","{3}":!0}),"search: {\n  server: {\n    url: (prev, keyword) => `${prev}?search=${keyword}`\n  }\n}\n")),Object(s.b)("p",null,"In this example, we are telling the search plugin to refine the base URL (defined in the main ",Object(s.b)("inlineCode",{parentName:"p"},"server")," section) and append\nthe keyword to base URL. ",Object(s.b)("inlineCode",{parentName:"p"},"prev")," is the base URL (or the URL received from the previous step of the pipeline) and ",Object(s.b)("inlineCode",{parentName:"p"},"keyword"),"\nis the actual keyword input by the user."),Object(s.b)("p",null,"This is the final version of our config that includes the server-side search:"),Object(s.b)(o.a,{children:"\nconst grid = new Grid({\n  search: {\n    server: {\n      url: (prev, keyword) => `${prev}?search=${keyword}`\n    },\n    placeholder: 'Search in title...'\n  },\n  columns: ['Title', 'Director', 'Producer'],\n  server: {\n    url: 'https://swapi.dev/api/films/',\n    then: data => data.results.map(movie => [movie.title, movie.director, movie.producer])\n  } \n});\n",transformCode:function(e){return"\nfunction () {\n  "+e+"\n \n  const wrapperRef = useRef(null);\n   \n  useEffect(() => {\n    grid.render(wrapperRef.current);\n  });\n  \n  return (\n    <div ref={wrapperRef} />\n  );\n}\n"},live:!0,scope:{Grid:c.b,CodeBlock:o.a,useEffect:a.useEffect,useRef:a.useRef},mdxType:"CodeBlock"}),Object(s.b)("br",null),Object(s.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(s.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(s.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(s.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},'Check out the "Server-side" section of the examples for more details.'))))}u.isMDXComponent=!0}}]);