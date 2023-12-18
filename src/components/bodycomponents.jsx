import Homepage from "./homepage/homepage"
import styles from './../styles/bodycomponents.module.css';
import Aboutpage from "./aboutpage/aboutpage";
import Projects from "./projects/project";
const BodyComponents = () => {
    return(
        <div className={styles['container']}>
            <Homepage />
            <Aboutpage />
            <Projects />
        </div>
    )
}
export default BodyComponents;