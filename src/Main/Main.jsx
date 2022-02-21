import react from 'react';
import style from './Main.module.scss';
import styleContainer from './../Common/Stiles/Conteiner.module.css';

const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={style.container}>
                <div className={style.text}>
                    <h3>Hi! My name</h3>
                    <h1>Vlad Klopot</h1>
                    <p>I'm front-end developer</p>
                </div>
                <div className={style.ava}></div>
            </div>
        </div>
    );
}

export default Main;