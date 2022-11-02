import { useContext, useEffect } from "react";
import Bill from "../../components/Bill/Bill";
import ReservationForm from "../../components/ReservationForm/ReservationForm";
import TripContext from "../../context/Context";
import styles from "./Reservation.module.css";
export default function Reservation() {
	const { currentTrip } = useContext(TripContext);
	useEffect(() => {
		console.log(currentTrip);
	}, []);
	return (
		<main className={styles.reservation_container}>
			<div className={styles.dynamic_bg}>
				<img src={currentTrip.destination.img_url} alt="destination" />
			</div>

			<ReservationForm />
			<Bill />
		</main>
	);
}
