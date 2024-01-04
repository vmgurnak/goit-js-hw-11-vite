import{S as d,i as n}from"./assets/vendor-dc58e129.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const u=new d(".gallery-list a",{captionsData:"alt",captionDelay:250}),i={form:document.querySelector(".js-sumbit"),gallery:document.querySelector(".js-gallery"),loader:document.querySelector(".loader"),error:document.querySelector(".error")};i.form.addEventListener("submit",p);function p(l){l.preventDefault(),g();const{searchQuery:t}=l.currentTarget.elements,a={search:t.value};h(a.search).then(s=>{y(),s.hits.length===0&&n.error({message:"Sorry, there are no images matching your search query. Please try again.",position:"topRight",maxWidth:300}),i.gallery.innerHTML=m(s.hits),u.refresh()}).catch(()=>{n.error({message:"Oops! Something went wrong! Try reloading the page!",position:"topRight",maxWidth:300})}).finally(()=>{l.target.reset()})}function g(){i.loader.classList.replace("js-hidden","js-show")}function y(){i.loader.classList.replace("js-show","js-hidden")}function h(l){const t="https://pixabay.com/api/",a="40988113-0969bce247b2af623dbb12295",s=new URLSearchParams({key:a,q:l,image_type:"photo",orientation:"horizontal",safesearch:"true",page:1,per_page:30});return fetch(`${t}?${s}`).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}).catch(e=>{console.log(e)})}function m(l){return l.map(({webformatURL:t,largeImageURL:a,tags:s,likes:e,views:r,comments:o,downloads:c})=>`<li class="gallery-item"><a class="gallery-link" href="${a}"><img class="gallery-img" src="${t}" alt="${s} loading="lazy" /></a>
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
        <p class="gallery-text">${c}</p>
      </div>
    </div>
  </li>`).join("")}
//# sourceMappingURL=commonHelpers.js.map
