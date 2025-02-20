import{a as v,S as w,i as n}from"./assets/vendor-tnUJPedx.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function d(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=d(e);fetch(e.href,r)}})();function g(a,t,d){const s={params:{key:"48859254-ec1dbf3e18d2bfee82a7b3bbd",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:d}};return v.get("https://pixabay.com/api/",s)}const y=document.querySelector(".gallery");function h(a){if(y.innerHTML="",a.length===0){f();return}const t=a.map(s=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${s.largeImageURL}">
        <img class="gallery-image" src="${s.webformatURL}" alt="${s.tags}" />
        <figcaption class="thumb-data">
          <dl class="thumb-data-list">
            <div class="thumb-data-item">
              <dt class="thumb-data-title">Likes</dt>
              <dd class="thumb-data-data">${s.likes}</dd>
            </div>
            <div class="thumb-data-item">
              <dt class="thumb-data-title">Views</dt>
              <dd class="thumb-data-data">${s.views}</dd>
            </div>
            <div class="thumb-data-item">
              <dt class="thumb-data-title">Comments</dt>
              <dd class="thumb-data-data">${s.comments}</dd>
            </div>
            <div class="thumb-data-item">
              <dt class="thumb-data-title">Downloads</dt>
              <dd class="thumb-data-data">${s.downloads}</dd>
            </div>
          </dl>
        </figcaption>
      </a>
    </li>
  `).join("");y.innerHTML=t,new w(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()}function f(){n.show({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"black",messageSize:"16px",backgroundColor:"#EF4040",maxWidth:"432px"})}const L=document.querySelector(".search-form"),p=document.querySelector(".search-input"),i=document.querySelector(".btn"),o=document.querySelector(".loader-container");let c="",l=1;const m=40;let b=0;i.style.display="none";L.addEventListener("submit",S);i.addEventListener("click",q);async function S(a){if(a.preventDefault(),c=p.value.trim(),!!c){l=1,p.value="",document.querySelector(".gallery").innerHTML="",i.style.display="none",o.style.display="block";try{const t=await g(c,l,m);o.style.display="none",b=t.data.totalHits,t.data.hits.length===0?f():(h(t.data.hits),i.style.display="block")}catch(t){o.style.display="none",n.error({title:"Error",message:"Oops... Something went wrong!"}),console.error("Error:",t)}}}async function q(){l+=1,o.style.display="block";try{const a=await g(c,l,m);o.style.display="none",a.data.hits.length===0?(n.warning({title:"Warning",message:"No more images found."}),i.style.display="none"):(h(a.data.hits),l*m>=b&&(i.style.display="none",n.info({message:"We are sorry, but you have reached the end of search results."})))}catch(a){o.style.display="none",n.error({title:"Error",message:"Oops... Something went wrong!"}),console.error("Error:",a)}}
//# sourceMappingURL=index.js.map
