/****************************************
 * main file for project
 * created by chaixiaoduo@126.com
 * 2018-08-09 15:48:24
 ****************************************/
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import "antd/dist/antd.css";
import "./scss/style.scss";
import "./scss/font-awesome.min.css";
import { HashRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from './router'

class App extends React.PureComponent {

    componentWillMount() {
        console.log(process.env.NODE_ENV);
    }

    public render() {
        return (
            <Provider store={store}>
                <HashRouter>
                    <div>
                        {renderRoutes(routes)}
                    </div>
                </HashRouter>
            </Provider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);
