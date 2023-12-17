import Homepage from "./homepage/homepage"
import styles from './../styles/bodycomponents.module.css';
const BodyComponents = () => {
    return(
        <div className={styles['container']}>
            <Homepage />
        </div>
    )
}
export default BodyComponents;