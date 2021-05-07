// import logo from './logo.svg';
import './App.css';
// import React, { Component } from "react"; //Do klasowego
import React, { useState, useEffect } from "react"; //Do funkcyjnego (hooki)
import { Button } from "./components/Button";


const App = (props) => {
  const [ButtonText, setButtonText] = useState("");
  const [ButtonText2, setButtonText2] = useState("Click me");

  //5 guzików i co 2 sekundy w kazdym kolejnym zmiana tekstu na jakis

  //componentDidMount()
  // useEffect(() => {
  //   setTimeout(() => {
  //     console.log("Wywołanie setState")
  //     setButtonText("Nastawiłem się na zmienną początkową")
  //   }, 5000);
  // }, []);

  useEffect(() => {
    if (ButtonText.length > 0) {
      setButtonText2("Zmieniłem się po zmianie buttona pierwszego")
    }
  }, [ButtonText]);


  const OnChangeButtonText = () => {
    setButtonText("Zmieniłem swoją nazwę");
  }

  const OnChangeButtonText2 = () => {
    setButtonText2("Click me 2");
  }

  const OnChangeButtonText3 = () => {
    setButtonText("Guzik2");
    setButtonText2("Click me 2");
  }

  return (
    <div>
      <Button OnClick={OnChangeButtonText} Text={ButtonText} />
      <Button OnClick={OnChangeButtonText2} Text={ButtonText2} />
      <Button OnClick={OnChangeButtonText3} Text="Zmien wszystko" />
    </div>
  );
}


//Rodzic
// export default class App extends Component {
//   //Początkową wartosc state deklarujemy w construktorze
//   constructor(props) {
//     super(props);

//     this.state = {
//       ButtonText: "",
//       ButtonText2: "Guzik2"
//     }
//     // this.FunkcjaRodzica = this.FunkcjaRodzica.bind(this);
//   }
//   //Funkcja którą trzeba zadeklarować do scope klasy App
//   // FunkcjaRodzica (params){
//   //   alert("cos")git
//   // }

//   componentDidMount() {
//     console.log("Zamontowałem się")
//     setTimeout(() => {
//       console.log("Wywołanie setState")
//       this.setState({
//         ButtonText: "Guzik5"
//       });
//     }, 2000)
//   }

//   componentDidUpdate(prevProps, props) {
//     if (prevProps.Text !== props.Text) {
//       //do sth...
//     }
//   }

//   componentWillUnmount() {

//   }


//   //Funkcja która juz jest w scope klasy App
//   FunkcjaRodzica = () => {
//     this.setState({
//       ButtonText: "Guzik3",
//       ButtonText2: "Guzik4"
//     });
//   }

//   render() {
//     return (
//       <div>
//         <Button OnClick={this.FunkcjaRodzica} Text={this.state.ButtonText} />
//       </div>
//     );
//   }
// }

export default App;


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

