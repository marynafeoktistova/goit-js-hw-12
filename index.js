import{a as v,S as L,i as s}from"./assets/vendor-tnUJPedx.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))l(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const m of r.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&l(m)}).observe(document,{childList:!0,subtree:!0});function o(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(a){if(a.ep)return;a.ep=!0;const r=o(a);fetch(a.href,r)}})();function f(t,e,o){const l={params:{key:"48859254-ec1dbf3e18d2bfee82a7b3bbd",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:o}};return v.get("https://pixabay.com/api/",l)}const S=document.querySelector(".gallery"),q=new L(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function p(t){if(!t||t.length===0){y();return}const e=t.map(o=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${o.largeImageURL}">
        <img class="gallery-image" src="${o.webformatURL}" alt="${o.tags}" />
        <figcaption class="thumb-data">
          <dl class="thumb-data-list">
            <div class="thumb-data-item">
              <dt class="thumb-data-title">Likes</dt>
              <dd class="thumb-data-data">${o.likes}</dd>
            </div>
            <div class="thumb-data-item">
              <dt class="thumb-data-title">Views</dt>
              <dd class="thumb-data-data">${o.views}</dd>
            </div>
            <div class="thumb-data-item">
              <dt class="thumb-data-title">Comments</dt>
              <dd class="thumb-data-data">${o.comments}</dd>
            </div>
            <div class="thumb-data-item">
              <dt class="thumb-data-title">Downloads</dt>
              <dd class="thumb-data-data">${o.downloads}</dd>
            </div>
          </dl>
        </figcaption>
      </a>
    </li>
  `).join("");S.insertAdjacentHTML("beforeend",e),setTimeout(()=>{q.refresh()},500)}function y(){s.show({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"black",messageSize:"16px",backgroundColor:"#EF4040",maxWidth:"432px"})}const E=document.querySelector(".search-form"),g=document.querySelector(".search-input"),n=document.querySelector(".btn"),b=document.querySelector(".loader-container"),O=document.querySelector(".gallery");let c="",i=1;const d=40;let h=0;n.style.display="none";E.addEventListener("submit",$);n.addEventListener("click",x);async function $(t){if(t.preventDefault(),c=g.value.trim(),!c){s.warning({title:"Warning",message:"Search query cannot be empty!"});return}i=1,g.value="",O.innerHTML="",n.style.display="none",w(),s.info({message:"Loading images, please wait...",timeout:1e3,position:"center"});try{const e=await f(c,i,d);setTimeout(()=>{u(),h=e.data.totalHits,e.data.hits.length===0?y():(p(e.data.hits),d>=h?s.info({message:"You have reached the end of the search results.",position:"topRight",timeout:3e3}):n.style.display="block")},1e3)}catch(e){u(),s.error({title:"Error",message:"Oops... Something went wrong!"}),console.error("Error:",e)}}async function x(){i+=1,w();try{const t=await f(c,i,d);setTimeout(()=>{u(),p(t.data.hits),P(),i*d>=h&&(n.style.display="none",s.info({title:"Info",message:"You have reached the end of the search results.",position:"topRight",timeout:3e3}))},1e3)}catch(t){u(),s.error({title:"Error",message:"Oops... Something went wrong!"}),console.error("Error:",t)}}function P(){const t=document.querySelector(".gallery");if(!t||t.children.length===0)return;const e=t.firstElementChild;if(!e)return;const o=e.getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"})}function w(){b.style.display="block"}function u(){b.style.display="none"}
//# sourceMappingURL=index.js.map
