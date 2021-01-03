import React from "react";
import './CartIcon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/carticon.svg';

const CartIcon = () => {
  return (
    <div className='cart-icon'>
      <ShoppingIcon className='shopping-icon'/>
      <span className='item-count'>0</span>
    </div>
  );
};

export default CartIcon;
