import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.scss';
import App from './App';
import _ from 'lodash';
import dayjs from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear'

dayjs.locale('ru')
dayjs.extend(weekOfYear)

const rootElement = document.getElementById('root');

if (_.isNil(rootElement)) {
  throw new Error('No root element');
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
