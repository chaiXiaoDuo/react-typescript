/****************************************
* utils class
* created by chaixiaoduo@126.com
* 2018-08-10 15:03:44
****************************************/
import axios from 'axios'
import * as cf from './config'
import { message } from 'antd'

export default class Utils {

    public SCREEN_WIDTH: string;
    public SCREEN_HEIGHT: string;

    constructor(){
        this.SCREEN_HEIGHT = window.innerHeight + 'px'
        this.SCREEN_WIDTH = window.innerWidth + 'px'
    }

    /**
     * 公用请求
     * @param {string} url  接口地址
     * @param {object} data 请求参数
     */
    public HTTP(url:string,data:object)
    {
        return new Promise((resolve) => 
        {
            axios.post(`${cf.HOST}${url}`,data).then(res => {
                console.log(`${url}\n请求参数: `,data,`\n响应参数: `,res.data)
                if(res.data.code == '200'){
                    resolve(res.data.data)
                }else {
                    this.err(res.data.msg)
                }
            }).catch((err) => {
                this.log(err)
            })
        })
    }


    /**
     * Global common log
     * @param {any} e 打印文字
     */
    public log (e: any = 'nothing to log!'):void 
    {
        let str = '====='
        console.log(`${str}  ${e}  ${str}`)
    }

    /**
     * Global error message
     * @param {string} e The output text
     */
    public err (e: string = 'nothing to show'):void
    {
        message.error(e)
    }

    /**
     * Global success message
     * @param {string} e The output text
     */
    public suc (e: string = '操作成功'):void 
    {
        message.success(e)
    }

    public getCookie(name: string):string {
        let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg)) {
            return unescape(arr[2]);
        } else {
            return '';
        }
    }

    public setCookie(name:string,value:string):void {
        const Days = 300;
        let exp = new Date();
        exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
        document.cookie = name + "=" + escape(value) + ";expires=" + exp.toUTCString();
    }

}