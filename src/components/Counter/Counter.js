import React, {useState} from 'react';
import Button from './Button';
import style from './Counter.module.css'

const Counter = () => {

    const [count, setCount] = useState(0)

    const counterPlus = () => setCount(prev => prev + 1)
    const counterMinus = () => setCount(prev => prev - 1)
    const counterDivide = () => setCount(prev => prev / 2)
    const counterMultyPlay = () => setCount(prev => prev * 2)
     // когда вы используете функцию обратного вызова в функции setState в React,
    // параметр prev представляет собой предыдущее значение состояния. Это аргумент,
    // который передается в функцию обратного вызова, когда вы используете функцию формы
    // (prevState) => newState.
    const counterReset = () => setCount(0)

    const checkZero = count === 0
    const checkTen = count === 10



    return (
        <section className={style.counter} id='counter'>
            <div className={style.container}>
                <div className={style.wrap}>
                    <div className={style.box}>
                        <h2>Counter</h2>

                        <Button
                            name = '+'
                            action = {counterPlus}
                            disabledButton = {checkTen}
                        />
                        <span>{count}</span>
                        <Button
                            name = '-'
                            action = {counterMinus}
                            disabledButton = {checkZero}
                        />
                        <Button
                            name = 'reset'
                            action = {counterReset}
                            disabledButton = {checkZero}
                        />
                        <Button
                            name = '*'
                            action = {counterMultyPlay}
                            disabledButton = {checkTen}
                        />
                        <Button
                            name = '/'
                            action = {counterDivide}
                            disabledButton = {checkZero}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Counter;