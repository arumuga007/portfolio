import { useState } from 'react';
import styles from './../../styles/projects/projects.module.css';
import SingleProject from './singleProject';
const ProjectSection = () => {
    const[typeOfProject, setTypeOfProject] = useState(0);
    const projectItems = [
        {'image': 'shareNest.jpg', 'type': 1, 'title': 'Share Nest ', 'period': ' (Dec 2023 - May 2024)', 'transitionTime': '4.5s' ,'technologyUsed': [
            'react', 'express js', 'postgreSQL'], 'sourceCode': 'https://github.com/arumuga007/ShareNest', 'liveDemo': false, 'description': 'Share Nest is online platform where user can either buy or sell or take any item for rent from their local community people. It harnesses Twilio for SMS notifications, Stripe API for payment, and Nodemailer for email and Aadhaar verification for trust.'},
        {'image': 'whizocart-compressed.jpg', 'type': 2, 'title': 'Whizocart ', 'period': '(Aug 2023 - Sep 2023)', 'transitionTime': '10s' , 'technologyUsed': [
            'JavaScript', 'Laravel'], 'sourceCode': false, 'liveDemo': 'https://whizocart.com', 'description': 'Whizocart will help to elevate your E-commerce Business to New Heights with Whizocart AI-powered solution. Experience a personalized AI solution that redefines your e-commerce journey.'},
        {'image': 'filmFusion-compressed.jpg', 'type': 1, 'title': 'Film Fusion ', 'period': '(Oct 2023 - Nov 2023)', 'transitionTime': '2.5s' , 'technologyUsed': [
                'React', 'Webpack'], 'sourceCode': 'https://github.com/arumuga007/film-fusion', 'liveDemo': 'https://arumuga007.github.io/film-fusion/', 'description': 'Film Fusion is a React single-page web app showcasing real-time movie data from IMDb API, featuring a modern, responsive UI for a smooth browsing experience.'},
        {'image': 'travelNeuro-compressed.jpg', 'type': 2, 'title': 'Travel Neuro ', 'period': '(Sep 2023 - Oct 2023)', 'transitionTime': '7s' , 'technologyUsed': [
            'Wordpress', 'Laravel'], 'liveDemo': 'https://travelneuro.com', 'description': 'Developed a feature-rich tour booking platform using WordPress, Elementor, and Laravel, enabling users to seamlessly book tours for various tourist destinations.'},
            {'image': 'ecommerce-compressed.jpg', 'type': 1, 'title': 'E-commerce ', 'period': '(Jul 2023 - Aug 2023)', 'transitionTime': '5s' , 'technologyUsed': [
                'JavaScript', 'Css', 'Laravel'], 'sourceCode': 'https://github.com/arumuga007/e-commerce-website-using-laravel', 'liveDemo': false, 'description': 'This e-commerce site offers a comprehensive experience for regular users and administrators. Admin functionalities encompassed product and category management, real-time delivery updates and statistical insights into website performance.'}
    ]
    return(
        <div className={styles['project-section-container']}>
            <div className={styles['type-of-project']}>
                <div className={`${typeOfProject == 0 && styles['project-type-item']}`} onClick={() => setTypeOfProject(0)}>All</div>
                <div className={`${typeOfProject == 1 && styles['project-type-item']}`} onClick={() => setTypeOfProject(1)}>Personal</div>
                <div className={`${typeOfProject == 2 && styles['project-type-item']}`} onClick={() => setTypeOfProject(2)}>Work</div>
            </div>
            <div className={styles['projects-container']}>
                {projectItems.map((item, key) => {
                    if(typeOfProject == 0)
                        return <SingleProject item={item} key={key} />;
                    else if(typeOfProject == 1) {
                        if(item.type == 1)
                            return <SingleProject item={item} key={key} />;
                        else
                            return;
                    }
                    else {
                        if(item.type == 2)
                            return <SingleProject item={item} key={key} />;
                        else
                            return;
                    }
                })}
            </div>
        </div>
    )
}
export default ProjectSection;