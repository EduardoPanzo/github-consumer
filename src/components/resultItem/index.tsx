import styles from './styles.module.scss'

export const ResultItem = ()=>{
    return(
        <div className={styles.resultItem}>
            <div className={styles.avatar}>
                <img src="image" alt="avatarname" />
            </div>
            <div className={styles.name}>
                <p>Full name</p>
                <span>userNmae</span>
            </div>
            <a className={styles.link} href="#"></a>
        </div>
    )
}