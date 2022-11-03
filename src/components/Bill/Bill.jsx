import { useContext } from "react";
import TripContext from "../../context/Context";
import styles from "./Bill.module.css";

export default function Bill({ passengers }) {
	const { currentTrip } = useContext(TripContext);
	return (
		<article className={styles.bill_wrapper}>
			<div className={styles.passenger_wrapper}>
				{passengers.map(passenger => {
					return (
						<div className={styles.passenger}>
							<p>
								{passenger.name} {passenger.surname}
							</p>
							<p>{passenger.id_number}</p>
						</div>
					);
				})}
			</div>
			<div className={styles.checkout_wrapper}>
				<p className={styles.price}>
					{currentTrip.price * passengers.length} $
				</p>
				<button className={styles.button}>Check out</button>
			</div>
		</article>
	);
}
