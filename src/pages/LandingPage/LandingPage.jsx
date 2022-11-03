import { useEffect, useState } from "react";
import FilterBar from "../../components/FilterBar/FilterBar";
import Header from "../../components/Header/Header";
import TripList from "../../components/TripList/TripList";
import Pagination from "../../components/UI/Pagination";
import { getTrips } from "../../services/DataFetching";
import styles from "./LandingPage.module.css";
export default function LandingPage() {
	const [isLoading, setIsLoading] = useState(true);
	const [trips, setTrips] = useState(null);
	const [queryParam, setQueryParam] = useState("all");

	////////PAGINATION SETUPS
	const [currentPage, setCurrentPage] = useState(1);
	const tripsPerPage = 6;
	const indexOfLastPost = currentPage * tripsPerPage;
	const indexOfFirstPost = indexOfLastPost - tripsPerPage;
	let currentTrips;
	if (trips) {
		currentTrips = trips.slice(indexOfFirstPost, indexOfLastPost);
	}
	const paginate = pageNumber => {
		setCurrentPage(pageNumber);
	};

	////////PAGINATION SETUPS
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
			<FilterBar />

			{!isLoading && <TripList trips={currentTrips} />}
			{!isLoading && (
				<Pagination
					postPerPage={tripsPerPage}
					totalPosts={trips.length}
					paginate={paginate}
					currentPage={currentPage}
				></Pagination>
			)}
		</main>
	);
}
