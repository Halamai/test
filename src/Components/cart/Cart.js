import React, { useEffect, useState } from "react";
import style from "../cart/Cart.module.scss";
import Button from "../button/Button";
import Modal from "../modal/Modal";
import { getUsersPosts } from "../../services/Services";

const Cart = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [userPosts, setPosts] = useState({});

  const userId = user.id;

  useEffect(() => {
    getUsersPosts(userId)
      .then((posts) => {
        setPosts(posts);
      })
      .catch((error) => console.log(error));
  }, []);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className={style.cart}>
      <div key={user.id} className={style.cartList}>
        <h4 key={user.name}>{user.name}</h4>
        <p key={user.email}>{user.email}</p>
        <p key={user.phone}>{user.phone}</p>
        <p key={user.website}>{user.website}</p>
      </div>
      <Button text="Показати всі пости" toggle={toggle} style="button"></Button>

      {isOpen && (
        <Modal toggle={toggle}>
          <ul className={style.modalList}>
            {userPosts.map((post) => (
              <li key={post.userId}>
                <p key={post.title}>{post.title}</p>
                <p key={post.body}>{post.body}</p>
                <hr />
              </li>
            ))}
          </ul>
        </Modal>
      )}
    </div>
  );
};

export default Cart;
