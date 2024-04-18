import styles from './styles.module.css';
import React, { useState } from 'react';

const Home = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        verify_username()
        verify_password()
    }

    const verify_username = () => {
        let count = 0
        // checks if contains only letters, digits and `_`, `-`
        for (let i = 0; i < userName.length; i++) {
            let l = userName.charAt(i).charCodeAt(0);
            if (l === 45 || (l >= 48 && l <= 57) || (l >= 65 && l <= 90) || l === 95 || (l >= 97 && l <= 122)) {
                count++;
            }
            else {
                // contains illegal char
                count = 0;
            }
        }
        // check for minimal length by the way
        if (count < 5) {
            alert(`wrong user name, please try again`);
        }
    }

    const verify_password = () => {
        let count = 0
        // at least 8 charachters
        if (password.length > 7) {
            count++
        }
        // contains one Uppercase
        for (let i = 65; i < 91; i++) {
            if (password.indexOf(String.fromCharCode(i))) {
                count++
                break
            }
        }
        // contains one Lowercase
        for (let i = 61; i < 123; i++) {
            if (password.indexOf(String.fromCharCode(i))) {
                count++
                break
            }
        }
        // contains one digit
        for (let i = 48; i < 58; i++) {
            if (password.indexOf(String.fromCharCode(i))) {
                count++
                break
            }
        }
        if (count === 4) {
            alert(`Hey ${userName}! welcome`)
            window.location.replace(`/Login`);
        }
        else {
            alert(`wrong password, please try again`)
        }
    }



    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <h1>{`Login`}</h1>
                <text>user name should contain only letters and digits</text>
                <input className={styles.input} placeholder='Username...' onChange={(e) => {
                    setUserName(e.target.value);
                }} />
                <text>password should contain at least one Uppercase and Lowercase letter and one digit</text>
                <input className={styles.input} placeholder='Password...' onChange={(e) => {
                    setPassword(e.target.value);
                }} />
                <button onClick={login} className='btn btn-secondary' style={{ width: '100%' }}>Sign-In</button>
            </div>
        </div>
    )
}

export default Home;