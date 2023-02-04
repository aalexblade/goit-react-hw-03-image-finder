import axios from "axios";

export const fetchPictures = async (query, page) => {
  const BASE_URL = 'https://pixabay.com/api';
  const OPTIONS = `q=${query}&page=${page}&key=33347523-21eeb7913e8f8d453adb05c33&image_type=photo&orientation=horizontal&per_page=12`;
  const response = await axios.get(`${BASE_URL}/?${OPTIONS}`);
  return response.data;
};


// const BASE_URL = 'https://pixabay.com/api/';
// const BASE_KEY = '33347523-21eeb7913e8f8d453adb05c33';

// export const fetchPictures = async (value, page = 1) => {
//   try {
//     const options = {
//       key: BASE_KEY,
//       q: value,
//       image_type: 'photo',
//       orientation: 'horizontal',
//       safesearch: 'true',
//       page,
//       per_page: 12,
//     };

//     const response = await axios.get(BASE_URL, {
//       params: options,
//     });
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

