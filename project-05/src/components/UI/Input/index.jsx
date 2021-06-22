import React, { useRef, useImperativeHandle, forwardRef } from "react";
import styles from "./styles.module.css";

const Input = forwardRef(
  ({ isValid, label, id, type, value, onChange, onBlur }, ref) => {
    const inputRef = useRef();

    const activate = () => {
      inputRef.current.focus();
    };

    useImperativeHandle(ref, () => {
      return {
        focus: activate,
      };
    });

    return (
      <div
        className={`${styles.control} ${
          isValid === false ? styles.invalid : ""
        }`}
      >
        <label htmlFor={id}>{label}</label>
        <input
          ref={inputRef}
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>
    );
  }
);

export default Input;
