import React from 'react';
import './Header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';

export default function Header() {
    return (
        <header className="Header">
            <Link className="Header__logoContainer" to="/home">
                <Logo className="Header__logoContainer__logo" />
            </Link>
            <div className="Header__options">
                <Link className="Header__options__option" to="/shop">SHOP</Link>
                <Link className="Header__options__option" to="/contact">CONTACT</Link>
            </div>
        </header>
    );
}
