import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { HideContext } from "../../App";
import { Backdrop, Fade } from "@material-ui/core";
import ItemsView from "../ItemsView";
import ItemsForm from "../Forms/ItemsForm";

function getModalStyle() {
	const top = 50;
	const left = 50;

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`,
	};
}

const useStyles = makeStyles((theme) => ({
	modal: {
		display: "flex",
		justifyContent: "center",
	},
	paper: {
		position: "absolute",
		backgroundColor: theme.palette.background.paper,
		border: "2px solid #000",
		width: 800,
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
		borderRadius: "15px",
	},
}));

export default function SimpleModal(props) {
	const classes = useStyles();
	const [modalStyle] = React.useState(getModalStyle);
	const [open, setOpen] = React.useState(true);
	const { setHide } = useContext(HideContext);

	const handleClose = () => {
		setOpen(false);
		setHide(false);
	};

	const { element, purpose } = props;

	useEffect(() => {
		setOpen(true);
	}, [setOpen]);

	const body = (
		<div style={modalStyle} className={classes.paper}>
			{purpose === "ItemsView" ? (
				<ItemsView element={element} />
			) : purpose === "AddItem" ? (
				<ItemsForm element="" source="item" purpose="add" />
			) : (
				<ItemsForm element={element} source="item" purpose="edit" />
			)}
		</div>
	);

	return (
		<div>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				className={classes.modal}
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={open}>{body}</Fade>
			</Modal>
		</div>
	);
}
