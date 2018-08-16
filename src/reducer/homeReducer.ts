/****************************************
* Top processor 
* created by chaixiaoduo@126.com
* 2018-06-21 16:14:04
****************************************/
import * as actionType from '../actions/home/actionType'
import * as Immutable from 'immutable'

interface Action {
    type: string;
    value: any;
}

const State = Immutable.fromJS({
    version: '0.0.1',
    userId: '',
    token: '',
    isLogin: true
})

const topReducer = ( state = State, action: Action ):any => {
    switch (action.type) {
        case actionType.GET_VERSION:
            return state.set('version', action.value)
        case actionType.SET_USER_DATA: 
            return state.set('userId', action.value.userId) && state.set('token',action.value.token)
        case actionType.changeIsLogin:
            return state.set('isLogin',action.value)
    }
    return state
}

export default topReducer