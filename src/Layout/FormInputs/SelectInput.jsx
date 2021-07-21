import { FormLabel } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Controller } from "react-hook-form";
// style={{ margin: ".7rem 0" }}
const SelectInput = ({ label, defaultValue, name, control, children }) => {
	return (
		<FormControl component="fieldset" style={{ width: "100%" }}>
			<FormLabel component="legend">{label}</FormLabel>
			<Controller
				rules={{ required: true }}
				control={control}
				defaultValue={defaultValue}
				name={name}
				render={({ field }) => (
					<Select
						{...field}
						name={label}
						variant="outlined"
						margin="dense"
						fullWidth
					>
						{children}
					</Select>
				)}
			/>
		</FormControl>
	);
};
export default SelectInput;
