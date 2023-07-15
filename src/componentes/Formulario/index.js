import React, { useState } from 'react';
import './Formulario.css'

function Formulario({ onSubmit }) {
    const [contaId, setContaId] = useState('');
    const [inicioPeriodo, setInicioPeriodo] = useState('');
    const [fimPeriodo, setFimPeriodo] = useState('');
    const [nomeOperador, setNomeOperador] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ contaId, inicioPeriodo, fimPeriodo, nomeOperador });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={contaId} onChange={e => setContaId(e.target.value)} placeholder="Conta ID" />
            <input type="text" value={nomeOperador} onChange={e => setNomeOperador(e.target.value)} placeholder="Nome do Operador" />
            <input type="datetime-local" value={inicioPeriodo} onChange={e => setInicioPeriodo(e.target.value)} />
            <input type="datetime-local" value={fimPeriodo} onChange={e => setFimPeriodo(e.target.value)} />

            <button type="submit">Pesquisar</button>
        </form>
    );
}


export default Formulario;
