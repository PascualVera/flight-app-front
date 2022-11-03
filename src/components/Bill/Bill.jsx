import { useEffect, useState } from "react";
import styles from "./Bill.module.css";

export default function Bill({ passengers }) {
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
		</article>
	);
}
