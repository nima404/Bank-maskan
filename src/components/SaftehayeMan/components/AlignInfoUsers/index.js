import React from 'react';
import style from "./style.module.css"

const index = ({title,text}) => {
    return (
        <div className={style.container}>
            <p className={style.title}>{title}</p>
            <p className={style.text}>{text}</p>
        </div>
    );
};

export default index;