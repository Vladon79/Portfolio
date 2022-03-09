import style from './Nav.module.scss';
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <div className={style.nav}>
            <NavLink children={'Home'} to={'/home'} className={({isActive}) => (isActive ? style.linkActive : style.link)}/>
            <NavLink children={'Skills'}to={'/skills'} className={({isActive}) => (isActive ? style.linkActive : style.link)}/>
            <NavLink children={'My project'} to={'/myProject'}className={({isActive}) => (isActive ? style.linkActive : style.link)}/>
            <NavLink children={'Contact'}to={'/contact'} className={({isActive}) => (isActive ? style.linkActive : style.link)}/>


            {/*<a href="">Home</a>*/}
            {/*<a href="">Skills</a>*/}
            {/*<a href="">My project</a>*/}
            {/*<a href="">Contact</a>*/}

        </div>
    );
}

export default Nav;