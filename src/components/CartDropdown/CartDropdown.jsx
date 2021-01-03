import React from "react";
import styles from "./CartDropdown.styles.scss";
import CustomButton from '../CustomButton';

const CartDropdown = () => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'/>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
