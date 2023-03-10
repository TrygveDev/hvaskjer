import styles from "../styles/News.module.css";
import Navbar from "../components/Navbar";

function NewsPage() {
	return (
		<div className={styles.container}>
			<Navbar page={0} />
		</div>
	);
}

export default NewsPage;
