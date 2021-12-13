import React, { useState } from "react";
import s from "../header/Header.module.scss";
import Searchbar from "../search/Searchbar";
import Button from "../button/Button";

const Header = ({ onHandleFilter, sortUsers }) => {
  // const sortUsers = () => users.sort((a, b) => a.name.localeCompare(b.name));
  // console.log(sortUsers());
  return (
    <header className={s.header}>
      <Button text="Сортувати" style="buttonsort" toggle={sortUsers} />
      <Searchbar onHandleFilter={onHandleFilter} />
    </header>
  );
};

export default Header;
