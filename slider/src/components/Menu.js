import React, { Component } from 'react';
//import './App.css';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

const Repair = styled.div`
    font-size: 18px;
    font-weight: 300;
    line-height: 22px;
    color: #464646;
`

const WorkTime = styled.div`
    font-size: 12px;
    font-weight: 300;
    line-height: 24px;
    color: #2a2a2a;

    span {
        display: block;
        font-size: 21px;
        font-weight: 700;
        color: #464646;
    }
`

const Calls = styled.div`
    font-size: 12px;
    font-weight: 300;
    line-height: 24px;
    color: #2a2a2a;

    span {
        display: block;
        font-size: 21px;
        font-weight: 700;
        color: #464646;
    }
`

const CallButton = styled.button`
    width: 176px;
    height: 48px;
    font-size: 14px;
    font-weight: 400;
    color: #ffffff;
    text-align: center;
    line-height: 48px;
    background-color: #3fc7db;
    border: 0;
    border-radius: 24px;
`

class Address extends React.Component {
    render() {
        return (
            <span>{this.props.addr}</span>
        );
    }
}

class PhoneNumber extends React.Component {
    render() {
        return (
            <span>{this.props.phone}</span>
        );
    }
}

class Menu extends React.Component {
    render() {
        return (
            <Row>
                <Col lg={3}>
                    <Repair>Ремонт айфонов в сервисном центре и на выезде</Repair>
                </Col>
                <Col lg={3} lgOffset={1}>
                    <WorkTime>Пн-Пт с 10 до 20, сб, вс с 11 до 18
                        <Address addr="Ленинская, 301"/>
                    </WorkTime>
                </Col>
                <Col lg={3}>
                    <Calls>Звонки принимаются 24 часа
                        <PhoneNumber phone="8 (812) 922 55 55"/>
                    </Calls>
                </Col>
                <Col lg={2}>
                    <CallButton>Заказать звонок</CallButton>
                </Col>
            </Row>
        );
    }
}

export default Menu;