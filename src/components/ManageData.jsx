import { useState } from "react";

const ManageData = () => {

  const[number, setNumber] = useState(10);

  return (
    <div>

      <div>
        <p>Valor: {number}</p>
        <button onClick={()=> setNumber(50)}>Mudar</button>
      </div>
    </div>
  );
};

export default ManageData;
