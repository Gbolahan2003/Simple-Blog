import React from 'react'
import './blog.scss'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {BsTrash} from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { BlogItem, DeleteBlog } from '../Redux/Action/Action'
import { useDispatch } from 'react-redux'
interface blogparams{
  id:string|number,
  key:string|number,
  title:string,
  content:string,
  createdAt:string,
  updatedAt?:string,
  deleteBlog:()=>void
}
const Blog:React.FC<blogparams> =({key,title, content, createdAt, updatedAt, id,deleteBlog})=>{
  const blog:BlogItem[] = useSelector((state: any) => state.blog);
  console.log(blog);
  
 
  
  return(
      <>
  <div key={key} className="blog-container">
  <div className="title">{title}</div>
  <article className="content">
      {content}
  </article>
  <div className="reading-container">
    <div className="readmore">
      <NavLink to={`create-blog/blog/${id}`} className="read">Read More</NavLink>
      <AiOutlineArrowRight/>
    </div>
    <div onClick={deleteBlog} className="options" >
<BsTrash/>
    </div>
  </div>
  <div className="time-con">
      <div className=" date created-date"> Created on - {createdAt}</div>
      <div className=" date updated-time"> {updatedAt}</div>
  </div>
  </div>
  </>
  )
}

export default Blog