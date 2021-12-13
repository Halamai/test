import React, { useState } from "react";
import style from "../cart/Cart.module.scss";
import Button from "../button/Button";
import Modal from "../modal/Modal";

const Cart = ({ user, posts }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={style.cart}>
      <div key={user.id} className={style.cartList}>
        <>
          <h4 key={user.name}>{user.name}</h4>
          <p key={user.email}>{user.email}</p>
          <p key={user.phone}>{user.phone}</p>
          <p key={user.website}>{user.website}</p>
        </>
      </div>
      <Button text="Показати всі пости" toggle={toggle} style="button"></Button>
      {isOpen && (
        <Modal toggle={toggle}>
          <ul className={style.modalList}>
            {posts.map((post) => (
              <>
                <p key={post.title}>{post.title}</p>
                <p key={post.body}>{post.body}</p>
                <hr />
              </>
            ))}
          </ul>
        </Modal>
      )}
    </div>
  );
};

export default Cart;
