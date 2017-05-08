import React from 'react';
import FlashCard from './FlashCard.js'

const FlashCardList = ({ flashCards }) => (
    <ul>
        { flashCards.map( (c,i) => <FlashCard key={i} {...c} /> )}
    </ul>
)



export default FlashCardList