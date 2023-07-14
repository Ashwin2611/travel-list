export function Item({ item, onDeletehandler, onCheck }) {
  // const [check, setCheck] = useState(false);
  // console.log(onDeletehandler, "log");
  return (
    <div>
      {
        <li>
          <input
            type="checkbox"
            value={item.packed}
            onClick={() => onCheck(item.id)}
          ></input>
          <span style={item.packed ? { textDecoration: "line-through" } : {}}>
            {item.quantity} {item.description}
          </span>
          <button onClick={() => onDeletehandler(item.id)}>❌</button>
        </li>
      }
    </div>
  );
}
