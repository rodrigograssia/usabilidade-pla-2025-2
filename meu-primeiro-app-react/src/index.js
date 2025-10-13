import React from 'react';
import { createRoot } from 'react-dom/client'
import './styles.css';

const App = () => {
  const estilosBotao = { marginTop: 12, paddingTop: 8, paddingBottom: 8, backgroundColor: 'blueviolet', color: 'white', border: 'none', width: '100%', borderRadius: 8, cursor: 'pointer' 
  }
  const textoRotulo = "Nome: ";

  return (
  <div style={{margin: 'auto', width: 768, backgroundColor: '#EEE', padding: 12, borderRadius: 8}}><strong>Meu primeiro componente reactJs</strong>

    <label className="rotulo" htmlFor="nome" style={{display: 'block', marginBottom: 4, fontSize: 50}}>{textoRotulo}</label>

    <input type="text" id="nome" style={{paddingLeft: '5', paddingTop: 8, paddingBottom: 8, borderStyle: 'hidden', width: '100%', borderRadius: 8, outline: 'none', boxSizing: 'border-box'}}/>
    
    <button style={estilosBotao}>Enviar</button>
  </div>
  )
} 

const root = createRoot(document.getElementById('root'))
root.render(<App/>);