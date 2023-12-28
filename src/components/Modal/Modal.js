import React from 'react';
import MuiModal from './MuiModal';
import Button from './Button'
import style from './Modal.module.css'

const Modal = () => {


    
    return (
        <section className={style.modal}>
            <div className={style.container}>
                <div className={style.wrap}>
                    <div className={style.box}>
                        <h2>Modal</h2> 

                        <Button/>

                        {/* <MuiModal/> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Modal;