import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <p>The test</p>
      <Info />
      <Info />
    </div>
  );
}

function Info() {
  return (
    <div>
      <h1>Title</h1>
      <p>Text and stuff</p>
    </div>
  )
}

export default App;
