import React, { useState } from 'react';
import "./SignIn.styles.scss";
import { FormInput, Button } from '../index';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import { auth } from '../../firebase/firebase.utils';
import { useHistory } from 'react-router-dom';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    function handleEmail(e) {
        setEmail(e.target.value);
    } 
    function handlePassword(e) {
        setPassword(e.target.value);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        
        try {
            await auth.signInWithEmailAndPassword(email, password);

            setEmail('');
            setPassword('');

            //history.push('/home');
        }
        catch(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
                 alert('Wrong password.');
            } else {
                 console.log(errorMessage);
            }
        }
    }

    return (
        <div className="SignIn">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    handleChange={handleEmail} 
                    type="email"
                    name="email"
                    value={email}
                    label="email"
                    
                />
                <FormInput 
                    handleChange={handlePassword}
                    type="password"
                    name="password"
                    value={password}
                    label="password"
                  
                />
                <div className="SignIn__buttons">
                     <Button type="submit"> Sign In </Button>
                     <Button isGoogleSignIn onClick={signInWithGoogle} type="submit"> Sign In with Google </Button>
                </div>
            </form>
        </div>
    )
}
