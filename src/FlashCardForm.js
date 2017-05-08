import React from 'react'

class QuestionForm extends React.Component {
    
    defaults = { question: '', answer: '', showFront: true }
    state = { flashCard: this.defaults }

    handleChange = (element) => {
        let ele = element.target
        console.log(ele)
        let { flashCard } = this.state
        this.setState ({
            flashCard: {
                ...flashCard,
                [ele.id]: ele.value
            }
        })
    }

    submit = (element) => {
        element.preventDefault()
        let { flashCard } = this.state
        this.props.addFlashCard(flashCard.question, flashCard.answer, flashCard.showFront)
        
    }

    render() {

        let { flashCard } = this.state
        return (
            <form onSubmit={ this.submit }>
                <input id="question" onChange={this.handleChange} value={ flashCard.question } placeholder="Question?" />
                <input id="answer" onChange={this.handleChange} value= { flashCard.answer } placeholder="Answer" />
                <button>Create</button>
            </form>

        );
    }
}



export default QuestionForm;