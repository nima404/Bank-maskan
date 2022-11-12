import { useEffect, useState } from "react";
import style from "./Style.module.css";
import DropDown from "../DropDown";
import UserLine from "../UsersLine";
import DetailInformation from "../DetailInformation";
import RectagleUserInformation from "../RectangleUserInformation"
import EmptyText from "../EmptyText"

export const ShowUserInformation = ({ user }) => {

  const [data, setData] = useState({
    uniqueIdentifier: "",
    dateOfReceipt: "",
    agentName:"",
  })

  useEffect(() => {
    user.safteha.map((node) => {
      setData({
        uniqueIdentifier: node.uniqueIdentifier,
        dateOfReceipt: node.dateOfReceipt,
        agentName:node.agentName,
      })
    })
  }, [])

  console.log("data: ", data);

  return (
    <details className={style.details}>
      <summary className={style.summary}>
        <div className={style.user}>
          <div className={style.users_column}>
            <div>
              <p>{data.dateOfReceipt}</p>
              <p>{data.uniqueIdentifier}</p>
            </div>
            <div className={style.user_title}>
              <p>تاریخ سررسید</p>
              <p>شناسه یکتا</p>
            </div>
          </div>
          <div className={style.users_column}>
            <div>
              <p>{data.agentName}</p>
              <p>۴۰.۰۰۰.۰۰۰ ریال</p>
            </div>
            <div className={style.user_title}>
              <p>نام کامل دریافت‌کننده</p>
              <p>مبلغ تعهد</p>
            </div>
          </div>
        </div>
        <div className={style.button_box}>
          <DropDown text={"انتخاب عملیات"}></DropDown>
          <p className={style.togle_button}></p>
        </div>
      </summary>
      <div className={style.container}>
        <div>
          <UserLine text={"اطلاعات صادرکننده"}></UserLine>
          <DetailInformation user={user}></DetailInformation>
        </div>
        {/* <div>
          <UserLine text={"اطلاعات دریافت‌کننده"}></UserLine>
          <DetailInformation user={user}></DetailInformation>
        </div> */}
        <div>
          <UserLine text={"اطلاعات ظهرنویسان"}></UserLine>
          {/* <RectagleUserInformation></RectagleUserInformation> */}
          {/* if we dont have information for this part we would use this component */}
          <EmptyText text={"برای این سفته ظهرنویسی انجام نشده است"}></EmptyText>
        </div>
      </div>
    </details>
  );
};
