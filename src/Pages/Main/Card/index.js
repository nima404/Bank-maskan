import { Link } from "react-router-dom";
import styles from "./style.module.css";
export function Card({ description, title, path = "/" }) {
  return (
    <Link to={(path = `${path}`)}>
      <div className={styles.card}>
        <h4 className={styles.card_title}>{title}</h4>
        <p className={styles.card_description}>{description}</p>
      </div>
    </Link>
  );
}
