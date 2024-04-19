import { useState } from 'react';
import styles from './styles.module.css';

const Register = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const register = () => {
        // check if user already exists
        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
        const existingUser = existingUsers.find(user => user.userName === userName);
        if (existingUser) {
            alert("Username already exists. Please choose a different username.");
            return;
        }

        // add new user to the array of users in local storage
        if (verify_username() && verify_password()) {
            const newUser = { userName, password };
            const updatedUsers = [...existingUsers, newUser];
            localStorage.setItem('users', JSON.stringify(updatedUsers));
            alert("Registered Successfully!");
            window.location.replace('/');
        }
        else {
            // user not found or password incorrect
            alert("Invalid username or password");
        }
    }

    const verify_username = () => {
        let count = 0;

        // checks if contains only letters, digits and `_`, `-`
        for (let i = 0; i < userName.length; i++) {
            let l = userName.charAt(i).charCodeAt(0);
            if (l === 45 || (l >= 48 && l <= 57) || (l >= 65 && l <= 90) || l === 95 || (l >= 97 && l <= 122)) {
                count++;
            }
            else {
                // contains illegal char
                return false;
            }
        }
        // check for minimal length by the way
        if (count < 5) {
            alert(`wrong user name, please try again`);
            return false;
        }
        return true;
    }

    const verify_password = () => {
        let count = 0;
        // at least 8 charachters
        if (password.length > 7) {
            count++;
        }
        // contains one Uppercase
        for (let i = 65; i < 91; i++) {
            if (password.indexOf(String.fromCharCode(i)) !== -1) {
                count++;
                break;
            }
        }
        // contains one Lowercase
        for (let j = 97; j < 123; j++) {
            if (password.indexOf(String.fromCharCode(j)) !== -1) {
                count++;
                break;
            }
        }
        // contains one digit
        for (let k = 48; k < 58; k++) {
            if (password.indexOf(String.fromCharCode(k)) !== -1) {
                count++;
                break;
            }
        }
        if (count === 4) {
            // alert(`Hey ${userName}! welcome`);
            return true;
        }
        else {
            // alert(`wrong password, please try again`);
            return false;
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <h1>Register:</h1>
                <input className={styles.input} placeholder='Username...' onChange={(e) => {
                    setUserName(e.target.value);
                }} />
                <input className={styles.input} placeholder='Password...' onChange={(e) => {
                    setPassword(e.target.value);
                }} />
                <button onClick={register} className='btn btn-secondary' style={{ width: '100%' }}>Sign Up</button>
            </div>
        </div>
    )
}

export default Register;