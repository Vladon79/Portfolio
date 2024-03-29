import style from './Footer.module.scss';
import styleContainer from './../Common/Stiles/Conteiner.module.css';
import link from '../assets/iconMesenger/linkedin.svg';
import gitHub from '../assets/iconMesenger/github.svg';
import codevars from '../assets/iconMesenger/codewars-svgrepo-com.svg';


const Footer = () => {
    const iconStyle = (logo) => ({
        backgroundImage: 'url(' + logo + ')',
    });
    const logo = [
        {icon: iconStyle(gitHub), rerender: 'https://github.com/Vladon79'},
        {icon: iconStyle(codevars), rerender: 'https://www.codewars.com/users/Vladon79'},
        {icon: iconStyle(link), rerender: 'https://www.linkedin.com/in/vlad-klopot'},
    ]
    return (
        <div className={style.footer}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h3 className={style.title}>Klopot Vlad</h3>
                <div className={style.containerBlock}>
                    {logo.map(l => <div key={l.rerender} to={l.rerender} className={style.containerForBlock} s>
                        <a href={l.rerender} style={l.icon} className={style.block}></a>
                    </div>)}
                </div>
                <p>© 2022. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;