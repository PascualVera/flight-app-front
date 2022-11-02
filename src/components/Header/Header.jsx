import styles from "./Header.module.css";
import bgimage from "../../assets/headerbg.jpg";
export default function Header() {
	return (
		<header className={styles.header_wrapper}>
			<figure className={styles.img_container}>
				<img className={styles.bg_img} src={bgimage} alt="Archena photo" />
			</figure>
		</header>
	);
}
