import React, { useEffect } from "react";
import { getItems } from "../apiService";
import Item from "../models/itemModel";
import CreateItemForm from "./CreateItemForm";

interface ItemsProps {
  items: Item[];
  setItems: (x: (items: Item[]) => Item[]) => void;
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
    <div>
      <h1>Military Operations Dashboard</h1>
      <ul className="list">
        {!items.length && <h1>No tasks for today</h1>}
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.status} - {item.priority}
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
      <CreateItemForm setItems={setItems} />
    </div>
  );
};