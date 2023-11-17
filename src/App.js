import Imagem2 from './assets/imagem2.jpg'
import "./App.css";
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';

function App() {
  return (
    <div className="App">
      <h1>Avançando com React</h1>
      <div>
        <img src="/971.jpg" width="100px"  alt="Programador"/>
      </div>
      <div>
        <img src={Imagem2} width="100px" height="50px" alt="codigos" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
    </div>
  );
}

export default App;
