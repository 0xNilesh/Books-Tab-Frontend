import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { AppBar, Box, Typography } from "@material-ui/core";
import ItemsDataGrid from "./ItemsDataGrid";
import InventoryDataGrid from "./InventoryDataGrid";
import { ItemsContext, InventoryContext } from "../App";
import Api from "../Api/Api";

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`scrollable-auto-tabpanel-${index}`}
			aria-labelledby={`scrollable-auto-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

const useStyles = makeStyles({
	root: {
		flexGrow: 1,
		padding: 2,
		margin: "auto",
		maxWidth: 1100,
	},
});

export default function CenteredTabs() {
	const classes = useStyles();
	const [value, setValue] = useState(0);
	const { setItems } = useContext(ItemsContext);
	const { setInventory } = useContext(InventoryContext);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	useEffect(() => {
		async function fetchData() {
			const itemsResponse = await Api.get("items/all");
			console.log(itemsResponse.data);
			setItems(itemsResponse.data);

			const inventoryResponse = await Api.get("inventory/all");
			setInventory(inventoryResponse.data);
		}
		fetchData();
	}, [setItems, setInventory]);

	return (
		<Paper className={classes.root} elevation={2}>
			<AppBar position="static" color="default">
				<Tabs
					value={value}
					onChange={handleChange}
					indicatorColor="primary"
					textColor="primary"
					centered
				>
					<Tab label="Inventory" />
					<Tab label="Items" />
				</Tabs>
			</AppBar>
			<TabPanel value={value} index={0}>
				<InventoryDataGrid />
			</TabPanel>
			<TabPanel value={value} index={1}>
				<ItemsDataGrid />
			</TabPanel>
		</Paper>
	);
}
