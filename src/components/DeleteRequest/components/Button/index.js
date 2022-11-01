import styles from "./style.module.css";
export const Button = ({ text, title, mode, disabled, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      type={"button"}
      title={title}
      disabled={disabled}
      className={mode === "submit" ? styles.submit_style : styles.cancle_style}
    >
      {text}
    </button>
  );
};
