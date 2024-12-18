const API_URL = `https://www.freetestapi.com/api/v1/movies?limit=10`;

//Fetch Movie list from API

export const fetchMovieList = async () => {
  const response = await fetch(API_URL, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  if (data) {
    return {
      kind: 'success',
      body: data,
    };
  } else {
    return {
      kind: 'failure',
    };
  }
};
