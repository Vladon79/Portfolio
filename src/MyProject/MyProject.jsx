import style from './MyProject.module.scss';
import styleContainer from './../Common/Stiles/Conteiner.module.css';
import Project from './Project/Project';
import Title from '../Common/components/title/Title';
import todoImage from '../assets/image/todolistImage.png';
import networkImage from '../assets/image/networkImage.png';
import cardsProject from '../assets/image/cards.png';


const MyProject = () => {
    const iconStyle = (logo) => ({
        backgroundImage: 'url(' + logo + ')',
    });

    const myProject = [
        {
            icon: iconStyle(networkImage), title: 'Social network',
            description: 'Discover Business Strategy A thoughtful discovery process',
            rerender: 'https://vladon79.github.io/Network/'
        },
        {
            icon: iconStyle(todoImage), title: 'Todolist',
            description: 'Discover Business Strategy A thoughtful discovery process',
            rerender: 'https://vladon79.github.io/Network/'
        },
        {
            icon: iconStyle(cardsProject), title: 'Cards',
            description: 'Discover Business Strategy A thoughtful discovery process',
            rerender: 'https://vladon79.github.io/Project/'
        }

    ]


    return (
        <div id="myProject" className={style.myProject}>
            <div className={`${styleContainer.container} ${style.myProjectContsiner}`}>
                <Title title={'Project'}/>
                <div className={style.projects}>
                    {myProject.map(p => <Project key={p.title} style={p.icon} title={p.title}
                                                 description={p.description} rerender={p.rerender}/>)}

                </div>
            </div>
        </div>
    );
}

export default MyProject;