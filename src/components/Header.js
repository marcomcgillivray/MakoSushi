import { useState } from "react";
import { useCart } from "../CartContext";
import Logo from '../assets/logo.png';
import ShoppingCart from '../assets/shopping-cart.png';
import SushiPlatter from '../assets/sushi-platter.jpeg';
import CartDisplay from "./Cart";

const Header = () => {
    const [showModal, setShowModal] = useState(false);
    const { state } = useCart();


    const showModalHandler = e => {
        e.preventDefault();
        setShowModal(!showModal);
    };

    return (
        <>
            <header>
                <nav id='navigation'>
                    <div className='nav'>
                        <div className="logo">
                        <img src={Logo} alt='Mako Sushi Logo' height='115' width='160'></img>
                        </div>
                        <button 
                        onClick={showModalHandler}>
                            <img src={ShoppingCart} alt='shopping cart' height='32' width='32'></img>
                            <div className="cartCount">{state.cartItems.length}</div>
                        </button>
                        
                    </div>
                    
                </nav>
            </header>
            <div className="main-image">
                <img src={SushiPlatter} alt='Sushi Platter'></img>
            </div>
            {showModal && 
            
            <section id='modal'>
            <div className="modal">
                <div className="close-modal" onClick={showModalHandler}>
                    <span></span>
                    <span></span>
                </div>
                <h1>Your Cart</h1>

                    <CartDisplay />
            </div>
        </section>
        }
        </>
    )
};

export default Header;