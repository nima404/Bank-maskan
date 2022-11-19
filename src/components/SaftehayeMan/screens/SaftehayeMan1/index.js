import { DatePicker, Space } from "antd";
import React, { useState } from "react";
import AlignInputbyLable from "../../../AlignInputByLable";
import { InformationBox } from "../../../InformationBox";
import { Checkbox } from "antd";
import Style from "./style.module.css";
import { Button } from "../../../Button";
import { Details } from "../../../Details";
import { NotificationText } from "../../../NotificationText";
import { useSelector } from "react-redux";
import { ShowUserInformation } from '../../components/ShowUsersInformation'

export default function SaftehayeMan1() {
  const user = useSelector(state => state.safteData.user)
  const [fullName, setFullName] = useState("")
  const [uniqueIdentifier, setUniqueIdentifier] = useState("")
  const [isTrue, setIsTrue] = useState(false)
  function checkuUser() {
    if (fullName === user?.fullName || uniqueIdentifier === user?.safteha?.uniqueIdentifier) {
      setIsTrue(true)
    }
  }
  return (
    <div className={Style.SaftehayeMan1_container}>
      <NotificationText type={"inform"}>
        کاربر گرامی، در این صفحه می‌توانید جزئیات مربوط به سفته‌های خود را
        مشاهده کنید. همچنین می‌توانید با توجه به نقش خود نسبت به سفته و وضعیت
        آن، عملیات لازم را انجام دهید.
      </NotificationText>
      <InformationBox>
        <AlignInputbyLable label={"نام گیرنده سفته"} onChange={setFullName}></AlignInputbyLable>
        <AlignInputbyLable label={"شناسه یکتای سفته"} onChange={setUniqueIdentifier}></AlignInputbyLable>
        <div>
          <label className={Style.labelDate}>تاریخ سررسید سفته</label>
          <Space direction="vertical" className={Style.date}>
            <DatePicker />
            <DatePicker />
          </Space>
        </div>
        <Checkbox>عندالمطالبه</Checkbox>
        <Button text={"جستجو"} handleClick={checkuUser}></Button>
      </InformationBox>
      <Details headerTitle={"صادر کننده سفته"} className={Style.Datail}>
        {isTrue ? <ShowUserInformation user={user}></ShowUserInformation> : <p className={Style.InnerDetail}> سفته‌ای جهت نمایش وجود ندارد</p>}
      </Details>
      <Details headerTitle={"دارنده/دارنده جدید سفته"}>
        {isTrue ? <ShowUserInformation user={user}></ShowUserInformation> : <p className={Style.InnerDetail}> سفته‌ای جهت نمایش وجود ندارد</p>}
      </Details>
      <Details headerTitle={"ظهر نویسی سفته"}>
        {false ? <ShowUserInformation user={user}></ShowUserInformation> : <p className={Style.InnerDetail}> سفته‌ای جهت نمایش وجود ندارد</p>}
      </Details>
      <Details headerTitle={"ضامن سفته"}>
        {false ? <ShowUserInformation user={user}></ShowUserInformation> : <p className={Style.InnerDetail}> سفته‌ای جهت نمایش وجود ندارد</p>}
      </Details>
    </div>
  );
}
