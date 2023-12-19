import styles from './../../styles/techstack/techstack.module.css';
const Techstack = () => {
    return(
        <div className={styles['container']}>
            <div className={styles['techstack-text']}>
                Tech Stack
            </div>
            <div className={styles['icons-container']}>
                <div><img src='https://skillicons.dev/icons?i=html,scss' /></div>
                <div><img src='https://skillicons.dev/icons?i=js,react' /></div>
                <div><img src='https://skillicons.dev/icons?i=nodejs,java' /></div>
                <div><img src='https://skillicons.dev/icons?i=webpack,postgresql' /></div>
            </div>
        </div>
    )
}
export default Techstack;