
import { Routes, Route  } from "react-router-dom";
import About from "./Pages/About/About";
import MainPages from "./Pages/MainPage/MainPages";
import {useState} from "react";
import {PokemonInfo} from "./Pages/PokemonInfo";

const App = () => {
    const [ theme, setTheme]  = useState('light');

    const handleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark'
        setTheme(newTheme)
    }

  return (
    <div className={`App ${theme}`}>
        <button
            onClick={handleTheme}
            className="button">
            Change Theme
        </button>
        <Routes>
            <Route path="/" element={<MainPages/>}/>
           <Route path="about" element={<About />}/>
            <Route path='/pokemon/:id' element={<PokemonInfo />} />
        </Routes>
    </div>
  );
}

export default App;
