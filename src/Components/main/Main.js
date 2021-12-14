import React, { useEffect, useState } from "react";
import { getUsersPosts } from "../../services/Services";
import Cart from "../cart/Cart";
import style from "../main/Main.module.scss";

const Main = ({ users }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getUsersPosts()
      .then((posts) => {
        setPosts(posts);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      {users.map((user) => (
        <main className={style.main}>
          <Cart user={user} posts={posts}>
            {user.name}
          </Cart>
        </main>
      ))}
    </>
  );
};

export default Main;
