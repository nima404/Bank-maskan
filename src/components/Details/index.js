import styles from "./style.module.css"

export const Details = ({ headerTitle, children }) => {
    return (
        <details>
            <summary className={styles.summary_style}>
                <div>
                    <h4>{headerTitle}</h4>
                </div>
                <div>
                    <p className={styles.togglerIcon_style}></p>
                </div>
            </summary>
            {children}
        </details>
    )
}