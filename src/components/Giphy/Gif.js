import React from 'react';
import style from './Gif.module.css'

const Gif = ({el}) => {
    return (
        <section className={style.gif}>
            <div className={style.container}>
                <div className={style.wrap}>
                    <div className={style.box}>
                        <div className={style.row}>
                            <div className={style.col-3}>
                                <iframe
                                    src={el.embed_url}
                                    title = 'giphy'
                                />
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gif;