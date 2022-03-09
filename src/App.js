import './App.css';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';
import MyProject from './MyProject/MyProject';
import RemoteWork from './RemoteWork/RemoteWork';
import Skills from './Skills/Skills';
import {Route, Router, Routes} from "react-router-dom";

function App() {
    return (
        <div className="App">
            {/*<Router />*/}
            <Header/>

                {/*<Routes>*/}
                {/*    <Route path="/"/>*/}
                {/*    <Route path="/home" element={<Main/>}/>*/}
                {/*    <Route path="/skills" element={<Skills/>}/>*/}
                {/*    <Route path="/myProject" element={<MyProject/>}/>*/}
                {/*    <Route path="/contact" element={<Contact/>}/>*/}
                {/*    /!*<Route path="/test" element={<TestPage/>}/>s*!/*/}
                {/*</Routes>*/}
            <Main/>
            <Skills/>
            <MyProject/>
            <Contact/>
            {/*<RemoteWork/>*/}
            <Footer/>

        </div>
    );
}

export default App;
