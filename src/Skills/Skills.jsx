import react from 'react';
import style from './Skills.module.scss';
import styleContainer from './../Common/Stiles/Conteiner.module.css';
import Skill from './Skill/Skill';
import Title from '../Common/components/title/Title';
import jsLogo from '../assets/icon/logo-js.png';
import cssLogo from '../assets/icon/css-logo.png';
import reactLogo from '../assets/icon/logo-React.png';
import tsLogo from '../assets/icon/logo-typescript.png';
import reduxLogo from '../assets/icon/logo-redux.png';
import htmlLogo from '../assets/icon/logo-html.jpeg';

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
            title: 'Css',
            description: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML',
            icon: iconStyle(cssLogo)
        },
        {
            title: 'HTML',
            description: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML',
            icon: iconStyle(htmlLogo)
        },
    ]
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContsiner}`}>
                <Title title={'Skills'}/>
                <div className={style.skills}>
                    {skils.map(s => {
                        return <Skill title={s.title}
                                      icon={s.icon}
                                      description={s.description}/>
                    })}
                </div>
            </div>

        </div>
    );
}

export default Skills;