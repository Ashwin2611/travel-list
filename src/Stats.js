export function Stats({ stats }) {
  if (stats.length === 0) {
    return (
      <div className="stats">
        <em>Start adding items in the list🧳</em>
      </div>
    );
  }

  const rate = stats.filter((item) => item.packed);
  const percent = Math.round((rate.length / stats.length) * 100);
  console.log(stats);
  return (
    <footer className="stats ">
      <em>
        {percent === 100
          ? "You got everything:Ready To Go ✈️"
          : `You have
        ${stats.length} items on your list, and you already packed
        ${rate.length} (${percent}%)`}
      </em>
    </footer>
  );
}
