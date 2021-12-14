import React, { useEffect, useState } from "react";
import { getUsers } from "../services/Services";
import Header from "./header/Header";
import Main from "./main/Main";

const App = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");
  const [sorted, setSorted] = useState(false);

  const onHandleFilter = (e) => {
    setFilter(e.target.value);
  };

  const getOnHandleFilter = () => {
    if (sorted && !filter) {
      return users.sort((a, b) => a.name.localeCompare(b.name));
    }
    if (filter && sorted) {
      return users
        .filter((user) =>
          user.name.toLowerCase().includes(filter.toLowerCase())
        )
        .sort((a, b) => a.name.localeCompare(b.name));
    }
    if (filter && !sorted) {
      return users.filter((user) =>
        user.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
    return users.sort((a, b) => a.id - b.id);
  };

  const sortUsers = () => {
    sorted ? setSorted(false) : setSorted(true);
  };

  useEffect(() => {
    getUsers()
      .then((users) => {
        setUsers(users);
      })
      .catch((error) => console.log(error));
  }, []);

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
