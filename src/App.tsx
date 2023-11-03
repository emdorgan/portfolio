import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from '@emotion/react';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import { Theme, createTheme } from '@mui/material';
import Projects from './pages/Projects';

const theme : Theme = createTheme({
    palette: {
        primary: {
            main: '#3e4a88',
        },
        divider: '#ffffff',
        background: {
            default: '#2c2c2c',
            paper: '#2c2c2c',
        },
        text: {
            primary: '#fff'
        }
    },
    typography: {
        "fontFamily": `"Helvetica", "Arial", sans-serif`,
        "fontSize": 16,
        "fontWeightLight": 300,
        "fontWeightRegular": 400,
        "fontWeightMedium": 500
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
        <Router basename='/portfolio'>
            <Layout/>
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/about" Component={About} />
                <Route path="/projects" Component={Projects} />
            </Routes>
        </Router>
    </ThemeProvider>
  );
}

export default App;
