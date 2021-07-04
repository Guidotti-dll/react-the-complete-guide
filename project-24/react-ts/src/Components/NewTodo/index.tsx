import { FormEvent, useContext, useRef } from "react";
import { TodosContext } from "../../store/todosContext";
import styles from "./styles.module.css";

const NewTodo: React.FC = () => {
  const textInputRef = useRef<HTMLInputElement>(null);
  const { addTodo } = useContext(TodosContext);

  const addTodoHandler = (event: FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    addTodo(enteredText);
  };

  return (
    <form className={styles.form} onSubmit={addTodoHandler}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={textInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
