import styles from './../../styles/projects/projects.module.css';
const Header = () => {
    return(
        <div className={styles['header-container']}>
            <div className={styles.title}>
                Portfolio
            </div>
            <div className={styles.subTitle}>
            Each project is a unique piece of development 🧩
            </div>
        </div>
    )
}
export default Header;