import styles from './../../styles/navbar/navbar.module.css';
import Logo from './logo';
import Menu from './menu';
const Navbar = () => {
    return(
        <div className={styles['container']}>
            <Logo />
            <Menu />
        </div>
    )
}
export default Navbar;