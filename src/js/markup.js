export { createMarkup };

// function createMarkup(arr) {
//   return arr
//     .map(
//       ({
//         webformatURL,
//         largeImageURL,
//         tags,
//         likes,
//         views,
//         comments,
//         downloads,
//       }) => `<li class="photo-card">
//     <a href="${largeImageURL}"><img src="${webformatURL}" alt="${tags}" loading="lazy" /></a>
//   </li>`
//     )
//     .join('');
// }

function createMarkup(arr) {
  return arr
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `<li class="gallery-item"><a class="gallery-link" href="${largeImageURL}"><img class="gallery-img" src="${webformatURL}" alt="${tags} loading="lazy" /></a>
    <div class="gallery-wrapper">
      <div class="gallery-descr">
        <p class="gallery-subtitle">Likes</p>
        <p class="gallery-text">${likes}</p>
      </div>
      <div class="gallery-descr">
        <p class="gallery-subtitle">Views</p>
        <p class="gallery-text">${views}</p>
      </div>
      <div class="gallery-descr">
        <p class="gallery-subtitle">Comments</p>
        <p class="gallery-text">${comments}</p>
      </div>
      <div class="gallery-descr">
        <p class="gallery-subtitle">Downloads</p>
        <p class="gallery-text">${downloads}</p>
      </div>
    </div>
  </li>`
    )
    .join('');
}
