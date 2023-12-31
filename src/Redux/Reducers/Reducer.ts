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
                    const UpdateBlog =state.blog.filter((e)=> e.id !== action.id)
                    return {...state, blog:UpdateBlog}
                    case 'UPDATE_BLOG':
                        return {
                            ...state, blog: state.blog.map((blog) =>
                            blog.id === action.id
                              ? { ...blog, title: action.title, content: action.content }
                              : blog
                          ),
                        }
                        
                default:return state

    }
}