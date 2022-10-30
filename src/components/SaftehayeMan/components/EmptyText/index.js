import React from 'react';
import style from "./style.module.css"

const index = ({text}) => {
    return (
        <div className={style.text}>
            <p>{text}</p>
        </div>
    );
};

export default index;