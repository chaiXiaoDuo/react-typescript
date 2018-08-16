import * as React from 'react'


export default class Home extends React.PureComponent {
    public componentWillMount (){
        console.log('Render Home Component')
    }

    public render (){
        return (
            <div>
                我是柴小铎
            </div>
        )
    }
}