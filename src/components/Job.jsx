import React, { useEffect, useState } from 'react'

const Job = (props) => {
    

    
    const {
        company,
        logo,
        position,
        role,
        level,
        postedAt,
        contract,
        location,
        languages,
        tools
    } = props.data
    
    let keywords = [role,level, ...languages, ...tools]
    
    const [icon, setIcon] = useState('');
    
    const importSvgs = () => {
        const logoSvg = import(`${logo}`).then((d)=> {
            setIcon(d.default)
        })
    }
    
    useEffect(() => {
        importSvgs()
    }, [logo])
    
    
  return (
    <>
    <div className="job-container w-75 m-auto my-5 shadow-lg rounded-3 px-5 py-3 d-flex align-items-center justify-content-between">
        <div className="left d-flex">
            <div className="img me-3">
                <img src={icon} alt="" />
            </div>
            <div className="jobInfo d-flex flex-column justify-content-between">
                <div className="companyInfo d-flex align-items-center">
                    <span className='cname me-2 fw-bold'>{company}</span>
                    {props.data.new && <span className='new me-2 fw-bold'>NEW!</span>}
                    {props.data.featured && <span className='featured me-2 fw-bold'>Featured</span>}
                </div>
                <div className="position fw-bold">{position}</div>
                <div className='details d-flex text-muted'>
                    <span className='me-2'>{postedAt}</span>
                    <span className='me-2'>{contract}</span>
                    <span className='me-2'>{location}</span>
                </div>
            </div>
        </div>
        <div className="right">
            {
                keywords.map((key,id)=> <button className='tagBtn' onClick={()=>props.setTags(key)} key={id}>{key}</button>)
            }
        </div>
    </div>
    </>
  )
}

export default Job