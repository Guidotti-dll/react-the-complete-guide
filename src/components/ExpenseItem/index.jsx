import "./styles.css";
function ExpenseItem(props) {
  const date = {
    month: props.date.toLocaleString("en-US", { month: "long" }),
    year: props.date.toLocaleString("en-US", { day: "2-digit" }),
    day: props.date.getFullYear(),
  };
  return (
    <div className="expense-item">
      <div>
        <div>{date.month}</div>
        <div>{date.year}</div>
        <div>{date.day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
