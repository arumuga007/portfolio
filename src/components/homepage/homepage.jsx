import styles from './../../styles/homepage/homepage.module.css';
import Content from './content';
import ProfileImage from './profileImage';
const Homepage = () => {
    return(
        <div className={styles['container']}>
            <Content />
            <ProfileImage />
        </div>
    )
}
export default Homepage;