import style from './AboutMe.module.scss';
import styleContainer from './../Common/Stiles/Conteiner.module.css';
import Title from '../Common/components/title/Title';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import photo from '../assets/image/photo_about_me.jpeg'


const AboutMe = () => {

    return (
        <div id="aboutMe" className={style.aboutMe}>
            <div className={`${styleContainer.container} ${style.aboutMeContainer}`}>
                <Fade bottom>
                    <Title title={'About me'}/>
                    <div className={style.infoForMe}>

                        <div className={style.imageContainer}>
                            <Tilt className={style.tilt} options={{max: 25, perspective: 1200,}}>
                                <img src={photo} className={style.image}/>
                            </Tilt>
                            <span className={style.spanBorrder}></span>
                        </div>

                        <div className={style.info}>
                            <p> I'm front end developer with experience in creating SPA with React/Redux/TypeScript in team. I have experience with Node.js, and AWS services, SSК on Next.JS + Typescript. I'm also a little familiar with React-Native/Expo. I am self-learner, I was getting necessary information and learned it, so I am open to learning new advance technologies and growing.</p>
                        </div>

                    </div>
                </Fade>
            </div>

        </div>
    );
}

export default AboutMe;