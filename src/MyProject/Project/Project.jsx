import react from 'react';
import style from './Project.module.css';


const Project = (props) => {
  return (
    <div className={style.project}>
      <div className={style.icon}>
        <a className={style.button}>Посмотреть</a>
      </div>
      <h3>{props.title}</h3>
      <span className={style.discription}>
        {props.discription}
      </span>

    </div>
  );
}

export default Project;