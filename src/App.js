import "./App.css";
import Title from "./components/Title";
import Subtitle from "./components/Subtitle";
import ButtonInit from "./components/ButtonInit";

function App() {
  return (
    <div className="App">
      <Title name="Nathan" />
      <Subtitle text="En este prop podemos agregar el texto que queramos como sub-titulo" />
      <ButtonInit textButton="Click me!" />
    </div>
  );
}

export default App;
