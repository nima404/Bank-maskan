import styles from "/styles.module.css";
import * as icons from "@ant-design/icons";
export function BoxTitle({ title, icon }) {
  return (
    <div>
      {/* <{icons} /> */}
      <h4>{title}</h4>
    </div>
  );
}
