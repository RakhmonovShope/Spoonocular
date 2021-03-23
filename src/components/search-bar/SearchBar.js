import React, { useState, useEffect } from "react";
import { DebounceInput } from "react-debounce-input";

import "./SearchBar.scss";

const SearchBar = ({ onSubmit }) => {
  const [state, setState] = useState("");

  useEffect(() => {
    onSubmit(state);
  }, [state]);

  return (
    <form className="has-search">
      <DebounceInput
        minLength={2}
        debounceTimeout={300}
        onChange={(e) => setState(e.target.value)}
        value={state}
        placeholder="Search..."
      />
      <hr />
    </form>
  );
};

export default SearchBar;
