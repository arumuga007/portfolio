import styles from './../../styles/projects/projects.module.css';
const SingleProject = (props) => {
    return(
        <div className={styles['single-project-container']}>
            <div className={styles['image-container']}>
                <img src={process.env.PUBLIC_URL + `/images/projectItem/${props.item.image}`} />
            </div>
            <div className={styles['details-container']}>
                <div className={styles['project-title-container']}>
                    <span className={styles['project-title']}>
                        {props.item.title} 
                    </span>
                    <span className={styles['period']}>
                         {props.item.period}
                    </span>
                </div>
                <div className={styles['project-description-container']}>
                    <div className={styles['project-description']}>
                        {props.item.description}
                    </div>
                    <div className={styles['project-technologyUsed-container']}>
                        {
                            props.item.technologyUsed.map((technology, key) => {
                                return <div className={styles['technologyUsed-item']}>{technology}
                                    </div>
                            })
                        }
                    </div>
                </div>
                <div className={styles['source-deploy-container']}>
                    {props.item.sourceCode && <a className={styles['source-code-container']}>code </a>
                        }
                    {
                        props.item.liveDemo && <a className={styles['live-demo-container']}>Live Demo</a>
                    }
                </div>
            </div>
        </div>
    )
}
export default SingleProject;