import react from 'react';
import style from './MyProject.module.css';
import styleContainer from './../Common/Stiles/Conteiner.module.css';
import Project from './Project/Project';
import Title from '../Common/components/title/Title';
import todoImage from '../assets/image/Todolists.png';
import networkImage from '../assets/image/Network.jpg'



const MyProject = () => {

  const network = {
    backgroundImage: 'url(' + networkImage + ')',
  };
  const todolist = {
    backgroundImage: 'url(' + todoImage + ')',
  };

  return (
    <div className={style.myProject}>
      <div className={`${styleContainer.container} ${style.myProjectContsiner}`}>
       <Title title={'Мои проекты'}/>
        <div className={style.projects}>
          <Project style = {network} title={'Project Management Admin Panel'} discription={'Discover Business Strategy A thoughtful discovery process'} />
          <Project style = {todolist} title={'Название проекта'} discription={'Краткое описание'} />
          
        </div>
      </div>
    </div>
  );
}

export default MyProject;