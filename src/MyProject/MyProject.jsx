import react from 'react';
import style from './MyProject.module.css';
import styleContainer from './../Common/Stiles/Conteiner.module.css';
import Project from './Project/Project';

const MyProject = () => {
  return (
    <div className={style.myProject}>
      <div className={`${styleContainer.container} ${style.myProjectContsiner}`}>
        <h2 className={style.title}>Мои проекты</h2>
        <div className={style.projects}>
          <Project title={'Название проекта'} discription={'Краткое описание'} />
          <Project title={'Название проекта'} discription={'Краткое описание'} />
          
        </div>
      </div>
    </div>
  );
}

export default MyProject;