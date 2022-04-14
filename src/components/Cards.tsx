import React from 'react';
import Card from './Card';
import data from '../data';

export const Cards = () => {
     const cards = data.map(card => {
        return <Card
            id={card.id}
            title={card.title}
            image={card.image}
            description={card.description}
            weight={card.weight}
            reps={card.reps}
        />
    })
    
    return (
        <>
            {cards}
        </>
    )
}

export default Cards;