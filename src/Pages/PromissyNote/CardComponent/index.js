import Card from "antd/lib/card/Card";
import styles from "../style.module.css";
export function CardComponent() {
  return <Card className={styles.card_style} bordered={false}></Card>;
}
