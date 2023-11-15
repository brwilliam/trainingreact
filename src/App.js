import Imagem2 from './assets/imagem2.jpg'
import "./App.css";
import ManageData from './components/ManageData';

function App() {
  return (
    <div className="App">
      <h1>Avançando com React</h1>
      <div>
        <img src="/971.jpg" width="500px"  alt="Programador"/>
      </div>
      <div>
        <img src={Imagem2} width="500px" height="400px" alt="codigos" />
      </div>
      <ManageData/>
    </div>
  );
}

export default App;
