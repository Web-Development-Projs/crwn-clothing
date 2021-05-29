import React from 'react';
import './CollectionItem.styles.scss';

export default function CollectionItem({id, name, price, imageUrl}) {
    return (
        <div className="CollectionItem">
            <div className="CollectionItem__image" style={{backgroundImage:`url(${imageUrl})`}}>
            </div>

            <div className="CollectionItem__footer">
                <span className="CollectionItem__footer__name">{name}</span>
                <span className="CollectionItem__footer__price">{price}</span>
            </div>
        </div>
    )
}
