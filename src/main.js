import fetchImg from './js/pixabay-api';
import { imagesTemplate, showMessage } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.search-form');
const input = document.querySelector('.search-input');
const Gallerybtn = document.querySelector('.btn');
const loader = document.querySelector('.loader-container');
const gallery = document.querySelector('.gallery');

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
  if (!searchQuery) {
    iziToast.warning({
      title: 'Warning',
      message: 'Search query cannot be empty!',
    });
    return;
  }

  page = 1; 
  input.value = '';
  gallery.innerHTML = ''; 
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

      if (page * perPage < totalHits) {
        Gallerybtn.style.display = 'block'; 
      }
    }
  } catch (err) {
    loader.style.display = 'none';
    iziToast.error({
      title: 'Error',
      message: 'Oops... !',
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

    imagesTemplate(data.data.hits); 
    smoothScroll();

    if (page * perPage >= totalHits) {
      Gallerybtn.style.display = 'none';
      iziToast.info({
        message: 'We are sorry, but you have reached the end of search results.',
      });
    }
  } catch (err) {
    loader.style.display = 'none';
    iziToast.error({
      title: 'Error',
      message: 'Oops... !',
    });
    console.error('Error:', err);
  }
}
function smoothScroll() {
  const gallery = document.querySelector('.gallery');
  if (!gallery || gallery.children.length === 0) return; 

  const firstCard = gallery.firstElementChild;
  if (!firstCard) return;

  const cardHeight = firstCard.getBoundingClientRect().height;
  window.scrollBy({
    top: cardHeight * 2, 
    behavior: 'smooth',
  });
}

