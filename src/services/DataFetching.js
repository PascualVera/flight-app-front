export const getTrips = async query => {
	const url = "http://localhost:8080/api/trips/" + query;
	const data = await fetch(url);
	const trips = await data.json();
	return trips;
};
