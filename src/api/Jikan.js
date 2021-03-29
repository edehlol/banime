export const getTopAnimes = {
  method: 'GET',
  url: 'https://api.jikan.moe/v3/top/anime/1/airing',
};
export const getAnime = (id) => {
  return {
    method: 'GET',
    url: `https://api.jikan.moe/v3/anime/${id}`,
  };
};

export const getInfo = (category, id) => {
  return {
    method: 'GET',
    url: `https://api.jikan.moe/v3/${category}/${id}`,
  };
};
export const getVideos = (id) => {
  return {
    method: 'GET',
    url: `https://api.jikan.moe/v3/anime/${id}/videos`,
  };
};
export const getSearchResults = (type, query) => {
  return {
    method: 'GET',
    url: `https://api.jikan.moe/v3/search/${type}?q=${query}&page=1`,
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
