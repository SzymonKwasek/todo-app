// import logo from './logo.svg';
import './App.css';
// import React, { Component } from "react"; //Do klasowego
import React, { useState, useEffect } from "react"; //Do funkcyjnego (hooki)
// import { Button } from "./components/Button";

const ListItem = ({ Text }) => {
  const [IsColorChanged, setIsColorChanged] = useState(false);

  const ToggleColorChange = () => {
    setIsColorChanged(!IsColorChanged);
  }

  return <li style={{ color: IsColorChanged ? "red" : "blue" }} onClick={ToggleColorChange}>
    {Text}
  </li>
}

const ListItem2 = ({ Text }) => {
  const [IsColorChanged, setIsColorChanged] = useState(false);

  const ToggleColorChange = () => {
    setIsColorChanged(!IsColorChanged);
  }

  return <li style={{ color: IsColorChanged ? "green" : "black" }} onClick={ToggleColorChange}>
    {Text}
  </li>
}

// const List = ({ListItems}) => {
//   return (
//     <ul>
//       {ListItems.map((item, index) => {
//         return <ListItem key={index} Text={item} />
//       })}
//     </ul>
//   )
// }

const List = (props) => {
  return (
    <ul>
      {props.children}
    </ul>
  )
}

const App = (props) => {
  const [TodoList, setTodoList] = useState(["Wyniesc smieci", "Zrobic pranie", "Wyprowadzic psa"]);
  const [TodoList2, setTodoList2] = useState(["Isc na poczte", "Wyprowadzic psa"]);

  const [InputValues, setInputValues] = useState({
    Number: "",
    Url: ""
  })

  useEffect(() => {
    console.log(InputValues)
  }, [InputValues])

  const OnInputChange = (e) => {
    setInputValues({
      // Number: InputValues.Number,
      // Url: InputValues.Url, to to samo co ...InputValues
      ...InputValues,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      {/* <List ListItems={TodoList} />
      <List ListItems={TodoList2} /> */}

      <input onChange={OnInputChange} type="text" name="Number" disabled={true} value={InputValues.Number} />
      <input onChange={OnInputChange} type="text" name="Url" value={InputValues.Url} />

      <List>
        {TodoList.map((item, index) => {
          return <ListItem key={index} Text={item} />
        })}
      </List>

      <List>
        {TodoList2.map((item, index) => {
          return <ListItem2 key={index} Text={item} />
        })}
      </List>
      {/* <ul>
        {TodoList2.map((item, index) => {
          return <ListItem key={index} Text={item} />
        })}
      </ul> */}
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

