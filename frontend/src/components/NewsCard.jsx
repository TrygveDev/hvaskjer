const styles = {
	card: {
		width: "100%",
		height: "140px",
		backgroundColor: "white",
		boxSizing: "border-box",
		borderRadius: "10px",
		overflow: "hidden",
		boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		cursor: "pointer",
		textAlign: "center",
	},
	nomargin: {
		margin: "0px",
	},
};

function NewsCard(props) {
	return (
		<div style={styles.card}>
			<div
				style={{
					width: "100%",
					height: "100%",
					background: `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url(${props.img})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					color: "white",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexDirection: "column",
				}}
			>
				<h2 style={styles.nomargin}>{props.title}</h2>
				<h4 style={styles.nomargin}>
					{new Date(props.date).toLocaleDateString()}
				</h4>
			</div>
		</div>
	);
}

export default NewsCard;
