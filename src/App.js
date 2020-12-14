import State from './Components/State';
import Effect from './Components/Effect';
import ContextComponent from './Components/Context';
import './App.css';

function App() {
  return (
    <div className="App">
     <State />
     <hr />
     <Effect />
     <hr />
     <ContextComponent />
    </div>
  );
}

export default App;
