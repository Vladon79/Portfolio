import react from 'react';
import style from './Contact.module.scss';
import styleContainer from './../Common/Stiles/Conteiner.module.css';
import Title from '../Common/components/title/Title';
import Button from '../Common/components/title/Button';

const Contact = (props) => {
  return (
    <div className={style.contact}>
      <div className={`${styleContainer.container} ${style.contactContainer}`}>
      <Title title={'Contact'}/>
      <form className={style.inputs}>
        <input className={style.input} placeholder={'Name*'}/>
        <input className={style.input} placeholder={'Email*'}/>
        <textarea className={style.textarea} placeholder={'Message*'}/>
        <Button title={'Submit'}/>
        </form>
        </div>
    </div>
  );
}

export default Contact;