import React from 'react';
import './Button.styles.scss';

export default function Button({children, isGoogleSignIn, ...otherProps}) {
    return (
        <button className={`${isGoogleSignIn ? 'Button__google' : null} Button`} {...otherProps}>
            {children}
        </button>
    );
}
