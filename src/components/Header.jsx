import React from 'react'
import close from './images/icon-remove.svg'

const Header = ({tags, deleteTags, clearAll}) => {
  return (
    <>
    <div className="header-container d-flex align-items-center">
      {
        tags.map((key,id)=>{
          return <span className='mx-2 tagBtn' key={id}>{key}
          <button className='closeBtn' onClick={()=>deleteTags(key)}>
            <img src={close} alt="" />
          </button>
            {/* <i className="fa-solid fa-xmark closeBtn mx-1 " onClick={()=>deleteTags(key)}></i> */}
          </span>
        })
      }
      <a className='clrBtn ms-auto me-4' href="#" onClick={()=>clearAll()}>Clear</a>
    </div>
    </>
  )
}

export default Header