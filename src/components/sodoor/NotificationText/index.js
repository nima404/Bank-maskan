import styles from "./styles.module.css";

/// three type : success(green) / inform(blue) / error(red)
export function NotificationText({ type, children }) {
  return (
    <div className={`${styles.notif_container} ${styles[type]}`}>
      {children}
    </div>
  );
}
