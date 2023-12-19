import styles from './../../styles/homepage/homepage.module.css';
import Content from './content';
import ProfileImage from './profileImage';
import { MenuItemsContext } from '../../App';
import { useContext, useRef } from 'react';
const Homepage = () => {
    const {home} = useContext(MenuItemsContext);
    return(
        <div className={styles['container']} ref={home}>
            <Content />
            <ProfileImage />
        </div>
    )
}
export default Homepage;