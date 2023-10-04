const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "2fb1dc7c84msh2d969393e50b817p1f6691jsnc3907e9949c4",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  },
};

export async function fetchCars() {
  const res = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    options
  );

  const data = await res.json();

  return data;
}
