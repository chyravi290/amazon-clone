import React from 'react'
import './Header.css'
import logo from './../assets/images/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const Header = () => {
  return (
    <div className="header">
      <img
        className="header__logo"
        src={logo}
        alt="amazon_logo"
      />
      <div class="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className='header__searchIcon' />
      </div>
      <div class="header__nav">
        <div class="header__option">
          <span class="header__optionLineOne">Hello Guest</span>
          <span class="header__optionLineTwo">Sign In</span>
        </div>
        <div class="header__option">
          <span class="header__optionLineOne">Returns</span>
          <span class="header__optionLineTwo">& Orders</span>
        </div>
        <div class="header__option">
          <span class="header__optionLineOne">Your</span>
          <span class="header__optionLineTwo">Prime</span>
        </div>
        <div class="header__optionBasket">
          <ShoppingBasketIcon />
          <span class="header__optionLineTwo header__basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header