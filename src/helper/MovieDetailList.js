export const fetchMovieList = async () => {
  const response = await fetch(
    `https://www.freetestapi.com/api/v1/movies?limit=5`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  );
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
