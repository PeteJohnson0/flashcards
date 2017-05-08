import React, { Component } from 'react';
import './App.css';
import FlashCardForm from './FlashCardForm.js'
import FlashCardList from './FlashCardList'


class App extends Component {

    state = { flashCards: [] };


    addFlashCard = (question,answer,showFront) => { 
      this.setState({ flashCards: [{question,answer,showFront}, ...this.state.flashCards]})
    }

    removeFlashCard = (id) => {
      this.setState({ flashCards: this.state.flashCards.filter((i) => i !== id) });
    }

  render() {

    let { flashCards } = this.state
    console.log(flashCards)
    return (
      <div className="App">
          <FlashCardList flashCards={ flashCards }  removeFlashCard={this.removeFlashCard} />
          <FlashCardForm addFlashCard={this.addFlashCard} flashCards={ flashCards }/>
      </div>
    );
  }
}

export default App;
