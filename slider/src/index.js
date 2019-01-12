import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// function Hello() {
//     let phrase = 'World!!!'
//     return (
//         <h1>Hello {phrase}</h1>
//     )
// }

// function SayFullName(props) {  // props в данном случае – это объект не динамический, только чтение
//     return (
//         <section>
//             <h1>Меня зовут {props.name}, а фамилия – {props.surname}</h1>
//             <a href={props.link}>Ссылка на мой профиль</a>
//         </section>  // у реакта есть особенность, он вставляет именно блок, поэтому нужно обернуть все теги в <div></div>
//     )
// }

// function MeetAll() {
//     return (
//         <main>
//             <SayFullName name='Роман' surname='Голубев' link='vk.com/gromniki' />
//             <SayFullName name='Даниил' surname='Иванов' link='facebook.com' />
//             <SayFullName name='Василиса' surname='Прекрасная' link='twitter.com' />
//         </main>
//     )
// }

ReactDOM.render(<App />, document.getElementById('root'));

// Всё, что написано выше – функциональный стиль
// В Реакте, в основном, принято писать в объектном стиле

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
