import {
  FileTextOutlined,
  QuestionCircleFilled,
  UndoOutlined,
} from "@ant-design/icons";
import { Modal } from "antd";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "../../../../../Button";
import { InformationBox } from "../../../../../InformationBox";
import { InputByLabel } from "../../../../../InputByLabal";
import { InputForPrice } from "../../../../../InputForPrice";
import { InputGroupBox } from "../../../../../InputGroupBox";
import { Maybe } from "../../../../../Maybe";
import { SubmitButtonBox } from "../../../../../SubmitButtonBox";
import styles from "./styles.module.css";

export function SafteInformaion({
  signed,
  setsignError,
  setSigned,
  signError,
}) {
  const [signLoading, setSignLoading] = useState(false);
  function handleSigned() {
    setSigned(true);
    setsignError(false);
  }
  useEffect(() => {
    const loadStart = setTimeout(() => setSignLoading(true), 3000);
    const getError = setTimeout(() => {
      setSignLoading(false);
      setsignError(true);
    }, 6000);
    return () => {
      clearTimeout(loadStart);
      clearTimeout(getError);
    };
  }, []);
  return (
    <>
      <InformationBox icon={<FileTextOutlined />} title={"اطلاعات سفته"}>
        <InputGroupBox>
          <InputByLabel disabled={true} label={"شناسه یکتا"} />
          <InputForPrice
            disabled={true}
            value={"25000000"}
            label={"مبلغ تعهد"}
          />
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
      <Modal open={signLoading} footer={null}>
        کاربر گرامی، سفته شما در حال امضا توسط ... می‌باشد، لطفا شکیبا باشید.
      </Modal>
      <SubmitButtonBox>
        <Maybe condition={!signed}>
          <Button type="primary" loading={signLoading} onClick={handleSigned}>
            {signError ? (
              <>
                <UndoOutlined />
                تلاش مجدد
              </>
            ) : (
              "امضای سفته"
            )}
          </Button>
          <Button type="secondary">مرحله قبل</Button>
        </Maybe>
      </SubmitButtonBox>
    </>
  );
}
