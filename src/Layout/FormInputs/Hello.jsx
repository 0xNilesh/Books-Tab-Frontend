// // import { useContext } from "react";
// import { useForm } from "react-hook-form";
// import Api from "../../Api/Api";
// // import { ValsContext, ValsContext2 } from "./App";
// import TextInput from "../FormInputs/TextInput";
// import TextArea from "../FormInputs/TextArea";
// import RadioInput from "../FormInputs/RadioInput";
// import SelectInput from "../FormInputs/SelectInput";
// import { makeStyles } from "@material-ui/core/styles";
// import {
// 	Container,
// 	CssBaseline,
// 	Divider,
// 	FormControl,
// 	FormControlLabel,
// 	FormLabel,
// 	Grid,
// 	MenuItem,
// 	Radio,
// 	RadioGroup,
// 	TextareaAutosize,
// 	TextField,
// } from "@material-ui/core";
// import { composeClasses } from "@material-ui/data-grid";
// import { useState } from "react";
// // import SelectInput from "@material-ui/core/Select/SelectInput";

import TextInput from "./TextInput";

// const useStyles = makeStyles((theme) => ({
// 	root: {
// 		display: "flex",
// 		flexWrap: "wrap",
// 		// flexGrow: 1,
// 	},
// 	textField: {
// 		marginLeft: theme.spacing(1),
// 		marginRight: theme.spacing(1),
// 		width: "25ch",
// 	},
// 	// it: {
// 	// 	width: "100%",
// 	// },
// }));

// const EditForm = (props) => {
// 	// props.element.type = "Service";
// 	const { register, handleSubmit, control } = useForm({
// 		defaultValues: props.element,
// 	});

// 	// const [value, setValue] = useState("Product");

// 	// const options = [
// 	// 	{
// 	// 		label: "Product",
// 	// 		value: "Product",
// 	// 		key: "Product",
// 	// 	},
// 	// 	{
// 	// 		label: "Service",
// 	// 		value: "Service",
// 	// 		key: "Service",
// 	// 	},
// 	// ];

// 	// const { setVals } = useContext(ValsContext);
// 	// const { setVals2 } = useContext(ValsContext2);

// 	const { element, purpose, source } = props;
// 	const classes = useStyles();

// 	const onSubmit = async (data) => {
// 		// tried everything, but wasn't able to resolve the bug (reusable component of radioinput and selectinput are not giving the right value)
// 		// data.type = value;
// 		console.log(JSON.stringify(data));
// 		console.log(props.element.itemId);
// 		// await Api.post(`/${purpose}/${source}`, data);
// 		// if (props.source === "inventory") {
// 		// 	const response = await api.get("inventory/all");
// 		// 	setVals2(response.data);
// 		// }
// 		// const response = await Api.get("items/all");
// 		// console.log(response.data);
// 		// setVals(response.data);
// 	};

// 	// const type = register("type", { required: true });

// 	return (
// 		<div className={classes.root}>
// 			{/* <Container> */}
// 			<form onSubmit={handleSubmit(onSubmit)}>
// 				<CssBaseline />
// 				<h2>
// 					{purpose === "edit"
// 						? `EDIT ITEM: ${element.name}`
// 						: "CREATE ITEM"}
// 				</h2>
// 				<Divider />
// 				<Grid container spacing={2} alignItems="flex-start">
// 					<Grid item xs={7} sm={7}>
// 						<h4>General Details</h4>
// 						<Divider />

// 						{/* <Grid
// 								spacing={3}
// 								direction="column"
// 								container
// 								justifyContent="center"
// 								alignItems="flex-start"
// 							>
// 								<Grid item className={classes.it}> */}
// 						<RadioInput
// 							label="Item Type"
// 							name="type"
// 							{...register("type")}
// 							control={control}
// 							defaultValue="Product"
// 							options={[
// 								{
// 									label: "Product",
// 									value: "Product",
// 									key: "Product",
// 								},
// 								{
// 									label: "Service",
// 									value: "Service",
// 									key: "Service",
// 								},
// 							]}
// 						/>
// 						{/* </Grid>
// 								<Grid item className={classes.it}> */}
// 						{/* <TextInput
// 										register={register}
// 										className={classes.textField}
// 										variant="outlined"
// 										required
// 										id="name"
// 										label="Item Name"
// 										name="name"
// 										autoComplete="name"
// 										size="small"
// 										autoFocus
// 									/> */}
// 						{/* </Grid>
// 								<Grid item className={classes.it}> */}
// 						{/* <SelectInput
// 							name="category"
// 							// className={classes.textField}
// 							label="Item Category"
// 							control={control}
// 							defaultValue={"Panel"}
// 						>
// 							<MenuItem value="Panel">Panel</MenuItem>
// 							<MenuItem value="Inverter">Inverter</MenuItem>
// 							<MenuItem value="Wire">Wire</MenuItem>
// 							<MenuItem value="Other">Other</MenuItem>
// 						</SelectInput> */}
// 						{/* </Grid>
// 								<Grid item className={classes.it}> */}
// 						{/* <TextInput
// 										register={register}
// 										className={classes.textField}
// 										variant="outlined"
// 										required
// 										id="code"
// 										label="Item Code"
// 										name="code"
// 										size="small"
// 										autoFocus
// 									/> */}
// 						{/* </Grid>
// 								<Grid item className={classes.it}> */}
// 						{/* <SelectInput
// 							name="unit"
// 							label="Item Unit"
// 							control={control}
// 							defaultValue="UNITS(UNT)"
// 						>
// 							<MenuItem value="FEET(FT)">FEET(FT)</MenuItem>
// 							<MenuItem value="INCHES(IN)">INCHES(IN)</MenuItem>
// 							<MenuItem value="UNITS(UNT)">UNITS(UNT)</MenuItem>
// 							<MenuItem value="PIECES(PCS)">PIECES(PCS)</MenuItem>
// 							<MenuItem value="NUMBERS(NOS)">
// 								NUMBERS(NOS)
// 							</MenuItem>
// 							<MenuItem value="MILLIMETERS(MM)">
// 								MILLIMETERS(MM)
// 							</MenuItem>
// 							<MenuItem value="CENTIMETERS(CMS)">
// 								CENTIMETERS(CMS)
// 							</MenuItem>
// 							<MenuItem value="METERS(M)">METERS(M)</MenuItem>
// 						</SelectInput> */}
// 						{/* </Grid>
// 								<Grid item className={classes.it}> */}
// 						<TextArea
// 							register={register}
// 							// className={classes.it}
// 							required
// 							minRows={4}
// 							placeholder="Description"
// 							label="Item Description"
// 							size="small"
// 							name="desc"
// 							maxRows={4}
// 						/>
// 						{/* </Grid> */}
// 						{/* <input
//                                 {...register("desc")}
//                                 placeholder="Description"
//                                 type="text"
//                                 name="desc"
//                                 /> */}
// 						{/* <Grid item> */}
// 						<input type="submit" />
// 						{/* </Grid> */}
// 					</Grid>
// 					{/* <p>
// 						<strong>Item Category : </strong>
// 						{element.category}
//                         </p>
//                         <p>
//                             <strong>Item Type : </strong>
//                             {element.type}
//                         </p>
//                         <p>
//                             <strong>Item Description : </strong>
//                             {element.desc}
//                         </p> */}
// 					{/* </Grid> */}
// 					<Divider
// 						orientation="vertical"
// 						flexItem
// 						style={{ marginRight: "-1px" }}
// 					/>
// 					<Grid item xl={5} lg={5} sm={5}>
// 						<h4>Pricing Details</h4>
// 						<Divider />
// 						{/* <p>
// 						<strong>Purchase Price : </strong>₹{" "}
// 						{element.purchasePrice}
//                         </p>
//                         <p>
//                             <strong>Tax Rate : </strong>
//                             GST @ {element.gstTaxRatePercentage}%
//                         </p>
//                         <p>
//                             <strong>Price (inclusive of Tax) : </strong>₹{" "}
//                             {element.price}
//                         </p> */}
// 					</Grid>
// 				</Grid>
// 			</form>
// 			{/* </Container> */}
// 		</div>
// 	);
// };

// export default EditForm;

// import { FormControlLabel, FormLabel, MenuItem } from "@material-ui/core";
// import FormControl from "@material-ui/core/FormControl";
// import InputLabel from "@material-ui/core/InputLabel";
// import Select from "@material-ui/core/Select";
// import { Children } from "react";
// import { Controller } from "react-hook-form";
// // style={{ margin: ".7rem 0" }}
// const SelectInput = ({ label, defaultValue, name, control, children }) => {
// 	return (
// 		<FormControl component="fieldset" style={{ width: "100%" }}>
// 			<FormLabel component="legend">{label}</FormLabel>
// 			<Controller
// 				rules={{ required: true }}
// 				control={control}
// 				defaultValue={defaultValue}
// 				name={name}
// 				render={({ field }) => (
// 					<Select
// 						{...field}
// 						name={label}
// 						variant="outlined"
// 						margin="dense"
// 						fullWidth
// 					>
// 						{children}
// 					</Select>
// 				)}
// 			/>
// 		</FormControl>
// 	);
// };
// export default SelectInput;

// import React from "react";
// import { TextareaAutosize } from "@material-ui/core";

// const TextArea = ({
// 	input,
// 	name,
// 	width,
// 	type,
// 	label,
// 	placeholder,
// 	variant,
// 	register,
// 	maxRows,
// 	minRows,
// 	...custom
// }) => {
// 	return (
// 		<TextareaAutosize
// 			{...register(name)}
// 			variant={variant}
// 			margin="normal"
// 			required
// 			placeholder={placeholder}
// 			maxRows={maxRows}
// 			minRows={minRows}
// 			// size="small"
// 			label={label}
// 			{...input}
// 			{...custom}
// 		/>
// 	);
// };

// export default TextArea;

// import React from "react";
// import { TextField } from "@material-ui/core";

// const TextInput = ({ name, label, placeholder, register }) => {
// 	return (
// 		<TextField
// 			{...register(name)}
// 			variant="outlined"
// 			margin="dense"
// 			required
// 			fullWidth
// 			placeholder={placeholder}
// 			// style={{ width: "20rem" }}
// 			// size="small"
// 			label={label}
// 		/>
// 	);
// };

// export default TextInput;

RadioInput;
TextInput;
