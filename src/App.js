import "./App.scss";
import CardImage from "./components/Cards/CardImage/CardImage";
import MainContent from "./components/MainContent/MainContent";
import DataWeather from "./components/DataWeather/DataWeather";
import ConfigMenu from "./components/ConfigMenu/ConfigMenu";
function App() {
  return (
    <div className="main-div">
      <ConfigMenu />

      <div className="App">
          <header className="App-header">
            <h1>Olá, Bruno</h1>
          </header>
          <div className="cards">
            <CardImage />
            <MainContent />
            <DataWeather />
          </div>
      </div>
    </div>
  );
}

export default App;
