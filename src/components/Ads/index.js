import Image from "next/image";
import { useEffect, useState } from "react";
import SideAd from "../SideAd";
import styles from "./Ads.module.css";

export const Ads = () => {

    const [teste, setTeste] = useState(1);

    console.log(teste)

    useEffect(() => {
        content()
    }, [teste])

    const content = () => {
        return (
            <div className={styles.container}>
                <div className={styles.body}>
                    <div className={styles.title}>
                        <Image src="/favicon.ico" height={30} width={30}/><span>PokeAds</span><Image src="/avatar.png" height={30} width={30}/>
                    </div>
                    <SideAd />
                </div>
            </div>
        )
    }

    return (
        <div className={styles.ads}>
            <button onClick={() => {setTeste(teste+1)}}>teste</button>
            {content()}
        </div>
    )
}