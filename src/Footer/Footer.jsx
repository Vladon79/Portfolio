import style from './Footer.module.scss';
import styleContainer from './../Common/Stiles/Conteiner.module.css';
import instagram from '../assets/iconMesenger/instagram.svg';
import link from '../assets/iconMesenger/linkedin.svg';
import gitHub from '../assets/iconMesenger/github.svg';
import codevars from '../assets/iconMesenger/codewars-svgrepo-com.svg';

const Footer = () => {
    const iconStyle = (logo) => ({
        backgroundImage: 'url(' + logo + ')',
    });
    const logo = [iconStyle(codevars), iconStyle(gitHub), iconStyle(link), iconStyle(instagram)]
    return (
        <div className={style.footer}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h3 className={style.title}>Klopot Vlad</h3>
                <div className={style.containerBlock}>
                    {logo.map(l => <div key={l.backgroundImage} className={style.containerForBlock}><div style={l} className={style.block}></div></div>)}
                </div>
                <p>@Все права защищены</p>
            </div>
        </div>
    );
}

export default Footer;