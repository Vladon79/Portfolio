import style from './AboutMe.module.scss';
import styleContainer from './../Common/Stiles/Conteiner.module.css';
import Title from '../Common/components/title/Title';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt'


const AboutMe = () => {

    return (
        <div id="aboutMe" className={style.aboutMe}>
            <div className={`${styleContainer.container} ${style.aboutMeContainer}`}>
                <Fade bottom>
                    <Title title={'About me'}/>
                    <div className={style.infoForMe}>

                        <div className={style.imageContainer}>
                            <section className={style.border}>
                                <Tilt className={style.tilt} options={{scale: 1, max: 25, perspective: 2000,}}>
                                    <div className={style.image}></div>
                                </Tilt>
                            </section>
                        </div>

                        <div className={style.info}>
                            <p> I'm frontend developer with experience in creating SPA with React/Redux/ TypeScript in
                                team. Now I improve my skills in this direction and expanding them with new
                                technologies. I spend my leisure time on Codewars or by improving english skills. Open
                                to your suggestions.</p>

                        </div>

                    </div>
                </Fade>
            </div>

        </div>
    );
}

export default AboutMe;