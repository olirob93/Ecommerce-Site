import React from "react";
import './CartIcon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/carticon.svg';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../Redux/Cart/cart.actions';
import { selectCartItemsCount } from '../../Redux/Cart/cart.selectors'

const CartIcon = ({toggleCartHidden, itemCount}) => {
  return (
    <div className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon'/>
      <span className='item-count'>{itemCount}</span>
    </div>
  );
};

const mapStateToProps = (state) => ({
  itemCount : selectCartItemsCount(state)
})

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps) (CartIcon);
