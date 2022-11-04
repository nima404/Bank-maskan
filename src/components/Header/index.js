import header_icon from "../../assets/images/header_icon.png";
import styles from "./style.module.css";
export function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header_text}>
        <div className={styles.header_icon_container}>
          <img src={header_icon} alt="icon" className={styles.header_icon} />
        </div>
        <p className={styles.header_title}>پیشخوان مجازی</p>
      </div>
    </div>
  );
}
