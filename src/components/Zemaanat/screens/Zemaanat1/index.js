import { InformationBox } from "../../../InformationBox";
import styles from "./styles.module.css";
import "./style.css";
import { FileSearchOutlined } from "@ant-design/icons";
import { InputByLabel } from "../../../InputByLabal";
import { InputGroupBox } from "../../../InputGroupBox";
import { SubmitButtonBox } from "../../../SubmitButtonBox";
import { Button } from "../../../Button";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { Modal } from "antd";
// ESTELAAM SAFTE
export function Zemaanat1() {
  const history = useHistory();
  const [nationalCode, setNationalCode] = useState("");
  const [sanaCode, setSanaCode] = useState("");
  const [safteUniqueId, setSafeUniqueId] = useState("");
  const [disableInquiry, setDisableInquiry] = useState(true);
  const [recieving, setRecieving] = useState(false);
  // const [user,setUser]=
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
    history.push("/");
  }
  function handleGetData() {
    // 0481301302
    console.log(
      `https://6358f6efff3d7bddb99528fa.mockapi.io/api/safteData/saftehDatas?search=${nationalCode}`
    );
    setRecieving(true);
    axios
      .get(
        `https://6358f6efff3d7bddb99528fa.mockapi.io/api/safteData/saftehDatas?nationalNumber=${nationalCode}`
      )
      .then((res) => {
        const userSafte = res.data[0].safte.find(
          (item) => item.uniqueIdentifier === safteUniqueId
        );
        if (userSafte === undefined) {
          throw new Error("not Found");
        } else {
          history.push("/zemaanat", { user: res.data[0] });
        }
      })
      .catch(() => error())
      .finally(() => setRecieving(false));
  }
  return (
    <div className={styles.Zemaanat1_container}>
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
