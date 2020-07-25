import React from 'react';
import food_icon from "../images/food_icon.png";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

const Header = (props) => {
    return (
        <header>
            <img className="header__logo" src={food_icon} alt="food-icon"></img>
            <h1 className="header__title">Breakfast Order Service</h1>
            <div className="header__optionBasket">
                <button class="basket__btn" onClick={()=>props.openBasket()}><ShoppingBasketIcon /></button>
                {Object.keys(props.order).length>0 && 
                <span className="header__basketCount">{Object.keys(props.order).length}</span>
                }
            </div>
        </header>
    )
}

export default Header;