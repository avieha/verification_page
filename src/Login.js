import styles from './styles.module.css';

const Login = () => {

    console.log("inside component");
    
    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <h1>Login Successfully!</h1>
            </div>
        </div>
    )
}

export default Login;