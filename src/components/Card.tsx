import React from 'react';
// @ts-ignore
import styled from 'styled-components';

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`;

const CardWrapper = styled.div`
    display: flex;
    width: 33%;
`

const ImageWrapper = styled.div`
    display: flex;
    
`



interface ICard {
    title: string,
    image: string,
    altText: string,
    text: string,
    weight: string,
    reps: number,
}

const Card = ({ title, image, altText, text, weight, reps }: ICard ) => {
    return (
        <CardWrapper>
            <Title>
                {title}
            </Title>
            <span>
                {weight}
            </span>
            <span>
                {reps}
            </span>
            <ImageWrapper >
                <img src={image} alt={altText}/>
            </ImageWrapper>
        </CardWrapper>
    )
}

export default Card
