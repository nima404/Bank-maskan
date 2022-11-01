import { CreditCardOutlined } from "@ant-design/icons";
import { InformationBox } from "../InformationBox";
import { NotificationText } from "../NotificationText";
import styles from "./style.module.css";
import { InputByLabel } from "./../InputByLabal/index";
import { InputGroupBox } from "./../InputGroupBox/index";
import { SubmitButtonBox } from "./../SubmitButtonBox/index";

import { Button } from "./components/Button";
import { VerifyModal } from "../Zemaanat/screens/Zemanat2/components/VerifyModal";
export function DeleteRequest() {
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
        <Button text={"تایید"} title={"تایید"} mode={"submit"} />
        <Button
          text={"بازگشت"}
          title={"بازگشت"}
          mode={"cancel"}
          disabled={false}
        />
      </SubmitButtonBox>
    </div>
  );
}
