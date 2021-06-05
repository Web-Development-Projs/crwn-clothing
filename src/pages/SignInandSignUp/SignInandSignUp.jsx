import React from 'react';
import './SignInandSignUp.styles.scss';
import { SignIn, SignUp } from '../../components';

export default function SignInandSignUp() {
    return (
        <section className="SignInandSignUp">
            <SignIn />
            <SignUp />
        </section>
    );
}
