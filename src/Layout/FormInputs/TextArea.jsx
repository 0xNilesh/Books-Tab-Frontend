import React from "react";
import { FormControl, TextField } from "@material-ui/core";
import { Controller } from "react-hook-form";

const TextArea = ({ name, label, placeholder, defaultValue, control }) => {
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
						required
						multiline
						rows={3}
						maxRows={4}
						fullWidth
						placeholder={placeholder}
						label={label}
					/>
				)}
			/>
		</FormControl>
	);
};

export default TextArea;
