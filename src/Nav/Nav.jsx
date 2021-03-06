import style from './Nav.module.scss';
import {Link} from 'react-scroll'

const Nav = () => {

    return (
        <header className={style.nav}>
            <Link
                activeClass={style.linkActive}
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >Home</Link>
            <Link
                activeClass={style.linkActive}
                to="aboutMe"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >About me</Link>
            <Link
                activeClass={style.linkActive}
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >Skills</Link>
            <Link
                activeClass={style.linkActive}
                to="myProject"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >My project</Link>
            <Link
                activeClass={style.linkActive}
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >Contact</Link>

        </header>
    );
}

export default Nav