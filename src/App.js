import { createContext, useState } from "react";
import Tabs from "./Layout/Tabs";

export const ItemsContext = createContext();
export const InventoryContext = createContext();
export const HideContext = createContext();

export default function App() {
	const [items, setItems] = useState([]);
	const [inventory, setInventory] = useState([]);
	const [hide, setHide] = useState(false);

	return (
		<ItemsContext.Provider value={{ items, setItems }}>
			<InventoryContext.Provider value={{ inventory, setInventory }}>
				<HideContext.Provider value={{ hide, setHide }}>
					<Tabs />
				</HideContext.Provider>
			</InventoryContext.Provider>
		</ItemsContext.Provider>
	);
}
