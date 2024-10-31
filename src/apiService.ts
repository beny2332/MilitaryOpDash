import ItemModel from "./models/itemModel";

const API_URL = `https://reactexambackend.onrender.com/missions/8649401`;

export const getItems = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching items:', error);
    throw error;
  }
};

export const createItem = async (item: ItemModel) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.error('Error creating item:', error);
    throw error;
  }
};

export const updateItemStatus = async (id: string) => {
    try {
      const response = await fetch(`https://reactexambackend.onrender.com/missions/8649401/progress/${id}`, {
        method: 'POST',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    } catch (error) {
      console.error('Error updating item status:', error);
      throw error;
    }
  };
  
  export const deleteItem = async (id: string) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    } catch (error) {
      console.error('Error deleting item:', error);
      throw error;
    }
  };