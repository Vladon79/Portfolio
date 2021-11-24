import react from 'react';
import style from './Skill.module.css';


const Skill = (props) => {
  return (
    <div className={style.skill}>
      <div className={style.icon}></div>
      <h3>{props.title}</h3>
      <span className={style.discription}>
        {props.discription}
      </span>

    </div>
  );
}

export default Skill;