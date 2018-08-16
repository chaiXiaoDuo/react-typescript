/****************************************
* home action file
* created by chaixiaoduo@126.com
* 2018-08-11 15:13:04
****************************************/
import * as actionType from './actionType'
import Utils from '../../lib/utils'
import * as api from '../../lib/api'
const md5 = require('md5')
const u = new Utils()

export interface HomeInterface {
    getVersion: () => any
    setUserData: () => any
    login: () => any
    changeIsLogin: () => any
}

export function changeIsLogin (state:boolean):any{
    u.log('changeIsLogin')
    return (dispatch:any) => {
        dispatch({type: actionType.changeIsLogin,value: state})
    }
}

export function getVersion (): any {
    u.log('getVersion')
    return (dispatch:any) => {
        dispatch({type: actionType.GET_VERSION, value: '0.0.1'})
    }
}

export function setUserData (userId: string, token: string): any {
    u.log('setUserData')
    return (dispatch:any) => {
        dispatch({type: actionType.SET_USER_DATA, value: {userId, token}})
    }
}

export function login (userName: string,passWord: string):any {
    return (dispatch:any) => {
        const formData = {userName, passWord: md5(passWord)}
        u.HTTP(api.login,formData).then(res => {
            u.suc('登录成功')
        })
    }
}

export function register (userName: string,passWord: string, confirmPassWord: string): any{
    return (dispatch:any) => {
        if(!userName){
            u.err('用户名不能为空')
            return;
        }
        if(!passWord){
            u.err('密码不能为空')
            return;
        }
        if(passWord !== confirmPassWord){
            u.err('两次输入密码不一致')
            return;
        }
        const formData = {userName: userName, passWord: md5(passWord)}
        u.HTTP(api.register,formData).then(res => {
            u.suc('注册成功')
            changeIsLogin(false)
        })
    }
}