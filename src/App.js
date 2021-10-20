import './App.css';
import Conversor from './componenents/Conversor';
import { Component } from 'react';

class App extends Component {
  render(){ 
  return (
    <div className="App">

      <h1>Conversor de Moedas</h1>

     <div className="linha">
        <Conversor moedaA="USD" moedaB="BRL"></Conversor>
        <Conversor moedaA="BRL" moedaB="USD"></Conversor>
     </div>
     <div className="linha">
        <Conversor moedaA="ETH" moedaB="BRL"></Conversor>
        <Conversor moedaA="BRL" moedaB="ETH"></Conversor>

     </div>
     <div className="linha">
        <Conversor moedaA="BTC" moedaB="BRL"></Conversor>
        <Conversor moedaA="BRL" moedaB="BTC"></Conversor>

     </div>
     <div className="linha">
        <Conversor moedaA="USD" moedaB="BRL"></Conversor>
        <Conversor moedaA="BRL" moedaB="USD"></Conversor>

     </div>
    </div>
  );}
}

export default App;
