import { InformationBox } from "../../../InformationBox";
import styles from "./styles.module.css";
import { FileSearchOutlined } from "@ant-design/icons";
import { InputByLabel } from "../../../InputByLabal";
import { InputGroupBox } from "../../../InputGroupBox";
import { SubmitButtonBox } from "../../../SubmitButtonBox";
import { Button } from "../../../Button";
import { useState } from "react";
import { useHistory } from "react-router-dom";
// ESTELAAM SAFTE
export function Zemaanat1() {
  const history = useHistory();
  const [nationalCode, setNationalCode] = useState("");
  const [sanaCode, setSanaCode] = useState("");
  const [safeUniqueId, setSafeUniqueId] = useState("");

  function handleBack() {
    history.push("/");
  }
  return (
    <div className={styles.Zemaanat1_container}>
      <InformationBox title={"استعلام سفته"} icon={<FileSearchOutlined />}>
        <InputGroupBox>
          <InputByLabel
            value={nationalCode}
            onChange={(value) => setNationalCode(value)}
            type={"number"}
            label={"شماره/ شناسه ملی صادر کننده"}
          />
          <InputByLabel
            value={sanaCode}
            onChange={(value) => setSanaCode(value)}
            type={"number"}
            label={"کد ثنای صادر کننده"}
          />
        </InputGroupBox>
        <InputGroupBox>
          <InputByLabel
            value={safeUniqueId}
            onChange={(value) => setSafeUniqueId(value)}
            type={"number"}
            label={"شناسه یکتای سفته"}
          />
        </InputGroupBox>
      </InformationBox>
      <SubmitButtonBox>
        <Button
          text={"استعلام سفته"}
          title={"استعلام"}
          mode={"submit"}
          disabled={true}
        />
        <Button
          text={"بازگشت"}
          title={"بازگشت"}
          mode={"cancel"}
          disabled={false}
          handleClick={handleBack}
        />
      </SubmitButtonBox>
    </div>
  );
}
