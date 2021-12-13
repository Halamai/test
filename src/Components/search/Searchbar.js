import React from "react";
import style from "../search/Searchbar.module.scss";

const Searchbar = ({ onHandleFilter }) => {
  return (
    <>
      <input
        onChange={onHandleFilter}
        className={style.searchbar}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search"
      />
    </>
  );
};

export default Searchbar;
