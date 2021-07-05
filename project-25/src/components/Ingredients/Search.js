import React, { useEffect, useRef, useState } from "react";

import Card from "../UI/Card";
import "./Search.css";
import useHttp from "../../hooks/http";
import ErrorModal from "../UI/ErrorModal";

const Search = React.memo(({ onLoadIngredients }) => {
  const [searchFilter, setSearchFilter] = useState("");
  const searchFilterRef = useRef();
  const { sendRequest, isLoading, error, data, clear } = useHttp();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchFilter === searchFilterRef.current.value) {
        const query =
          searchFilter.length === 0
            ? ""
            : `?orderBy="title"&equalTo="${searchFilter}"`;

        sendRequest(
          `https://react-http-c71fc-default-rtdb.firebaseio.com/ingredients.json${query}`,
          "GET"
        );
      }
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [sendRequest, searchFilter, searchFilterRef]);

  useEffect(() => {
    if (!isLoading && !error && data) {
      const loadedIngredients = [];

      for (const key in data) {
        loadedIngredients.push({
          id: key,
          title: data[key].title,
          amount: data[key].amount,
        });
      }

      onLoadIngredients(loadedIngredients);
    }
  }, [data, isLoading, error, onLoadIngredients]);

  return (
    <section className="search">
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          {isLoading && <span>Loading...</span>}
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
