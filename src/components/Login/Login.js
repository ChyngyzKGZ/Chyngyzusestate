import React, { useState } from 'react';
import style from './Login.module.css'

const Login = () => {

    const [login, setLogin] = useState({
        firstName: '',
        lastName: '',
        password: ''
    })

    // [prop] - динамический ключ объекта, можно несколько ключей через 1 функцию
    const handleAllValues = (prop) => (e) => {
        setLogin(prev => ({...prev, [prop]: e.target.value}))
    }

    const clearState = (prop) => (e) => {
        setLogin(prev => ({...prev, [prop]: ''})
        )
    }

    return (
        <section className={style.login}>
            <div className={style.container}>
                <div className={style.wrap}>
                    <div className={style.box}>
                        <h2>Login</h2>
                        <input 
                            type="text" 
                            value={login.firstName}
                            onChange={handleAllValues('firstName')}
                        />
                        <strong onClick={clearState('firstName')}>X</strong>
                        <input 
                            type="text" 
                            value={login.lastName}
                            onChange={handleAllValues('lastName')}
                        />
                        <strong onClick={clearState('lastName')}>X</strong>
                        <input 
                            type="password" 
                            value={login.password}
                            onChange={handleAllValues('password')}
                        />
                        <strong onClick={clearState('password')}>X</strong>
                        <p></p>
                    </div>
                </div>
            </div>
            

        </section>
    );
};

export default Login;