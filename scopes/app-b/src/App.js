import logo from './logo.svg';
import './App.css';

import { helloWorld } from './common/hello-world';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          APP-B
        </p>

        <code>
          { helloWorld('APP-B') }
        </code>
      </header>
    </div>
  );
}

export default App;
