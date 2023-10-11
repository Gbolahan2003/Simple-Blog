import React from 'react'
import './blog.scss'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {BsTrash} from 'react-icons/bs'
interface blogparams{
  key:string|number,
  title:string,
  content:string,
  createdAt:string,
  updatedAt?:string
}
const Blog:React.FC<blogparams> =({key,title, content, createdAt, updatedAt})=>{
  return(
      <>
  <div key={key} className="blog-container">
  <div className="title">{title}</div>
  <article className="content">
      {content}
  </article>
  <div className="reading-container">
    <div className="readmore">
      <div className="read">Read More</div>
      <AiOutlineArrowRight/>
    </div>
    <div className="options">
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