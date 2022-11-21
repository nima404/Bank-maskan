import { Modal } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
// import { useLocation } from "react-router-dom";
import { Button } from "../../../../components/Button";
import { Details } from "../../../../components/Details";
import { InformationBox } from "../../../../components/InformationBox";
import { InputByLabel } from "../../../../components/InputByLabal";
import { InputGroupBox } from "../../../../components/InputGroupBox";
import { NotificationText } from "../../../../components/NotificationText";
import { SubmitButtonBox } from "../../../../components/SubmitButtonBox";
import { TitleModal } from "../../../DeleteRequest/components/VerifyModal/TitleModal";
import styles from "./style.module.css";

export const Zemanat2 = () => {
  const [trackingCode, setTrackingCode] = useState("654978");
  const path = useSelector((state) => state.progress.path);
  const user = useSelector((state) => state.safteData.user);
  const [showModal, setShowModal] = useState(false);
  const history = useHistory();
  console.log(user);
  const location = useLocation();
  const safte = location.state.safte;

  return (
    <div className={styles.Zemanat3_container}>
      <NotificationText type={"success"}>
        کاربر گرامی اطلاعات شما تا این لحظه ذخیره گردیده است. همچنین میتوانید با
        استفاده از کد پیگیری، فرایند جاری را ادامه دهید. کد پیگیری:{" "}
        {trackingCode}
      </NotificationText>
      <NotificationText type={"inform"}>
        کاربر گرامی، لطفا ضمن انتخاب شماره حساب مورد نظر خود، نسبت به تکمیل
        اطلاعات سفته و گیرنده آن اقدام نمایید.
      </NotificationText>

      <Details headerTitle={"اطلاعات سفته"}>
        <InformationBox title={"اطلاعات صادر کننده"}>
          <div className={styles.input_section}>
            <InputGroupBox>
              <InputByLabel
                label={"نوع شخص"}
                // disabled={true}
                value={user.persontype}
              />
              <InputByLabel
                label={"نام و نام خانوداگی"}
                // disabled={true}
                value={user.fullName}
              />
              <InputByLabel
                label={"شماره / شناسه ملی"}
                // disabled={true}
                value={user.nationalNumber}
              />
              <InputByLabel
                label={"شماره همراه"}
                // disabled={true}
                value={user.phoneNumber}
              />
              <InputByLabel
                label={"کد ثنا"}
                // disabled={true}
                value={user.sanaCode}
              />
            </InputGroupBox>
            <InputGroupBox>
              <InputByLabel
                label={"شماره حساب"}
                // disabled={true}
                value={user.accountNumber}
              />
              <InputByLabel
                label={"کد پستی"}
                // disabled={true}
                value={user.postalCode}
              />
              <InputByLabel
                label={"محل اقامت"}
                // disabled={true}
                value={user.address}
              />
            </InputGroupBox>
          </div>
        </InformationBox>

        <InformationBox title={"اطلاعات سفته"}>
          <div className={styles.input_section}>
            <InputGroupBox>
              <InputByLabel
                label={"مبلغ تعهد"}
                // disabled={true}
                value={user.commitmentAmount}
              />
              <InputByLabel
                label={"تاریخ و زمان صدور"}
                // disabled={true}
                value={user.IssueDate}
              />
              <InputByLabel
                label={"محل پرداخت"}
                // disabled={true}
                value={user.placeOfPayment}
              />
              <InputByLabel
                label={"شماره همراه"}
                // disabled={true}
                value={user.address}
              />
            </InputGroupBox>
            <InputGroupBox>
              <InputByLabel
                label={"نام عامل ثبت کننده"}
                // disabled={true}
                value={user.agentName}
              />
              <InputByLabel
                label={"شناسه پرداخت"}
                // disabled={true}
                value={user.paymentCode}
              />
              <InputByLabel
                label={"تاریخ سر رسید"}
                // disabled={true}
                value={user.dateOfReceipt}
              />
              <InputByLabel
                label={"وضعیت سفته"}
                // disabled={true}
                value={user.condition}
              />
            </InputGroupBox>
          </div>
        </InformationBox>

        <InformationBox title={"اطلاعات دریافت کننده"}>
          <div className={styles.input_section}>
            <InputGroupBox>
              <InputByLabel
                label={"نوع شخص"}
                // disabled={true}
                value={user.persontype}
              />
              <InputByLabel
                label={"نام و نام خانوادگی"}
                // disabled={true}
                value={user.fullName}
              />
              <InputByLabel
                label={"شماره / شناسه ملی"}
                // disabled={true}
                value={user.nationalNumber}
              />
              <InputByLabel
                label={"شماره همراه"}
                // disabled={true}
                value={user.phoneNumber}
              />
            </InputGroupBox>
            <InputGroupBox>
              <InputByLabel
                label={"کد ثنا"}
                // disabled={true}
                value={user.sanaCode}
              />
              <InputByLabel
                label={"توضیحات"}
                // disabled={true}
                value={user.scription}
              />
            </InputGroupBox>
          </div>
        </InformationBox>
      </Details>

      <Details headerTitle={"اطلاعات ظهر نویسان"}></Details>

      <Details headerTitle={"اطلاعات ضامن ها"}></Details>

      <hr />

      <InformationBox title={"اطلاعات ضامن جدید"}>
        <div className={styles.input_section}>
          <InputGroupBox>
            <InputByLabel
              label={"نوع شخص ضامن"}
              // disabled={true}
              value={user.persontype}
            />
            <InputByLabel
              label={"نام و نام خانوداگی"}
              // disabled={true}
              value={user.fullName}
            />
            <InputByLabel
              label={"شماره / شناسه ملی"}
              // disabled={true}
              value={user.nationalNumber}
            />
            {/* <InputByLabel label={"تاریخ تولد"} disabled={true} /> */}
            <InputByLabel
              label={"شماره همراه"}
              // disabled={true}
              value={user.phoneNumber}
            />
            {/* <InputByLabel label={"کد ثنا"} disabled={true} /> */}
          </InputGroupBox>
          <InputGroupBox>
            <InputByLabel
              label={"شماره حساب"}
              mode="dropDown"
              status={"error"}
            />

            <InputByLabel label={"شناسه یکتا"} />
            <InputByLabel label={"آدرس"} />
            <InputByLabel label={"توضیحات"} />
          </InputGroupBox>
        </div>
      </InformationBox>

      <SubmitButtonBox>
        <Button
          mode={"submit"}
          handleClick={() => setShowModal(true)}
          text="ارسال درخواست ضمانت نامه"
        />
        <Button mode={"cancle"} text="مرحله قبل" />
      </SubmitButtonBox>
      <Modal
        title={<TitleModal title={"تایید اطلاعات"} />}
        open={showModal}
        onOk={() => {
          setShowModal(false);
          history.push("./sign_payment", { safteInformation: safte });
        }}
        onCancel={() => {
          setShowModal(false);
        }}
        okText="تایید"
        cancelText="ویرایش"
      >
        <div className={styles.modalBody_parent}>
          <p>نام و نام خانوداگی</p>
          <p>{user.fullName}</p>
        </div>

        <div className={styles.modalBody_parent}>
          <p>کد ملی</p>
          <p>{user.nationalNumber}</p>
        </div>

        <div className={styles.modalBody_parent}>
          <p>شماره همراه</p>
          <p>{user.phoneNumber}</p>
        </div>

        <div className={styles.modalBody_parent}>
          <p>آدرس</p>
          <p>{user.address}</p>
        </div>
      </Modal>

      {
        console.log("user: " , user)
      }
    </div>
  );
};
