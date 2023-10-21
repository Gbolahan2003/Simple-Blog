import React from 'react'
import './bloggPage.scss'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { BsTrash } from 'react-icons/bs'
import { useParams } from 'react-router'
import { useDispatch } from 'react-redux'
import { DeleteBlog } from '../Redux/Action/Action'
import { BlogItem } from '../Redux/Action/Action'
import {motion} from 'framer-motion'
import { NavLink } from 'react-router-dom'

 export interface blogDetails{
   blogDetail:BlogItem[]
}
 
   
const BlogPage:React.FC<blogDetails> = ({blogDetail}) => {
    const { id } = useParams<{ id: string | undefined }>();
    const [contents, setContent] = React.useState<BlogItem | null>(null);
  
    React.useEffect(() => {
      if (id === undefined) {
        return;
      }
  
      const blogContent = blogDetail.find((blog) => blog.id === parseInt(id, 10));
  
      if (blogContent) {
        setContent(blogContent);
      } else {
        setContent(null);
      }
    }, [id, blogDetail]);
  
    const dispatch=useDispatch()
    const handleDelete=(idblog:number|string)=>{
      dispatch(DeleteBlog(idblog))
    }

  return (
    <motion.div
    className="box"
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 1,
      delay: 0.2,
      ease: [0, 0.71, 0.2, 1.01],
    }}
  >
    <>
    { contents?(
        <div className="blog-page-container">
        <section>
           <h3>
   {contents?.title}
   </h3>
   <article>
   {contents?.content}
   </article>
   <div className="reading-container">
       <NavLink to={'/'} className="readmore">
     <div>  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="10" viewBox="0 0 28 10" fill="none">
     <path d="M0.94997 5.35639C0.994502 5.47123 1.0613 5.5767 1.14684 5.66575L4.89684 9.41575C5.07263 9.5927 5.31285 9.69348 5.56248 9.69348C5.81211 9.69348 6.05232 9.5927 6.22812 9.41575C6.40508 9.23997 6.50586 8.99974 6.50586 8.75011C6.50586 8.50048 6.40508 8.26027 6.22812 8.08447L4.07187 5.93761H26.6562C27.1742 5.93761 27.5937 5.51809 27.5937 5.00011C27.5937 4.48213 27.1742 4.06261 26.6562 4.06261H4.07187L6.22812 1.91575C6.5961 1.54777 6.5961 0.952482 6.22812 0.584502C5.86014 0.216522 5.26485 0.216522 4.89687 0.584502L1.14687 4.3345C1.06133 4.42356 0.994532 4.52903 0.95 4.64386C0.901952 4.75636 0.876173 4.87706 0.875 5.00011C0.876172 5.12316 0.901953 5.24386 0.95 5.35636L0.94997 5.35639Z" fill="#545F7D"/>
   </svg></div>
         <div className="read">Back</div>
       </NavLink>
       <div onClick={()=>handleDelete(contents.id)} className="options">
   <BsTrash/>
       </div>
     </div>
           </section></div>
    ):(<div>
        <div className="not-found">
            <h3>Page not found  ☹️</h3>
            <button>
                <NavLink to='/'>Back to Home</NavLink>
            </button>
        </div>
    </div>)  } 
    </>
    </motion.div>
  )
}

export default BlogPage