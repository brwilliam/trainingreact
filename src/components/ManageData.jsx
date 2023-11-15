import { useState } from "react";

const ManageData = () => {
  let someData = 10;

  const[number, setNumber] = useState(10);

  return (
    <div>
      <div>
        <p>Valor: {someData}</p>
        <button onClick={() => (someData = 15)}>Mudar Variavel</button>
      </div>
      <div>
        <p>Valor: {number}</p>
        <button onClick={()=> setNumber(50)}>Mudar</button>
      </div>
    </div>
  );
};

export default ManageData;
