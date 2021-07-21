import React, { useContext, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";
import { InventoryContext, HideContext } from "../App";
import InventoryModal from "./Modals/InventoryModal";

export default function DataGridDemo() {
	const { inventory } = useContext(InventoryContext);
	const [data, setData] = useState([]);
	const { hide, setHide } = useContext(HideContext);
	const [work, setWork] = useState("");

	const columns = [
		{
			field: "name",
			headerName: "Item Name",
			width: 140,
			sortable: false,
		},
		{
			field: "code",
			headerName: "Item Code",
			width: 150,
			sortable: false,
		},
		{
			field: "category",
			headerName: "Category",
			width: 140,
			sortable: false,
		},
		{
			field: "type",
			headerName: "Item Type",
			width: 130,
			sortable: false,
		},
		{
			field: "price",
			headerName: "Purchase Price (in ₹)",
			width: 190,
			sortable: false,
		},
		{
			field: "Details",
			headerName: "",
			sortable: false,
			width: 120,
			renderCell: ({ row }) => {
				const onClick = () => {
					setWork("ItemsView");
					setData(row);
					setHide(true);
				};

				return (
					<Button
						color="secondary"
						size="small"
						variant="contained"
						onClick={onClick}
					>
						View
					</Button>
				);
			},
		},
		{
			field: "Edit",
			headerName: "",
			sortable: false,
			width: 120,
			renderCell: ({ row }) => {
				const onClick = () => {
					setWork("EditItem");
					setData(row);
					setHide(true);
				};

				return (
					<Button
						color="primary"
						size="small"
						variant="contained"
						onClick={onClick}
					>
						Edit
					</Button>
				);
			},
		},
	];

	const onClick2 = () => {
		setWork("AddItem");
		setHide(true);
	};

	return (
		<div style={{ height: 600, width: "100%" }}>
			<div
				style={{
					display: "flex",
					justifyContent: "flex-end",
					marginBottom: "2px",
				}}
			>
				<Button
					color="primary"
					size="small"
					variant="contained"
					onClick={onClick2}
				>
					Add Item
				</Button>
			</div>
			<DataGrid
				rows={inventory}
				columns={columns}
				pageSize={8}
				editable="false"
				disableSelectionOnClick
			/>

			{hide && <InventoryModal element={data} purpose={work} />}
		</div>
	);
}
