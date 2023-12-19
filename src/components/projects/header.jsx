import styles from './../../styles/projects/projects.module.css';
import { MenuItemsContext } from '../../App';
import { useContext } from 'react';

const Header = () => {
    const {projects} = useContext(MenuItemsContext);
    return(
        <div className={styles['header-container']} ref={projects}>
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