import * as React from 'react'
import { 
    Card,Form, Icon, Input, Button, Checkbox, Row
 } from "antd";

const FormItem = Form.Item
import * as interfaces from '../../lib/interfaces'
import * as homeActions from '../../actions/home/homeAction'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";


interface Props extends interfaces.PublicProps {
    actions?: homeActions.HomeInterface | any
    state?: interfaces.StoreState | any
}

interface State {
    userName: string
    passWord: string
    isChoose: boolean
    cardTitileText: string
    confirmPassWord: string
}

class Login extends React.PureComponent<Props, State> {

    constructor (props: Props){
        super(props)
        this.state = {
            userName: '',
            passWord: '',
            confirmPassWord: '',
            isChoose: false,
            cardTitileText: 'SignIn'
        }
    }

    public componentWillMount (){
        
    }

    private toRegister() {
        this.props.actions.changeIsLogin(false)
        this.setState({
            userName: '',
            passWord: '',
            confirmPassWord: '',
            cardTitileText: 'Register now'
        })
    }

    private toLogin() {
        this.props.actions.changeIsLogin(true)
        this.setState({
            userName: '',
            passWord: '',
            confirmPassWord: '',
            cardTitileText: 'SignIn'
        })
    }
    
    private confirmPassWordChange(event: any) {
        this.setState({confirmPassWord: event.target.value})
    }

    private userNameChange(event: any) {
        this.setState({userName: event.target.value})
    }

    private passWordChange(event: any) {
        this.setState({passWord: event.target.value})
    }

    public render (){
        const { userName, passWord, confirmPassWord } = this.state
        const storeState = this.props.state.toJS()
        return (
            <Card title={this.state.cardTitileText} style={{width: '400px',position: 'absolute',top: '30%',left: '50%',marginLeft: '-200px'}}>
                <Form className="login-form">
                    <FormItem>
                        <Input 
                            onChange={this.userNameChange.bind(this)} 
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}    
                            placeholder="Username" 
                            value={userName}
                        />
                    </FormItem>
                    <FormItem>
                        <Input 
                            onChange={this.passWordChange.bind(this)}
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                            type="password" 
                            value={passWord}
                            placeholder="Password" />
                    </FormItem>
                    {
                        !storeState.isLogin 
                        ? 
                        <FormItem>
                            <Input 
                                onChange={this.confirmPassWordChange.bind(this)}
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                                type="password" 
                                value={confirmPassWord}
                                placeholder="Confirm Password" />
                        </FormItem>
                        :
                        null
                    }
                    <FormItem>
                        {storeState.isLogin ? <Checkbox>Remember me</Checkbox> : null}
                        <Row className="tl">
                            {
                                storeState.isLogin 
                                ? 
                                <Button style={{width: '128px'}} onClick={() => {this.props.actions.login(this.state.userName,this.state.passWord)}} type="primary" className="login-form-button">Log in</Button>
                                :
                                <Button style={{width: '128px'}} onClick={() => {this.props.actions.register(this.state.userName,this.state.passWord,this.state.confirmPassWord)}} type="primary" className="login-form-button">Register now</Button>
                            }
                        </Row>
                        {
                            storeState.isLogin
                            ?
                            <a onClick={this.toRegister.bind(this)}>register now!</a>
                            :
                            <a onClick={this.toLogin.bind(this)}>SignIn now!</a>
                        }
                    </FormItem>
                </Form>
            </Card>    
        )
    }
}

export default connect (
    (state: interfaces.Reducer) => {
        return {state: state.home}
    },
    (dispatch) => {
        return {actions: bindActionCreators(homeActions, dispatch)}
    }
)(Login)