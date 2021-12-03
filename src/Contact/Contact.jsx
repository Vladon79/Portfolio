import react from 'react';
import style from './Contact.module.css';
import styleContainer from './../Common/Stiles/Conteiner.module.css';

const Contact = (props) => {
  return (
    <div className={style.contact}>
      <div className={`${styleContainer.container} ${style.contactContsiner}`}>
      <div className={style.blockContact}>
      <h2 className={style.title}>Контакты</h2>
      <div className={style.inputs}>
        <input className={style.input}/>
        <input className={style.input}/>
        <textarea className={style.textarea}/>
        <button>Отправить</button>

        </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;