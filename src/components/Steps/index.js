// import {
//   LoadingOutlined,
//   SmileOutlined,
//   SolutionOutlined,
//   UserOutlined,
// } from "@ant-design/icons";
import styles from "./style.module.css";

import { Steps } from "antd";
export const StepsBox = ({ stepsList }) => {
  const { Step } = Steps;
  // function kindOf(n) {
  //     return Object.prototype.toString.call(n).slice(8, -1)
  // }

  return (
    <Steps className={styles.dir}>
      {stepsList.map((node, index) => {
        return (
          <Step
            status={node.status}
            title={node.title}
            icon={node.icon}
            key={`i${index}_${node.title}`}
            style={{ margin: "30px 0" }}
          />
        );
      })}
    </Steps>
    // <Steps
    //   type="navigation"
    //   //   current={current}
    //   className={`site-navigation-steps ${styles.dir}`}
    //   items={[
    //     { title: "دریافت اطلاعات", status: "finish" },
    //     { title: "احراز هویت", status: "finish" },
    //     { title: "استعلام سفته", status: "process" },
    //     { title: "ضمانت سفته", status: "wait" },
    //     { title: "امضای سفته", status: "wait" },
    //     { title: "پرداخت", status: "wait" },
    //     { title: "دریافت سفته نهایی", status: "wait" },
    //   ]}
    // />
  );
};
