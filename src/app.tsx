import * as React from 'react';

import Main from './components/main';
import {BrowserRouter} from "react-router-dom";
import Menu from "./components/menu";

export default class App extends React.Component<any, any> {
    render() {
        return (
            <BrowserRouter>
                <div id="app" className="container-fluid">
                    <Menu />
                    <Main />
                </div>
            </BrowserRouter>
        )
    }
}