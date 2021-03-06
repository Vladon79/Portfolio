import react from 'react';
import style from './Skills.module.scss';
import styleContainer from './../Common/Stiles/Conteiner.module.css';
import Skill from './Skill/Skill';
import Title from '../Common/components/title/Title';
import jsLogo from '../assets/icon/logo-javascript.svg';
import cssLogo from '../assets/icon/css-3.svg';
import reactLogo from '../assets/icon/react-2.svg';
import tsLogo from '../assets/icon/typescript.svg';
import reduxLogo from '../assets/icon/redux.svg';
import htmlLogo from '../assets/icon/html-1.svg';
import storyBook from '../assets/icon/storyBook.svg';
import sass from '../assets/icon/sass.svg';
import postman from '../assets/icon/postman.svg';
import git from '../assets/icon/git.svg';
import gitHub from '../assets/icon/github_logo.svg';
import formik from '../assets/icon/formik.svg';

const Skills = () => {
    const iconStyle = (logo) => ({
        backgroundImage: 'url(' + logo + ')',
    });

    const skils = [
        {
            title: 'Js',
            description: 'JavaScript is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.',
            icon: iconStyle(jsLogo)
        },
        {
            title: 'Ts',
            description: ' TypeScript is a strict syntactical superset of JavaScript and adds optional static typing to the language.',
            icon: iconStyle(tsLogo)
        },
        {
            title: 'React',
            description: 'React is JavaScript library for building user interfaces',
            icon: iconStyle(reactLogo)
        },
        {
            title: 'Redux',
            description: 'Redux is Predictable State Container for JS Apps',
            icon: iconStyle(reduxLogo)
        },
        {
            title: 'HTML',
            description: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML',
            icon: iconStyle(htmlLogo)
        },
        {
            title: 'Css',
            description: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML',
            icon: iconStyle(cssLogo)
        },
        {
            title: 'SASS',
            description: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML',
            icon: iconStyle(sass)
        },

        {
            title: 'Story book',
            description: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML',
            icon: iconStyle(storyBook)
        },

        {
            title: 'Postman',
            description: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML',
            icon: iconStyle(postman)
        },
        {
            title: 'Formik',
            description: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML',
            icon: iconStyle(formik)
        },
        {
            title: 'GIT',
            description: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML',
            icon: iconStyle(git)
        },
        {
            title: 'Github',
            description: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML',
            icon: iconStyle(gitHub)
        },
    ]
    return (
        <div id="skills" className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContsiner}`}>
                <Title title={'Skills'}/>
                <div className={style.skills}>
                    {skils.map(s => <Skill key={s.title}
                                           title={s.title}
                                           icon={s.icon}
                                           description={s.description}/>
                    )}
                </div>
            </div>

        </div>
    );
}

export default Skills;