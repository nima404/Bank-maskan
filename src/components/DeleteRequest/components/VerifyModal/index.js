import { Maybe } from "../../../Maybe";
import { Modal } from "antd";
import style from "./style.css";
import { TitleModal } from "./TitleModal";
import { NotificationText } from "../../../NotificationText";
import { InputByLabel } from "../../../InputByLabal";
import { InputGroupBox } from "./../../../InputGroupBox/index";
import { CountDown } from "./../CountDown/index";
export function VerifyModal({ showModal, handleCancel, Title, code }) {
  console.log(showModal);
  return (
    <Modal
      title={<TitleModal title={Title} />}
      open={showModal}
      // onOk={handleOk}
      onCancel={handleCancel}
      okText="تایید"
      cancelText="بازگشت"
    >
      <NotificationText type={"inform"}>
        کاربر گرامی لطفا جهت ادامه فرایند پیگیری سفته کد تایید ارسال شده را وارد
        کنید.
      </NotificationText>
      <h4>کدپیگیری:{code}</h4>

      <InputByLabel label={"کد تایید"} />
      <CountDown />
    </Modal>
  );
}
