import React from "react";
import "./Header.styles.scss";
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../Firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from '../CartDropdown';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../Redux/User/user.selectors';
import { selectCartHidden } from '../../Redux/Cart/cart.selectors'


const Header = ({currentUser, hidden}) => {

  return (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo'/>
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>SHOP</Link>
      <Link className='option' to='/contact'>CONTACT</Link>     
      {
        currentUser ? (
        <div className='option' onClick={() => auth.signOut()}> SIGN OUT</div>)
        :
        (<Link className='option' to='/login'> SIGN IN </Link>
        )}
      <CartIcon/>
    </div>
    {
      hidden ? null : <CartDropdown/>
    }
  </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
