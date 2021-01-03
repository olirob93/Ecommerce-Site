import React from "react";
import './CartIcon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/carticon.svg';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../Redux/Cart/cart.actions';

const CartIcon = ({toggleCartHidden}) => {
  return (
    <div className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon'/>
      <span className='item-count'>0</span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null, mapDispatchToProps) (CartIcon);
