import "./App.css";
import Todos from "./Components/Todos";
import NewTodo from "./Components/NewTodo";
import { useContext } from "react";
import { TodosContext } from "./store/todosContext";

function App() {
  const { items, addTodo, removeTodo } = useContext(TodosContext);

  const addTodoHandler = (text: string) => {
    addTodo(text);
  };

  const removeTodoHandler = (id: string) => {
    removeTodo(id);
  };

  return (
    <div>
      <NewTodo />
      <Todos />
    </div>
  );
}

export default App;
