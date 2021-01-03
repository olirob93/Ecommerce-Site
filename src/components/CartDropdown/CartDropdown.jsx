import React from "react";
import styles from "./CartDropdown.styles.scss";
import CustomButton from '../CustomButton';
import CartItem from '../CartItem';
import { connect } from 'react-redux';

const CartDropdown = ({ cartItems }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem}/>
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = ({cart: { cartItems } }) =>  ({
  cartItems
})

export default connect(mapStateToProps)(CartDropdown) ;
