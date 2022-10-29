import {
  FileTextOutlined,
  QuestionCircleFilled,
  UndoOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import { useEffect, useState } from "react";
import { InformationBox } from "../../../InformationBox";
import { InputByLabel } from "../../../InputByLabal";
import { InputGroupBox } from "../../../InputGroupBox";
import { Maybe } from "../../../Maybe";
import { NotificationText } from "../../../NotificationText";
import { SubmitButtonBox } from "../../../SubmitButtonBox";
import styles from "./styles.module.css";
import "./style.css";
export function Zemaanet3() {
  const [code, setCode] = useState("۷۸۹۴۵۶");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const loadStart = setTimeout(() => setLoading(true), 3000);
    const getError = setTimeout(() => {
      setLoading(false);
      setError(true);
    }, 6000);
    return () => {
      clearTimeout(loadStart);
      clearTimeout(getError);
    };
  }, []);
  return (
    <div className={styles.Zemaanet3}>
      <section className={styles.Zemaanet3__notification}>
        <NotificationText type={"success"}>
          کاربر گرامی اطلاعات شما تا این مرحله ذخیره گردیده است. همچنین
          می‌توانید با استفاده از کد پی‌گیری، فرایند جاری را ادامه دهید. کد
          پی‌گیری: {code}
        </NotificationText>
        <NotificationText type={"inform"}>
          کاربر گرامی، جهت خرید سفته مورد نظر خود می‌بایست ابتدا آن را امضا
          نمایید. لطفا پیش از ارسال درخواست امضای سفته، راهنمای امضا را مطالعه
          نمایید.
        </NotificationText>
        <Maybe condition={error}>
          <NotificationText type={"error"}>پیام عدم موفقیت</NotificationText>
        </Maybe>
      </section>
      <section className={styles.Zemaanet3__body}>
        <InformationBox icon={<FileTextOutlined />} title={"اطلاعات سفته"}>
          <InputGroupBox>
            <InputByLabel disabled={true} label={"شناسه یکتا"} />
            <InputByLabel disabled={true} label={"مبلغ تعهد"} />
            <InputByLabel disabled={true} label={"تاریخ صدور"} />
            <InputByLabel disabled={true} label={"تاریخ سررسید"} />
          </InputGroupBox>
          <div className={styles.Zemaanet3__body__links}>
            <a className={styles.sign_guid} href="#">
              راهنمای امضای الکترونیکی <QuestionCircleFilled />
            </a>
          </div>
        </InformationBox>
      </section>
      <SubmitButtonBox>
        <Maybe condition={!error}>
          <Button type="primary" loading={loading}>
            امضای سفته
          </Button>
        </Maybe>
        <Maybe condition={error}>
          <Button type="primary" loading={loading}>
            <UndoOutlined /> تلاش مجدد
          </Button>
        </Maybe>
        <Button type="secondary">مرحله قبل</Button>
      </SubmitButtonBox>
    </div>
  );
}
