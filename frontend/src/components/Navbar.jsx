import { useNavigate } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Home, Person } from "@mui/icons-material";
import { useState } from "react";

const styles = {
	navbar: {
		position: "fixed",
		top: "calc(100vh - 56px)",
		width: "100%",
		height: "56px",
		zIndex: "999999",
		backgroundColor: "#f8f8f8",
	},
};

function Navbar(props) {
	const nav = useNavigate();
	const [value, setValue] = useState(props.page);

	return (
		<BottomNavigation
			style={styles.navbar}
			value={value}
			onChange={(event, newValue) => {
				setValue(newValue);
				if (newValue === 0) nav("/");
				if (newValue === 1) nav("/dinside");
			}}
		>
			<BottomNavigationAction label="Hjem" icon={<Home />} />
			<BottomNavigationAction label="Din Side" icon={<Person />} />
		</BottomNavigation>
	);
}

export default Navbar;
