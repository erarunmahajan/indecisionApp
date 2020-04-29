import React from 'react'
import ReactDOM from 'react-dom'
import {IndecisionApp} from './components/IndecisionApp'
import  'normalize.css/normalize.css'
import './styles/style.scss'

const RENDER_ELEMENT =  document.getElementById('app')


ReactDOM.render(<IndecisionApp />,RENDER_ELEMENT)
 