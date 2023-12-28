import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css'

const Header = () => {
    return (
        <section className={style.header}>
            <h2></h2>
            <NavLink className={style.counter} to='/'>Counter-Main</NavLink>
            <NavLink className={style.login} to='/login'>Login</NavLink>
            <NavLink className={style.modal} to='/modal'>Modal</NavLink>
            <NavLink className={style.todo} to='/todo'>TodoList</NavLink>
            <NavLink className={style.giphy} to='/giphy'>Giphy</NavLink>
            <NavLink className={style.kinopoisk} to='/kinopoisk'>Kinopoisk</NavLink>

        </section>
    );
};

export default Header;