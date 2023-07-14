import { useState } from "react";
// import { initialItems } from "./App";

export function Form({ setItems }) {
  const [add, setAdd] = useState("");
  const [quant, setquant] = useState(1);

  function Submithandler(e) {
    e.preventDefault();
    if (!add) {
      return;
    }
    const item = {
      id: Date.now(),
      description: add,
      quantity: quant,
      packed: false,
    };
    // const final = [...initialItems, item];
    setItems(item);
    console.log(item);
    setAdd("");
    setquant(1);
  }
  return (
    <div>
      <form className="add-form" onSubmit={Submithandler}>
        <h3>What do you need for your trip?</h3>
        <select value={quant} onClick={(e) => setquant(Number(e.target.value))}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          id="items"
          type="text"
          placeholder="Items..."
          value={add}
          onChange={(e) => setAdd(e.target.value)}
        ></input>
        <button>Add</button>
      </form>
      {/* <Packinglist items={Submithandler} /> */}
    </div>
  );
}
