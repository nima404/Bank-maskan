import React from "react";
import style from "./Style.module.css";
import DropDown from "../DropDown";

const index = ({header,children}) => {
  return (
    <details className={style.details}>
      <summary className={style.summary}>
      <div className={style.user}>
        <div className={style.users_column}>
          <div className={style.user_title}>
            <p>تاریخ سررسید</p>
            <p>شناسه یکتا</p>
          </div>
          <div>
            <p>عند المطالبه</p>
            <p>۱۰۰۳۰۲۰۵۰۰۲۰۰۲۰۳</p>
          </div>
        </div>
        <div className={style.users_column}>
          <div className={style.user_title}>
            <p>نام کامل دریافت‌کننده</p>
            <p>مبلغ تعهد</p>
          </div>
          <div>
            <p>مجتبی خوش‌سخن</p>
            <p>۴۰.۰۰۰.۰۰۰ ریال</p>
          </div>
        </div>
      </div>
      <div className={style.butto_box}>
        <DropDown text={"انتخاب عملیات"}></DropDown>
      </div>
      </summary>
      {/* {children} */}
      alireza
    </details>
    // <div className={style.container}>
      // <div className={style.butto_box}>
      //   <DropDown text={"انتخاب عملیات"}></DropDown>
      // </div>
      // <div className={style.user}>
      //   <div className={style.users_column}>
      //     <div className={style.user_title}>
      //       <p>نام کامل دریافت‌کننده</p>
      //       <p>مبلغ تعهد</p>
      //     </div>
      //     <div>
      //       <p>مجتبی خوش‌سخن</p>
      //       <p>۴۰.۰۰۰.۰۰۰ ریال</p>
      //     </div>
      //   </div>
      //   <div className={style.users_column}>
      //     <div className={style.user_title}>
      //       <p>تاریخ سررسید</p>
      //       <p>شناسه یکتا</p>
      //     </div>
      //     <div>
      //       <p>عند المطالبه</p>
      //       <p>۱۰۰۳۰۲۰۵۰۰۲۰۰۲۰۳</p>
      //     </div>
      //   </div>
      // </div>
    // </div>
  );
};

export default index;
