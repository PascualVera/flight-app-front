import styles from "./ReservationForm.module.css";

export default function ReservationForm() {
	return (
		<form className={styles.form}>
			<div className={styles.input_container}>
				<input type="text" placeholder="Name" name="name" />
				<input type="text" placeholder="Surname" name="surname" />
				<input type="text" placeholder="Id or passport" name="id_number" />
				<input type="date" placeholder="birthdate" />
				<div>
					<input type="checkbox" />
					<label htmlFor=""> Baggage</label>
				</div>
			</div>

			<button className={styles.button}>Add passenger</button>
		</form>
	);
}
