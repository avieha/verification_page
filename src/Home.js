import styles from './styles.module.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        // Retrieve users from local storage
        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
        // Find the user with matching username and password
        const user = existingUsers.find(user => user.userName === userName && user.password === password);
        if (user) {
            // User found
            window.location.replace('/login');
        } else {
            // User not found or password incorrect
            alert("Invalid username or password.");
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <h1>{`Login`}</h1>
                <input className={styles.input} placeholder='Username...' onChange={(e) => {
                    setUserName(e.target.value);
                }} />
                <input className={styles.input} placeholder='Password...' onChange={(e) => {
                    setPassword(e.target.value);
                }} />
                <button onClick={login} className='btn btn-secondary' style={{ width: '100%' }}>Sign-In</button>
                <Link to={'/register'} className='grid-item'>
                    <h5>create new account</h5>
                </Link>
            </div>
        </div>
    )
}

export default Home;