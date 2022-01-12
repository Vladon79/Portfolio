import react from 'react';
import style from './Nav.module.scss';

const Nav = () => {
  return (
    <div className={style.nav}>

       <a href="">Home</a>
       <a href="">Skills</a>
       <a href="">My project</a>
       <a href="">Contact</a>
       
    </div>
  );
}

export default Nav;