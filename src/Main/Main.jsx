import react from 'react';
import style from './Main.module.css';
import styleContainer from './../Common/Stiles/Conteiner.module.css';

const Main = () => {
  return (
    <div className={style.mainBlock}>
      <div className={styleContainer.container}>
        <div className={style.text}>
          <span>Привет</span>
          <h1>Меня зовут Клопот Влад</h1>
          <p>Я front-end разработчик</p>
        </div>
        <div className={style.ava}></div>
      </div>
    </div>
  );
}

export default Main;