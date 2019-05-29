import React from 'react';
import { useState } from 'react';

import { auth, database } from 'firebase';

import '../Styles/Components/Login.scss';

function Login() {
    const [email, updateEmail] = useState('');
    const [password, updatePassword] = useState('');

    function handleLogin() {
        auth().signInWithEmailAndPassword('test@test.com')
    }

    return (
        <div className="component Login">
            <div className="login-form">
                <h3 className="login-form-title">Login</h3>
                <div className="input-container">
                    <label>
                        <span className="label-text">Email:</span>
                        <input type="email" value={email} onChange={updateEmail(email)}/>
                    </label>
                </div>
                <div className="input-container">
                    <label>
                        <span className="label-text">Password:</span>
                        <input type="password" value={password} onChange={updatePassword(password)}/>
                    </label>
                </div>
                <div className="button-container">
                    <button onClick={handleLogin}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Login;