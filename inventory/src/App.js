import logo from './logo.svg';
import './App.css';
import Info from './Info.js';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="Silly logo"/>
      <p>learn react</p>
      <Info />
      <Info />
    </div>
  );
}



export default App;
