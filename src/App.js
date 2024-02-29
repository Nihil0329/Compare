import './App.css';
import { BrowserRouter} from "react-router-dom"
import Allroutes from './Allroutes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Allroutes />
      </BrowserRouter>
    </div>
  );
}
export default App;
