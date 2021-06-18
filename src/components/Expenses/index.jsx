import React, { useState } from "react";
import Card from "../Card";
import ExpensesFilter from "../ExpenseFilter";
import ExpenseItem from "../ExpenseItem";
import "./styles.css";

const Expenses = ({ items }) => {
  console.log(items);
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {items.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
