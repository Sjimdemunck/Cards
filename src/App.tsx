import React from 'react';
import logo from './logo.svg';
import Card from './components/Card'
import './App.css';
import ImageList from './components/ItemList';
import data from './data';
import Cards from './components/Cards'
// @ts-ignore

import styled from 'styled-components';

const Container = styled.div`
    max-width: 1140px;
    padding-left: 15px;
    padding-right: 15px;
    margin: auto;
    flex-shrink: 0;
    -webkit-box-flex: 1;
    flex-grow: 1;
    width: 100%;
    margin-top: 50px;
`

function App() {
    return (
      <>
          <Container>
              <Cards/>
          </Container>
      </>
  );
}

export default App;
