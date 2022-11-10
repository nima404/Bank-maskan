import { InformationBox } from "../../../../components/InformationBox";
import styles from "./styles.module.css";
import "./style.css";
import { FileSearchOutlined } from "@ant-design/icons";
import { InputByLabel } from "../../../../components/InputByLabal";
import { InputGroupBox } from "../../../../components/InputGroupBox";
import { SubmitButtonBox } from "../../../../components/SubmitButtonBox";
import { Button } from "../../../../components/Button";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  editPathBackWard,
  editPathForward,
  setPath,
} from "../../../../store/progress/progress.action";
import { NotificationText } from "../../../../components/NotificationText";
import { StepsBox } from "../../../../components/Steps";
// ESTELAAM SAFTE
export function Zemaanat1() {
  const history = useHistory();
  const [nationalCode, setNationalCode] = useState("");
  const [sanaCode, setSanaCode] = useState("");
  const [safteUniqueId, setSafeUniqueId] = useState("");
  const [disableInquiry, setDisableInquiry] = useState(true);
  const [recieving, setRecieving] = useState(false);
  const dispatch = useDispatch();
  const path = [
    { title: "دریافت اطلاعات", status: "finish" },
    { title: "احراز هویت", status: "finish" },
    { title: "استعلام سفته", status: "process" },
    { title: "ضمانت سفته", status: "wait" },
    { title: "امضای سفته", status: "wait" },
    { title: "پرداخت", status: "wait" },
    { title: "دریافت سفته نهایی", status: "wait" },
  ];
  const user = useSelector((state) => state.safteData.user);
  useEffect(() => {
    dispatch(setPath(path));
  }, []);
  const error = () => {
    Modal.error({
      title: "خطا در دریافت اطلاعات",
      content: " اطلاعات وارد شده صحیح نمی باشد، لطفا بررسی و دوباره تلاش کنید",
      okText: "تایید",
    });
  };
  useEffect(() => {
    if (
      nationalCode.length === 10 &&
      safteUniqueId.length === 16 &&
      sanaCode.length === 8
    ) {
      setDisableInquiry(false);
    } else setDisableInquiry(true);
  }, [nationalCode, sanaCode, safteUniqueId]);
  function handleBack() {
    dispatch(editPathBackWard({ title: "استعلام سفته", status: "wait" }));
    history.push("/");
  }
  function handleGetData() {
    // 0481301302 nationalNumber
    // safte unique id 1234567891234533
    console.log(user);
    setRecieving(true);
    try {
      const userSafte = user.safte.find(
        (item) => item.uniqueIdentifier === safteUniqueId
      );
      if (userSafte === undefined) {
        throw new Error("user did not Found");
      } else {
        dispatch(editPathForward({ title: "استعلام سفته" }));
        history.push("/zemaanat", { safte: userSafte });
      }
    } catch (e) {
      error();
    } finally {
      setRecieving(false);
    }
    // axios
    //   .get(
    //     `https://6358f6efff3d7bddb99528fa.mockapi.io/api/safteData/saftehDatas?nationalNumber=${nationalCode}`
    //   )
    //   .then((res) => {
    //     const userSafte = res.data[0].safte.find(
    //       (item) => item.uniqueIdentifier === safteUniqueId
    //     );
    //     if (userSafte === undefined) {
    //       throw new Error("not Found");
    //     } else {
    //       history.push("/zemaanat", { user: res.data[0] });
    //     }
    //   })
    //   .catch(() => error())
    //   .finally(() => setRecieving(false));
  }
  return (
    <div className={styles.Zemaanat1_container}>
      <StepsBox stepsList={path} />
      <NotificationText type={"success"}>
        کاربر گرامی اطلاعات شما تا این لحظه ذخیره گردیده است. همچنین میتوانید با
        استفاده از کد پیگیری، فرایند جاری را ادامه دهید. کد پیگیری:{"654978"}
      </NotificationText>
      <NotificationText type={"inform"}>
        کاربر گرامی، لطفا ضمن انتخاب شماره حساب مورد نظر خود، نسبت به تکمیل
        اطلاعات سفته و گیرنده آن اقدام نمایید.
      </NotificationText>
      <InformationBox title={"استعلام سفته"} icon={<FileSearchOutlined />}>
        <InputGroupBox>
          <InputByLabel
            value={nationalCode}
            onChange={(value) => setNationalCode(value)}
            type={"number"}
            maxLength={10}
            label={"شماره/ شناسه ملی صادر کننده"}
          />
          <InputByLabel
            value={sanaCode}
            onChange={(value) => setSanaCode(value)}
            type={"number"}
            label={"کد ثنای صادر کننده"}
            maxLength={8}
          />
        </InputGroupBox>
        <InputGroupBox>
          <InputByLabel
            value={safteUniqueId}
            onChange={(value) => setSafeUniqueId(value)}
            type={"number"}
            label={"شناسه یکتای سفته"}
            maxLength={16}
          />
        </InputGroupBox>
      </InformationBox>
      <SubmitButtonBox>
        <Button
          text={"استعلام سفته"}
          title={"استعلام"}
          mode={"submit"}
          disabled={disableInquiry}
          handleClick={handleGetData}
          loading={recieving}
        />
        <Button
          text={"بازگشت"}
          title={"بازگشت"}
          disabled={false}
          handleClick={handleBack}
        />
      </SubmitButtonBox>
    </div>
  );
}
