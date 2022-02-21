import react from 'react';
import style from './Footer.module.scss';
import styleContainer from './../Common/Stiles/Conteiner.module.css';
import jsLogo from '../assets/icon/logo-js.png';
import cssLogo from '../assets/icon/css-logo.png';
import reactLogo from '../assets/icon/logo-React.png';
import tsLogo from '../assets/icon/logo-typescript.png';
import reduxLogo from '../assets/icon/logo-redux.png';
import htmlLogo from '../assets/icon/logo-html.jpeg';

const Footer = () => {
    const iconStyle = (logo) => ({
        backgroundImage: 'url(' + logo + ')',
    });
    const logo = [iconStyle(jsLogo), iconStyle(reactLogo), iconStyle(tsLogo), iconStyle(reduxLogo), iconStyle(htmlLogo), iconStyle(cssLogo)]
    return (
        <div className={style.footer}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h3 className={style.title}>Klopot Vlad</h3>
                <div className={style.containerBlock}>
                    {logo.map(l => <div style={l} className={style.block}></div>)}
                    {/*<div className={style.block}></div>*/}
                    {/*<div className={style.block}></div>*/}
                    {/*<div className={style.block}></div>*/}
                    {/*<div className={style.block}></div>*/}
                    {/*<div className={style.block}></div>*/}
                </div>
                <p>@Все права защищены</p>
            </div>
        </div>
    );
}

export default Footer;