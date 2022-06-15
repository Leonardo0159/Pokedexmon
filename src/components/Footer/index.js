import styles from "./Footer.module.css";
import Link from "next/link";
import { BsTelephoneFill } from "react-icons/bs";
import { MdPrivacyTip } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.sideLeftTop}>
          <div className={styles.logo}>
            <a className={styles.linkApploja} href="#">
              <span>POKÉDEXMON</span>
            </a>
          </div>
        </div>
        <div className={styles.sideRightTop}>
          <div className={styles.links}>
            <nav>
              <ul>
                <li>
                  <Link href="/">
                    <span className={styles.menuLink}>POKÉMONS</span>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <span className={styles.menuLink}>POKÉMONS</span>
                  </Link>
                </li>
                <li>
                <Link href="/">
                    <span className={styles.menuLink}>POKÉMONS</span>
                  </Link>
                </li>
                <li>
                <Link href="/">
                    <span className={styles.menuLink}>POKÉMONS</span>
                  </Link>
                </li>
                <li>
                <Link href="/">
                    <span className={styles.menuLink}>POKÉMONS</span>
                  </Link>
                </li>
                <li>
                <Link href="/">
                    <span className={styles.menuLink}>POKÉMONS</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className={styles.footerCenter}>
        <div className={styles.sideLeftCenter}>
          <span>
            Pokédexmon © 2022
          </span>
        </div>
      </div>
    </div>
  );
};