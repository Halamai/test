import React, { useEffect, useState } from "react";
import { getUsersPosts } from "../../services/Services";
import Cart from "../cart/Cart";

const Main = ({ users }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getUsersPosts().then((posts) => {
      setPosts(posts);
    });
  }, []);
  return (
    <>
      {users.map((user) => (
        <>
          <Cart user={user} posts={posts}>
            {user.name}
          </Cart>
        </>
      ))}
    </>
  );
};

export default Main;
