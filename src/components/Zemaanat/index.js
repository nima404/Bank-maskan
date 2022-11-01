import { Zemaanat1 } from "./screens/Zemaanat1";
import { Zemaanet3 } from "./screens/Zemaanat3";
import { Zemanat2 } from "./screens/Zemanat2";
import styles from "./styles.module.css";
export function Zemaanat(params) {
  return (
    <div className={styles.Zemaanat_container}>
      {/* <Zemaanat1 /> */}
      {/* <Zemanat2 /> */}
      <Zemaanet3 />
    </div>
  );
}
