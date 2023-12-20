import { createContext, useCallback, useState } from 'react';
import styles from './../../styles/navbar/navbar.module.css';
import Logo from './logo';
import Menu from './menu';
export const MenuContext = createContext();
const Navbar = () => {
    const [isMenuOpen, changeIsMenuOpen] = useState(false);
    return(
        <div className={styles['container']}>
            <MenuContext.Provider value={{isMenuOpen, changeIsMenuOpen}} >
            <Logo />
            <Menu />
            </MenuContext.Provider>
        </div>
    )
}
export default Navbar;