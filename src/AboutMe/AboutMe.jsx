import style from './AboutMe.module.scss';
import styleContainer from './../Common/Stiles/Conteiner.module.css';
import Title from '../Common/components/title/Title';
import Fade from 'react-reveal/Fade';


const AboutMe = () => {

    return (
        <div id="aboutMe" className={style.aboutMe}>
            <div className={`${styleContainer.container} ${style.aboutMeContainer}`}>
                <Fade bottom>
                    <Title title={'About me'}/>
                    <div className={style.infoForMe}>
                        <p> I'm frontend developer with experience in creating SPA using React, React Native,
                            TypeScript,
                            JavaScript, SCSS, HTML. I'm planning to study Node.js, because in the future i see myself as
                            a
                            Full-stack developer. Usually i prefer to spend my leisure time on improving my English,
                            studying new technologies and solve tasks on Codewars. Ready to consider project work and
                            full-time employment.</p>
                    </div>
                </Fade>
            </div>

        </div>
    );
}

export default AboutMe;