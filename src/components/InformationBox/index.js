import { BoxTitle } from "./BoxTitle";
import styles from "./styles.module.css";
export function InformationBox({ title, icon, children }) {
  return (
    <>
      <BoxTitle title={title} icon={icon} />
      {children}
    </>
  );
}
