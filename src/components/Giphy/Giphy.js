import React, { useEffect, useState, useCallback } from 'react';
import Form from './Form';
import { API, rest } from '../../config';
import style from './Giphy.module.css'
import Gif from './Gif'

const Giphy = () => {

    const [data, setData] = useState ([])
    const [value, setValue] = useState ({
        title: '',
        count: ''
    })

    const searchGiphy = useCallback( async(e) => {
        const {title, count} = value
        e && e.preventDefault()
        const request = await fetch(API + (count ? count: '5') + rest + (title ? title: 'eminem'))
        const response = await request.json()
        setData(response.data)
        console.log(response.data);
    }, [value])

    useEffect(() => {
        searchGiphy()
    }, [searchGiphy])

    console.log(data);

    const handleAllValues = (prop) => (e) => {
        setValue(prev => ({...prev, [prop]: e.target.value}))
    }

    const giphies = data?.map(el =>
        <Gif
            key={el.id}
            el = {el}
        />    
    )



    return (
        <section className={style.giphy}>
            <div className={style.container}>
                <div className={style.wrap}>
                    <div className={style.box}>
                        <h2>Giphy</h2>
                        <Form
                            value = {value}
                            handleAllValues = {handleAllValues}
                            searchGiphy = {searchGiphy}
                        />
                        {giphies}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Giphy;