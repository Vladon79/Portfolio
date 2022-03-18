import style from './Nav.module.scss';
import {Link} from "react-scroll";
import {Component} from "react";
import {scroller} from "react-scroll";

// excluded React component syntax...


class Nav extends Component {


// excluded React component syntax...

    constructor(props) {
        super(props)
        this.myRef = React.createRef()
    }

    // render() {
    //     return <div ref={this.myRef}></div>
    // }

    scrollToMyRef = () => window.scrollTo(0, this.myRef.current.offsetTop)




    render() {
        const finalClassName=`${style.navWhite}`
        return (
            <div className={finalClassName}>
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

            </div>
        );
    }
}

export default Nav