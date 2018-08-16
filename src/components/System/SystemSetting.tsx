import * as React from 'react'
import { Button } from 'antd'
import * as interfaces from '../../lib/interfaces'


export default class SystemSetting extends React.PureComponent<interfaces.PublicProps> {

    constructor(props: interfaces.PublicProps){
        super(props)
    }

    public componentWillMount (){
        console.log('render systemSettign')
    }

    private jumpBack(){
        this.props.history.push('/')
    }

    public render (){
        return (
            <div>
                <div>设置</div>
                <Button htmlType="button" onClick={this.jumpBack.bind(this)}>跳回去</Button>
            </div> 
        )
    }

}