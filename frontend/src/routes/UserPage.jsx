import styles from "../styles/User.module.css";
import Navbar from "../components/Navbar";
import { Avatar, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Cookie from "js-cookie";

function UserPage() {
	const nav = useNavigate();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [isLoggedIn, setIsLoggedIn] = useState(
		Cookie.get("LOGGEDIN") === "true" ? true : false
	);
	const [user, setUser] = useState(
		Cookie.get("USERNAME") ? Cookie.get("USERNAME") : null
	);

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

	function loginUser() {
		console.log(username, password);
		axios
			.post("http://localhost:5001/loginUser", {
				username: username,
				password: password,
			})
			.then(function (response) {
				console.log(response);
				Cookie.set("USERNAME", username);
				Cookie.set("LOGGEDIN", true, { expires: 1 });
				setIsLoggedIn(true);
				setUser(username);
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	return (
		<div className={styles.container}>
			<div className="content flex">
				{isLoggedIn ? (
					<>
						<Avatar sx={{ width: 100, height: 100 }} />
						<h2>Hei, {user}!</h2>
						<Button
							variant="contained"
							onClick={() => nav("/nypost")}
						>
							+ Lag post
						</Button>
						<Button
							variant="contained"
							onClick={() => {
								Cookie.remove("USERNAME");
								Cookie.remove("LOGGEDIN");
								setIsLoggedIn(false);
								setUser(null);
							}}
						>
							Logg ut
						</Button>
					</>
				) : (
					<>
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
						<Button
							variant="contained"
							onClick={() => createUser()}
						>
							Lag bruker
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
						<Button variant="contained" onClick={() => loginUser()}>
							Logg inn
						</Button>
					</>
				)}
			</div>
			<Navbar page={1} />
		</div>
	);
}

export default UserPage;
