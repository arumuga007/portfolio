import { useContext } from 'react';
import styles from './../../styles/navbar/menu.module.css';
import { MenuItemsContext } from '../../App';
import { MenuContext } from './navbar';
const Menu = () => {
    const {isMenuOpen, changeIsMenuOpen} = useContext(MenuContext);
    const {home, about, projects, contact} = useContext(MenuItemsContext);
    console.log(isMenuOpen);
    return(
        <div className={`${styles.container} ${isMenuOpen ? styles['showMenu'] : ''}`}>
            <div className={styles['items']} onClick={() => home.current.scrollIntoView(({'behavior': 'smooth'}))}>Home</div>
            <div className={styles['items']} onClick={() => about.current.scrollIntoView(({'behavior': 'smooth'}))}>About</div>
            <div className={styles['items']} onClick={() => projects.current.scrollIntoView(({'behavior': 'smooth'}))}>Projects</div>
            <div className={styles['items']} onClick={() => contact.current.scrollIntoView(({'behavior': 'smooth'}))}>Contact</div>
        </div>
    )
}
export default Menu;