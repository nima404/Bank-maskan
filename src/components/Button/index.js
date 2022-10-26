import styles from './style.module.css'
export const Button = ({ text, title, mode }) => {
    return (
        <button type={'button'} title={title} className={mode === "submit" ? styles.submit_style : styles.cancle_style}>{text}</button>
    )
}