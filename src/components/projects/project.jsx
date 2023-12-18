import styles from './../../styles/projects/projects.module.css';
import Header from './header';
import ProjectSection from './projectSection';
const Projects = () => {
    return(
        <div className={styles['container']}>
            <Header />
            <ProjectSection />
        </div>
    )
}
export default Projects;