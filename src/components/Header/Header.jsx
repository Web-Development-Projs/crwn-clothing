import React from 'react';
import './Header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';

export default function Header({ user }) {
    function signOut(e) {
        auth.signOut();
    }

    return (
        <header className="Header">
            <Link className="Header__logoContainer" to="/home">
                <Logo className="Header__logoContainer__logo" />
            </Link>
            <div className="Header__options">
                <Link className="Header__options__option" to="/shop">SHOP</Link>
                <Link className="Header__options__option" to="/contact">CONTACT</Link>
                {user ? 
                    <div className="Header__options__option" onClick={signOut}>SIGN OUT</div>
                : 
                    <Link to="/signin" className="Header__options__option">SIGN IN</Link>
                }
            </div>
        </header>
    );
}
