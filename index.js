import{a as b,S as v,i as n}from"./assets/vendor-tnUJPedx.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const m of s.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&r(m)}).observe(document,{childList:!0,subtree:!0});function o(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(a){if(a.ep)return;a.ep=!0;const s=o(a);fetch(a.href,s)}})();function g(t,e,o){const r={params:{key:"48859254-ec1dbf3e18d2bfee82a7b3bbd",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:o}};return b.get("https://pixabay.com/api/",r)}const S=document.querySelector(".gallery");function p(t){if(t.length===0){f();return}const e=t.map(r=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${r.largeImageURL}">
        <img class="gallery-image" src="${r.webformatURL}" alt="${r.tags}" />
        <figcaption class="thumb-data">
          <dl class="thumb-data-list">
            <div class="thumb-data-item">
              <dt class="thumb-data-title">Likes</dt>
              <dd class="thumb-data-data">${r.likes}</dd>
            </div>
            <div class="thumb-data-item">
              <dt class="thumb-data-title">Views</dt>
              <dd class="thumb-data-data">${r.views}</dd>
            </div>
            <div class="thumb-data-item">
              <dt class="thumb-data-title">Comments</dt>
              <dd class="thumb-data-data">${r.comments}</dd>
            </div>
            <div class="thumb-data-item">
              <dt class="thumb-data-title">Downloads</dt>
              <dd class="thumb-data-data">${r.downloads}</dd>
            </div>
          </dl>
        </figcaption>
      </a>
    </li>
  `).join("");S.insertAdjacentHTML("beforeend",e),new v(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()}function f(){n.show({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"black",messageSize:"16px",backgroundColor:"#EF4040",maxWidth:"432px"})}const w=document.querySelector(".search-form"),h=document.querySelector(".search-input"),c=document.querySelector(".btn"),l=document.querySelector(".loader-container"),L=document.querySelector(".gallery");let d="",i=1;const u=40;let y=0;c.style.display="none";w.addEventListener("submit",q);c.addEventListener("click",E);async function q(t){if(t.preventDefault(),d=h.value.trim(),!d){n.warning({title:"Warning",message:"Search query cannot be empty!"});return}i=1,h.value="",L.innerHTML="",c.style.display="none",l.style.display="block";try{const e=await g(d,i,u);l.style.display="none",y=e.data.totalHits,e.data.hits.length===0?f():(p(e.data.hits),i*u<y&&(c.style.display="block"))}catch(e){l.style.display="none",n.error({title:"Error",message:"Oops... !"}),console.error("Error:",e)}}async function E(){i+=1,l.style.display="block";try{const t=await g(d,i,u);l.style.display="none",p(t.data.hits),x(),i*u>=y&&(c.style.display="none",n.info({message:"We are sorry, but you have reached the end of search results."}))}catch(t){l.style.display="none",n.error({title:"Error",message:"Oops... !"}),console.error("Error:",t)}}function x(){const t=document.querySelector(".gallery");if(!t||t.children.length===0)return;const e=t.firstElementChild;if(!e)return;const o=e.getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
