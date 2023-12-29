import{i as n,S as g}from"./assets/vendor-dc58e129.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function d(s){const l="https://pixabay.com/api/",o="40988113-0969bce247b2af623dbb12295",r=new URLSearchParams({key:o,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",page:1,per_page:30});return fetch(`${l}?${r}`).then(e=>{if(console.log(e),!e.ok)throw new Error(e.statusText);return e.json()}).catch(e=>{console.log(e)})}function u(s){return s.map(({webformatURL:l,largeImageURL:o,tags:r,likes:e,views:t,comments:a,downloads:c})=>`<li class="gallery-item"><a class="gallery-link" href="${o}"><img class="gallery-img" src="${l}" alt="${r} loading="lazy" /></a>
    <div class="gallery-wrapper">
      <div class="gallery-descr">
        <p class="gallery-subtitle">Likes</p>
        <p class="gallery-text">${e}</p>
      </div>
      <div class="gallery-descr">
        <p class="gallery-subtitle">Views</p>
        <p class="gallery-text">${t}</p>
      </div>
      <div class="gallery-descr">
        <p class="gallery-subtitle">Comments</p>
        <p class="gallery-text">${a}</p>
      </div>
      <div class="gallery-descr">
        <p class="gallery-subtitle">Downloads</p>
        <p class="gallery-text">${c}</p>
      </div>
    </div>
  </li>`).join("")}const i={form:document.querySelector(".js-sumbit"),gallery:document.querySelector(".js-gallery"),loader:document.querySelector(".loader"),error:document.querySelector(".error")};i.form.addEventListener("submit",p);function p(s){s.preventDefault(),h();const{searchQuery:l}=s.currentTarget.elements,o={search:l.value};console.log(o),console.log(o.search),d(o.search).then(r=>{console.log(r),console.log(r.hits),console.log(r.hits.length),y(),r.hits.length===0&&n.error({message:"Sorry, there are no images matching your search query. Please try again.",position:"topRight",maxWidth:300}),i.gallery.innerHTML=u(r.hits),new g(".gallery-list a",{captionsData:"alt",captionDelay:250}).refresh()}).catch(r=>{n.error({message:"Oops! Something went wrong! Try reloading the page!",position:"topRight",maxWidth:300}),console.log(r)}).finally(()=>{s.target.reset()})}function h(){i.loader.classList.replace("js-hidden","js-show")}function y(){i.loader.classList.replace("js-show","js-hidden")}
//# sourceMappingURL=commonHelpers.js.map
