import {createStore} from 'redux'
import { BlogState, blogReducer } from '../Reducers/Reducer'


const store =createStore<BlogState, any, any,any>(blogReducer)
export default store