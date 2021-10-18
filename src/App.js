
import './App.css';
import Conversor from './componenents/Conversor';
import { Component } from 'react';

class App extends Component {
  render(){ 
  return (
    <div className="App">
      <Conversor moedaA="USD" moedaB="BRL"></Conversor>
    </div>
  );}
}

export default App;
