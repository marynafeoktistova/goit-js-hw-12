import fetchImg from './js/pixabay-api';
import { imagesTemplate, showMessage } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.search-form');
const input = document.querySelector('.search-input');
const Gallerybtn = document.querySelector('.btn');
const loader = document.querySelector('.loader-container');

let searchQuery = ''; 
let page = 1; 
const perPage = 40; 
let totalHits = 0; 


Gallerybtn.style.display = 'none';

form.addEventListener('submit', onSubmit);
Gallerybtn.addEventListener('click', onLoadMore);

async function onSubmit(evt) {
  evt.preventDefault();

  searchQuery = input.value.trim();
  if (!searchQuery) return;

  page = 1; 
  input.value = '';
  document.querySelector('.gallery').innerHTML = ''; 
  Gallerybtn.style.display = 'none'; 

  loader.style.display = 'block';

  try {
    const data = await fetchImg(searchQuery, page, perPage);
    loader.style.display = 'none';

    totalHits = data.data.totalHits; 

    if (data.data.hits.length === 0) {
      showMessage();
    } else {
      imagesTemplate(data.data.hits);
      Gallerybtn.style.display = 'block'; 
    }
  } catch (err) {
    loader.style.display = 'none';
    iziToast.error({
      title: 'Error',
      message: 'Oops... Something went wrong!',
    });
    console.error('Error:', err);
  }
}

async function onLoadMore() {
  page += 1;

  loader.style.display = 'block';

  try {
    const data = await fetchImg(searchQuery, page, perPage);
    loader.style.display = 'none';

    if (data.data.hits.length === 0) {
      iziToast.warning({
        title: 'Warning',
        message: 'No more images found.',
      });
      Gallerybtn.style.display = 'none'; 
    } else {
      imagesTemplate(data.data.hits);
      if (page * perPage >= totalHits) {
        Gallerybtn.style.display = 'none';
        iziToast.info({
          message: 'We are sorry, but you have reached the end of search results.',
        });
      }
    }
  } catch (err) {
    loader.style.display = 'none';
    iziToast.error({
      title: 'Error',
      message: 'Oops... Something went wrong!',
    });
    console.error('Error:', err);
  }
}
