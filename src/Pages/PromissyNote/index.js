import Card from "antd/lib/card/Card";
import styles from "./style.module.css";
import { CardComponent } from "./CardComponent/index";

export function PromissyNote() {
  return (
    <>
      {/* <CardComponent style={{ left: "876px", top: " 80px" }} /> */}
      <Card
        className={styles.card_style}
        style={{ left: "876px", top: " 80px" }}
        bordered={false}
      ></Card>
      <Card
        className={styles.card_style}
        style={{ left: "68px", top: " 80px" }}
        bordered={false}
      ></Card>
      <Card
        className={styles.card_style}
        style={{ left: "876px", top: " 356px" }}
        bordered={false}
      ></Card>
      <Card
        className={styles.card_style}
        style={{ left: "68px", top: "356px" }}
        bordered={false}
      ></Card>
      <Card
        className={styles.card_style}
        style={{ left: "876px", top: "632px" }}
        bordered={false}
      ></Card>
      <Card
        className={styles.card_style}
        style={{ left: "876px", top: "632px" }}
        bordered={false}
      ></Card>
      <Card
        className={styles.card_style}
        style={{ left: "68px", top: "632px" }}
        bordered={false}
      ></Card>
    </>
  );
}
