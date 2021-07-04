import { FormEvent, useRef } from "react";
import styles from "./styles.module.css";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = ({
  onAddTodo,
}) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const addTodoHandler = (event: FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    onAddTodo(enteredText);
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
