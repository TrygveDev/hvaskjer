import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Grid from "@mui/material/Unstable_Grid2";
import NewsCard from "../components/NewsCard";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";

function HomePage() {
	const nav = useNavigate();
	const [activities, setActivities] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:5001/fetchData")
			.then(function (response) {
				console.log(response);
				const data = response.data.sort(
					(a, b) => new Date(b.date) - new Date(a.date)
				);
				setActivities(data);
			})
			.catch(function (error) {
				console.log(error);
			});
		// eslint-disable-next-line
	}, []);

	return (
		<div className={"container"}>
			<div className="content">
				<h1 className={styles.header}>Hva skjer?</h1>
				<Grid container spacing={1.5}>
					{activities.length === 0 ? (
						<div className={styles.fullCentered}>
							<CircularProgress />
						</div>
					) : (
						Object.values(activities).map((item, i) => {
							return (
								<Grid
									key={i}
									xs={12}
									onClick={() => {
										console.log(item.type);
										if (item.type === "aktivitet") {
											nav("/aktivitet", { state: item });
										} else if (item.type === "nyhet") {
											nav("/nyhet", { state: item });
										}
									}}
								>
									<NewsCard
										title={item.title}
										img={item.img}
										date={item.date}
										desc={item.desc}
									/>
								</Grid>
							);
						})
					)}
				</Grid>
			</div>

			<Navbar page={0} />
		</div>
	);
}

export default HomePage;
