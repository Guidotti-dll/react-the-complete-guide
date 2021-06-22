import React from "react";
import styles from "./styles.module.css";

const Input = ({ isValid, label, id, type, value, onChange, onBlur }) => {
  return (
    <div
      className={`${styles.control} ${isValid === false ? styles.invalid : ""}`}
    >
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;
