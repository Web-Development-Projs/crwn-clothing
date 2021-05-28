import React from 'react';
import './MenuItem.styles.scss';
import { useHistory } from 'react-router-dom';

export default function MenuItem({ title, imageUrl, size, linkUrl }) {
    let history = useHistory();

    function changeRoute(e) {
        history.push('shop/hats');
    }

    return (
        <div className={`Menu__item ${size ? size : null}`} onClick={changeRoute}>
            <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}}>
            </div>
            <div className="Content">
                <h1 className="Content__title">{title.toUpperCase()}</h1>
                <span className="Content__subtitle">SHOP NOW</span>
            </div>
        </div>
    );
}
