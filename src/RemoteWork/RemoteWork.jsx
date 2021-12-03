import react from 'react';
import style from './RemoteWork.module.css';
import styleContainer from './../Common/Stiles/Conteiner.module.css';

const RemoteWork = () => {
  return (
    <div className={style.contact}>
      <div className={`${styleContainer.container} ${style.contactContsiner}`}>
      <h2 className={style.title}>Рассматриваю вариант удаленной работы</h2>
        <button className={style.button}>Нанять меня</button>
        </div>
    </div>
  );
}

export default RemoteWork;