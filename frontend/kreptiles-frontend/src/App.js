import logo from './logo.svg';
import corncob from './images/Corncob_head.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={corncob} className="App-logo" alt="logo" />
        <p>
          Poop <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
