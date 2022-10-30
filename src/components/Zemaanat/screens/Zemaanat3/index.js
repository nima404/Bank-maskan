import {
  FileTextOutlined,
  QuestionCircleFilled,
  UndoOutlined,
} from "@ant-design/icons";
import { Button, Modal } from "antd";
import { useEffect, useState } from "react";
import { InformationBox } from "../../../InformationBox";
import { InputByLabel } from "../../../InputByLabal";
import { InputGroupBox } from "../../../InputGroupBox";
import { Maybe } from "../../../Maybe";
import { NotificationText } from "../../../NotificationText";
import { SubmitButtonBox } from "../../../SubmitButtonBox";
import styles from "./styles.module.css";
import "./style.css";
import { InputForPrice } from "./InputForPrice";
export function Zemaanet3() {
  const [code, setCode] = useState("۷۸۹۴۵۶");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [signed, setSigned] = useState(false);
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
  function handleSigned() {
    setSigned(true);
    setError(false);
  }
  return (
    <div className={styles.Zemaanet3}>
      <section className={styles.Zemaanet3__notification}>
        <NotificationText type={"success"}>
          کاربر گرامی اطلاعات شما تا این مرحله ذخیره گردیده است. همچنین
          می‌توانید با استفاده از کد پی‌گیری، فرایند جاری را ادامه دهید. کد
          پی‌گیری: {code}
        </NotificationText>
        <Maybe condition={!signed}>
          <NotificationText type={"inform"}>
            کاربر گرامی، جهت خرید سفته مورد نظر خود می‌بایست ابتدا آن را امضا
            نمایید. لطفا پیش از ارسال درخواست امضای سفته، راهنمای امضا را مطالعه
            نمایید.
          </NotificationText>
        </Maybe>
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
          <Maybe condition={!signed}>
            <div className={styles.Zemaanet3__body__links}>
              <a className={styles.sign_guid} href="#">
                راهنمای امضای الکترونیکی <QuestionCircleFilled />
              </a>
              <a className={styles.Zemaanet3_links} href="#">
                دانلود نرم افزار ابزارست
              </a>
              <a className={styles.Zemaanet3_links} href="#">
                دانلود برنامه امضای همراه مسکن
              </a>
            </div>
          </Maybe>
        </InformationBox>
        <Modal open={loading} footer={null}>
          کاربر گرامی، سفته شما در حال امضا توسط ... می‌باشد، لطفا شکیبا باشید.
        </Modal>
        <Maybe condition={signed}>
          <InformationBox icon={<FileTextOutlined />} title={"اطلاعات پرداخت"}>
            <InputGroupBox>
              <InputForPrice disabled={true} value={"20000"} label={"کارمزد"} />
              <InputForPrice disabled={true} value={"12345"} label={"مالیات"} />
              <InputByLabel
                disabled={true}
                value={"09023334444"}
                label={"شماره همراه"}
              />
            </InputGroupBox>
          </InformationBox>
        </Maybe>
      </section>
      <SubmitButtonBox>
        <Maybe condition={!signed}>
          <Maybe condition={!error}>
            <Button type="primary" loading={loading}>
              امضای سفته
            </Button>
          </Maybe>
          <Maybe condition={error}>
            <Button type="primary" onClick={handleSigned} loading={loading}>
              <UndoOutlined /> تلاش مجدد
            </Button>
          </Maybe>
          <Button type="secondary">مرحله قبل</Button>
        </Maybe>
        <Maybe condition={signed}>
          <Button type="primary">پرداخت</Button>
          <Button type="secondary">مرحله قبل</Button>
        </Maybe>
      </SubmitButtonBox>
    </div>
  );
}
