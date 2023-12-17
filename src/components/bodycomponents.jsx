import Homepage from "./homepage/homepage"
import styles from './../styles/bodycomponents.module.css';
import Aboutpage from "./aboutpage/aboutpage";
const BodyComponents = () => {
    return(
        <div className={styles['container']}>
            <Homepage />
            <Aboutpage />
        </div>
    )
}
export default BodyComponents;