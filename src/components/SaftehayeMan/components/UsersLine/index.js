import React from 'react';
import style from "./style.module.css"

const index = ({text}) => {
    return (
        <div className={style.container}>
            <div className={style.line}></div>
            <p className={style.text}>{text}</p>
        </div>
    );
};

export default index;