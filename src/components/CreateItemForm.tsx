import React, { useState } from "react";
import { createItem } from "../apiService";
import Item from "../models/itemModel";
import { Status } from "../assets/enums/status";
import { Priority } from "../assets/enums/priority";

interface CreateItemFormProps {
  setItems: (x: (items: Item[]) => Item[]) => void;
}

const CreateItemForm: React.FC<CreateItemFormProps> = ({ setItems }) => {
  const [newItemName, setNewItemName] = useState<string>("");
  const [newItemDescription, setNewItemDescription] = useState<string>("");
  const [newItemPriority, setNewItemPriority] = useState<Priority>(Priority.Low);

  const handleCreate = async () => {
    if (newItemName.trim() === "") return;
    const newItem = new Item(Status.Pending, newItemName, newItemPriority, newItemDescription);
    try {
      const createdItem = await createItem(newItem);
      setItems((prevItems) => [...prevItems, createdItem]);
      setNewItemName("");
      setNewItemDescription("");
      setNewItemPriority(Priority.Low);
    } catch (error) {
      console.error("Error creating item:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newItemName}
        onChange={(e) => setNewItemName(e.target.value)}
        placeholder="New Item Name"
      />
      <input
        type="text"
        value={newItemDescription}
        onChange={(e) => setNewItemDescription(e.target.value)}
        placeholder="New Item Description"
      />
      <select
        value={newItemPriority}
        onChange={(e) => setNewItemPriority(e.target.value as Priority)}
      >
        <option value={Priority.Low}>Low</option>
        <option value={Priority.Medium}>Medium</option>
        <option value={Priority.High}>High</option>
      </select>
      <button onClick={handleCreate}>Add Item</button>
    </div>
  );
};

export default CreateItemForm;