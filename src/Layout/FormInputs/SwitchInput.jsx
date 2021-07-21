import React from "react";
import Switch from "@material-ui/core/Switch";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { Controller } from "react-hook-form";

const SwitchInput = ({ label, defaultValue, name, control, checked }) => {
	console.log(defaultValue);
	return (
		<FormControl component="fieldset" style={{ margin: ".7rem 0 0 0" }}>
			<FormLabel component="legend">{label}</FormLabel>
			<Controller
				control={control}
				rules={{ required: true }}
				defaultValue={defaultValue}
				name={name}
				render={({ field }) => (
					<Switch
						{...field}
						checked={field.value}
						name={name}
						color="primary"
					/>
				)}
			/>
		</FormControl>
	);
};

export default SwitchInput;
