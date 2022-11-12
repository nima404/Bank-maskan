import React from "react";
import style from "./style.module.css"

const index = ({text}) => {
  return (
    <div className={style.dropdown}>
      <button className={style.dropbtn}>{text}</button>
      <div className={style.dropdown_content}>
        <a href="#">نهایی سازی</a>
        <a href="#" className={style.delete}>حذف درخواست</a>
      </div>
    </div>
  );
};

export default index;
