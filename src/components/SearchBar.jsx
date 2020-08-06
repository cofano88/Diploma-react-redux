import React, { useState, useEffect } from "react";
import styles from "./searchBar.module.css";

export function SearchBar({ searchRequest }) {
  const [input, setInput] = useState("");
  useEffect(() => {
    document
      .getElementById("input-search")
      .addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
          document.getElementById(styles.search).click();
        }
      });
  });
  function Search() {
    if (input) {
      searchRequest(input);
    } else return;
  }

  return (
    <div className={styles.searchBar_wrap}>
      <input
        type="text"
        id="input-search"
        value={input}
        autoFocus
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button id={styles.search} onClick={() => Search()}>
        search
      </button>
    </div>
  );
}
