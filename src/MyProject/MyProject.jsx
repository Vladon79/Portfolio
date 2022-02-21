import react from 'react';
import style from './MyProject.module.scss';
import styleContainer from './../Common/Stiles/Conteiner.module.css';
import Project from './Project/Project';
import Title from '../Common/components/title/Title';
import todoImage from '../assets/image/todolistImage.png';
import networkImage from '../assets/image/networkImage.png';
import iconStyle from "../Skills/Skills";


const MyProject = () => {
    const iconStyle = (logo) => ({
        backgroundImage: 'url(' + logo + ')',
    });

    const myProject = [
        {
            icon: iconStyle(networkImage), title: 'Social network',
            description: 'Discover Business Strategy A thoughtful discovery process'
        },
        {
            icon: iconStyle(todoImage), title: 'Todolist',
            description: 'Discover Business Strategy A thoughtful discovery process'
        }

    ]


    return (
        <div className={style.myProject}>
            <div className={`${styleContainer.container} ${style.myProjectContsiner}`}>
                <Title title={'My project'}/>
                <div className={style.projects}>
                    {myProject.map(p => <Project style={p.icon} title={p.title}
                                                 description={p.description}/>)}

                </div>
            </div>
        </div>
    );
}

export default MyProject;