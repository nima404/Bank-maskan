import { InformationBox } from "../../../InformationBox";
import styles from "./styles.module.css";
import { FileSearchOutlined } from "@ant-design/icons";
import { InputByLabel } from "../../../InputByLabal";
import { InputGroupBox } from "../../../InputGroupBox";
import { SubmitButtonBox } from "../../../SubmitButtonBox";
import { Button } from "../../../Button";
export function Zemaanat1() {
  return (
    <div className={styles.Zemaanat1_container}>
      <InformationBox title={"استعلام سفته"} icon={<FileSearchOutlined />}>
        <InputGroupBox>
          <InputByLabel label={"شماره/ شناسه ملی صادر کننده"} />
          <InputByLabel label={"کد ثنای صادر کننده"} />
          <InputByLabel label={"شناسه یکتای صادر کننده"} />
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
        />
      </SubmitButtonBox>
    </div>
  );
}
