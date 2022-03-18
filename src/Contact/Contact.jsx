import style from './Contact.module.scss';
import styleContainer from './../Common/Stiles/Conteiner.module.css';
import Title from '../Common/components/title/Title';
import Button from '../Common/components/title/Button';
import Fade from 'react-reveal/Fade';
import telegram from "../assets/iconMesenger/telegram.svg";
import phone from "../assets/iconMesenger/phone-call-svgrepo-com.svg";
import email from '../assets/iconMesenger/email-svgrepo-com.svg';


const Contact = (props) => {
    const iconStyle = (logo) => ({
        backgroundImage: 'url(' + logo + ')',
    });
    const logo = [{icon: iconStyle(telegram), data: '@vladKlopot', rerender: 'https://t.me/vladKlopot'},
        {icon: iconStyle(email), data: 'vla3ik@gmail.com', rerender: 'https://mailto:vla3ik@gmail.com'},
        {icon: iconStyle(phone), data: '+375(33)643-61-37', rerender: 'https://t.me/vladKlopot'}]
    return (
        <div id="contact" className={style.contact}>
            <div className={`${styleContainer.container} ${style.contactContainer}`}>
                <Fade left>
                    <Title title={'Contact'}/>
                    <div className={style.containerBlock}>
                        {logo.map(l => <div className={style.logo} key={l.data}>
                                <a href={l.rerender} className={style.containerForBlock}>
                                    <div style={l.icon} className={style.block}></div>
                                </a>
                                <p>{l.data}</p>
                            </div>
                        )}
                    </div>

                    <form className={style.inputs}>
                        <input className={style.input} placeholder={'Name*'}/>
                        <input className={style.input} placeholder={'Email*'}/>
                        <textarea className={style.textarea} placeholder={'Message*'}/>
                        <Button title={'Submit'}/>
                    </form>
                </Fade>
            </div>
        </div>
    );
}

export default Contact;