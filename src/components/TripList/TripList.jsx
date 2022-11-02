import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./TripList.module.css";
export default function TripList({ trips }) {
	const navigate = useNavigate();
	const navigateToRegister = () => {
		navigate("/reservation");
	};
	useEffect(() => {
		console.log(trips);
	});

	return (
		<section className={styles.trip_list}>
			{trips.map(trip => (
				<article key={trip.id} className={styles.trip_wrapper}>
					<figure className={styles.img_wrapper}>
						{<img src={trip.destination.img_url} alt="destination" />}
					</figure>
					<div className={styles.info_wrapper}>
						<p>Trip to {trip.destination.name}</p>
						<p>From {trip.origin.name} </p>
						<p>
							{trip.price}$ <sub>Baggage fee not included</sub>
						</p>
						<button onClick={navigateToRegister}>Book this trip</button>
					</div>
				</article>
			))}
		</section>
	);
}
