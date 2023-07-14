import { useState } from "react";
import { Packinglist } from "./Packinglist";
import { Stats } from "./Stats";
import { Logo } from "./Logo";
import { Form } from "./Form";

// export const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
// ];

export default function App() {
  const [items, setItems] = useState([]);
  // const [update, setUpdate] = useState([]);
  function set(item) {
    setItems((prev) => [...prev, item]);
  }

  function Deletehandler(id) {
    console.log(id);
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function Checkhandle(id) {
    console.log(id);
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function Clear() {
    const confirm = window.confirm("Are you sure to clear the list");
    confirm && setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form setItems={set} />
      <Packinglist
        items={items}
        onDeletehandler={Deletehandler}
        onCheck={Checkhandle}
        Clear={Clear}
      />
      <Stats stats={items} />
    </div>
  );
}
