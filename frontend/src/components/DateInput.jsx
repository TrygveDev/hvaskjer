import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useState } from "react";
import { DateTimePicker } from "@mui/x-date-pickers";

function DateInput(props) {
	const [date, setDate] = useState(dayjs(Date.now()));

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<DemoContainer components={["MobileDatePicker"]}>
				<DemoItem>
					<DateTimePicker
						value={date}
						onChange={(newVal) => {
							setDate(newVal);
							props.setDate(newVal);
						}}
					/>
				</DemoItem>
			</DemoContainer>
		</LocalizationProvider>
	);
}

export default DateInput;
