import style from './MyProject.module.scss';
import styleContainer from './../Common/Stiles/Conteiner.module.css';
import Project from './Project/Project';
import Title from '../Common/components/title/Title';
import todoImage from '../assets/image/todolistImage.png';
import networkImage from '../assets/image/network.png';
import cardsProject from '../assets/image/cards.png';


const MyProject = () => {
    const iconStyle = (logo) => ({
        backgroundImage: 'url(' + logo + ')',
    });

    const myProject = [
        {
            icon: iconStyle(networkImage), title: 'Social network',
            description: 'SPA for social actions - messaging and blogging. Implemented: login page with validation, error displaying and captcha; profile page with abilities to: view the information of the selected user, edit your profile information, change avatar, add a new post and view your published posts; dialogs page with the ability to send a message; users page with abilities to: view the list of users using pagination, subscribe and unsubscribe to any user, view any user profile.',
            technologies:'Technologies: JavaScript, TypeScript, React, Redux, Redux-thunk, Redux-form, Axios, Reselect, SCSS',
            rerender: 'https://vladon79.github.io/Network/'
        },
        {
            icon: iconStyle(todoImage), title: 'Todolist',
            description: 'SPA for managing to-do lists and their items. Implemented: add todolist / task, remove todolist / task, rename todolist / task, marking the completed task, displaying all / active / confirmed tasks in todolist.',
            technologies:'Technologies: JavaScript, TypeScript, React, Redux, Material UI, SCSS',
            rerender: 'https://vladon79.github.io/Todolist/'
        },
        {
            icon: iconStyle(cardsProject), title: 'Cards',
            description: 'SPA for learning by cards. Implemented: login page with validation; register page with validation; reset password page with validation; 404 page; profile page with abilities to: edit your profile information (change avatar and nickname), add a new card pack and edit, search, sort, view, remove and learn your card packs; packs list page with abilities to: search, sort, view and learn any card packs; learn page with abilities to answer a question and evaluate your answer.',
            technologies:'Technologies: JavaScript, TypeScript, React, Redux, Redux-thunk, Axios, SCSS',
            rerender: 'https://vladon79.github.io/Cards/'
        }

    ]


    return (
        <div id="myProject" className={style.myProject}>
            <div className={`${styleContainer.container} ${style.myProjectContsiner}`}>
                <Title title={'Project'}/>
                <div className={style.projects}>
                    {myProject.map(p => <Project key={p.title} style={p.icon} title={p.title}
                                                 description={p.description} technologies={p.technologies} rerender={p.rerender}/>)}

                </div>
            </div>
        </div>
    );
}

export default MyProject;