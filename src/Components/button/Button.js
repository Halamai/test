import React from "react";
import s from "../button/Button.module.scss";
import propTypes from "prop-types";

const Button = ({ text, toggle, style }) => {
  return (
    <button type="button" onClick={toggle} className={s[style]}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: propTypes.string,
  style: propTypes.oneOf(["button", "buttonsort"]).isRequired,
};

export default Button;
