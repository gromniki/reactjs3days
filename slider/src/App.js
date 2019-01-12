import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';

import styled from 'styled-components';

import Header from './components/Header';
import Main from './components/Main';
import Menu from './components/Menu';

class App extends Component {
    render() {
        return (
        <main className="App">          
            <Header />
            <Menu />
            <Main />
        </main>
        );
    }
}

export default App;
