/****************************************
* reducer main file
* created by chaixiaoduo@126.com
* 2018-06-21 17:15:42
****************************************/
import { combineReducers } from 'redux'

import homeReducer from './homeReducer'

export default combineReducers({
    home: homeReducer
})