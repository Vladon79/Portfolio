import react from 'react';
import style from './Skills.module.css';
import styleContainer from './../Common/Stiles/Conteiner.module.css';
import Skill from './Skill/Skill';

const Skills = () => {
  return (
    <div className={style.skillsBlock}>
      <div className={`${styleContainer.container} ${style.skillsContsiner}`}>
        <h2 className={style.title}>Мои скиллы</h2>
        <div className={style.skills}>
          <Skill title={'Js'} 
          discription={'JavaScript — мультипарадигменный язык программирования. '}/>
          <Skill title={'Css'} 
          discription={'Css — формальный язык описания внешнего вида документа, написанного с использованием языка разметки. '}/>
          <Skill title={'React'}
          discription={'React — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. '}/>
         

        </div>
      </div>

    </div>
  );
}

export default Skills;