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

  showLoader();

  iziToast.info({
    message: 'Loading images, please wait...',
    timeout: 1000,
    position: 'center',
  });

  try {
    const data = await fetchImg(searchQuery, page, perPage);

    setTimeout(() => {
      hideLoader();
      totalHits = data.data.totalHits;

      if (data.data.hits.length === 0) {
        showMessage();
      } else {
        imagesTemplate(data.data.hits);

       
        if (perPage >= totalHits) {
          iziToast.info({
            message: 'You have reached the end of the search results.',
            position: 'topRight',
            timeout: 3000,
          });
        } else {
          Gallerybtn.style.display = 'block'; 
        }
      }
    }, 1000); 
  } catch (err) {
    hideLoader();
    iziToast.error({
      title: 'Error',
      message: 'Oops... Something went wrong!',
    });
    console.error('Error:', err);
  }
}

async function onLoadMore() {
  page += 1; 
  showLoader();

  try {
    const data = await fetchImg(searchQuery, page, perPage);

    setTimeout(() => {
      hideLoader();
      imagesTemplate(data.data.hits); 
      smoothScroll();

    
      const loadedImages = page * perPage;

      if (loadedImages >= totalHits) {
        Gallerybtn.style.display = 'none';

        iziToast.info({
          title: 'Info',
          message: 'You have reached the end of the search results.',
          position: 'topRight',
          timeout: 3000,
        });
      }
    }, 1000); 
  } catch (err) {
    hideLoader();
    iziToast.error({
      title: 'Error',
      message: 'Oops... Something went wrong!',
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

function showLoader() {
  loader.style.display = 'block';
}

function hideLoader() {
  loader.style.display = 'none';
}
