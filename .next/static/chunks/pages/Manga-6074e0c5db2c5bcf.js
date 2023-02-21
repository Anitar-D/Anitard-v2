(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[441],{6172:function(e,t,s){"use strict";var r=s(4836);t.Z=void 0;var a=r(s(4938)),n=s(5893),i=(0,a.default)((0,n.jsx)("path",{d:"M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"}),"KeyboardArrowLeft");t.Z=i},8317:function(e,t,s){"use strict";var r=s(4836);t.Z=void 0;var a=r(s(4938)),n=s(5893),i=(0,a.default)((0,n.jsx)("path",{d:"M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"}),"KeyboardArrowRight");t.Z=i},4578:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Manga",function(){return s(2173)}])},3505:function(e,t,s){"use strict";var r=s(5893),a=s(5429),n=s(231),i=s(1664),o=s.n(i);t.Z=function(){return(0,r.jsxs)("header",{children:[(0,r.jsxs)("div",{className:"flex items-center hover:opacity-90 space-x-3 md:space-x-5",children:[(0,r.jsx)(o(),{href:"/",children:(0,r.jsx)("img",{src:"/home_logo.png",alt:"anigirl",width:45,height:45,className:"cursor-pointer object-contain float-left mix-blend-add rounded-full"})}),(0,r.jsx)(o(),{href:"/",children:(0,r.jsx)("h6",{className:"text-2xl font-extrabold font-poppins p-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-300",children:"ANITARD"})}),(0,r.jsxs)("ul",{className:"flex md:hidden space-x-4",children:[(0,r.jsx)("li",{className:"cursor-pointer text-sm font-light transition duration-75 hover:text-[#00e5ff]",children:(0,r.jsx)(o(),{href:"/",children:"Home"})}),(0,r.jsx)("li",{className:"cursor-pointer text-sm font-light transition duration-75 hover:text-[#00e5ff]",children:(0,r.jsx)(o(),{href:"/Anime",children:"Anime"})}),(0,r.jsx)("li",{className:"cursor-pointer text-sm font-light transition duration-75 hover:text-[#00e5ff]",children:(0,r.jsx)(o(),{href:"/Manga",children:"Manga"})}),(0,r.jsx)("li",{className:"cursor-pointer text-sm font-light transition duration-75 hover:text-[#00e5ff]",children:(0,r.jsx)(o(),{href:"/Music",children:"Music"})}),(0,r.jsx)("li",{className:"cursor-pointer text-sm font-light transition duration-75 hover:text-[#00e5ff]",children:(0,r.jsx)(o(),{href:"/About",children:"About"})})]})]}),(0,r.jsxs)("div",{className:"flex items-center font-light space-x-2 text-sm",children:[(0,r.jsx)(o(),{href:"/Login",children:(0,r.jsx)("button",{className:"rounded-2xl bg-slate-600 p-2",children:"Login"})}),(0,r.jsx)(o(),{href:"/Signup",className:"",children:(0,r.jsx)("button",{className:"rounded-2xl bg-slate-600 p-2",children:"Sign Up"})}),(0,r.jsx)(a.Z,{className:"h-6 w-6 hover:bg-red-700"}),(0,r.jsx)(n.Z,{className:"h-6 w-6 hover:bg-cyan-600 rounded-full"})]})]})}},2173:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return u}});var r=s(5893),a=s(9008),n=s.n(a),i=s(3505),o=s(7294),l=function(e){let{topManga:t}=e,[s,a]=(0,o.useState)(void 0);return(0,o.useEffect)(()=>{a(t[Math.floor(Math.random()*t.length)])},[t]),(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"content pl-10 pt-5 pb-20 px-4 flex items-start space-x-20 ",children:[(0,r.jsx)("img",{src:null==s?void 0:s.images.jpg.large_image_url,className:"h-[75vh] w-[50vh] rounded-2xl shadow-md",alt:""}),(0,r.jsxs)("div",{className:"py-5 pr-24",children:[(0,r.jsx)("h6",{className:"pb-2 text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-300 ",children:null==s?void 0:s.title_english}),(0,r.jsx)("h3",{className:"text-lg pt-6",children:null==s?void 0:s.synopsis}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsxs)("div",{className:"flex space-x-5",children:[(0,r.jsx)("a",{href:"https://mangadex.org/",children:(0,r.jsxs)("button",{className:"font-medium bg-white text-black p-2 rounded hover:bg-cyan-200 duration-200",children:["Read Manga ▶️"," "]})}),(0,r.jsx)("a",{href:null==s?void 0:s.url,children:(0,r.jsx)("button",{className:"font-medium bg-white text-black p-2 rounded hover:bg-cyan-200 duration-200",children:"View ↗️"})})]})]})]}),(0,r.jsx)("div",{})]})},c=s(6172),d=s(8317),h=function(e){let{manga:t}=e;return(0,r.jsx)("div",{className:"pb-6 hover:opacity-75 hover:scale-105 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] ",children:(0,r.jsx)("a",{href:null==t?void 0:t.url,target:"_blank",rel:"noreferrer",children:(0,r.jsx)("img",{src:null==t?void 0:t.images.webp.large_image_url,className:"w-64 h-72 rounded-2xl shadow-md border-4 border-slate-400",alt:"animeData"})})})},x=function(e){let{topManga:t,manwha:s}=e,a=(0,o.useRef)(null),n=(0,o.useRef)(null),[i,l]=(0,o.useState)(!1),[x,u]=(0,o.useState)(!1),m=e=>{if(l(!0),a.current){let{scrollLeft:t,clientWidth:s}=a.current;a.current.scrollTo({left:"left"===e?t-s:t+s,behavior:"smooth"})}},p=e=>{if(u(!0),n.current){let{scrollLeft:t,clientWidth:s}=n.current;n.current.scrollTo({left:"left"===e?t-s:t+s,behavior:"smooth"})}};return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"h-40 pb-96 space-y-0.5 md:space-y-2",children:[(0,r.jsx)("h2",{className:"p-2 w-56 cursor-pointer text-xl font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl",children:"Top Manga"}),(0,r.jsxs)("div",{className:"group relative md:-ml-2",children:[(0,r.jsx)(c.Z,{className:"absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ".concat(!i&&"hidden"),onClick:()=>m("left")}),(0,r.jsx)("div",{className:"flex gap-4 pb-6 overflow-y-hidden items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2",ref:a,children:t.map(e=>(0,r.jsx)(h,{manga:e},null==e?void 0:e.mal_id))}),(0,r.jsx)(d.Z,{className:"absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100",onClick:()=>m("right")})]})]}),(0,r.jsx)("div",{children:(0,r.jsxs)("div",{className:"h-40 pb-96 space-y-0.5 md:space-y-2",children:[(0,r.jsx)("h2",{className:"p-2 w-56 cursor-pointer text-xl font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl",children:"Top Manhwa"}),(0,r.jsxs)("div",{className:"group relative md:-ml-2",children:[(0,r.jsx)(c.Z,{className:"absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ".concat(!i&&"hidden"),onClick:()=>p("left")}),(0,r.jsx)("div",{className:"flex gap-4 overflow-y-hidden items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2",ref:n,children:s.map(e=>(0,r.jsx)(h,{manga:e},null==e?void 0:e.mal_id))}),(0,r.jsx)(d.Z,{className:"absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100",onClick:()=>p("right")})]})]})})]})},u=function(){let[e,t]=(0,o.useState)([]),[s,a]=(0,o.useState)([]),[c,d]=(0,o.useState)("");async function h(){let e=await fetch("https://api.jikan.moe/v4/top/manga"),s=await e.json(),r=await fetch("https://api.jikan.moe/v4/top/manga?type=manhwa"),n=await r.json();t(s.data),a(n.data)}return(0,o.useEffect)(()=>{h()},[]),(0,r.jsxs)("div",{children:[(0,r.jsxs)(n(),{children:[(0,r.jsx)("title",{children:"Anitard-Manga"}),(0,r.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("link",{rel:"icon",href:"/otonari.png",className:"rounded-full"})]}),(0,r.jsx)(i.Z,{}),(0,r.jsx)(l,{topManga:e}),(0,r.jsx)(x,{topManga:e,manwha:s})]})}},9008:function(e,t,s){e.exports=s(3121)}},function(e){e.O(0,[63,47,774,888,179],function(){return e(e.s=4578)}),_N_E=e.O()}]);