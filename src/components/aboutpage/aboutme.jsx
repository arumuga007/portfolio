import { useContext } from 'react';
import styles from './../../styles/aboutpage/aboutpage.module.css';
import { MenuItemsContext } from '../../App';
const Aboutme = () => {
    const {about} = useContext(MenuItemsContext);
    return(
        <div className={styles['aboutme-container']} ref={about}>
            <div className={styles.header}>About me</div>
            <div className={styles['description-container']}>
                <span><b>By day, I’m a backend engineer at Zoho; by passion, a full stack developer.</b></span>
                <span>Right now, I’m working at Zoho Corporation as a Member Technical Staff, diving deep into the backend side of Zoho Finance’s banking module. I spend most of my time building features around bank statements, transaction matching, categorization, reconciliation, and integrating with third party Open Banking APIs to make banking smarter and smoother.</span>
                <span>But I don’t stop at the backend 🙂 — I’ve also built cool stuff on the frontend using React, JavaScript, HTML, CSS, Webpack, and more. From e-commerce platforms to movie apps, I enjoy taking an idea from the UI all the way down to the database and making it come alive.</span>
            </div>
        </div>
    )
}
export default Aboutme;