import NationalityInput from "../UI/NationalityInput/NationalityInput";
import styles from "./ReservationForm.module.css";

export default function ReservationForm({ addPassenger }) {
	const handleSubmit = e => {
		e.preventDefault();
		const data = Object.fromEntries(new FormData(e.target));
		addPassenger(data);
		const inputs = document.querySelectorAll("input");
		inputs.forEach(input => (input.value = ""));
	};

	return (
		<form onSubmit={handleSubmit} className={styles.form}>
			<div className={styles.input_container}>
				<input type="text" placeholder="Name" name="name" required />
				<input type="text" placeholder="Surname" name="surname" required />
				<NationalityInput />
				<input
					type="text"
					placeholder="Id or passport"
					name="id_number"
					required
				/>
				<input type="date" placeholder="Birthdate" name="birthdate" required />
				<div>
					<input type="checkbox" name="needlugagge" />
					<label htmlFor=""> Baggage</label>
				</div>
			</div>

			<button type="submit" className={styles.button}>
				Add passenger
			</button>
		</form>
	);
}
