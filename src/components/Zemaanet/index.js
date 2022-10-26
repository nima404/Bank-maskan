import { InformationBox } from "../InformationBox";
import styles from "./styles.module.css";
import { FileSearchOutlined } from "@ant-design/icons";
export function Zemaanet(params) {
  return (
    <div className={styles.Zemaanat_container}>
      <InformationBox
        title={"استعلام سفته"}
        icon={<FileSearchOutlined />}
      ></InformationBox>
    </div>
  );
}
