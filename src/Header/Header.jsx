import Nav from '../Nav/Nav';
import style from './Header.module.scss';
import {useEffect, useState} from "react";



const Header = () => {
    const [scrollY, setScrollY] = useState(0);

    function logit() {
        setScrollY(window.pageYOffset);
    }

    useEffect(() => {
        function watchScroll() {
            window.addEventListener("scroll", logit);
        }

        watchScroll();
        return () => {
            window.removeEventListener("scroll", logit);
        };
    }, [window.pageYOffset]);

    let finalClassName

    if (scrollY < 900) {
        finalClassName = style.header
    } else {
        finalClassName = style.headerWhite
    }

    return (
        <div className={finalClassName}>
            <Nav/>
        </div>
    );
}

export default Header;