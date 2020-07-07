import React, { useState } from "react";

export function SearchBar({ searchRequest }) {
  const [input, setInput] = useState("");
  function Search() {
    searchRequest(input);
    setInput("");
  }
  return (
    <div className="searchBar_wrap">
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button onClick={() => Search()}>search</button>
    </div>
  );
}

