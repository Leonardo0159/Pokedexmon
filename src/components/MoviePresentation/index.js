import Image from 'next/image'
import { useState } from 'react'
import styles from './MoviePresentation.module.css'

export const MoviePresentation = (props) => {
    const [downloadPt, setDownloadPt] = useState(props.movie.downloadPt);
    const [downloadEn, setDownloadEn] = useState(props.movie.downloadEn);

    return (
        <div className={styles.moviePresentation}>
            <div className={styles.container}>
                <div className={styles.presentation}>
                    <div className={styles.sideLeft}>
                        <div className={styles.boxImage}>
                            <div className={styles.presentationImage}>
                                {(() => {
                                    if (props.movie.urlImage != "") {
                                        return (
                                            <Image src={props.movie.urlImage} width={300} height={450} />
                                        )
                                    } else {
                                        return (
                                            ""
                                        )
                                    }
                                })()}
                            </div>
                        </div>
                    </div>
                    <div className={styles.sideRight}>
                        <div className={styles.box}>
                            <div className={styles.movieTitle}>
                                <h1>Download {props.movie.name}</h1>
                            </div>
                            <div className={styles.movieInfo}>
                                <span><span className={styles.negrito}>Release:</span> {props.movie.release}</span>
                            </div>
                            <div className={styles.movieInfo}>
                                <span><span className={styles.negrito}>Genre:</span> {props.movie.genre}</span>
                            </div>
                            <div className={styles.movieInfo}>
                                <span><span className={styles.negrito}>Format:</span> {props.movie.format}</span>
                            </div>
                            <div className={styles.movieInfo}>
                                <span><span className={styles.negrito}>Quality:</span> {props.movie.quality}</span>
                            </div>
                            <div className={styles.movieInfo}>
                                <span><span className={styles.negrito}>Language:</span> {props.movie.language}</span>
                            </div>
                            <div className={styles.movieInfo}>
                                <span><span className={styles.negrito}>Duration:</span> {props.movie.duration}</span>
                            </div>
                            <div className={styles.movieImdb}>
                                <Image src="/movieImages/imdb2.png" width={60} height={14} /><span>: {props.movie.imdb}</span>
                            </div>
                            <div className={styles.btn}>
                                <button onClick={() => {window.open(downloadEn)}}>Dowload En-Us</button>
                                <button onClick={() => {window.open(downloadPt)}}>Dowload Pt-Br</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.presentation}>
                    <div className={styles.sideLeft}>
                        <div className={styles.boxDescription}>
                            <h3>Description</h3>
                            <p>
                                {props.movie.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}