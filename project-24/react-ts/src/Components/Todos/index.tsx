import styles from "./styles.module.css";
import Todo from "../../models/todo";
import TodoItem from "../TodoItem";
import { TodosContext } from "../../store/todosContext";
import { useContext } from "react";

const Todos: React.FC = () => {
  const { items, removeTodo } = useContext(TodosContext);
  return (
    <ul className={styles.todos}>
      {items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
