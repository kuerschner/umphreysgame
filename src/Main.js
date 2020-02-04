import React from 'react';
import Dashboard from './pages/Dashboard';
import Board from './pages/Board';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

const Main = () => {
    return (
        <div className='full-size'>
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <Dashboard />
                    </Route>
                    <Route path="/my-board" exact>
                        <Board />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Main;
