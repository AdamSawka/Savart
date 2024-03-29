import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css"
import 'styles/main.scss'
import reportWebVitals from './reportWebVitals';
import Root from "modules/Root/Root";
import {ThemeProvider, createTheme} from '@mui/material/styles';
import {customTheme} from "theme/theme";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const theme = createTheme(customTheme);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Root/>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
