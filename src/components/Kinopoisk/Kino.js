import React from 'react';
import { Link } from 'react-router-dom';
import style from './Kino.module.css'
import '../../App.css'

const Kino = ({ el }) => {
    return (
      <section className="kino">
        <div className='col-4'>
            <Link to={`/kinopoisk/details/${el.filmId}`}>
                <img
                    width={'400px'}
                    height={'450px'}
                    src={el.posterUrl}
                    alt=""
                />
                <h3>{el ? el.nameRu : el.nameEn}</h3>
                <h3>{el ? el.nameEn : el.nameRu}</h3>
            </Link>
        </div>
      </section>
    );
};

export default Kino;