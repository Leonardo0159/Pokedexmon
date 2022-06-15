import styles from "./Loading.module.css";

export const Loading = () => {
    return (
        <div className={styles.loading}>
            <div className={styles.gifLoad}>
                <img src="/load.gif"/>
            </div>
            <div className={styles.textLoad}>
                <span>Loading...</span>
            </div>
        </div>
    );
};