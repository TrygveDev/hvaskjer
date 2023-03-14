import styles from "../styles/User.module.css";
import Navbar from "../components/Navbar";
import { Avatar, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function UserPage() {
	const nav = useNavigate();

	return (
		<div className={styles.container}>
			<div className="content flex">
				<Avatar sx={{ width: 100, height: 100 }} />
				<Button variant="contained" onClick={() => nav("/nypost")}>
					+ Lag post
				</Button>
			</div>
			<Navbar page={2} />
		</div>
	);
}

export default UserPage;
