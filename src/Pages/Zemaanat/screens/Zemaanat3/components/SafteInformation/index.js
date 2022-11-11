import {
  FileTextOutlined,
  QuestionCircleFilled,
  UndoOutlined,
} from "@ant-design/icons";
import { Modal } from "antd";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "../../../../../../components/Button";
import { InformationBox } from "../../../../../../components/InformationBox";
import { InputByLabel } from "../../../../../../components/InputByLabal";
import { InputForPrice } from "../../../../../../components/InputForPrice";
import { InputGroupBox } from "../../../../../../components/InputGroupBox";
import { Maybe } from "../../../../../../components/Maybe";
import { SubmitButtonBox } from "../../../../../../components/SubmitButtonBox";
import styles from "./styles.module.css";

export function SafteInformaion({
  signed,
  setsignError,
  setSigned,
  signError,
  safte,
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
          <InputByLabel
            value={"1234567891234533"}
            disabled={true}
            label={"شناسه یکتا"}
            type={"number"}
          />
          <InputForPrice
            disabled={true}
            value={safte.commitmentAmount}
            label={"مبلغ تعهد"}
          />
          <InputByLabel
            disabled={true}
            label={"تاریخ صدور"}
            value={safte.IssueDate}
          />
          <InputByLabel
            disabled={true}
            label={"تاریخ سررسید"}
            value={safte.dateOfReceipt}
          />
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
          <Button
            mode="submit"
            loading={signLoading}
            handleClick={handleSigned}
          >
            {signError ? (
              <>
                <UndoOutlined />
                تلاش مجدد
              </>
            ) : (
              "امضای سفته"
            )}
          </Button>
          <Button type="cancel">مرحله قبل</Button>
        </Maybe>
      </SubmitButtonBox>
    </>
  );
}
