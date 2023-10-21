import { Action } from "redux"

export interface BlogItem {
    id:number;
    content:string;
    title: string;
    CreatedAt:string;
    UpdatedAt?:string
}

export const ADD_BLOG = 'ADD_BLOG'
export const RESET_BLOG = 'RESET_BLOG'
export const DELETE_BLOG = 'DELET-BLOG'
export const UPDATE_BLOG = 'UPDATE_BLOG'

interface AddBlogAction extends Action< typeof ADD_BLOG>{
    payload:BlogItem
}
interface  ResetBlogAction extends Action <typeof RESET_BLOG>{
  
}
interface DeleteBlogAction extends Action<typeof DELETE_BLOG >{
    id:number|string
}
interface UpdateBlogAction extends Action<typeof UPDATE_BLOG>{
    id:number|string;
    content:string,
    title:string
}
export type BlogACtions = AddBlogAction| ResetBlogAction|DeleteBlogAction |UpdateBlogAction

export const addBlog = (Blog:BlogItem):BlogACtions=>({
    type:ADD_BLOG,
    payload:Blog
})
export const ResetBlog = ():BlogACtions=>({
    type:RESET_BLOG
    
})
 export const DeleteBlog =(id:number|string):BlogACtions=>({
    type:DELETE_BLOG,
    id

 })
 export const Updatelog = (id:number|string, title:string, content:string):BlogACtions=>({
    type:UPDATE_BLOG,
    id, title, content

 })