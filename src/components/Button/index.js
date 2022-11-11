import { Button as AntdButton } from "antd";
import styles from "./style.module.css";
export const Button = ({
  text,
  title,
  mode,
  disabled,
  handleClick,
  loading,
  children,
}) => {
  return (
    <AntdButton
      onClick={handleClick}
      title={title}
      disabled={disabled}
      loading={loading}
      type={mode === "submit" ? "primary" : "secondary"}
      className={mode === "submit" ? styles.submit_style : styles.cancle_style}
    >
      {text === undefined ? children : text}
    </AntdButton>
  );
};
