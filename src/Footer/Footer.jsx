import react from 'react';
import style from './Footer.module.css';
import styleContainer from './../Common/Stiles/Conteiner.module.css';

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={`${styleContainer.container} ${style.footerContainer}`}>
        <h2 className={style.title}>Klopot Vlad</h2>
        <div className={style.containerBlock}>
          <div className={style.block}></div>
          <div className={style.block}></div>
          <div className={style.block}></div>
          <div className={style.block}></div>
          <div className={style.block}></div>
        </div>
        <p>@Все права защищены</p>
      </div>
    </div>
  );
}

export default Footer;