import { Divider, Grid } from "@material-ui/core";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import Api from "../Api/Api";
import { ItemsContext } from "../App";

export default function ItemsView(props) {
	const { element } = props;
	const { register, handleSubmit } = useForm();
	const { setItems } = useContext(ItemsContext);

	const url =
		"https://storage.googleapis.com/books-tab.appspot.com/ckr5wgefm00000lu70rba3ool/ckr5wiwss00010lu7c9fa8itu";

	const onSubmit = async (data) => {
		console.log(data.image[0]);
		await Api.post(`edit/items/image/${element.id}`, data.image[0]);
		console.log("api");
		const response = await Api.get("items/all");
		setItems(response.data);
	};

	return (
		<div>
			<h2>{element.name}</h2>
			<Divider />
			<Grid container spacing={2} alignItems="flex-start">
				<Grid item lg={6} sm={6}>
					<h4>General Details</h4>
					<Divider />
					<img
						src={element.photoURL || url}
						alt="Product"
						height="200"
						width="200"
					/>
					{element.itemId === undefined && (
						<form onSubmit={handleSubmit(onSubmit)}>
							<input
								type="file"
								{...register("image")}
								name="image"
							/>
							<input type="submit" />
						</form>
					)}
					<p>
						<strong>Item Name : </strong>
						{element.name}
					</p>
					<p>
						<strong>Item Code : </strong>
						{element.code}
					</p>
					<p>
						<strong>Item Category : </strong>
						{element.category}
					</p>
					<p>
						<strong>Item Type : </strong>
						{element.type}
					</p>
					<p>
						<strong>Item Description : </strong>
						{element.desc}
					</p>
				</Grid>
				<Divider
					orientation="vertical"
					flexItem
					style={{ marginRight: "-1px" }}
				/>
				<Grid item lg={6} sm={6}>
					<h4>Pricing Details</h4>
					<Divider />
					<p>
						<strong>Purchase Price : </strong>₹{" "}
						{element.purchasePrice}
					</p>
					<p>
						<strong>Tax Rate : </strong>
						GST @ {element.gstTaxRatePercentage}%
					</p>
					<p>
						<strong>Price (inclusive of Tax) : </strong>₹{" "}
						{element.price}
					</p>
				</Grid>
			</Grid>
		</div>
	);
}
