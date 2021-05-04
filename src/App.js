// import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import { Button } from "./components/Button";

//Rodzic
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
    // this.FunkcjaRodzica = this.FunkcjaRodzica.bind(this);

  }
  //Funkcja którą trzeba zadeklarować do scope klasy App
  // FunkcjaRodzica (params){
  //   alert("cos")
  // }

  //Funkcja która juz jest w scope klasy App
  FunkcjaRodzica = () => {
    alert("cos")
  }

  render() {

    const ZmiennaGuzika = "Guzik2"

    return (
      <div>
        <Button OnClick={this.FunkcjaRodzica} Text={ZmiennaGuzika} />
      </div>
    )
  }
}



//Dziecko
// const Dziecko = (props) => {

//   return (
//     <div>
//       Jakis tekst
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

