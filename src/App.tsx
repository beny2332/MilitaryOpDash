import React, { useState } from "react"
import { List } from "./components/List"
import Item from "./models/itemModel"
import CreateItemForm from "./components/CreateItemForm"

function App() {
  const [items, setItems] = useState<Item[]>([])
  return (
    <>
      <div className="app">
      <h1>Military Operations Dashboard</h1>
        <CreateItemForm setItems={setItems} />
        <br />
        <h3>Missions</h3>
        <List items={items} setItems={setItems}/>
      </div>
    </>
  )
}

export default App
