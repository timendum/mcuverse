import React from "react";
import "../styles/Searchbar.scss";

interface SearchbarProps {
  value: string;
  onSearchChange: React.ChangeEventHandler<HTMLInputElement>;
}

function Searchbar(props: SearchbarProps) {
  return (
    <div className="searchContainer">
      <input
        type="search"
        value={props.value}
        onChange={props.onSearchChange}
        placeholder="Cerca un verso"
        autoFocus
      />
    </div>
  );
}

export { Searchbar };
