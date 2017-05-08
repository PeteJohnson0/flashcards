import React from 'react'

class FlashCard extends React.Component {
    state = { showFront: true }

    showAnswer = (question) => {
      this.setState ({ showFront: !this.state.showFront })
    }

    render() {
        let { question, answer, showFront } = this.props
        return (
            <div id="card" >
                { this.state.showFront ?
                    <div>
                        <p onClick={this.showAnswer} >{question}</p>
                        <button>Delete Card</button>
                    </div>
                    :
                    <div>
                        <p onClick={this.showAnswer} >{answer}</p>
                        <button>Delete Card</button>
                    </div>
                }
            </div>
        )
    }
}

export default FlashCard;