import React from 'react'
import Navbar from '../components/Navbar'

import './input.scss'
import {addBlog, ResetBlog} from '../Redux/Action/Action'
import { useDispatch, useSelector} from 'react-redux'
import SubmitModal from './SubmitModal'
import {NavLink} from 'react-router-dom'
import {motion} from 'framer-motion'

const InputContainer = () => {
  const [id, setId] = React.useState<number>(0)
  const [content, setContent ]= React.useState('')
  const [title, setTitle] =React.useState('')
  const [modalstate, setModalState] =React.useState<boolean>(false)
  const [blink, setBlink] = React.useState(false)
  const dispatch = useDispatch()
  
  const blog = useSelector((state: any) => state.blog);
  const handlepost =()=>{
    
    const date = new Date()
  const createdAt =()=>{
    if(date.getHours() >= 12){
      return `${date.getDay()}/${date.getMonth()}/ ${date.getFullYear()}-${date.getHours()}:${date.getMinutes()} PM`
    }
    else return `${date.getDate()}/${date.getMonth()}/ ${date.getFullYear()}-${date.getHours()}:${date.getMinutes()} AM`
  }
  
  if (content.trim() !== '') {
    if(content!=='' && title!==''){
      dispatch(addBlog({ id: Date.now(), content: content, title:title, CreatedAt:createdAt() }));
      setContent('');
      setTitle('')
      setId(id + 1); // Increment id
      setModalState(true)
    }
  }
  if(content=== '' && title === '' || content=== '' || title===''){
    setBlink(true)
  }
}
const handleReset =()=>{
dispatch(ResetBlog())
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

    <div className={` ${modalstate?'modal':'modal-open'}`}> <SubmitModal blogDetail={blog.id}  closeModal={()=>setModalState(false)}/> </div>
      <Navbar/>
    
    <div className="input-container">
      <div className="go-back">
       <NavLink className={'navlink'} to='/'> 
       <div className="">
       <svg xmlns="http://www.w3.org/2000/svg" width="28" height="10" viewBox="0 0 28 10" fill="none">
  <path d="M0.94997 5.35639C0.994502 5.47123 1.0613 5.5767 1.14684 5.66575L4.89684 9.41575C5.07263 9.5927 5.31285 9.69348 5.56248 9.69348C5.81211 9.69348 6.05232 9.5927 6.22812 9.41575C6.40508 9.23997 6.50586 8.99974 6.50586 8.75011C6.50586 8.50048 6.40508 8.26027 6.22812 8.08447L4.07187 5.93761H26.6562C27.1742 5.93761 27.5937 5.51809 27.5937 5.00011C27.5937 4.48213 27.1742 4.06261 26.6562 4.06261H4.07187L6.22812 1.91575C6.5961 1.54777 6.5961 0.952482 6.22812 0.584502C5.86014 0.216522 5.26485 0.216522 4.89687 0.584502L1.14687 4.3345C1.06133 4.42356 0.994532 4.52903 0.95 4.64386C0.901952 4.75636 0.876173 4.87706 0.875 5.00011C0.876172 5.12316 0.901953 5.24386 0.95 5.35636L0.94997 5.35639Z" fill="#545F7D"/>
</svg>
       </div>
       <div className="">Go back</div>
       </NavLink>
      </div>
    <div  className="input-main-container">
        <div className="input-con">
          <label htmlFor="Title" >Title</label>
          <input className={`${blink===true?'blink':''}`} required value={title} onChange={e => {
            setBlink(false)
            setTitle(e.target.value)}} type="text" placeholder={`${blink?'Please enter a title':'title'}`}   />
        </div>
        <div className="input-con">
          <label htmlFor="Title">content</label>
          <textarea className={`${blink===true?'blink':''}`} placeholder={`${blink===true?'Please enter content':'content'}`}    required  value={content} onChange={e => { 
            setBlink(false)
            setContent(e.target.value)}} ></textarea>
        </div>
        <div className="button-con">
        <div className="button-container-blog">
          <button className='reset' onClick={handleReset}>Reset</button>
          <button onClick={handlepost}>post</button>
        </div>
        </div>
      </div>
      <ul>
{
  // blog.map((e:any)=><li key={e.id}>{e.content}</li>)
}
</ul>
    </div>

    </>
 
  </motion.div>

  )
}

export default InputContainer