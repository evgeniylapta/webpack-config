import './index.scss'
import { test } from './test'
import img from '../public/test.png';
import { App } from './App';
import { render } from 'react-dom';

console.log('123');
console.log(img);
console.log(test);

render(
  <App />,
  document.getElementById('root')
);
