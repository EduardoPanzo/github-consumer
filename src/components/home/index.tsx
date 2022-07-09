import { FormSearch } from "../formSearch"
import { ResultItem } from "../resultItem"

import styles from './styles.module.scss';

export const Home = ()=>{
    return(
        <div className={styles.homeContainer}>
            <FormSearch/>
            <div className={styles.resultContainer}>
                <ResultItem/>
            </div>
        </div>
    )
}