import * as React from "react";
import { renderRoutes } from "react-router-config";
import * as interfaces from "../../lib/interfaces";
import { Layout } from "antd";
const { Header, Footer, Sider, Content } = Layout;
import Leftbar from "./Leftbar";
import Utils from "../../lib/utils";
import {bindActionCreators} from 'redux'
import * as homeActions from '../../actions/home/homeAction'
import { connect } from "react-redux";
import Login from './Login'

import * as cf from '../../lib/config'
const u = new Utils()

interface Props extends interfaces.PublicProps {
    state?: interfaces.StoreState | any
    actions?: homeActions.HomeInterface | any
}

class Index extends React.PureComponent<Props,any> {

    public componentWillMount (){
        const userId = u.getCookie(cf.namespace.userId)
        const token = u.getCookie(cf.namespace.token)
        if(userId && token){
            this.props.actions.setUserData(userId,token)
        }
    }

    constructor(props: Props) {
        super(props);
    }

    jump() {
        this.props.history.push("/system");
    }

    render() {
        const  state = this.props.state.toJS()
        return (
            <div>
                {
                    state.userId && state.token 
                    ?
                    <Layout style={{height: u.SCREEN_HEIGHT}}>
                        <Sider>
                            <Leftbar/>
                        </Sider>
                        <Layout>
                            <Header className="webHeader">Header</Header>
                            <Content>
                                {renderRoutes(this.props.route.routes)}
                            </Content>
                            <Footer className="webFooter">Footer</Footer>
                        </Layout>
                    </Layout>
                    :
                    <Login/>
                }
            </div>
        );
    }
}

export default connect (
    (state: any):object => {
        return {state: state.home}
    },
    (dispatch: any):object => {
        return {actions: bindActionCreators(homeActions,dispatch)}
    }
)(Index)

