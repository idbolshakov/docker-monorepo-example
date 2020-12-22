import logo from './logo.svg';
import './App.css';

import { helloWorld } from './common/hello-world';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          APP-A
        </p>

        <code>
          { helloWorld('APP-A') }
        </code>
      </header>
    </div>
  );
}

export default App;
