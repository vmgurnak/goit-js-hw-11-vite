import{S as u,N as n,i as c}from"./assets/vendor-6a9b8ca4.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();function g(a){const t="https://pixabay.com/api/",l="40988113-0969bce247b2af623dbb12295",s=new URLSearchParams({key:l,q:a,image_type:"photo",orientation:"horizontal",safesearch:"true",page:1,per_page:30});return fetch(`${t}?${s}`).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}).catch(e=>{console.log(e)})}function p(a){return a.map(({webformatURL:t,largeImageURL:l,tags:s,likes:e,views:r,comments:o,downloads:d})=>`<li class="gallery-item"><a class="gallery-link" href="${l}"><img class="gallery-img" src="${t}" alt="${s} loading="lazy" /></a>
    <div class="gallery-wrapper">
      <div class="gallery-descr">
        <p class="gallery-subtitle">Likes</p>
        <p class="gallery-text">${e}</p>
      </div>
      <div class="gallery-descr">
        <p class="gallery-subtitle">Views</p>
        <p class="gallery-text">${r}</p>
      </div>
      <div class="gallery-descr">
        <p class="gallery-subtitle">Comments</p>
        <p class="gallery-text">${o}</p>
      </div>
      <div class="gallery-descr">
        <p class="gallery-subtitle">Downloads</p>
        <p class="gallery-text">${d}</p>
      </div>
    </div>
  </li>`).join("")}const y=new u(".gallery-list a",{captionsData:"alt",captionDelay:250}),i={form:document.querySelector(".js-sumbit"),gallery:document.querySelector(".js-gallery"),loader:document.querySelector(".loader"),error:document.querySelector(".error")};i.form.addEventListener("submit",m);function m(a){a.preventDefault(),f(),n.Loading.standard("Loading data, please wait....");const{searchQuery:t}=a.currentTarget.elements,l={search:t.value};g(l.search).then(s=>{n.Loading.remove(),h(),s.hits.length===0&&c.error({message:"Sorry, there are no images matching your search query. Please try again.",position:"topRight",maxWidth:300}),i.gallery.innerHTML=p(s.hits),y.refresh()}).catch(()=>{c.error({message:"Oops! Something went wrong! Try reloading the page!",position:"topRight",maxWidth:300})}).finally(()=>{a.target.reset()})}function f(){i.loader.classList.replace("js-hidden","js-show")}function h(){i.loader.classList.replace("js-show","js-hidden")}
//# sourceMappingURL=commonHelpers.js.map
