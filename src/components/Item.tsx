import React from "react"
import Item from "../models/itemModel"
import { Status } from "../assets/enums/status"
import { deleteItem, updateItemStatus } from "../apiService"

interface Props {
  item: Item
  setItems: (x: (items: Item[]) => Item[]) => void
}

export default function ItemComponent({ item, setItems }: Props) {
    const handleStatusUpdate = async () => {
        let newStatus: Status;
        switch (item.status) {
          case Status.Pending:
            newStatus = Status.Progress;
            break;
          case Status.Progress:
            newStatus = Status.Completed;
            break;
          default:
            return;
        }
    
        try {
          await updateItemStatus(item._id);
          setItems((items) => {
            const copy = [...items];
            const itm = copy.find((i) => i._id === item._id);
            if (itm) {
              itm.status = newStatus;
            }
            return copy;
          });
        } catch (error) {
          console.error("Error updating item status:", error);
        }
      };

      const handleDelete = async () => {
        try {
          await deleteItem(item._id);
          setItems((items) => items.filter((i) => i._id !== item._id));
        } catch (error) {
          console.error("Error deleting item:", error);
        }
      };

  const getStatusClass = (status: Status) => {
    switch (status) {
      case Status.Pending:
        return "pending";
      case Status.Progress:
        return "progress";
      case Status.Completed:
        return "completed";
      default:
        return "";
    }
  }

  return (
    <div className={`item ${getStatusClass(item.status)}`}>
      <h4>Name: {item.name}</h4>
      <p>Status: {item.status}</p>
      <p>Priority: {item.priority}</p>
      <p>Description: {item.description}</p>
      <div style={{ display: "flex", gap: "0.5em" }}>
      <button onClick={handleStatusUpdate}>Update Status</button>
      <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  )
}
