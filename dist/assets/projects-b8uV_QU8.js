import{j as e,m as a,d as h,e as u,f as i}from"./index-Currik6A.js";import{b as f,c as x,s as n}from"./index-Bv0bfZXz.js";const g=""+new URL("metroguesthouses-BQCfek6w.png",import.meta.url).href,v=""+new URL("annapurna-B6Op139D.png",import.meta.url).href,w=""+new URL("membersOnly-IxkVbD2Z.png",import.meta.url).href,b=""+new URL("blog-CC9mqj_M.png",import.meta.url).href,j=""+new URL("colorectalSurgeon-BYPyC9dL.png",import.meta.url).href,y=""+new URL("cvBuilder-C-HlLIst.png",import.meta.url).href,N=""+new URL("memory-NIqCAMDO.png",import.meta.url).href,I=""+new URL("todo-DAhHCI4h.png",import.meta.url).href,R=""+new URL("weather-sPlbFo09.png",import.meta.url).href,C=[{name:"Metro Guest House",description:"Application to securely record visitor data and documents, with admins managing user roles and staff handling data entry.",tools:["mongo","react","node"],image:g,url:"https://metroguesthouses.com"},{name:"Annapurna Medi Equip",description:"The site manages medical equipment categories and products, allowing admins to add, edit, delete, and oversee them.",tools:["mongo","react","node"],image:v,url:"https://annapurnamediequip.com"},{name:"Blog",description:"The blog is a full-stack application with JWT authentication, Passport.js Google OAuth, and Express-session for user authorization.",tools:["mongo","react","node"],image:b,url:"https://main--bloguserclient.netlify.app/",code:"https://github.com/Nima6666/Blog"},{name:"Colorectal Surgeon Nepal",description:"The Colorectal Surgeon Nepal site is a React application that integrates Calendly for booking appointments and was developed as part of a team.",tools:["react"],image:j,url:"https://colorectalsurgeonnepal.com"},{name:"MembersOnly",description:"Used Passport.js with Express-session for authentication; requires a key for membership; rendered views from Express app.",tools:["mongo","node"],image:w,url:"https://membersonlyy.adaptable.app",code:"https://github.com/Nima6666/membersOnly"},{name:"Weather",description:"Uses Geolocation API for current location, Fetches weather information from Weather API, Includes async loading screen.",tools:["vanillaJS"],image:R,url:"https://github.com/nima6666/Weather",code:"https://nima6666.github.io/Weather"},{name:"Todos",description:"Vanilla JavaScript; Set, delete, mark tasks complete; Includes priority options.",tools:["vanillaJS"],image:I,url:"https://github.com/nima6666/todo-list",code:"https://nima6666.github.io/todo-list"},{name:"Memory Game",description:"Fetches images from Giphy API; Cool hover effects; Tracks current and high scores.",tools:["react"],image:N,url:"https://nima6666.github.io/Memory",code:"https://github.com/nima6666/memory"},{name:"CV Builder",description:"Fetches images from Giphy API; Cool hover effects; Tracks current and high scores.",tools:["react"],image:y,url:"https://nima6666.github.io/CV-app-React/",code:"https://github.com/Nima6666/CV-app-React"}],l=""+new URL("../mongodb.webp",import.meta.url).href,m=""+new URL("../node.webp",import.meta.url).href,c=""+new URL("../javascript.webp",import.meta.url).href,d=""+new URL("../react.webp",import.meta.url).href;function L({proj:t,ind:o}){const r=o%2;return e.jsxs(a.div,{className:`flex flex-col  justify-center backdrop-blur-md w-full border border-[#5f5f5f] my-10 p-4 rounded-lg ${r?" md:flex-row flex-row":" md:flex-row-reverse flex-row-reverse"}`,variants:h,whileInView:"visible",initial:"hidden",viewport:{once:!0},children:[e.jsxs("div",{className:"flex-1 p-4 max-h-fit flex flex-col justify-between",children:[e.jsxs("div",{children:[e.jsx("h3",{className:`mainText text-2xl md:text-3xl font-semibold mb-4 ${r&&"text-right"}`,children:t.name}),e.jsx("p",{className:"text-base md:text-xl",children:t.description})]}),e.jsxs("div",{className:`flex ${r?"justify-end":"justify-start"} items-center mt-4`,children:[e.jsxs(a.div,{className:"mainText w-[100px] h-[40px] text-lg relative rounded-md m-3 border border-[#5f5f5f] overflow-hidden",whileHover:"hover",children:[e.jsxs(a.a,{href:t.url,target:"_blank",className:"w-full h-full flex items-center justify-center transition-colors duration-300 text-white hover:text-black",variants:u,children:[e.jsx("span",{className:"mr-2",children:"Live"}),e.jsx(f,{})]}),e.jsx(a.div,{className:"absolute h-[10px] w-[10px] rounded-full top-[100%] left-1/2 transform -translate-x-1/2 z-[-1] bg-[#d1d1d1]",variants:{hover:{top:0,scale:13}},transition:{duration:.4}})]}),e.jsxs(a.div,{className:`mainText w-[100px] h-[40px] text-lg relative rounded-md m-3 border border-[#5f5f5f] overflow-hidden bg-yellow-400 text-black hover:text-white ${t.code?"":"cursor-not-allowed"}`,whileHover:"hover",children:[e.jsxs(a.a,{href:t.code?t.code:"",target:t.code?"_blank":"",className:`w-full h-full flex items-center justify-center transition-colors duration-300  ${!t.code&&"pointer-events-none"}`,variants:{hover:{letterSpacing:"3px",transition:{duration:.3}}},children:[e.jsx("span",{className:"mr-2 z-10",children:"Code"}),e.jsx(x,{className:"z-10"})]}),e.jsx(a.div,{className:"absolute h-[10px] w-[10px] rounded-full top-[-250%] left-1/2 z-[0] bg-[#465e04]",variants:{hover:{top:1/2,scale:14}},transition:{duration:.4}})]})]})]}),e.jsxs("div",{className:"relative overflow-hidden flex-1 h-[300px] md:h-full",children:[e.jsx("img",{src:t.image,alt:"",className:"w-full h-full object-cover"}),e.jsx(a.div,{className:"absolute top-0 left-0 w-full h-full opacity-0 duration-300 transition-opacity hover:opacity-100 bg-[#000000a7] flex justify-center items-center",children:t.tools.map((s,p)=>e.jsxs(a.div,{className:"p-4 rounded-full border border-[#474747] w-[80px] h-[80px] relative hover:cursor-pointer m-2 bg-black overflow-hidden",children:[e.jsx("img",{src:s==="react"?d:s==="mongo"?l:s==="node"?m:s==="vanillaJS"&&c,className:"w-full h-full",alt:""}),e.jsx(a.img,{src:s==="react"?d:s==="mongo"?l:s==="node"?m:s==="vanillaJS"&&c,className:"w-full h-full absolute top-0 left-0 blur-[20px] scale-125 opacity-50 transition-opacity duration-500 hover:opacity-100"})]},p))})]})]})}function A(){const t="-----------------------------------------------------------------------";return e.jsxs("div",{className:"h-fit w-full overflow-hidden bg-transparent text-white mt-10",children:[e.jsx("div",{className:"font-semibold mainText text-center container mx-4 sm:mx-auto w-auto",children:e.jsxs(a.div,{className:"  flex items-center justify-center text-nowrap px-4",variants:h,whileInView:"visible",initial:"hidden",viewport:{once:!0},children:[e.jsx("div",{className:"scale-x-[-1] overflow-visible",children:n(t).map((o,r)=>e.jsx(a.span,{variants:i,custom:r,initial:"hidden",className:"text-right",whileInView:"visible",viewport:{once:!0},children:o},r))}),e.jsx("span",{className:"mx-4 text-3xl",children:"DEVELOPMENTS"}),n(t).map((o,r)=>e.jsx(a.span,{variants:i,custom:r,initial:"hidden",whileInView:"visible",viewport:{once:!0},children:o},r))]})}),e.jsx("div",{className:"container mx-auto p-2",children:C.map((o,r)=>e.jsx("div",{children:e.jsx(L,{proj:o,ind:r})},r))})]})}export{A as default};
