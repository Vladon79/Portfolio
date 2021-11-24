import react from 'react';
import style from './Skills.module.css';
import styleContainer from './../Common/Stiles/Conteiner.module.css';
import Skill from './Skill/Skill';

const Skills = () => {
  return (
    <div className={style.skillsBlock}>
      <div className={`${styleContainer.container} ${style.skillsContsiner}`}>
        <h2 className={style.title}>Skills</h2>
        <div className={style.skills}>
          <Skill title={'Js'} 
          discription={'JavaScript — мультипарадигменный язык программирования. '}/>
          <Skill title={'Css'} 
          discription={'Css — мультипарадигменный язык программирования. '}/>
          <Skill title={'React'}
          discription={'React — мультипарадигменный язык программирования.'}/>
         

        </div>
      </div>

    </div>
  );
}

export default Skills;