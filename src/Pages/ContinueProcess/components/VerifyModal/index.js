import { Modal } from "antd";
import { NotificationText } from "../../../../components/NotificationText";
import { InputByLabel } from "../../../../components/InputByLabal";
import { CountDown } from "../CountDown/index";
import { TitleModal } from "./../../../DeleteRequest/components/VerifyModal/TitleModal/index";
export function VerifyModal({ showModal, handleCancel, Title, code }) {
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
      <h4>کدپیگیری: {code}</h4>
      <div className="input-count-down">
        <InputByLabel label={"کد تایید"} />
        <CountDown />
      </div>
    </Modal>
  );
}
