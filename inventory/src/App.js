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
  const title = "This is a title char variable";

  const title2 = "This is a title as well";
  const showTitle2 = true;

  return (
    <div>
      {title}
      {/*This is a proper JSX comment*/}
      {/*Ternary expression - if showTitle2 is true
       then value is title2
       otherwise value is "No title2" */}
      <h1>{showTitle2 ? title2 : "No title2"}</h1>
      <p>Text and stuff</p>
    </div>
  )
}

export default App;
