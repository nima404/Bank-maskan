import { BoxTitle } from "./BoxTitle";
import styles from "./styles.module.css";
export function InformationBox({ title, icon, children }) {
  return (
    <div className={styles.Information_container}>
      <BoxTitle title={title} icon={icon} />
      <div className={styles.InformationBox_content}>{children}</div>
    </div>
  );
}
