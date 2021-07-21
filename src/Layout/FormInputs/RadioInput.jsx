import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { Controller } from "react-hook-form";

const RadioInput = ({ label, options, defaultValue, name, control }) => {
	return (
		<FormControl component="fieldset" style={{ margin: ".7rem 0 0 0" }}>
			<FormLabel component="legend">{label}</FormLabel>
			<Controller
				rules={{ required: true }}
				control={control}
				defaultValue={defaultValue}
				name={name}
				render={({ field }) => (
					<RadioGroup {...field} name={label} row>
						{options.map(({ label, key, value }) => (
							<FormControlLabel
								key={key}
								value={value}
								control={<Radio />}
								label={label}
							/>
						))}
					</RadioGroup>
				)}
			/>
		</FormControl>
	);
};

export default RadioInput;
