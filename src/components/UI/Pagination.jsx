import styles from "./Pagination.module.css";

export default function Pagination({
	postPerPage,
	totalPosts,
	paginate,
	currentPage,
}) {
	const pageNumbers = [];
	for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
		pageNumbers.push(i);
	}
	return (
		<nav className={styles.pagination}>
			<ul>
				{pageNumbers.map(number => (
					<li key={number}>
						<button
							className={currentPage === number ? styles.active : styles.unused}
							onClick={() => {
								paginate(number);
							}}
						>
							{number}
						</button>
					</li>
				))}
			</ul>
		</nav>
	);
}
