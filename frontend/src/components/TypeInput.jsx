import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function TypeInput(props) {
	const [type, setType] = useState("aktivitet");

	return (
		<FormControl fullWidth>
			<Select
				value={type}
				onChange={(e) => {
					setType(e.target.value);
					props.setType(e.target.value);
				}}
			>
				<MenuItem value={"aktivitet"}>Aktivitet</MenuItem>
				<MenuItem value={"nyhet"}>Nyhet</MenuItem>
			</Select>
		</FormControl>
	);
}

export default TypeInput;
