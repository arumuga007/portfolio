import styles from './../../styles/aboutpage/aboutpage.module.css';
import Aboutme from './aboutme';
import Cube from './cube';
import { MenuItemsContext } from '../../App';
import { useContext } from 'react';
const Aboutpage = () => {
    return(
        <div className={styles['container']} >
            <Aboutme />
            <Cube />
        </div>
    )
}
export default Aboutpage;