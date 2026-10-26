import React, { Component } from 'react';

export default class CompteurVisites extends Component {
  
  constructor(props) {
    super(props); 
    this.state = {
      compteur: 0
    };
  }

  ajouterStagiaire() {
    this.setState({
      compteur: this.state.compteur + 1
    });
  }

  reinitialiser() {
    this.setState({
      compteur: 0
    });
  }

  render() {
    return (
      <div style={{ padding: '20px', border: '2px solid #1D65F5', borderRadius: '12px', margin: '15px 0' }}>
        <h2>Nombre de stagiaires présents : {this.state.compteur}</h2>

        <button 
          onClick={() => this.ajouterStagiaire()}
          style={{ padding: '8px 16px', marginRight: '10px', cursor: 'pointer' }}
        >
          + Ajouter un stagiaire
        </button>

        <button 
          onClick={() => this.reinitialiser()}
          style={{ padding: '8px 16px', cursor: 'pointer' }}
        >
          Réinitialiser
        </button>
      </div>
    );
  }
}