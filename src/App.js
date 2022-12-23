
import './App.css';
import Transferencias from './Transferencias';
import Conta from './Conta';
import { useEffect, useState } from 'react';
function App() {
  const[conta, setContas]=useState([]);

  useEffect(()=>{
  fetch("http://localhost:8080/contas")
  .then(retorno=>retorno.json())
  .then(retorno_convertido=>setContas(retorno_convertido));
  },[]);
  
  return (
    <div>
      <Conta/>
      <Transferencias vetor={conta}/>
    </div>
  );
}

export default App;
