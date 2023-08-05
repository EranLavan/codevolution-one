import React, { Component } from 'react';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Mashehu from './components/Mashehu';
import Countergpt from './components/Countergpt';
import Counter from './components/Counter';

// function App() {
//   return (
//     <div className="App">
//       <AnyNameLiterally />
//     </div>
//   );
// }

class App extends Component {
  render() {
    return (
      <div className="App">

        <Counter />

        <Message />

        <Countergpt />



        {/* <Greet name="Bruce" heroName="Batman">
          <p>This is children props</p>
        </Greet>
        
        <Greet name="Clark" heroName="Superman">
          <button>Action</button>
        </Greet>
        
        <Greet name="Diana" heroName="Wonder Woman"/>

        <Welcome name="Bruce" heroName="Batman" />
        <Welcome name="Clark" heroName="Superman" />
        <Welcome name="Diana" heroName="Wonder Woman" /> */}
      
      </div>
    )
  }
}

export default App;
