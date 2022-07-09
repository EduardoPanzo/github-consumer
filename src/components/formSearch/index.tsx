import styles from './styles.module.scss'

export const FormSearch = () => {
    return(
        <form className={styles.formSearch}>
            <input type="search" name="searchName" id="searchId" />
            <button type="submit">Search</button>
        </form>
    )
}