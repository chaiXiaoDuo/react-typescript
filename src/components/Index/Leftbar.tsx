import * as React from "react";
import * as interfaces from "../../lib/interfaces";
import { Menu, Row, Icon, Col } from "antd";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux'
import * as homeActions from './../../actions/home/homeAction'


interface Props extends interfaces.PublicProps {
    state?: interfaces.StoreState | any
    actions?: homeActions.HomeInterface | any
}

class Leftbar extends React.PureComponent<Props,any> {

    constructor(props: Props) {
        super(props);
    }

    public componentWillMount (){
        console.log('render leftbar')
        this.props.actions.getVersion()
    }

    public render() {
        return (
            <Row>
                <Col className="slideTop">
                    我是柴小铎
                </Col>
                <Menu 
                    mode="inline" 
                    theme="dark"
                >
                    <Menu.Item key="1">
                        <Icon type="setting"/>
                        <span>系统设置</span>
                    </Menu.Item>
                </Menu>
            </Row>
        );
    }
}

export default connect (
    (state: any):object => {
        return {state: state.home}
    },
    (dispatch: any):object => {
        return {actions: bindActionCreators(homeActions, dispatch)}
    }
)(Leftbar)