import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createServer, Model} from 'miragejs'
import react from './assets/React.png'
import reactNative from './assets/ReactNative.png'
import nextjs from './assets/nextjs.png'
import typescript from './assets/Typescript.png'
import html from './assets/Html.png'
import css from './assets/CSS3.png'


createServer({
  environment: 'test',
  models: {
    skill: Model,
    project: Model,
  },
  seeds(server){
    server.db.loadData({
      skills:[
        {
          id: 1,
          title: 'React',
          img: react,
          alt: 'React',
        },
        {
          id: 2,
          title: 'React Native',
          img: reactNative,
          alt: 'React Native',
        },
        {
          id: 3,
          title: 'Next JS',
          img: nextjs,
          alt: 'Next Js',
        },
        {
          id: 4,
          title: 'Typescript',
          img: typescript,
          alt: 'Typescript',
        },
        {
          id: 5,
          title: 'Html',
          img: html,
          alt: 'HTML',
        },
        {
          id: 6,
          title: 'Css',
          img: css,
          alt: 'CSS',
        },
      ],

      projects: [
        {
          id: 1,
          title: 'Ignews',
          img: nextjs
        },
        {
          id: 2,
          title: 'DashGo',
          img: nextjs
        },
        {
          id: 3,
          title: 'Dtmoney',
          img: react
        },
        {
          id: 4,
          title: 'App Receitas',
          img: reactNative
        },
        {
          id: 5,
          title: 'Gameplay NLW',
          img: reactNative
        },
      ]
    })
  },

  routes(){
    this.namespace='api';

    this.get('/skills', ()=>{
      return this.schema.all('skill')
    })

    this.get('/projects', ()=>{
      return this.schema.all('project')
    })
  }

})


ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

