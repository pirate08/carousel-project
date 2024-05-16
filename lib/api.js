import axios from 'axios';

const API_URL = 'https://datawomb.dev/ecommser/products/home';
const API_HEADERS = {
  'Api-Key': '66153e4edeb3e5e55da13099',
  'Classification-Id': '1',
};

export const fetchProducts = async () => {
  try {
    const response = await axios.get(API_URL, { headers: API_HEADERS });
    console.log('API Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw new Error('Failed to fetch data');
  }
};
