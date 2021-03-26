import axios from 'axios';

export const getTopAnimes = {
  method: 'GET',
  url: 'https://jikan1.p.rapidapi.com/top/anime/1/airing',
  headers: {
    'x-rapidapi-key': '502042fca9msh062024085d9db5ap1544b8jsndb25aca5db96',
    'x-rapidapi-host': 'jikan1.p.rapidapi.com',
  },
};
export const getSingleAnime = (id) => {
  return {
    method: 'GET',
    url: `https://api.jikan.moe/v3/anime/${id}`,
  };
};
export const getSearchResults = (query) => {
  return {
    method: 'GET',
    url: `https://api.jikan.moe/v3/search/anime?q=${query}&page=1`,
  };
};

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

// export const fetchTopAnimes = async () => {
//   const response = await axios.request(options);
//   console.log(response.data);
//   return response.data;
// };
