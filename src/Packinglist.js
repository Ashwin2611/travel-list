import { useState } from "react";
import { Item } from "./Item";

export function Packinglist({ items, onDeletehandler, onCheck, Clear }) {
  const [sortBy, setSortBy] = useState("input");
  let sortItem;

  if (sortBy === "input") sortItem = items;

  if (sortBy === "description")
    sortItem = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "Packed")
    sortItem = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  // if(sortBy==="description") sortBy=
  // function saves(onSubmithandler) {}
  // console.log(onDeletehandler);
  // console.log(items);
  return (
    <div className="list">
      <ul>
        {sortItem.map((s) => (
          <Item
            item={s}
            key={s.description}
            onDeletehandler={onDeletehandler}
            onCheck={onCheck}
          />
        ))}
      </ul>
      <div className="action">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(() => e.target.value)}
        >
          <option value="input">Sort By Input</option>
          <option value="description">Sort by description</option>
          <option value="Packed">Sort by Packed</option>
        </select>
        <button onClick={Clear}>Reset</button>
      </div>
    </div>
  );
}
