import Item from "./models/itemModel"

const API_URL = `https://reactexambackend.onrender.com/missions/8649401`;

export const createItem = async (item: Item) => {
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