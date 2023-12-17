import styles from './../../styles/navbar/menu.module.css';
const Menu = () => {
    return(
        <div className={styles.container}>
            <div className={styles['items']}>Home</div>
            <div className={styles['items']}>About</div>
            <div className={styles['items']}>Projects</div>
            <div className={styles['items']}>Contact</div>
        </div>
    )
}
export default Menu;