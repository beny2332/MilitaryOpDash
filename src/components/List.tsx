import React, { useEffect } from "react";
import { getItems } from "../apiService";
import ItemModel from "../models/itemModel";
import CreateItemForm from "./CreateItemForm";
import Item from "./Item";

interface ItemsProps {
  items: ItemModel[];
  setItems: (x: (items: ItemModel[]) => ItemModel[]) => void;
}

export const List: React.FC<ItemsProps> = ({ items, setItems }) => {
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await getItems();
        setItems(data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, [setItems]);

  return (
      <div className="list">
        {!items.length && <h1>No tasks for today</h1>}
        {items.map((item) => (
            <Item key={item._id} item={item} setItems={setItems} />
        ))}
      </div>
  );
};