export const exerciseOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '839ee1f246msh178e9403af3e886p1bbe37jsn0b9566e81e38',
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
  },
};

// export const youtubeOptions  = {
//   method: "GET",
//   headers: {
//     "x-Rapidapi-key": "839ee1f246msh178e9403af3e886p1bbe37jsn0b9566e81e38",
//     "x-Rapidapi-host": "youtube-search-and-download.p.rapidapi.com",
//   },
// };

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
