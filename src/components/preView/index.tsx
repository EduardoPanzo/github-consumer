import styles from './styles.module.scss'

export const PreView = ()=>{
    return(
            <div className={styles.preViewContainer}>
                <div className={styles.photoArea}>
                    <div className={styles.photo}><img /></div>
                </div>

                <div className={styles.details}>
                    <div className={styles.self}>
                        <p className={styles.name}>João Eduardo Panzo</p>
                        <span className={styles.username}>@EduardoPanzo</span>
                    </div>
                    <ul className={styles.links}>
                        <li><a href="#">Fac</a></li>
                        <li><a href="#">Dis</a></li>
                        <li><a href="#">Wha</a></li>
                    </ul>
                </div>
            </div>
    )
}