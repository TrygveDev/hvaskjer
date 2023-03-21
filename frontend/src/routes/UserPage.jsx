import styles from "../styles/User.module.css";
import Navbar from "../components/Navbar";
import { Avatar, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function UserPage() {
	const nav = useNavigate();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	function createUser() {
		console.log(username, password);
		axios
			.post("http://localhost:5001/createUser", {
				username: username,
				password: password,
			})
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	return (
		<div className={styles.container}>
			<div className="content flex">
				<Avatar sx={{ width: 100, height: 100 }} />
				<Button variant="contained" onClick={() => nav("/nypost")}>
					+ Lag post
				</Button>
				<TextField
					id="outlined-basic"
					label="Brukernavn"
					variant="outlined"
					onChange={(e) => setUsername(e.target.value)}
				/>
				<TextField
					id="outlined-password-input"
					label="Passord"
					type="password"
					onChange={(e) => setPassword(e.target.value)}
				/>
				<Button variant="contained" onClick={() => createUser()}>
					Lag bruker og logg inn
				</Button>
			</div>
			<Navbar page={1} />
		</div>
	);
}

export default UserPage;
