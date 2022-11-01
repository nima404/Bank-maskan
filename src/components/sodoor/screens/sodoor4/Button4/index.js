import styles from './style.module.css';
export function Button4(props) {
    return(
        <button className={styles.Button4} type={props.type} onClick={props.onClick}>{props.icon}{props.text}</button>
    )
}