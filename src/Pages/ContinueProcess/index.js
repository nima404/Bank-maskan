import { CreditCardOutlined } from "@ant-design/icons";
import { InformationBox } from "../../components/InformationBox";
import { NotificationText } from "../../components/NotificationText";
import styles from "./style.module.css";
import { InputByLabel } from "../../components/InputByLabal/index";
import { InputGroupBox } from "../../components/InputGroupBox/index";
import { SubmitButtonBox } from "../../components/SubmitButtonBox/index";
import { useState } from "react";
import { VerifyModal } from "./components/VerifyModal";
import { Button } from "antd";
import { useHistory } from "react-router-dom";
export function ContinueProcess() {
  const [showModal, setShowModal] = useState(false);
  const [code, setCode] = useState("");
  const history = useHistory();
  const handleClick = () => {
    setShowModal(true);
  };
  const handleCancel = () => {
    setShowModal(false);
  };
  function handleBackWard() {
    history.push("/");
  }
  return (
    <div className={styles.delete_container}>
      <NotificationText type={"inform"}>
        کاربر گرامی در این صفحه می توانید جزئیات مربوط به سفته های خود رامشاهده
        کنید.همچنین میتوانید با توجه به نقش خود نسبت به سفته و وضعیت آن عملیات
        لازم را انجام دهید.
      </NotificationText>
      <InformationBox
        title={"ادامه فرایند با کد پیگیری"}
        icon={<CreditCardOutlined />}
      >
        <InputGroupBox>
          <InputByLabel
            label={"کد پیگیری"}
            value={code}
            onChange={(value) => setCode(value)}
            type={"number"}
            maxLength={5}
          />
        </InputGroupBox>
      </InformationBox>
      <SubmitButtonBox>
        <Button onClick={handleClick} className={styles.submit_style}>
          تایید
        </Button>
        <Button className={styles.cancle_style} onClick={handleBackWard}>
          بازگشت
        </Button>
      </SubmitButtonBox>
      <VerifyModal
        showModal={showModal}
        handleCancel={handleCancel}
        Title={"کد تایید"}
        code={code}
      />

<br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
