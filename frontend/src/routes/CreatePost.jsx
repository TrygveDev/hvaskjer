import { TextField } from "@mui/material";
import Navbar from "../components/Navbar";
import DateInput from "../components/DateInput";
import { Button } from "@mui/material";
import { useState } from "react";
import dayjs from "dayjs";
import axios from "axios";
import TypeInput from "../components/TypeInput";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const styles = {
	form: {
		width: "100%",
		height: "100%",
		display: "flex",
		flexDirection: "column",
		gap: "10px",
	},
	p: {
		margin: "0px",
		marginBottom: "5px",
	},
};

function CreatePost() {
	const [user] = useState(
		Cookies.get("USERNAME") ? Cookies.get("USERNAME") : null
	);

	const nav = useNavigate();
	const [date, setDate] = useState(dayjs(Date.now()));
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [image, setImage] = useState("");
	const [type, setType] = useState("aktivitet");

	function createPost() {
		let newDate = date.set("seconds", 0);
		if (type === "nyhet") {
			newDate = dayjs(Date.now());
		}

		axios
			.post("http://localhost:5001/saveData", {
				type: type,
				title: title,
				desc: description,
				img: image,
				date: newDate,
				author: user,
			})
			.then(function (response) {
				console.log(response);
				alert("Posten ble lagt ut!");
				nav("/dinside");
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	return (
		<div className={"container"}>
			<div className="content">
				<h2>Lag en ny post</h2>
				<div style={styles.form}>
					<div>
						<p style={styles.p}>Type</p>
						<TypeInput setType={setType} />
					</div>
					<div>
						<p style={styles.p}>Tittel</p>
						<TextField
							variant="outlined"
							helperText={"Gi posten en kort og grei tittel."}
							fullWidth
							onChange={(e) => {
								setTitle(e.target.value);
							}}
						/>
					</div>
					<div>
						<p style={styles.p}>Beskrivelse</p>
						<TextField
							multiline
							variant="outlined"
							helperText={"Skriv en god beskrivelse av posten."}
							minRows={3}
							maxRows={3}
							fullWidth
							onChange={(e) => {
								setDescription(e.target.value);
							}}
						/>
					</div>
					<div>
						<p style={styles.p}>Bilde Lenke</p>
						<TextField
							helperText={
								"Dersom du vil bruke privat bilde, last det opp til feks imgur.com og kopier URLen her."
							}
							variant="outlined"
							fullWidth
							onChange={(e) => {
								setImage(e.target.value);
							}}
						/>
					</div>
					{type === "aktivitet" ? (
						<div>
							<p style={styles.p}>
								Dato og klokkeslett for aktiviteten
							</p>
							<DateInput setDate={setDate} />
						</div>
					) : null}

					<Button
						variant="contained"
						color="success"
						onClick={() => createPost()}
					>
						legg ut
					</Button>
				</div>
			</div>

			<Navbar page={2} />
		</div>
	);
}

export default CreatePost;
