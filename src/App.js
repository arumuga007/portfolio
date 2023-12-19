import './App.css';
import BodyComponents from './components/bodycomponents';
import Copyright from './components/copyright/copyright';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BodyComponents />
      <Copyright />
    </div>
  );
}

export default App;
