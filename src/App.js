import React, { useEffect, useState } from 'react';
import Formulario from './componentes/Formulario';
import './App.css';

function App() {
  const [transacoes, setTransacoes] = useState([]);

  const buscarTransacoes = (params) => {
    const url = new URL('http://localhost:8080/transferencia');
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setTransacoes(data);
      });
  };

  useEffect(() => {
    buscarTransacoes({});
  }, []);

  return (
    <div className="App">
      <Formulario onSubmit={buscarTransacoes} />
      <div className='tabela'>
        <h3>Transações:</h3>
        {transacoes.map((transacao, index) => (
          <div key={index}>
            <p>Data da Transferência: {transacao.dataTransferencia}</p>
            <p>Valor: {transacao.valor}</p>
            <p>Tipo: {transacao.tipo}</p>
            <p>Operador: {transacao.nomeOperadorTransacao}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
