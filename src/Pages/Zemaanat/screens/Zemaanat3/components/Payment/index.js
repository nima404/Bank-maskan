import { FileTextOutlined, UndoOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "../../../../../../components/Button";
import { InformationBox } from "../../../../../../components/InformationBox";
import { InputByLabel } from "../../../../../../components/InputByLabal";
import { InputForPrice } from "../../../../../../components/InputForPrice";
import { InputGroupBox } from "../../../../../../components/InputGroupBox";
import { Maybe } from "../../../../../../components/Maybe";
import { NotificationText } from "../../../../../../components/NotificationText";
import { SubmitButtonBox } from "../../../../../../components/SubmitButtonBox";
import MultiInput from "../MultiInput";
import "./style.css";
export function Payment() {
  const [cardNum, setCardNum] = useState(["", "", "", ""]);
  const [CVV2, setCVV2] = useState("");
  const [cardExpireDate, setCardExpireDate] = useState(["", ""]);
  const [getPassword, setgetPassword] = useState(true);
  const [paymentError, setPaymentError] = useState(false);
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [cardPassword, setCardPassword] = useState([""]);
  const history = useHistory();
  function handlePayment() {
    if (!paymentError) {
      setPaymentLoading(true);
      setTimeout(() => {
        setPaymentLoading(false);
        setPaymentError(true);
      }, 3000);
    } else {
      history.push("/payment");
    }
  }
  useEffect(() => {
    const cardNumber = cardNum.join("");
    // const ExpireDate = cardExpireDate[0].startsWith("0")
    //   ? `14${cardExpireDate.join("/")}`
    //   : `13${cardExpireDate.join("/")}`;
    const ExpireDate = cardExpireDate.join("");
    if (
      cardNumber.length === 16 &&
      ExpireDate.length === 4 &&
      CVV2.length === 4
    )
      setgetPassword(false);
    else setgetPassword(true);
  }, [cardNum, CVV2, cardExpireDate]);
  return (
    <>
      <Maybe condition={paymentError}>
        <NotificationText type={"error"}>
          پرداخت با خطا مواجه شد، لطفا مجددا تلاش نمایید.
        </NotificationText>
      </Maybe>
      <InformationBox icon={<FileTextOutlined />} title={"اطلاعات پرداخت"}>
        <InputGroupBox>
          <Maybe condition={!paymentError}>
            <InputForPrice disabled={true} value={"20000"} label={"کارمزد"} />
            <InputForPrice disabled={true} value={"12345"} label={"مالیات"} />
            <InputByLabel
              disabled={true}
              value={"09023334444"}
              label={"شماره همراه"}
            />
          </Maybe>
          <MultiInput
            maxLength={4}
            type="number"
            value={cardNum}
            setValue={setCardNum}
            label={"شماره کارت"}
          />
          <InputByLabel
            type={"password"}
            value={CVV2}
            onChange={(val) => setCVV2(val)}
            label={"CVV2"}
            maxLength={4}
          />
          <MultiInput
            maxLength={2}
            type="number"
            value={cardExpireDate}
            setValue={setCardExpireDate}
            label={"تاریخ انقضا"}
            seperator={<span className="expire-date-seperator"></span>}
            style={{ width: "105px" }}
            parentStyle={{ flexDirection: "row" }}
          />
          <MultiInput
            type="number"
            maxLength={7}
            setValue={setCardPassword}
            value={cardPassword}
            label={"رمز کارت"}
            style={{ width: "50%" }}
            seperator={
              <Button
                type="primary"
                className="recieve-button"
                disabled={getPassword}
              >
                درخواست رمز
              </Button>
            }
          />
        </InputGroupBox>
      </InformationBox>

      <SubmitButtonBox>
        {/* payment buttons */}
        <Button
          mode="submit"
          loading={paymentLoading}
          handleClick={handlePayment}
        >
          {paymentError && <UndoOutlined />}
          پرداخت
        </Button>
        <Button type="secondary">مرحله قبل</Button>
      </SubmitButtonBox>
    </>
  );
}
