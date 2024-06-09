export const exerciseOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
    "x-rapidapi-key": "d9521feedbmsheead21f1e190529p1f35b6jsnf7317b92f3cd",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "d9521feedbmsheead21f1e190529p1f35b6jsnf7317b92f3cd",
    "x-rapidapi-host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
