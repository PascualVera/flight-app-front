import styles from "./FilterBar.module.css";

export default function FilterBar() {
	return (
		<nav className={styles.nav}>
			<div className={styles.select_container}>
				<div className={styles.select}>
					{" "}
					<label htmlFor="">Origin</label>
					<select name="origin" id="">
						<option value="">pingalandia</option>
					</select>
				</div>
				<div className={styles.select}>
					<label htmlFor="">Destination</label>
					<select name="destination" id="">
						<option value="">pingalandia</option>
					</select>
				</div>
			</div>
		</nav>
	);
}
