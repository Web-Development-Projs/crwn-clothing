import React from 'react';
import './FormInput.styles.scss';

// * OtherProps.value.length = user has typed anything in
export default function FormInput({ handleChange, label, ...otherProps }) {
    return (
        <div className="FormInput">
            <input className="FormInput__input" onChange={handleChange} {...otherProps} />
            {
                label ? 
                <label className={`${otherProps.value.length ? 'shrink' : ''} FormInput__label`}>{label}</label>
                : null
            }
        </div>
    );
}
