import React from 'react';
import InputHandle from './InputHandle';
import style from './Form.module.css'

const Form = ({value, handleAllValues, searchGiphy}) => {
    return (
        <section className={style.form}>
            <div className={style.container}>
                <div className={style.wrap}>
                    <div className={style.box}>
                        <form onSubmit={searchGiphy}>
                            <InputHandle
                                type="text"
                                values = {value.title}
                                handleAllValues = {handleAllValues}
                                name = 'title'
                            />

                            <InputHandle
                                type="number"
                                values = {value.count}
                                handleAllValues = {handleAllValues}
                                name = 'count'
                            />

                            <button
                            >Search Giphy</button>
                        </form>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Form;