import react from 'react';
import style from './Project.module.scss';


const Project = (props) => {
  return (
    <div className={style.project}>
      <div style={props.style} className={style.icon}>
        <a className={style.button} >Посмотреть</a>
      </div>
      <div className={style.projectInfo}>
        <h3 className={style.projectTitle}>{props.title}</h3>
        <span className={style.discription}>
          {props.discription}
        </span>
      </div>
    </div>
  );
}

export default Project;