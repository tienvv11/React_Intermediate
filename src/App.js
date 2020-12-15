import State from './Components/State';
import Effect from './Components/Effect';
import ContextComponent from './Components/Context';
import RefComponent from './Components/Ref';
import ReducerComponent from './Components/Reducer';
import './App.css';

function App() {
  return (
    <div className="App">
     <State />
     <hr />
     <Effect />
     <hr />
     <ContextComponent />
     <hr/>
     <RefComponent />
     <hr/>
     <ReducerComponent />
    </div>
  );
}

export default App;
