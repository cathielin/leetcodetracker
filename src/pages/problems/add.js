import Header from '../../components/Header/Header.js'
import TextEntry from '../../components/TextEntry/TextEntry.js'
import PageTitle from '../../components/PageTitle/PageTitle.js'
import styles from '@/styles/AddProblem.module.css'



function Add() {
    return (
        <main className={styles.main}>
            <div className={styles.bodyoutline}>
                <Header />
                <TextEntry />
                hi you can add a problem here
            </div>
            <div className={styles.bottom}>
                <PageTitle title="NEW QUESTION" />

            </div>
        </main>
    )
}

export default Add