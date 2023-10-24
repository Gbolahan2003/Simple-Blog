import React from 'react'
import './blog.scss'

import Navbar from '../components/Navbar'
import {useSelector } from 'react-redux/es/hooks/useSelector'
import Blog from './Bolg'
import {NavLink}  from 'react-router-dom'
import { BlogItem } from '../Redux/Action/Action'
import { DeleteBlog } from '../Redux/Action/Action'
import {motion} from 'framer-motion'
import { useDispatch } from 'react-redux'
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
const BlogContainer = () => {
  const [page, setPage] = React.useState(1);

  const dispatch=useDispatch()
    const url = 'https://dummyapi.io/data/v1/post?limit=10'
    React.useEffect(()=> {
    const handlefetch = async()=>{
    try{
      const response = await fetch(url)
      if(response.ok){
        const data = await response.json()
        console.log(data)
        
      }else {
        console.error('Failed to fetch data:', response.status, response.statusText);
      }
    }catch(err){
      console.log(`there is an error: ${err}`);
      
    }

  }
  handlefetch()
  },[])

  const handleDelete=(idblog:number|string)=>{
    dispatch(DeleteBlog(idblog))
  }

  const blog = useSelector((state: any) => state.blog);
  

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
      setPage(value);
  

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
    <div >
        <Navbar/>
        <section className="main-container">
            <div  className="create-button-container">
              
                <NavLink to={'create-blog'} className={'button'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M10.0001 4.16666V15.8333M4.16675 9.99999H15.8334" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                    <div className="text ">Create new Blog</div></NavLink>
            </div>
        <div className="blog-grid">
          {blog.map((item:BlogItem)=> (
            
            <Blog deleteBlog={()=>handleDelete(item.id)} id={item.id} key={item.id} title={item.title} content={item.content.slice(0, 150)} createdAt={item.CreatedAt} />))}
        </div>
        <div className="pagination">
        <Stack spacing={2}>
        <Typography>Page: {page}</Typography>
        <Pagination count={10} page={page} onChange={handleChange} />
      </Stack>
        </div>
        </section>
    </div>
   
  </motion.div>
  )
}

export default BlogContainer


