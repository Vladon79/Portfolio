import './App.css';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import MyProject from './MyProject/MyProject';
import Skills from './Skills/Skills';
import Main from "./Main/Main";
import AboutMe from "./AboutMe/AboutMe";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <AboutMe/>
            <Skills/>
            <MyProject/>
            <Contact/>
            <Footer/>

        </div>
    );
}

export default App;
