import NationalityInput from "../UI/NationalityInput/NationalityInput";
import styles from "./ReservationForm.module.css";

export default function ReservationForm({ addPassenger }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    data.needsluggage = data.needsluggage == "Yes" ? true : false;
    addPassenger(data);
    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => (input.value = ""));
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.input_container}>
        <input
          className={styles.input}
          type="text"
          placeholder="Name"
          name="name"
          required
        />
        <input
          className={styles.input}
          type="text"
          placeholder="Surname"
          name="surname"
          required
        />
        <NationalityInput />
        <input
          type="text"
          placeholder="Id or passport"
          name="identification"
          className={styles.input}
          required
        />
        <div className={styles.input_container} style={{ gap: "unset" }}>
          <label htmlFor="birthdate">Birthdate</label>
          <input
            id="birthdate"
            className={styles.input}
            type="date"
            placeholder="Birthdate"
            name="birthdate"
            required
          />
        </div>
        <div className={styles.input_container}>
          <label htmlFor="needsluggage"> Baggage</label>
          <select id="needsluggage" name="needsluggage" className={styles.input}>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
      </div>

      <button type="submit" className={styles.button}>
        Add passenger
      </button>
    </form>
  );
}
