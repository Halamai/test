import React from "react";
import s from "../header/Header.module.scss";
import Searchbar from "../search/Searchbar";
import Button from "../button/Button";

const Header = ({ onHandleFilter, sortUsers }) => {
  return (
    <header className={s.header}>
      <Button text="Сортувати" style="buttonsort" toggle={sortUsers} />
      <Searchbar onHandleFilter={onHandleFilter} />
    </header>
  );
};

export default Header;
