import React from "react";

function Search() {
  return (
    <div className="search-Body">
      <div className="box">
        <form name="search">
          <input type="text" className="input" name="txt" />
        </form>
        <i className="fas fa-search"></i>
      </div>
    </div>
  );
}

export default Search;
