import React from 'react';
import ReactDOM from 'react-dom/client';
import CompteurVisites from './CompteurVisites';

const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
  return (
    <div>
      <h1>Activité N°4 : Gestion du State</h1>
      <CompteurVisites />
    </div>
  );
}

root.render(<App />);
