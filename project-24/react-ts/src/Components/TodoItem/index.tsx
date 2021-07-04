import styles from "./styles.module.css";
const TodoItem: React.FC<{
  text: string;
  onRemoveTodo: () => void;
}> = ({ text, onRemoveTodo }) => {
  return (
    <li onClick={onRemoveTodo} className={styles.item}>
      {text}
    </li>
  );
};

export default TodoItem;
