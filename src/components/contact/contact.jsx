import styles from './../../styles/contact/contact.module.css';
const Contact = () => {
    return ( <div className={styles.container}>
        <div className={styles['header-container']}>
            <div className={styles['title']}>
                Contact
            </div>
            <div className={styles['sub-title']}>
                Don't be shy! Hit me up! 👇
            </div>
        </div>
        <div className={styles['body-container']}>
            <div className={styles['location-container']}>
                <div className={styles['location-icon']}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-map-search"><path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v7.5"></path><path d="M9 4v13"></path><path d="M15 7v5"></path><path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M20.2 20.2l1.8 1.8"></path></svg>
                </div>
                <div className={styles['location-desc']}>
                    <div className={styles['location-header']}>
                        Location
                    </div>
                    <div className={styles['actual-location']}>
                        Chennai, Tamil Nadu
                    </div>
                </div>
            </div>
            <div className={styles['location-container']}>
                <div className={styles['location-icon']}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-mail"><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path><path d="M3 7l9 6l9 -6"></path></svg>
                </div>
                <div className={styles['location-desc']}>
                    <div className={styles['location-header']}>
                        Mail
                    </div>
                    <a target='_blank' className={styles['actual-location']} href='mailto:arumugaperumal073@gmail.com'>
                        arumugaperumal073@gmail.com
                    </a>
                </div>
            </div>
            <div className={styles['location-container']}>
                <a target='_blank' className={styles['location-icon']} href='https://linkedin.com/in/arumugaperumal-n/'>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-brand-linkedin"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M8 11l0 5"></path><path d="M8 8l0 .01"></path><path d="M12 16l0 -5"></path><path d="M16 16v-3a2 2 0 0 0 -4 0"></path></svg>
                </a>
                <div className={styles['location-desc']}>
                    <div className={styles['location-header']}>
                        LinkedIn
                    </div>
                    <a target='_blank' className={styles['actual-location']} href='https://linkedin.com/in/arumugaperumal-n/'>
                        Arumugaperumal N
                    </a>
                </div>
            </div>
        </div>
    </div> );
}
export default Contact;