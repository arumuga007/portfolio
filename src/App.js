import { createContext, useRef } from 'react';
import './App.css';
import BodyComponents from './components/bodycomponents';
import Copyright from './components/copyright/copyright';
import Navbar from './components/navbar/navbar';

export const MenuItemsContext = createContext();
function App() {
  const home = useRef(null);
  const about = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);
  return (
    <div className="App">
      <MenuItemsContext.Provider value={{home, about, projects, contact}}>
        <Navbar />
        <BodyComponents />
        <Copyright />
      </MenuItemsContext.Provider>
    </div>
  );
}

export default App;