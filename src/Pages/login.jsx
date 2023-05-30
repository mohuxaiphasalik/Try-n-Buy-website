import React, { useState } from 'react';
import '../styles/harisStyle.css';
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const apiUrl = `http://localhost:4000/login?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`;

        // Send GET request to API
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                // Handle API response
                console.log(data);

                if (data.user_data && data.iat) {
                    // Store iat value in a cookie
                    document.cookie = `token=${data.user_data.token}`;
                    console.log('token value stored in cookie');
                    navigate("/");
                }
            })
            .catch((error) => {
                // Handle error
                console.error('Error:', error);
            });
    };

    console.log(document.cookie);

    return (
        <div className='login-parent'>
            <div className="login-container">
                <h2 className='haris-h2'>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className='haris-label'>Email:</label>
                        <input type="email" value={email} onChange={handleEmailChange} required />
                    </div>
                    <div className="form-group">
                        <label className='haris-label'>Password:</label>
                        <input type="password" value={password} onChange={handlePasswordChange} required />
                    </div>
                    <button type="submit" className='haris-submit'>Submit</button>
                    <div className='haris-padding-1'></div>
                    <Link to="/signup" className='haris-link'>Don't have an account? Signup here!</Link>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;