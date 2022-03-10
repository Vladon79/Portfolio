import react from 'react';
import style from './Skill.module.scss';
import Fade from 'react-reveal/Fade';

const Skill = (props) => {
    return (
        <Fade bottom>
            <div className={style.skill}>
                <div style={props.icon} className={style.icon}></div>
                <h3 className={style.projectTitle}>{props.title}</h3>
                <span className={style.description}>{props.description}</span>
            </div>
        </Fade>
    );
}

export default Skill;