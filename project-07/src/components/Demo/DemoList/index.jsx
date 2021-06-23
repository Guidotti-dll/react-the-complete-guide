import React, { memo, useMemo } from "react";

import styles from "./styles.module.css";

const DemoList = ({ items, title }) => {
  const sortedList = useMemo(() => {
    console.log("Items sorted");
    return items.sort((a, b) => a - b);
  }, [items]);

  console.log("DemoList RUNNING");

  return (
    <div className={styles.list}>
      <h2>{title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default memo(DemoList);
