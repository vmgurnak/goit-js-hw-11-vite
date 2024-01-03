import { fetchSearch } from './request-api';
import { createMarkup } from './markup';

import Notiflix from 'notiflix';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery-list a', {
  /* options */
  captionsData: 'alt',
  captionDelay: 250,
});

// Elements ojects
const elements = {
  form: document.querySelector('.js-sumbit'),
  gallery: document.querySelector('.js-gallery'),
  loader: document.querySelector('.loader'),
  error: document.querySelector('.error'),
};

// Event listeners - click to add input, submit to submit form
elements.form.addEventListener('submit', handlerSubmitForm);

// Callback function for listener
function handlerSubmitForm(evt) {
  evt.preventDefault();
  loaderSow();

  // Notiflix.Loading
  Notiflix.Loading.standard('Loading data, please wait....');

  const { searchQuery } = evt.currentTarget.elements;
  const date = {
    search: searchQuery.value,
  };

  fetchSearch(date.search)
    .then(data => {
      Notiflix.Loading.remove();
      loaderHidden();

      if (data.hits.length === 0) {
        iziToast.error({
          //  title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again.',
          position: 'topRight',
          maxWidth: 300,
        });
      }
      elements.gallery.innerHTML = createMarkup(data.hits);
      lightbox.refresh();
    })
    .catch(() => {
      iziToast.error({
        //  title: 'Error',
        message: 'Oops! Something went wrong! Try reloading the page!',
        position: 'topRight',
        maxWidth: 300,
      });
    })
    .finally(() => {
      evt.target.reset();
    });
}

// Load and Error Handling Functions
function loaderSow() {
  elements.loader.classList.replace('js-hidden', 'js-show');
}
function loaderHidden() {
  elements.loader.classList.replace('js-show', 'js-hidden');
}
