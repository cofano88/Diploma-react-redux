import React, { useState } from "react";
import styles from "./searchBar.module.css";

export function SearchBar({ searchRequest }) {
  const [input, setInput] = useState("");
  function Search() {
    searchRequest(input);
    setInput("");
  }
  return (
    <div className={styles.searchBar_wrap}>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button id={styles.search} onClick={() => Search()}>search</button>
    </div>
  );
}

