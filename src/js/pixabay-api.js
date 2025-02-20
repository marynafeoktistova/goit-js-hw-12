import axios from 'axios';

export default function fetchImg(searchRequest) {
  const options = {
    params: {
      key: '48859254-ec1dbf3e18d2bfee82a7b3bbd',
      q: searchRequest,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  };
  return axios.get('https://pixabay.com/api/', options);
}