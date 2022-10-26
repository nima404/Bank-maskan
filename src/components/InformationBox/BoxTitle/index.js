import styles from "./styles.module.css";
import "./style.css";
export function BoxTitle(props) {
  return (
    <div className={styles.BoxTitle_container}>
      {props.icon}
      <p className={styles.BoxTitle_Title}>{props.title}</p>
    </div>
  );
}
