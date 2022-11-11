import { Card } from "./Card/index";
import styles from "./style.module.css";

export function Main() {
  return (
    <div className={styles.card_container}>
      <Card
        className={styles.card_style}
        title={"صدور سفته"}
        description={"توضیحات صدور"}
      />
      <Card
        className={styles.card_style}
        title={"استعلام سفته"}
        path={"/estelam"}
        description={"توضیحات استعلام"}
      />
      <Card
        className={styles.card_style}
        title={"درخواست ضمانت سفته"}
        description={"توضیحات درخواست ضمانت"}
        path={"/estelam"}
      />
      <Card
        className={styles.card_style}
        title={"ادامه با کد پیگیری"}
        description={"توضیحات ادامه با کد پیگیری"}
        path={"/continue"}
      />
      <Card
        className={styles.card_style}
        title={"سفته های من"}
        description={"توضیحات سفته های من"}
        path={"/saftehaye-man"}
      />
      <Card
        className={styles.card_style}
        title={"حذف درخواست"}
        description={"توضیحات حذف درخواست"}
        path={"/delete-request"}
      />
    </div>
  );
}
