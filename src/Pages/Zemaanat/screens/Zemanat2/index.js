import { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Button } from "../../../../components/Button";
import { Details } from "../../../../components/Details";
import { InformationBox } from "../../../../components/InformationBox";
import { InputByLabel } from "../../../../components/InputByLabal";
import { InputGroupBox } from "../../../../components/InputGroupBox";
import { NotificationText } from "../../../../components/NotificationText";
import { StepsBox } from "../../../../components/Steps";
import { SubmitButtonBox } from "../../../../components/SubmitButtonBox";
import styles from "./style.module.css";

export const Zemanat2 = () => {
  const [trackingCode, setTrackingCode] = useState("654978");
  const path = useSelector((state) => state.progress.path);
  const user = useSelector((state) => state.safteData.user);
  const location = useLocation();
  const safte = location.state.safte;
  return (
    <div className={styles.Zemanat3_container}>
      <StepsBox stepsList={path} />
      <NotificationText type={"success"}>
        کاربر گرامی اطلاعات شما تا این لحظه ذخیره گردیده است. همچنین میتوانید با
        استفاده از کد پیگیری، فرایند جاری را ادامه دهید. کد پیگیری:{" "}
        {trackingCode}
      </NotificationText>
      <NotificationText type={"inform"}>
        کاربر گرامی، لطفا ضمن انتخاب شماره حساب مورد نظر خود، نسبت به تکمیل
        اطلاعات سفته و گیرنده آن اقدام نمایید.
      </NotificationText>

      <Details headerTitle={"اطلاعات سفته"}>
        <InformationBox title={"اطلاعات صادر کننده"}>
          <div className={styles.input_section}>
            <InputGroupBox>
              <InputByLabel label={"نوع شخص"} />
              <InputByLabel label={"نام و نام خانوداگی"} />
              <InputByLabel label={"شماره / شناسه ملی"} />
              <InputByLabel label={"شماره همراه"} />
              <InputByLabel label={"کد ثنا"} />
            </InputGroupBox>
            <InputGroupBox>
              <InputByLabel label={"شماره حساب"} />
              <InputByLabel label={"کد پستی"} />
              <InputByLabel label={"محل اقامت"} />
            </InputGroupBox>
          </div>
        </InformationBox>

        <InformationBox title={"اطلاعات سفته"}>
          <div className={styles.input_section}>
            <InputGroupBox>
              <InputByLabel label={"مبلغ تعهد"} />
              <InputByLabel label={"تاریخ و زمان صدور"} />
              <InputByLabel label={"محل پرداخت"} />
              <InputByLabel label={"شماره همراه"} />
            </InputGroupBox>
            <InputGroupBox>
              <InputByLabel label={"نام عامل ثبت کننده"} />
              <InputByLabel label={"شناسه پرداخت"} />
              <InputByLabel label={"تاریخ سر رسید"} />
              <InputByLabel label={"وضعیت سفته"} />
            </InputGroupBox>
          </div>
        </InformationBox>

        <InformationBox title={"اطلاعات دریافت کننده"}>
          <div className={styles.input_section}>
            <InputGroupBox>
              <InputByLabel label={"نوع شخص"} />
              <InputByLabel label={"نام و نام خانوادگی"} />
              <InputByLabel label={"شماره / شناسه ملی"} />
              <InputByLabel label={"شماره همراه"} />
            </InputGroupBox>
            <InputGroupBox>
              <InputByLabel label={"کد ثنا"} />
              <InputByLabel label={"توضیحات"} />
            </InputGroupBox>
          </div>
        </InformationBox>
      </Details>

      <Details headerTitle={"اطلاعات ظهر نویسان"}></Details>

      <Details headerTitle={"اطلاعات ضامن ها"}></Details>

      <hr />

      <InformationBox title={"اطلاعات ضامن جدید"}>
        <div className={styles.input_section}>
          <InputGroupBox>
            <InputByLabel label={"نوع شخص ضامن"} />
            <InputByLabel label={"نام و نام خانوداگی"} />
            <InputByLabel label={"شماره / شناسه ملی"} />
            <InputByLabel label={"تاریخ تولد"} />
            <InputByLabel label={"شماره همراه"} />
            <InputByLabel label={"کد ثنا"} />
          </InputGroupBox>
          <InputGroupBox>
            <InputByLabel
              label={"شماره حساب"}
              mode="dropDown"
              status={"error"}
            />

            <InputByLabel label={"شناسه یکتا"} />
            <InputByLabel label={"آدرس"} />
            <InputByLabel label={"توضیحات"} />
          </InputGroupBox>
        </div>
      </InformationBox>

      <SubmitButtonBox>
        <Button mode={"submit"} text="ارسال درخواست ضمانت نامه" />
        <Button mode={"cancle"} text="مرحله قبل" />
      </SubmitButtonBox>
    </div>
  );
};
