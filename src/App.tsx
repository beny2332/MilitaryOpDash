import React, { useState } from "react"
import { List } from "./components/List"
import Item from "./models/itemModel"

function App() {
  const [items, setItems] = useState<Item[]>([])
  return (
    <>
      <div className="app">
        <List items={items} setItems={setItems}/>
      </div>
    </>
  )
}

export default App
