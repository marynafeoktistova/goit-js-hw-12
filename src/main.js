import fetchImg from './js/pixabay-api';
import { imagesTemplate, showMessage } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.search-form');
const input = document.querySelector('.search-input');

form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();

  let searchRequest = input.value.trim();
  if (!searchRequest) return;

  input.value = '';
  document.querySelector('.gallery').innerHTML = ''; 

  const loader = document.querySelector('.loader');
  loader.style.display = 'block';

  fetchImg(searchRequest)
    .then(data => {
      loader.style.display = 'none';
      if (data.data.hits.length === 0) {
        showMessage(); 
      } else {
        searchResults(data.data.hits); 
      }
    })
    .catch(err => {
      loader.style.display = 'none';
      iziToast.error({
        title: 'Error',
        message: 'Opss...',
      });
      console.error('Error details:', err);
    });
}

function searchResults(images) {
  imagesTemplate(images); 
}
