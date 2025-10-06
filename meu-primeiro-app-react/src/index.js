import React from 'react';
import { createRoot } from 'react-dom/client'

const App = () => {
  return <div style={{margin: 'auto', width: 768, backgroundColor: '#EEE', padding: 12, borderRadius: 8}}><strong>Meu primeiro componente reactJs</strong>
    <label for="nome" style={{display: 'block', marginBottom: 4}}>Nome: </label>
    <input type="text" id="nome" style={{paddingLeft: '5', paddingTop: 8, paddingBottom: 8, borderStyle: 'hidden', width: '100%', borderRadius: 8, outline: 'none', boxSizing: 'border-box'}}/>
    <button style={{marginTop: 12, paddingTop: 8, paddingBottom: 8, backgroundColor: 'blueviolet', color: 'white', border: 'none', width: '100%', borderRadius: 8, cursor: 'pointer'}}>Enviar</button>  
  </div>
} 

const root = createRoot(document.getElementById('root'))
root.render(<App/>);