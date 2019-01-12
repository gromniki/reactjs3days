import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

class App extends Component {
  render() {
    return (
      <main className="wrapper">
          <SayFullName name='Роман' surname='Голубев' link='vk.com/gromniki' />
          <SayFullName name='Даниил' surname='Иванов' link='facebook.com' />
          <SayFullName name='Василиса' surname='Прекрасная' link='twitter.com' />
      </main>
    );
  }
}



function SayFullName(props) {  // props в данном случае – это объект не динамический, только чтение
  return (
      <section>
          <h1>Меня зовут {props.name}, а фамилия – {props.surname}</h1>
          <a href={props.link}>Ссылка на мой профиль</a>
      </section>  // у реакта есть особенность, он вставляет именно блок, поэтому нужно обернуть все теги в <div></div>
  )
}

export default App;
