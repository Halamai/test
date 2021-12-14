import React from "react";
import Whirligig from "react-whirligig";
import Cart from "../cart/Cart";

const Slider = () => {
  let whirligig;
  const next = () => whirligig.next();
  const prev = () => whirligig.prev();

  return (
    <div>
      <button onClick={prev}>Prev</button>
      <Whirligig
        visibleSlides={3}
        gutter="1em"
        ref={(_whirligigInstance) => {
          whirligig = _whirligigInstance;
        }}
      >
        <p>1111111111111</p>
        <p>2222222222222</p>
        <p>3333333333333</p>
        <Cart />
      </Whirligig>
      <button onClick={next}>Next</button>
    </div>
  );
};
export default Slider;
