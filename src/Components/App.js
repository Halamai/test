import React, { useEffect, useState } from "react";
import { getUsers } from "../services/Services";
import Header from "./header/Header";
import Main from "./main/Main";

const App = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState([]);

  const onHandleFilter = (e) => {
    setFilter(e.target.value);
  };

  const getOnHandleFilter = () => {
    if (filter) {
      return users.filter((user) =>
        user.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
    return users;
  };
  const sortUsers = () => {
    setUsers(users.sort((a, b) => a.name.localeCompare(b.name)));
  };

  // useEffect(() => {
  //   getUsers()
  //     .then((users) => {
  //       setUsers(users);
  //     })
  //     .then((sort) => {
  //       setSort(sort);
  //     });
  // }, []);

  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users);
    });
  }, []);

  // useEffect(() => {
  //   setUsers().then((users) => {
  //     setSort(users);
  //   });
  // }, [users]);

  return (
    <>
      <Header
        users={users}
        onHandleFilter={onHandleFilter}
        sortUsers={sortUsers}
      />

      <Main users={getOnHandleFilter()} />
    </>
  );
};

export default App;
