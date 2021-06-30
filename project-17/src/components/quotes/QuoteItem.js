import classes from "./QuoteItem.module.css";
import { useHistory } from "react-router-dom";

const QuoteItem = ({ id, text, author }) => {
  const { push } = useHistory();
  const goToDetail = () => {
    push({
      pathname: `/quotes/${id}`,
      state: {
        quote: {
          id,
          text,
          author,
        },
      },
    });
  };

  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{text}</p>
        </blockquote>
        <figcaption>{author}</figcaption>
      </figure>
      <button onClick={goToDetail} className="btn">
        View Fullscreen
      </button>
    </li>
  );
};

export default QuoteItem;
