import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SignupPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if passwords match
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        const formData = {
            email,
            password,
        };

        // Send POST request to API
        fetch('http://localhost:4000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                // Handle API response
                console.log(data);
                navigate("/login");
            })
            .catch((error) => {
                // Handle error
                console.error('Error:', error);
            });


    };

    return (
        <div className='login-parent'>
            <div className="login-container">
                <h2 className='haris-h2'>Signup</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='haris-label'>Email:</label>
                        <input type="email" value={email} onChange={handleEmailChange} required />
                    </div>
                    <div>
                        <label className='haris-label'>Password:</label>
                        <input type="password" value={password} onChange={handlePasswordChange} required />
                    </div>
                    <div>
                        <label className='haris-label'>Confirm Password:</label>
                        <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} required />
                    </div>
                    <div className='haris-padding-1'></div>
                    <button type="submit" className='haris-submit'>Submit</button>
                    <div className='haris-padding-1'></div>
                    <Link to="/login" className='haris-link'>Already have an account? Login here</Link>
                </form>
            </div>
        </div>
    );
}

export default SignupPage;