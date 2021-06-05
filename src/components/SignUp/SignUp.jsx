import React, { useState } from 'react';
import './SignUp.styles.scss';
import { Button, FormInput } from '../index';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

export default function SignUp() {
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    function handleChange(e) {
        switch(e.target.name) {
            case "displayName":
                setDisplayName(e.target.value);
                break;
            case "email":
                setEmail(e.target.value);
                break;
            case "password":
                setPassword(e.target.value);
                break;
            case "confirmPassword":
                setConfirmPassword(e.target.value);
                break;
        }
    }
    
    async function handleSubmit(e) {
        e.preventDefault();

        if(confirmPassword !== password) {
            alert(`Passwords dont't match`);
            return;
        }
        else if(confirmPassword === password) {
            try {
                // * set up authentication
                const { user } = await auth.createUserWithEmailAndPassword(email, password);

                console.log(auth.currentUser);

                // * Store user in users collection
                await createUserProfileDocument(user, { displayName });

                // * Reset form
                setDisplayName('');
                setEmail('');
                setPassword('')
                setConfirmPassword('');
            }
            catch(err) {
                console.error(err.message);
            }
        }
    }

    return (
        <div className="SignUp">
            <h2 className="SignUp__title">I do not have a account</h2>
            <span>Sign up with your email and password</span>
            <form className="SignUp__form" onSubmit={handleSubmit}>
                <FormInput
                    type="text"
                    name="displayName"
                    value={displayName}
                    handleChange={handleChange}
                    label="Name"
                    required
                />
                <FormInput
                    type="email"
                    name="email"
                    value={email}
                    handleChange={handleChange}
                    label="email"
                    required
                />
                <FormInput
                    type="password"
                    name="password"
                    value={password}
                    handleChange={handleChange}
                    label="password"
                    required
                />
                <FormInput
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    handleChange={handleChange}
                    label="Confirm Password"
                    required
                />
                <Button type="submit"> SIGN UP </Button>
            </form>      
        </div>
    );
}
