const baseUrl = "http://localhost:8082";

export const getTrips = async (query) => {
  const url = `${baseUrl}/api/trips/${query}`;
  const data = await fetch(url);
  const trips = await data.json();
  return trips;
};

export const getPlacesAll = async () => {
  const url = `${baseUrl}/api/places/all`;
  const data = await fetch(url);
  const places = await data.json();
  return places;
};

export const postRegister = async (jsonBody) => {
  console.error(JSON.stringify(jsonBody));
  const url = `${baseUrl}/api/booking/register`;
  const data = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jsonBody),
  });
  const datax = await data.json();
  return datax;
};
