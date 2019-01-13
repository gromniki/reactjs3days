import React, { Component } from 'react';
//import './App.css';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

import Slider from './Slider';

const Repair = styled.div`
    font-size: 40px;
    font-weight: 700;
    line-height: 48px;
    color: #ffffff;

    span {
        display: block;
        font-size: 24px;
        line-height: 30px;
    }
`

const LightText = styled.div`
    margin: 50px 0;
    font-size: 18px;
    font-weight: 300;
    line-height: 28px;
    color: #ffffff;
`

const SubmitButton = styled.button`
    width: 246px;
    height: 66px;
    font-size: 18px;
    font-weight: 700;
    color: #ffffff;
    text-align: center;
    line-height: 66px;
    background-color: #ffa14b;
    border: 0;
    border-radius: 33px;

    &:hover {
        color: #ffa14b;
        background-color: #ffffff;
    }
`

class Main extends React.Component {
    render() {
        return (
            <Row>
                <Col lg={5}>
                    <Repair>Качественный Ремонт
                        <span>iphone за 35 минут и гарантия 1 год</span>
                    </Repair>
                    <LightText>Оставьте заявку на бесплатную диагностику без очереди, 
                        и получите защитное стекло, стоимостью 1000 рублей,
                        с установкой в подарок!</LightText>
                    <SubmitButton>Отправить заявку!</SubmitButton>

                </Col>
                <Col lg={6} lgOffset={1}>
                    <Slider />
                </Col>
            </Row>
        );
    }
}

export default Main;