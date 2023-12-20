import { useContext } from 'react';
import styles from './../../styles/navbar/logo.module.css';
import { MenuContext } from './navbar';

const Logo = () => {
    const {isMenuOpen, changeIsMenuOpen} = useContext(MenuContext);
    return(
        <div className={styles['container']}>
            <div id="nav-icon3" onClick={() => {changeIsMenuOpen(!isMenuOpen)}} className={isMenuOpen && 'open'}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={styles['logo-text']}>
                Arumuga.dev
            </div>
        </div>
    )
}
export default Logo;