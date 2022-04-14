import React from 'react';
// @ts-ignore
import styled from 'styled-components';

const Title = styled.h1`
    font-size: 1.5em;
    margin: .25em;
    text-align: center;
    color: palevioletred;
`;

const CardWrapper = styled.div`
    display: flex;
    border-radius: 5px;
    border: 1px solid;
    padding: 15px;
    box-shadow: 3px 7px grey;
    flex-flow: column;
    width: 33%;
    margin-bottom: 30px;
`

const ImageWrapper = styled.div`
    display: flex;
`

interface ICard {
    id: number,
    title: string,
    image: string,
    description: string,
    weight: string,
    reps: number,
}

export const Card = ({ title, image, description, weight, reps }: ICard ) => {
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
                <img src={image} />
            </ImageWrapper>
        </CardWrapper>
    )
}

export default Card
