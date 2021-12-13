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
    <div key={user.id} className={style.cart}>
      <ul key={user.id} className={style.cartList}>
        <>
          <h4 key={user.id}>{user.name}</h4>
          <p key={user.id}>{user.email}</p>
          <p key={user.id}>{user.phone}</p>
          <p key={user.id}>{user.website}</p>
        </>
      </ul>
      <Button text="Показати всі пости" toggle={toggle} style="button"></Button>
      {isOpen && (
        <Modal toggle={toggle}>
          <ul className={style.modalList}>
            {posts.map((post) => (
              <>
                <li key={post.id}>{post.title}</li>
                <li key={post.id}>{post.body}</li>
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
