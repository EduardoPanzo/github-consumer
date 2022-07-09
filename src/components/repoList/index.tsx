import styles from './styles.module.scss'

export const RepoList = () => {
    return(
        <section className={styles.defaultSection}>
            <div className={styles.sectionHead}>
                <div className={styles.title}>
                    <h2>Repositórios</h2>
                </div>
            </div>

            <div >

                <div className={styles.repo}>
                    <div className={styles.repoIcon}>
                        <i>R</i>
                    </div>
                    <div className={styles.repoInfo}>
                        <p className="repo-info--name">About Chime</p>
                        <p className={styles.repoInfoType}>Developers</p>
                    </div>
                </div>
                
            </div>
        </section>
    )
}