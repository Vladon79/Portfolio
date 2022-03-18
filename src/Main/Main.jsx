import style from './Main.module.scss';
import MyParticles from "./MyParticles/MyParticles";
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from "react-typing-effect";


const Main = () => {
    return (
        <div id="home" className={style.mainBlock}>
            <MyParticles/>
            <div className={style.container}>
                <Fade bottom>
                    <h3>Welcome There!</h3>
                    <h1>I'm Klopot Vlad</h1>
                    <ReactTypingEffect text={["I'm front-end developer"]}/>
                </Fade>
            </div>

        </div>
    );
}

export default Main;