import Homepage from "./homepage/homepage"
import styles from './../styles/bodycomponents.module.css';
import Aboutpage from "./aboutpage/aboutpage";
import Projects from "./projects/project";
import Techstack from "./techstack/techstack";
import Experience from "./experience/experience";
import Contact from "./contact/contact";
import Copyright from "./copyright/copyright";
const BodyComponents = () => {
    return(
        <div className={styles['container']}>
            <Homepage />
            <Techstack />
            <Aboutpage />
            <Projects />
            <Experience />
            <Contact />
        </div>
    )
}
export default BodyComponents;