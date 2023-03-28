import styles from "../styles/Activity.module.css";
import Navbar from "../components/Navbar";
import Grid from "@mui/material/Unstable_Grid2";
import { useLocation } from "react-router-dom";

function NewsPage() {
	const location = useLocation();
	const data = location.state;

	return (
		<div className={"container"}>
			<div className="content">
				<Grid container spacing={1}>
					<Grid xs={12}>
						<div className={`${styles.item} ${styles.headerImage}`}>
							<img src={data.img} width="100%" alt="" />
						</div>
					</Grid>
					<Grid xs={12}>
						<div className={`${styles.item} ${styles.about}`}>
							<div className={styles.aboutText}>
								<h5>
									Dato: {new Date(data.date).toLocaleString()}
								</h5>
								<h5>Av: {data.author}</h5>
							</div>
						</div>
					</Grid>
					<Grid xs={12}>
						<div className={`${styles.item} ${styles.content}`}>
							<div className={styles.contentText}>
								<h3>{data.title}</h3>
								<p>{data.desc}</p>
							</div>
						</div>
					</Grid>
				</Grid>
			</div>

			<Navbar page={0} />
		</div>
	);
}

export default NewsPage;
