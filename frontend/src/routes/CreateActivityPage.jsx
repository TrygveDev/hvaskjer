import Navbar from "../components/Navbar";

function CreateActivityPage() {
	return (
		<div className={"container"}>
			<div className="content">
				<h2>Opprett aktivitet</h2>
			</div>

			<Navbar page={2} />
		</div>
	);
}

export default CreateActivityPage;
