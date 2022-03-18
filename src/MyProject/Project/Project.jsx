import style from './Project.module.scss';
import Zoom from 'react-reveal/Zoom';


const Project = (props) => {
    return (
        <Zoom>
            <div className={style.project}>
                <div style={props.style} className={style.icon}>
                    <a className={style.button} href={props.rerender}>See More</a>
                </div>
                <div className={style.projectInfo}>
                    <h3 className={style.projectTitle}>{props.title}</h3>
                    <span className={style.description}>{props.description}</span>
                </div>
            </div>
        </Zoom>
    );
}

export default Project;