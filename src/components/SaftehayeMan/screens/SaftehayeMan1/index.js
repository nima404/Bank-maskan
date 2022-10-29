import { DatePicker, Space } from "antd";
import React from "react";
import AlignInputbyLable from "../../../AlignInputByLable";
import { InformationBox } from "../../../InformationBox";
import { Checkbox } from "antd";
import Style from "./style.module.css";
import { Button } from "../../../Button";
import { Details } from "../../../Details";

export default function SaftehayeMan1() {
  return (
    <>
    <div>
      <p>کاربر گرامی، در این صفحه می‌توانید جزئیات مربوط به سفته‌های خود را مشاهده کنید. همچنین می‌توانید با توجه به نقش خود نسبت به سفته و وضعیت آن، عملیات لازم را انجام دهید.</p>
    </div>
      <InformationBox>
        <AlignInputbyLable label={"نام گیرنده سفته"}></AlignInputbyLable>
        <AlignInputbyLable label={"شناسه یکتای سفته"}></AlignInputbyLable>
        <div>
          <label className={Style.labelDate}>تاریخ سررسید سفته</label>
          <Space direction="vertical" className={Style.date}>
            <DatePicker />
            <DatePicker />
          </Space>
        </div>
        <Checkbox>عندالمطالبه</Checkbox>
        <Button text={"جستجو"}></Button>
      </InformationBox>
      <Details headerTitle={"صادر کننده سفته"} className={Style.Datail}>
        <p className={Style.InnerDetail}> سفته‌ای جهت نمایش وجود ندارد</p>
      </Details>
      <Details headerTitle={"دارنده/دارنده جدید سفته"}>
        <p className={Style.InnerDetail}> سفته‌ای جهت نمایش وجود ندارد</p>
      </Details>
      <Details headerTitle={"ظهر نویسی سفته"}>
        <p className={Style.InnerDetail}> سفته‌ای جهت نمایش وجود ندارد</p>
      </Details>
      <Details headerTitle={"ضامن سفته"}>
        <p className={Style.InnerDetail}> سفته‌ای جهت نمایش وجود ندارد</p>
      </Details>
    </>
  );
}
