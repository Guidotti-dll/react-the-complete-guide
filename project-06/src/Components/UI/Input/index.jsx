import React, { forwardRef } from "react";
import styles from "./styles.module.css";

const Input = forwardRef(({ label, input }, ref) => {
  return (
    <div className={styles.input}>
      <label htmlFor={input.id} cla>
        {label}
      </label>
      <input ref={ref} {...input} type="text" />
    </div>
  );
});

export default Input;
