import React from "react";
import AlignInfoUsers from "../AlignInfoUsers";
import style from "./style.module.css";

const index = () => {
  return (
    <div className={style.container}>
      <div className={style.testClass}>
        <AlignInfoUsers
          title={"محل پرداخت"}
          text={"تهران، خیابان سمیه، کوچه میرفتاحی، پلاک ۸۳"}
        ></AlignInfoUsers>
        <AlignInfoUsers
          title={"شماره حساب"}
          text={"۱۰۰۵۷۲۳۹۰۹"}
        ></AlignInfoUsers>
        <AlignInfoUsers
          title={"شماره همراه"}
          text={"۹۳۶۳۸۲۶۷۲۱"}
        ></AlignInfoUsers>
        <AlignInfoUsers title={"نوع شخص"} text={"حقیقی"}></AlignInfoUsers>
        <AlignInfoUsers title={"نام کامل"} text={"صادق کمالی"}></AlignInfoUsers>
      </div>
      <div className={style.testClass}>
        <AlignInfoUsers
          title={"محل اقامت"}
          text={"تهران، خیابان آزادی، کوچه محمدی، پلاک ۳"}
        ></AlignInfoUsers>
        <AlignInfoUsers
          title={"شناسه پرداخت"}
          text={"۹۹۰۲۳۷۳۸۹"}
        ></AlignInfoUsers>
        <AlignInfoUsers title={"کد ثنا"} text={"۷۰۱۶۷۴۴۰"}></AlignInfoUsers>
        <AlignInfoUsers
          title={"تاریخ و زمان صدور"}
          text={"۱۴۰۰/۰۳/۲۹,،۱۱:۴۸:۰۲"}
        ></AlignInfoUsers>
        <AlignInfoUsers
          title={"شماره حساب"}
          text={"۱۰۰۵۷۲۳۹۰۹"}
        ></AlignInfoUsers>
      </div>
    </div>
  );
};

export default index;
