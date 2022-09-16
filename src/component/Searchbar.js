import React from "react";

const Searchbar = ({ func }) => {
  const [searchValue, setsearchValue] = React.useState("");
  const search = (e) => {
    e.preventDefault();
    func(searchValue);
  };

  return (
    <div className="searchbar">
      <form action="" className="form" onSubmit={search}>
        <input
          type="search"
          onChange={(e) => {
            setsearchValue(e.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default Searchbar;
