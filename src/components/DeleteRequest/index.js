import { CreditCardOutlined } from "@ant-design/icons";
import { InformationBox } from "../InformationBox";
import { NotificationText } from "../NotificationText";
import styles from "./style.module.css";
import { InputByLabel } from "./../InputByLabal/index";
import { InputGroupBox } from "./../InputGroupBox/index";
import { SubmitButtonBox } from "./../SubmitButtonBox/index";

// import { Button } from "./components/Button";
import { useState } from "react";
import { VerifyModal } from "./components/VerifyModal";
import { Button } from "antd";
export function DeleteRequest() {
  const [showModal, setShowModal] = useState(false);
  const [code, setCode] = useState("12345");
  console.log(showModal);
  const handleClick = () => {
    setShowModal(true);
  };
  const handleCancel = () => {
    setShowModal(false);
  };
  return (
    <div className={styles.delete_container}>
      <NotificationText type={"inform"}>
        کاربر گرامی در این صفحه می توانید جزئیات مربوط به سفته های خود رامشاهده
        کنید.همچنین میتوانید با توجه به نقش خود نسبت به سفته و وضعیت آن عملیات
        لازم را انجام دهید.
      </NotificationText>
      <InformationBox title={"حذف درخواست"} icon={<CreditCardOutlined />}>
        <InputGroupBox>
          <InputByLabel label={"کد پیگیری"} />
        </InputGroupBox>
      </InformationBox>
      <SubmitButtonBox>
        <Button onClick={handleClick} className={styles.submit_style}>
          تایید
        </Button>
        <Button className={styles.cancle_style}>بازگشت</Button>
      </SubmitButtonBox>
      <VerifyModal
        showModal={showModal}
        handleCancel={handleCancel}
        Title={"کد تایید"}
        code={code}
      />
    </div>
  );
}
