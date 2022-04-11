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
import figma from './assets/figma.png'


createServer({
  models: {
    skill: Model,
    project: Model,
  },
  seeds(server){
    server.db.loadData({
      skill:[
        {
          id: 1,
          title: 'React',
          img: {react}
        },
        {
          id: 2,
          title: 'React Native',
          img: {reactNative}
        },
        {
          id: 3,
          title: 'Next JS',
          img: {nextjs}
        },
        {
          id: 4,
          title: 'Typescript',
          img: {typescript}
        },
        {
          id: 5,
          title: 'Html',
          img: {html}
        },
        {
          id: 6,
          title: 'Css',
          img: {css}
        },
        {
          id: 7,
          title: 'Figma',
          img: {figma}
        },
      ],

      project: [
        {
          id: 1,
          title: 'Dtmoney',
          img: {react}
        },
        {
          id: 2,
          title: 'App Receitas',
          img: {reactNative}
        },
        {
          id: 3,
          title: 'Ignews',
          img: {nextjs}
        },
        {
          id: 4,
          title: 'Gameplay NLW',
          img: {reactNative}
        },
        {
          id: 5,
          title: 'DashGo',
          img: {nextjs}
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

