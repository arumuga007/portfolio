import Homepage from "./homepage/homepage"
import styles from './../styles/bodycomponents.module.css';
import Aboutpage from "./aboutpage/aboutpage";
import Projects from "./projects/project";
import Techstack from "./techstack/techstack";
const BodyComponents = () => {
    return(
        <div className={styles['container']}>
            <Homepage />
            <Techstack />
            <Aboutpage />
            <Projects />
        </div>
    )
}
export default BodyComponents;