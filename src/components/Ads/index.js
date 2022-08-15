import SideAd from "../SideAd";
import styles from "./Ads.module.css";

export const Ads = () => {
    return (
        <div className={styles.ads}>
            <div className={styles.container}>
                <div className={styles.body}>
                    <SideAd />
                </div>
            </div>
        </div>
    )
}