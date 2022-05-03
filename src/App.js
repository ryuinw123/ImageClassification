import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Dropper from './components/Dropper';
import Topbar from './components/Topbar';
import { useContext } from 'react';
import { ThemeContext } from './context';


function App() {

  const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode

  return (
    <div className="App" style={{color : darkMode && "white" , background : darkMode && "#121212"}}>
      <Topbar />
      <Header />
      <Dropper />
    </div>
  );
}

export default App;
