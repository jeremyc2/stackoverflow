import styles from './header.module.scss'

export default function Header() {
    return <header className={styles.header}>
        <div className={styles.menu}></div>
        <div className={styles.logo}></div>
        <input type="search" className={styles.search}></input>
    </header>
}