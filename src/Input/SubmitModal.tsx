import React from 'react'
import './input.scss'
import {BsCheckCircle} from 'react-icons/bs'
import {NavLink} from 'react-router-dom'
import { blogDetails } from '../BlogPage/BlogPage'
import { BlogItem } from '../Redux/Action/Action'
import { useParams } from 'react-router'


interface modalProps {
    closeModal: ()=> void,
    text:string
    
}
const SubmitModal:React.FC<modalProps> = ({closeModal,text}) => {

  return (
    <>
    <div className="submit-modal-container">
            <div  className="close-modal">
            <svg onClick={closeModal} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#19191A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M15 9L9 15" stroke="#ECFDF3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9 9L15 15" stroke="#ECFDF3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </div>
        <div className="submit-modal-header">
            <div className="svg-container">
                <BsCheckCircle/>
            </div>
        </div>
        <p>{text} </p>
        <div className="modal-button-container">
            <NavLink to={'/'} className='home'>Back to home page</NavLink>
            
         
        </div>
    </div> 
    </>
  )
}

export default SubmitModal