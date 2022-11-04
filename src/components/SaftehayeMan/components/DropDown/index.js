import React from "react";
import style from "./style.module.css"

const index = ({text}) => {
  return (
    <div className={style.dropdown}>
      <button className={style.dropbtn}>{text}</button>
      <div className={style.dropdown_content}>
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div>
  );
};

export default index;
