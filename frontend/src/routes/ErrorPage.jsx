import { useRouteError } from "react-router-dom";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const styles = {
	errorPage: {
		display: "flex",
		flexDirection: "column",
		height: "100vh",
		width: "100vw",
		alignItems: "center",
		justifyContent: "center",
		color: "#000",
		backgroundColor: "#fff",
	},
};

export default function ErrorPage() {
	const nav = useNavigate();
	const error = useRouteError();
	console.error(error);

	return (
		<div style={styles.errorPage}>
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
			<Button variant="text" onClick={() => nav("/")}>
				go home
			</Button>
		</div>
	);
}
