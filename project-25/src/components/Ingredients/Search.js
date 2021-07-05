import React, { useEffect, useRef, useState } from "react";

import Card from "../UI/Card";
import "./Search.css";

const Search = React.memo(({ onLoadIngredients }) => {
  const [searchFilter, setSearchFilter] = useState("");
  const searchFilterRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchFilter === searchFilterRef.current.value) {
        const query =
          searchFilter.length === 0
            ? ""
            : `?orderBy="title"&equalTo="${searchFilter}"`;
        fetch(
          `https://react-http-c71fc-default-rtdb.firebaseio.com/ingredients.json${query}`
        )
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            const loadedIngredients = [];

            for (const key in data) {
              loadedIngredients.push({
                id: key,
                title: data[key].title,
                amount: data[key].amount,
              });
            }

            onLoadIngredients(loadedIngredients);
          });
      }
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [onLoadIngredients, searchFilter, searchFilterRef]);
  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input
            type="text"
            ref={searchFilterRef}
            onChange={(event) => setSearchFilter(event.target.value)}
          />
        </div>
      </Card>
    </section>
  );
});

export default Search;
