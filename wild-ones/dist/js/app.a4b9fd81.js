(function(){"use strict";var e={1074:function(e,t,n){var a=n(3592),r=n(3295);const i=(0,r.Lk)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"},null,-1),o={id:"app"};function s(e,t,n,a,s,l){const c=(0,r.g2)("HomePage");return(0,r.uX)(),(0,r.CE)(r.FK,null,[i,(0,r.Lk)("div",o,[(0,r.bF)(c)])],64)}var l=n.p+"img/sign-board.e8862de6.png";const c=e=>((0,r.Qi)("data-v-1f45e49b"),e=e(),(0,r.jt)(),e),d=c((()=>(0,r.Lk)("div",{id:"onload-animation",class:"absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 transition-opacity duration-1000 bg-white"},[(0,r.Lk)("img",{src:l,class:"animate-spin-slow w-1/3 h-auto"})],-1))),u={class:"flex flex-col md:flex-row"},h={class:"w-full md:w-1/3 mb-4 md:mb-0"},m={class:"w-full md:w-2/3"};function p(e,t,n,a,i,o){const s=(0,r.g2)("SearchBox"),l=(0,r.g2)("MapViewer");return(0,r.uX)(),(0,r.CE)(r.FK,null,[d,(0,r.Lk)("div",u,[(0,r.Lk)("div",h,[(0,r.bF)(s)]),(0,r.Lk)("div",m,[(0,r.bF)(l)])])],64)}var f=n(4610),g=n.p+"img/arrow.94647b3f.gif";const w=e=>((0,r.Qi)("data-v-4a80264e"),e=e(),(0,r.jt)(),e),b={id:"search-pane",class:"grid grid-rows-2"},v={id:"search-box",class:"w-full"},y={class:"flex rounded-lg shadow-sm relative"},k={key:0,class:"dropdown absolute z-50 top-12 left-0 z-5000 bg-white rounded-lg shadow-lg mt-2 w-full"},x=["onClick"],C=w((()=>(0,r.Lk)("svg",{class:"flex-shrink-0 size-4",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[(0,r.Lk)("circle",{cx:"11",cy:"11",r:"8"}),(0,r.Lk)("path",{d:"m21 21-4.3-4.3"})],-1))),A=[C],L=w((()=>(0,r.Lk)("div",{id:"list",class:"w-full relative overflow-auto md:flex md:flex-wrap"},[(0,r.Lk)("img",{src:g,class:"hidden absolute bottom-0 right-0",id:"down-arrow"})],-1)));function E(e,t,n,i,o,s){return(0,r.uX)(),(0,r.CE)("div",b,[(0,r.Lk)("div",v,[(0,r.Lk)("div",y,[(0,r.bo)((0,r.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>o.searchQuery=e),onInput:t[1]||(t[1]=(...e)=>s.filterMatches&&s.filterMatches(...e)),autofocus:"",type:"text",id:"hs-trailing-button-add-on-with-icon",name:"hs-trailing-button-add-on-with-icon",class:"py-3 px-4 block w-full shadow-sm rounded-s-lg text-sm outline-none disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500",placeholder:"Search Animal"},null,544),[[a.Jo,o.searchQuery]]),o.showDropdown?((0,r.uX)(),(0,r.CE)("div",k,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(o.matches,(e=>((0,r.uX)(),(0,r.CE)("div",{key:e,onClick:t=>s.selectMatch(e),class:"px-4 py-2 hover:bg-gray-100 cursor-pointer overflow-auto scrollbar-thin"},(0,f.v_)(e),9,x)))),128))])):(0,r.Q3)("",!0),(0,r.Lk)("button",{type:"submit",onClick:t[2]||(t[2]=e=>s.searchAnimal(o.searchQuery)),class:"w-[2.875rem] h-[2.875rem] flex-shrink-0 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-blue-600 text-white hover:bg-blue-600 disabled:opacity-50 disabled:pointer-events-none"},A)])]),L])}n(9932);var M=n(1434),B={data(){return{searchQuery:"",matches:[],showDropdown:!1,animalList:["Leopard","Black Panther","Spotted Deer","Bison","Hog Deer","Boar","Crocodile","Goral","Sambar Deer","Indian Hare","Wolf","Chital","Jackal","Jaguar","Asian Elephant","Himalayan Black Bear","Pangolin","Gharial","Royal Bengal Tiger","Sloth","Nilgai","Langur","Cheetah","Indian Grey Mongoose","Fox"],selectedAnimals:[],currAnimal:"",center:"",animals:[]}},methods:{filterMatches(){this.matches=this.animalList.filter((e=>e.toLowerCase().includes(this.searchQuery.toLowerCase()))),this.showDropdown=this.matches.length>0&&this.searchQuery.length>0},selectMatch(e){this.searchQuery=e,this.hideDropdown()},hideDropdown(){this.showDropdown=!1},searchAnimal(e){const t=document.createElement("div"),n=document.getElementsByClassName("animal-tag");if(!e)return void alert("Please Search for an Animal !");if(this.selectedAnimals.includes(e))return alert("You have already selected "+e),void(this.searchQuery="");if(this.selectedAnimals.length>=5)return void alert("You can add a maximum of 5 Animals");if(this.selectedAnimals.length>=1&&window.innerWidth<=768){let e=document.getElementById("down-arrow");e.style.display="inline-block"}const a=document.createElement("button");a.innerHTML=e,a.classList.add("animal-tag","py-3","px-5","w-80","cursor-pointer","m-4","rounded-full","text-black","bg-white","text-base","border","border-black-800","font-semibold","shadow"),t.appendChild(a),a.addEventListener("click",(()=>{if(this.currAnimal)for(let e=0;e<n.length;e++){let t=n[e];t.innerText==this.currAnimal&&(t.classList.remove("bg-black","text-white"),t.classList.add("bg-white","text-black"))}a.classList.add("bg-black","text-white"),a.classList.remove("bg-white","text-black"),this.currAnimal=e;const t=this.animals.find((e=>e.name===this.currAnimal)),r={lat:t.latitude,lng:t.longitude};if(this.center=r,!this.$bus)return void console.error("EventBus not available");const i=document.getElementById("search-animation");i.style.opacity="1",i.append(document.createElement("div"));const o=document.createElementNS("http://www.w3.org/2000/svg","svg");o.setAttribute("aria-hidden","true"),o.setAttribute("class","absolute w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"),o.setAttribute("viewBox","0 0 100 101"),o.setAttribute("xmlns","http://www.w3.org/2000/svg");const s=document.createElementNS("http://www.w3.org/2000/svg","path");s.setAttribute("d","M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"),s.setAttribute("fill","currentColor");const l=document.createElementNS("http://www.w3.org/2000/svg","path");l.setAttribute("d","M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"),l.setAttribute("fill","currentFill"),o.appendChild(s),o.appendChild(l),i.appendChild(o),setTimeout((()=>{i.style.opacity="0"}),2e3),this.$bus.setData(this.center)}));const r=document.createElement("button");r.innerHTML='<svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M15.364 4.636a2 2 0 00-2.828 0L10 7.172 7.464 4.636a2 2 0 10-2.828 2.828L7.172 10l-2.536 2.536a2 2 0 102.828 2.828L10 12.828l2.536 2.536a2 2 0 102.828-2.828L12.828 10l2.536-2.536a2 2 0 000-2.828z" clip-rule="evenodd"/></svg>',r.className="cursor-grab text-black transition duration-500 ease-in-out rounded-full",r.style.fontSize="0.8vw",t.append(r),r.addEventListener("click",(()=>{i.removeChild(t),this.selectedAnimals=this.selectedAnimals.filter((t=>t!=e))})),t.classList.add("flex","items-center");const i=document.getElementById("list");i.appendChild(t),i.style.display="block",this.selectedAnimals.push(e),this.searchQuery=""},async fetchAnimals(){try{const e=await M.A.get("https://animal-data.onrender.com/getAnimals");Array.isArray(e.data)?this.animals=e.data:console.error("Invalid Data format received from the Server")}catch(e){console.error(e)}}},watch:{center(e){this.$bus.setData(e)}},mounted(){this.fetchAnimals()}},S=n(3065);const j=(0,S.A)(B,[["render",E],["__scopeId","data-v-4a80264e"]]);var D=j;const I={id:"map-frame",class:"relative ml-3"},O=(0,r.Lk)("div",{id:"search-animation",class:"absolute inset-0 flex items-center justify-center z-10 opacity-80",style:{"background-color":"rgba(255,255,255,0.85)",width:"98%",height:"100vh"}},null,-1);function _(e,t,n,a,i,o){const s=(0,r.g2)("Marker"),l=(0,r.g2)("GoogleMap");return(0,r.uX)(),(0,r.CE)("div",I,[O,(0,r.bF)(l,{"api-key":i.API_KEY,center:i.center,zoom:12,style:{width:"98%",height:"100vh",position:"absolute"}},{default:(0,r.k6)((()=>[(0,r.bF)(s,{options:{position:i.center}},null,8,["options"])])),_:1},8,["api-key","center"])])}var P=n(2389),Q={components:{GoogleMap:P.u6,Marker:P.pH},data(){return{center:{lat:29.55,lng:78.88},API_KEY:"AIzaSyBZpU0iJ5-ASXL2q6qBajmVjdeX-XuuJtw"}},mounted(){this.getCoords()},methods:{getCoords(){const e=this.$bus.getData();e&&(this.center={lat:e.lat,lng:e.lng})}},watch:{"$bus.data"(e){e&&(this.center={lat:e.lat,lng:e.lng})}}};const F=(0,S.A)(Q,[["render",_]]);var z=F,T={components:{SearchBox:D,MapViewer:z}};setTimeout((function(){const e=document.getElementById("onload-animation");e.style.opacity="0",e.style.zIndex="-1"}),2500);const X=(0,S.A)(T,[["render",p],["__scopeId","data-v-1f45e49b"]]);var H=X,K={name:"App",components:{HomePage:H}};document.title="Wild Ones";const N=(0,S.A)(K,[["render",s]]);var $=N,G=n(7439);const J=(0,G.Kh)({data:null,setData(e){this.data=e},getData(){return this.data}});var V=J;const Y=(0,a.Ef)($);Y.config.globalProperties.$bus=V,Y.mount("#app")}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var i=t[a]={exports:{}};return e[a].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,a,r,i){if(!a){var o=1/0;for(d=0;d<e.length;d++){a=e[d][0],r=e[d][1],i=e[d][2];for(var s=!0,l=0;l<a.length;l++)(!1&i||o>=i)&&Object.keys(n.O).every((function(e){return n.O[e](a[l])}))?a.splice(l--,1):(s=!1,i<o&&(o=i));if(s){e.splice(d--,1);var c=r();void 0!==c&&(t=c)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[a,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var r,i,o=a[0],s=a[1],l=a[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(l)var d=l(n)}for(t&&t(a);c<o.length;c++)i=o[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(d)},a=self["webpackChunkwild_ones"]=self["webpackChunkwild_ones"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[504],(function(){return n(1074)}));a=n.O(a)})();
//# sourceMappingURL=app.a4b9fd81.js.map