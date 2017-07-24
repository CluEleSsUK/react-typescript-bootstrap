///<reference types="webpack-env" />
import * as React from "react";
import * as ReactDOM from "react-dom";
import {AppContainer} from "react-hot-loader";
import App from "./app";
import {APP_CONTAINER_SELECTOR} from "./shared/config";


const appFilepath = "./app";
const defaultApp = <App />;
const rootEl = document.querySelector(APP_CONTAINER_SELECTOR);
const wrapApp = (AppComponent: any) =>
    <AppContainer>
        <AppComponent />
    </AppContainer>;

ReactDOM.render(defaultApp, rootEl);

if (module.hot) {
    module.hot.accept(appFilepath, () => {
        // to avoid typescript compiler warning
        const nextAppFile = require("./app") as any;
        const nextApp = nextAppFile.default;
        ReactDOM.render(wrapApp(nextApp), rootEl);
    });
}
