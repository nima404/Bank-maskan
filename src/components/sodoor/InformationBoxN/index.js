import { BoxTitleN } from "./BoxTitleN";
import styles from "./styles.module.css";
export function InformationBoxN({ title, icon, children , number }) {
  return (
    <div className={styles.Information_container_N}>
      <BoxTitleN title={title} icon={icon} number={number} />
      {children}
    </div>
  );
}