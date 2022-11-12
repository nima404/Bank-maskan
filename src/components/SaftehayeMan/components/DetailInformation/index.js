import React from "react";
import AlignInfoUsers from "../AlignInfoUsers";
import style from "./style.module.css";

const index = ({user}) => {

  return (
    <div className={style.container}>
      <div className={style.testClass}>
        <AlignInfoUsers
          title={"محل پرداخت"}
          text={"تهران، خیابان سمیه، کوچه میرفتاحی، پلاک ۸۳"}
        ></AlignInfoUsers>
        <AlignInfoUsers
          title={"شماره حساب"}
          text={user.accountNumber}
        ></AlignInfoUsers>
        <AlignInfoUsers
          title={"شماره همراه"}
          text={user.phoneNumber}
        ></AlignInfoUsers>
        <AlignInfoUsers title={"نوع شخص"} text={user.persontype}></AlignInfoUsers>
        <AlignInfoUsers title={"نام کامل"} text={user.fullName}></AlignInfoUsers>
      </div>
      <div className={style.testClass}>
        <AlignInfoUsers
          title={"محل اقامت"}
          text={user.address}
        ></AlignInfoUsers>
        <AlignInfoUsers
          title={"شناسه پرداخت"}
          text={user.postalCode}
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
