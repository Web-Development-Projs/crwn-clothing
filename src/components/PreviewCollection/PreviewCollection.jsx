import React from 'react';
import './PreviewCollection.styles.scss';
import { CollectionItem } from '../index';

export default function PreviewCollection({title,items}) {
    return (
        <div className="PreviewCollection">
           <h1 className="PreviewCollection__title">{title.toUpperCase()}</h1>
           <div className="PreviewCollection__preview">
                {items.filter((el,idx) => idx < 4).map(({id, ...itemProps}) => {
                    return <CollectionItem key={id} {...itemProps} />
                })}
           </div> 
        </div>
    );
}
