import styles from "./style.module.css"

export const Details = ({ headerTitle, children }) => {
    return (
        <details>
            <summary className={styles.summary_style}>
                <div>
                    <h4 className={styles.h4}>{headerTitle}</h4>
                </div>
                <div>
                    <span className={styles.togglerIcon_style}></span>
                </div>
            </summary>
            {children}
        </details>
    )
}