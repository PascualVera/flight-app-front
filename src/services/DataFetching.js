const baseUrl = "http://localhost:8080";

export const getTrips = async query => {
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
