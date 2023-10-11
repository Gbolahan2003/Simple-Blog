import { BlogACtions, BlogItem } from "../Action/Action";

export interface BlogState {
    blog:BlogItem[]
}
const initialState:BlogState ={
    blog:[]
}

export const blogReducer =(state = initialState, action:BlogACtions):BlogState=>{
    switch(action.type){
        case 'ADD_BLOG':
            return{ ...state, blog:[...state.blog, action.payload]}
        
            case 'RESET_BLOG':
                return { ...state, blog: [] }
                case 'DELET-BLOG':
                    return state
                default:return state
    }
}