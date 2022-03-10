import style from './Footer.module.scss';
import styleContainer from './../Common/Stiles/Conteiner.module.css';
import instagram from '../assets/iconMesenger/instagram.svg';
import link from '../assets/iconMesenger/linkedin.svg';
import vk from '../assets/iconMesenger/vk.svg';
import telegram from '../assets/iconMesenger/telegram.svg';

const Footer = () => {
    const iconStyle = (logo) => ({
        backgroundImage: 'url(' + logo + ')',
    });
    const logo = [iconStyle(telegram), iconStyle(vk), iconStyle(link), iconStyle(instagram)]
    return (
        <div className={style.footer}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h3 className={style.title}>Klopot Vlad</h3>
                <div className={style.containerBlock}>
                    {logo.map(l => <div style={l} className={style.block}></div>)}
                </div>
                <p>@Все права защищены</p>
            </div>
        </div>
    );
}

export default Footer;