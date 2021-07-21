import React from "react";
import { FormControl, TextField } from "@material-ui/core";
import { Controller } from "react-hook-form";

const TextInput = ({ name, label, placeholder, defaultValue, control }) => {
	return (
		<FormControl component="fieldset">
			<Controller
				rules={{ required: true }}
				control={control}
				defaultValue={defaultValue}
				name={name}
				render={({ field }) => (
					<TextField
						{...field}
						variant="outlined"
						margin="dense"
						name={name}
						required
						fullWidth
						placeholder={placeholder}
						label={label}
					/>
				)}
			/>
		</FormControl>
	);
};

export default TextInput;
