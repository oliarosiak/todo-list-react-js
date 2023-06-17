import axios from 'axios';

const BASE_URL =
  'https://pixabay.com/api/?key=25738423-b3273d9a56f64cc8a00238b49&q=harmony&image_type=photo&per_page=3';

export const pixabayApi = async pageNumber => {
    console.log(pageNumber);
  try {
    const { data } = await axios.get(`${BASE_URL}&page=${pageNumber}`);
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
