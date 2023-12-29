export { fetchSearch };

function fetchSearch(word) {
  const BASE_URL = 'https://pixabay.com/api/';
  //   const END_POINT = '';
  const API_KEY = '40988113-0969bce247b2af623dbb12295';

  const params = new URLSearchParams({
    key: API_KEY,
    q: word,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page: 1,
    per_page: 30,
  });

  return fetch(`${BASE_URL}?${params}`)
    .then(resp => {
      console.log(resp);
      if (!resp.ok) {
        throw new Error(resp.statusText);
      }
      return resp.json();
    })
    .catch(error => {
      console.log(error);
    });
}
