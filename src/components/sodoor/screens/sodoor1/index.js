import { FileTextOutlined, UserSwitchOutlined } from "@ant-design/icons";
import { UserAddOutlined } from "@ant-design/icons";
import { InputByLabel } from "../../../InputByLabal";
import { ButtonN } from "../../ButtonN";
import { SubmitButtonBoxN } from "../../SubmitButtonBoxN";
import { DiffrentInputByLable } from "../../TextArea";
import { InformationBoxN } from "../../InformationBoxN";
import { InputGroupBoxN } from "../../InputGroupBoxN";
import { NotificationText } from "../../../NotificationText";
import styles from "./style.module.css";
import { InputForPriceN } from "../../InputForPriceN";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Modal } from "antd";
import { useHistory } from "react-router-dom";
import { TitleModal } from "../../../../Pages/DeleteRequest/components/VerifyModal/TitleModal";

export function Sodoor1() {
  const user = useSelector((state) => state.safteData.user);
  const [postalCode, setPostalCode] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [address, setAddress] = useState("");
  const [newSafte, setNewSafte] = useState({
    commitmentAmount: "",
    IssueDate: "",
    dateOfReceipt: "",
    paymentLocation: "",
    receiver: {
      fullName: "",
      nationalNumber: "",
      phoneNumber: "",
      descriptions: "",
    },
  });
  console.log(newSafte);
  const [showModal, setShowModal] = useState(false);
  const history = useHistory();
  function handleChangeNewSafte(obj) {
    setNewSafte((prev) => {
      return { ...prev, ...obj };
    });
  }
  function handleChangeReceiver(obj) {
    setNewSafte((prev) => {
      return { ...prev, receiver: { ...prev.receiver, ...obj } };
    });
  }
  return (
    <div className={styles.sodoor_container}>
      <NotificationText type={"success"}>
        کاربر گرامی اطلاعات شما تا این مرحله ذخیره گردیده است. همچنین می‌توانید
        با استفاده از کد پی‌گیری، فرایند جاری را ادامه دهید. کد پی‌گیری: ۷۸۹۴۵۶
      </NotificationText>
      <NotificationText type={"inform"}>
        کاربرگرامی، لطفا ضمن انتخاب شماره حساب موردنظر خود، نسبت به تکمیل
        اطلاعات سفته و گیرنده آن اقدام نمایید.
      </NotificationText>
      <InformationBoxN
        title={" اطلاعت متعهد "}
        icon={<UserSwitchOutlined />}
        number={"1"}
      >
        <InputGroupBoxN>
          <InputByLabel
            label={" نام و نام خانوادگی "}
            disabled={true}
            value={user.fullName}
          ></InputByLabel>
          <InputByLabel
            value={user.nationalNumber}
            label={" کدملی "}
            disabled={true}
          />
          <InputByLabel
            value={user.phoneNumber}
            label={" شماره همراه "}
            disabled={true}
          />
          <InputByLabel
            status={"error"}
            mode={"dropDown"}
            label={" شماره حساب "}
            // disabled={true}
            maxLength={13}
            value={accountNumber}
            onChange={(value) => setAccountNumber(value)}
            type={"number"}
          />
        </InputGroupBoxN>
        <InputGroupBoxN>
          <InputByLabel
            maxLength={10}
            value={postalCode}
            onChange={(value) => setPostalCode(value)}
            label={" کدپستی "}
            type={"number"}
          ></InputByLabel>
          <DiffrentInputByLable
            value={address}
            onChange={(value) => setAddress(value)}
            label={"آدرس"}
            rows={3}
          />
        </InputGroupBoxN>
      </InformationBoxN>
      <InformationBoxN
        icon={<FileTextOutlined />}
        title={"اطلاعات سفته"}
        number={"2"}
      >
        <InputGroupBoxN>
          <InputForPriceN
            label={"مبلغ تعهد"}
            value={newSafte.commitmentAmount}
            onChange={(value) =>
              handleChangeNewSafte({ commitmentAmount: value })
            }
          />
          <InputByLabel
            label={"تاریخ صدور"}
            type={"date"}
            value={newSafte.IssueDate}
            onChange={(value) => handleChangeNewSafte({ IssueDate: value })}
          />
        </InputGroupBoxN>
        <InputGroupBoxN>
          <InputByLabel
            label={"محل پرداخت"}
            value={newSafte.paymentLocation}
            onChange={(value) =>
              handleChangeNewSafte({ paymentLocation: value })
            }
          />
          <InputByLabel
            label={"تاریخ سررسید"}
            type={"date"}
            value={newSafte.dateOfReceipt}
            onChange={(value) => handleChangeNewSafte({ dateOfReceipt: value })}
          />
        </InputGroupBoxN>
      </InformationBoxN>
      <InformationBoxN
        title={" اطلاعات گیرنده "}
        icon={<UserAddOutlined />}
        number={"3"}
      >
        <InputGroupBoxN>
          <InputByLabel
            label={" نام و نام خانوادگی "}
            value={newSafte.receiver.fullName}
            onChange={(value) => handleChangeReceiver({ fullName: value })}
          />
          <InputByLabel
            label={" کدملی "}
            type={"number"}
            maxLength={10}
            value={newSafte.receiver.nationalNumber}
            onChange={(value) =>
              handleChangeReceiver({ nationalNumber: value })
            }
          />
          <InputByLabel
            label={" شماره همراه "}
            type={"number"}
            maxLength={11}
            value={newSafte.receiver.phoneNumber}
            onChange={(value) => handleChangeReceiver({ phoneNumber: value })}
          />
        </InputGroupBoxN>
        <InputGroupBoxN>
          <DiffrentInputByLable
            label={"توضیحات"}
            value={newSafte.receiver.descriptions}
            onChange={(value) => handleChangeReceiver({ descriptions: value })}
            rows={3}
          />
        </InputGroupBoxN>
      </InformationBoxN>
      <SubmitButtonBoxN>
        <ButtonN
          type="button"
          mode="submit"
          text="ارسال درخواست صدور سفته"
          handleClick={() => setShowModal(true)}
        ></ButtonN>
        <ButtonN type="button" text="مرحله قبل"></ButtonN>
      </SubmitButtonBoxN>
      <Modal
        title={<TitleModal title={"تایید اطلاعات"} />}
        open={showModal}
        onOk={() => {
          setShowModal(false);
          history.push("./sign_payment", { safteInformation: newSafte });
        }}
        onCancel={() => {
          setShowModal(false);
        }}
        okText="تایید"
        cancelText="ویرایش"
      ></Modal>
    </div>
  );
}
