import react from 'react';
import style from './Skill.module.scss';


const Skill = (props) => {
  return (
    <div className={style.skill}>
      <div style={props.icon} className={style.icon}></div>
      <h3 className={style.projectTitle}>{props.title}</h3>
      <span className={style.description}>
        {props.description}
      </span>

    </div>
  );
}

export default Skill;