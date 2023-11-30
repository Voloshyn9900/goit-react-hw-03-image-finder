import axios from 'axios';

const API_KEY = '38831051-4c682304c811c7cc8e516c013';

const optionsAPI = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    page: 1,
    per_page: 12,
  },
});

export const fetchPhoto = async (query, page) => {
  const response = await optionsAPI.get('', {
    params: {
      q: query,
      page: page || 1,
    },
  });  return response.data;
};

