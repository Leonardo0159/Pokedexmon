import Image from "next/image";
import SideAd from "../SideAd";
import styles from "./Ads.module.css";

export const Ads = () => {
    
    return (
        <div className={styles.ads}>
            <div className={styles.container}>
                <div className={styles.body}>
                    <div className={styles.title}>
                        <Image src="/favicon.ico" height={30} width={30}/><span>PokeAds</span><Image src="/avatar.png" height={30} width={30}/>
                    </div>
                    <SideAd />
                </div>
            </div>
        </div>
    )
}