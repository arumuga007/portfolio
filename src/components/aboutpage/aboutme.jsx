import styles from './../../styles/aboutpage/aboutpage.module.css';
const Aboutme = () => {
    return(
        <div className={styles['aboutme-container']}>
            <div className={styles.header}>About me</div>
            <div className={styles['description-container']}>
                <span>As a Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Webpack and SCSS. I excel in designing and maintaining responsive websites that offer a smooth user experience. </span>
                <span>With a foundation in unraveling intricate problems and a track record of conquering over 250 challenges on LeetCode, I bring a unique blend of technical skills and adeptness in creative problem-solving.</span>
                {/* <span>Passionate about contributing my skills to an organization that solves real-world problems. Together, we can build a better future through technology!</span> */}
            </div>
        </div>
    )
}
export default Aboutme;