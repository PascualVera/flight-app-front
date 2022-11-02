import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import TripList from "../../components/TripList/TripList";
import { getTrips } from "../../services/DataFetching";
import styles from "./LandingPage.module.css";
export default function LandingPage() {
	const [isLoading, setIsLoading] = useState(true);
	const [trips, setTrips] = useState(null);
	const [queryParam, setQueryParam] = useState("all");
	useEffect(() => {
		getTrips(queryParam)
			.then(data => {
				setTrips(data);
			})
			.then(() => {
				setIsLoading(false);
			});
	}, [queryParam]);
	return (
		<main className={styles.landing_page_wrapper}>
			<Header />
			{!isLoading && <TripList trips={trips} />}
		</main>
	);
}
