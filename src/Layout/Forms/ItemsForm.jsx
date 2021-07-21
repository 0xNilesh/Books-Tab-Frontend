import { Controller, useForm } from "react-hook-form";
import Api from "../../Api/Api";
import { ItemsContext, HideContext } from "../../App";
import TextInput from "../FormInputs/TextInput";
import TextArea from "../FormInputs/TextArea";
import RadioInput from "../FormInputs/RadioInput";
import SelectInput from "../FormInputs/SelectInput";
import { makeStyles } from "@material-ui/core/styles";
import {
	Button,
	Container,
	CssBaseline,
	Divider,
	FormControl,
	Grid,
	InputAdornment,
	MenuItem,
	TextField,
} from "@material-ui/core";
import { useContext } from "react";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
		// flexGrow: 1,
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(2),
		width: "25ch",
	},
	it: {
		width: "100%",
	},
}));

const ItemsForm = (props) => {
	console.log(props.element);
	const { register, handleSubmit, control } = useForm({
		defaultValues: props.element,
	});

	const { setItems } = useContext(ItemsContext);
	const { setHide } = useContext(HideContext);

	const { element, purpose, source } = props;
	const classes = useStyles();

	const onSubmit = async (data) => {
		console.log(JSON.stringify(data));
		data.purchasePrice = parseInt(data.purchasePrice);
		if (purpose === "add") {
			await Api.post(`/${purpose}/${source}`, data);
		} else {
			console.log(data);
			await Api.post(`/${purpose}/${source}/${element.id}`, data);
		}
		const response = await Api.get("items/all");
		setItems(response.data);
		setHide(false);
	};

	return (
		<div className={classes.root}>
			<Container>
				<form onSubmit={handleSubmit(onSubmit)}>
					<CssBaseline />
					<h2>
						{purpose === "edit"
							? `EDIT ITEM: ${element.name}`
							: "CREATE ITEM"}
					</h2>
					<Divider />
					<Grid container spacing={2} alignItems="flex-start">
						<Grid item xs={7} sm={7}>
							<h4>General Details</h4>
							<Divider />

							<Grid
								spacing={3}
								direction="column"
								container
								justifyContent="center"
								alignItems="flex-start"
							>
								<Grid item className={classes.it}>
									<RadioInput
										label="Item Type"
										name="type"
										control={control}
										defaultValue="Product"
										options={[
											{
												label: "Product",
												value: "Product",
												key: "Product",
											},
											{
												label: "Service",
												value: "Service",
												key: "Service",
											},
										]}
									/>
								</Grid>
								<Grid item className={classes.it}>
									<TextInput
										register={register}
										control={control}
										className={classes.textField}
										variant="outlined"
										required
										label="Item Name"
										name="name"
									/>
								</Grid>
								<Grid item className={classes.it}>
									<SelectInput
										name="category"
										label="Item Category"
										control={control}
										defaultValue={"Panel"}
									>
										<MenuItem value="Panel">Panel</MenuItem>
										<MenuItem value="Inverter">
											Inverter
										</MenuItem>
										<MenuItem value="Wire">Wire</MenuItem>
										<MenuItem value="Other">Other</MenuItem>
									</SelectInput>
								</Grid>
								<Grid item className={classes.it}>
									<TextInput
										control={control}
										register={register}
										className={classes.textField}
										variant="outlined"
										required
										id="code"
										defaultValue="Code"
										label="Item Code"
										name="code"
										size="small"
										autoFocus
									/>
								</Grid>
								<Grid item className={classes.it}>
									<SelectInput
										name="unit"
										label="Item Unit"
										control={control}
										defaultValue="UNITS(UNT)"
									>
										<MenuItem value="FEET(FT)">
											FEET(FT)
										</MenuItem>
										<MenuItem value="INCHES(IN)">
											INCHES(IN)
										</MenuItem>
										<MenuItem value="UNITS(UNT)">
											UNITS(UNT)
										</MenuItem>
										<MenuItem value="PIECES(PCS)">
											PIECES(PCS)
										</MenuItem>
										<MenuItem value="NUMBERS(NOS)">
											NUMBERS(NOS)
										</MenuItem>
										<MenuItem value="MILLIMETERS(MM)">
											MILLIMETERS(MM)
										</MenuItem>
										<MenuItem value="CENTIMETERS(CMS)">
											CENTIMETERS(CMS)
										</MenuItem>
										<MenuItem value="METERS(M)">
											METERS(M)
										</MenuItem>
									</SelectInput>
								</Grid>
								<Grid item className={classes.it}>
									<TextArea
										register={register}
										required
										control={control}
										placeholder="Description"
										label="Item Description"
										size="small"
										name="desc"
										maxRows={4}
									/>
								</Grid>

								<Grid item className={classes.it}>
									<Button
										type="submit"
										fullWidth
										variant="contained"
										color="primary"
									>
										Submit
									</Button>
								</Grid>
							</Grid>
						</Grid>

						<Divider
							orientation="vertical"
							flexItem
							style={{ marginRight: "-1px" }}
						/>
						<Grid item xl={5} lg={5} sm={5}>
							<h4>Pricing Details</h4>
							<Divider />
							<Grid
								spacing={3}
								direction="column"
								container
								justifyContent="center"
								alignItems="flex-start"
							>
								<Grid item>
									<FormControl component="fieldset">
										<Controller
											rules={{ required: true }}
											control={control}
											defaultValue={0}
											name="purchasePrice"
											render={({ field }) => (
												<TextField
													{...field}
													label="Purchase Price"
													name="purchasePrice"
													required
													margin="dense"
													defaultValue="0"
													className={
														classes.textField
													}
													variant="outlined"
													InputProps={{
														startAdornment: (
															<InputAdornment position="start">
																₹
															</InputAdornment>
														),
													}}
												/>
											)}
										/>
									</FormControl>
								</Grid>
								{/* <Grid item>
									<SwitchInput
										label="Inclusive of Tax"
										name="inclusiveOfTax"
										control={control}
										defaultValue={false}
									/>
								</Grid> */}
								<Grid item className={classes.it}>
									<SelectInput
										name="gstTaxRatePercentage"
										label="GST Tax Rate (%)"
										control={control}
										defaultValue={0}
									>
										<MenuItem value={0}>None</MenuItem>
										<MenuItem value={1}>GST @ 1%</MenuItem>
										<MenuItem value={2}>GST @ 2%</MenuItem>
										<MenuItem value={3}>GST @ 3%</MenuItem>
										<MenuItem value={5}>GST @ 5%</MenuItem>
										<MenuItem value={12}>
											GST @ 12%
										</MenuItem>
									</SelectInput>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</form>
			</Container>
		</div>
	);
};

export default ItemsForm;
