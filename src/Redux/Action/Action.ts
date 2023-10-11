import { Action } from "redux"

export interface BlogItem {
    id:number;
    content:string;
    title: string;
    CreatedAt:string;
    // UpdatedAt?:string
}

export const ADD_BLOG = 'ADD_BLOG'
export const RESET_BLOG = 'RESET_BLOG'
export const DELETE_BLOG = 'DELET-BLOG'

interface AddBlogAction extends Action< typeof ADD_BLOG>{
    payload:BlogItem
}
interface  ResetBlogAction extends Action <typeof RESET_BLOG>{
  
}
interface DeleteBlogAction extends Action<typeof DELETE_BLOG >{
    payload:BlogItem
}

export type BlogACtions = AddBlogAction| ResetBlogAction|DeleteBlogAction

export const addBlog = (Blog:BlogItem):BlogACtions=>({
    type:ADD_BLOG,
    payload:Blog
})
export const ResetBlog = ():BlogACtions=>({
    type:RESET_BLOG
    
})
 export const DeleteBlog =(Blog:BlogItem):BlogACtions=>({
    type:DELETE_BLOG,
    payload:Blog

 })