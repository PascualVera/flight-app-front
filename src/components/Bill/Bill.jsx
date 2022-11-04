import { useContext, useRef } from "react";
import TripContext from "../../context/Context";
import styles from "./Bill.module.css";

export default function Bill({ passengers }) {
	const { currentTrip } = useContext(TripContext);
	const priceInfo = useRef(null);

	const checkOutButtonClicked = () => {
		console.error(JSON.stringify(currentTrip));
		console.error(JSON.stringify(passengers));
		priceInfo.current.classList.remove("d-none");
	};

	return (
		<article className={styles.bill_wrapper}>
			<div className={styles.passenger_wrapper}>
				{passengers.map((passenger, index) => {
					return (
						<div key={index} className={styles.passenger}>
							<p>
								{passenger.name} {passenger.surname}
							</p>
							<p>{passenger.identification}</p>
						</div>
					);
				})}
			</div>
			<div className={styles.checkout_wrapper}>
				<p ref={priceInfo} className={`${styles.price} d-none`}>
				</p>
				<button className={styles.button} onClick={checkOutButtonClicked}>Check out</button>
			</div>
		</article>
	);
}
