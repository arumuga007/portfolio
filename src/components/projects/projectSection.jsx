import { useState } from 'react';
import styles from './../../styles/projects/projects.module.css';
import SingleProject from './singleProject';
const ProjectSection = () => {
    const[typeOfProject, setTypeOfProject] = useState(0);
    const projectItems = [
        {'image': 'shareNest.jpg', 'type': 1, 'title': 'ShareNest ', 'period': ' (Dec 2023 - present)', 'technologyUsed': [
            'react', 'scss', 'express js'], 'sourceCode': 'https://github.com/arumuga007/ShareNest', 'liveDemo': false, 'description': 'ShareNest is online platform where user can either buy or sell or take any item for rent from their local community people. User can also request any item which will be further be shared as  a notification to all other users in user specified range.'},
        {'image': 'whizocart.png', 'type': 2, 'title': 'Whizocart ', 'period': '(Aug 2023 - Sep 2023)', 'technologyUsed': [
            'JS', 'Laravel'], 'sourceCode': false, 'liveDemo': 'https://whizocart.com', 'description': 'ShareNest is online platform where user can either buy or sell or take any item for rent from their local community people. User can also request any item which will be further be shared as  a notification to all other users in user specified range.'}
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