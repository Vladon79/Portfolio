import './App.css';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';
import MyProject from './MyProject/MyProject';
import RemoteWork from './RemoteWork/RemoteWork';
import Skils from './Skills/Skills';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Skils/>
      <MyProject/>
      <Contact/>
      <RemoteWork/>
      <Footer/>
    </div>
  );
}

export default App;
