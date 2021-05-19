import { Router } from 'react-router-dom';
import history from '@router/history';
import Routes from '@router/Routes';

import './App.css';

import { RootContainer } from '@components';

import Menu from '@components/Menu/Menu.styled';

function App() {
    return (
        <div className="App">
            <RootContainer />
            <Router history={history}>
                <header className="App-header">
                    <Menu />
                </header>
                <Routes />
            </Router>
        </div>
    );
}

export default App;
