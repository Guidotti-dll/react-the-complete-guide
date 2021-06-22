import React from "react";
import styles from "./styles.module.css";

const Input = ({ label, input }) => {
  return (
    <div className={styles.input}>
      <label htmlFor={input.id} cla>
        {label}
      </label>
      <input {...input} type="text" />
    </div>
  );
};

export default Input;
