import style from './Main.module.scss';
import MyParticles from "./MyParticles/MyParticles";
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from "react-typing-effect";
import gitHub from "../assets/iconMesenger/github.svg";
import codevars from "../assets/iconMesenger/codewars-svgrepo-com.svg";
import link from "../assets/iconMesenger/linkedin.svg";
import photo from '../assets/image/photo.jpeg'


const Main = () => {
    const iconStyle = (logo) => ({
        backgroundImage: 'url(' + logo + ')',
    });
    const logo = [
        {icon: iconStyle(gitHub), rerender: 'https://github.com/Vladon79'},
        {icon: iconStyle(codevars), rerender: 'https://www.codewars.com/users/Vladon79'},
        {icon: iconStyle(link), rerender: 'https://www.linkedin.com/in/vlad-klopot'},
    ]
    return (
        <div style={{
            backgroundImage: `url(${photo})`
        }} id="home" className={style.mainBlock}>
            <MyParticles/>
            <div className={style.container}>
                <Fade bottom>
                    <h3>Welcome There!</h3>
                    <h1>I'm Klopot Vlad</h1>
                    <h3>Belarus, Brest</h3>
                    <ReactTypingEffect text={["I'm front-end developer"]}/>
                    <div className={style.divContainerForBlock}>
                        {logo.map(l => <div key={l.rerender} to={l.rerender} className={style.containerForBlock}>
                            <a href={l.rerender} style={l.icon} className={style.block}></a>
                        </div>)}
                    </div>
                </Fade>

            </div>

        </div>
    );
}

export default Main;