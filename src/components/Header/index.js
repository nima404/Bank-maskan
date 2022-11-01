import { KeyOutlined } from "@ant-design/icons";
import styles from "./style.module.css";
export function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header_text}>
        <KeyOutlined />
        <p>پیشخوان مجازی</p>
      </div>
    </div>
  );
}
