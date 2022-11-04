import styles from "./style.module.css";
export const ButtonN = ({ text, title, mode, disabled, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      type={"button"}
      title={title}
      disabled={disabled}
      className={mode === "submit" ? styles.submit_style_n : styles.cancle_style_n}
    >
      {text}
    </button>
  );
};
