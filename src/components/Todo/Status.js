import React from 'react';
import style from './Status.module.css'

const Status = ({data}) => {

    const handleCountOfStatus = (status) => data.filter(el => el.status === status).length
    const filterByNew = handleCountOfStatus('new')
    const filterByProcessing = handleCountOfStatus('processing')
    const filterByCompleted = handleCountOfStatus('completed')

    return (
        <p className={style.p}>
            new: {filterByNew}
            processing: {filterByProcessing}
            completed: {filterByCompleted}
        </p>
    );
};

export default Status;