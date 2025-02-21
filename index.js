import{a as b,S as v,i as d}from"./assets/vendor-tnUJPedx.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const m of s.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&r(m)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}})();function p(a,e,n){const r={params:{key:"48859254-ec1dbf3e18d2bfee82a7b3bbd",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:n}};return b.get("https://pixabay.com/api/",r)}const L=document.querySelector(".gallery");function f(a){if(a.length===0){g();return}const e=a.map(r=>`
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
  `).join("");L.insertAdjacentHTML("beforeend",e),new v(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()}function g(){d.show({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"black",messageSize:"16px",backgroundColor:"#EF4040",maxWidth:"432px"})}const S=document.querySelector(".search-form"),h=document.querySelector(".search-input"),i=document.querySelector(".btn"),o=document.querySelector(".loader-container"),w=document.querySelector(".gallery");let c="",l=1;const u=40;let y=0;i.style.display="none";S.addEventListener("submit",q);i.addEventListener("click",E);async function q(a){if(a.preventDefault(),c=h.value.trim(),!!c){l=1,h.value="",w.innerHTML="",i.style.display="none",o.style.display="block";try{const e=await p(c,l,u);o.style.display="none",y=e.data.totalHits,e.data.hits.length===0?g():(f(e.data.hits),l*u<y&&(i.style.display="block"))}catch(e){o.style.display="none",d.error({title:"Error",message:"Oops... !"}),console.error("Error:",e)}}}async function E(){l+=1,o.style.display="block";try{const a=await p(c,l,u);o.style.display="none",f(a.data.hits),x(),l*u>=y&&(i.style.display="none",d.info({message:"We are sorry, but you have reached the end of search results."}))}catch(a){o.style.display="none",d.error({title:"Error",message:"Oops... !"}),console.error("Error:",a)}}function x(){const a=document.querySelector(".gallery").firstElementChild;if(!a)return;const e=a.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
