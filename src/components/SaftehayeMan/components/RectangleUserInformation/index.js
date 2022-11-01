import React from "react";
import style from "./style.module.css";

const index = () => {
  return (
    <div className={style.container}>
      <div className={style.information}>
        <div className={style.users}>
          <p>۱۴۰۰/۱۲/۰۳</p>
          <p>۰۰۵۰۱۹۹۸۴۲</p>
        </div>
        <div className={style.title}>
          <p>تاریخ ظهرنویسی</p>
          <p>شماره/ شناسه ملی</p>
        </div>
        <div className={style.users}>
          <p>محمدرضا سلطانی</p>
          <p>۹۲۰۶۵۰۱۲۱۲</p>
        </div>
        <div className={style.title}>
          <p>نام کامل</p>
          <p>شماره همراه/ ثابت</p>
        </div>
      </div>
      <button>مشاهده جزئیات</button>
    </div>
  );
};

export default index;
