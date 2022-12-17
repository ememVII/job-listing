import React, { useEffect, useState } from 'react'
import Job from './Job'

const Jobs = ({data,setTags, tags}) => {
    
    const [filteredData, setFilteredData] = useState([])
    
    const editedData = () => {
        if(tags.length>0) {
            const newData = filteredData.filter((d)=>{
                return tags.every((key)=>{
                    return (
                        d.role === key ||
                        d.level === key ||
                        d.languages.includes(key) ||
                        d.tools.includes(key)
                    )
                })
            })
            setFilteredData(newData)
        } else {
            setFilteredData(data)
        }
    }
    
    useEffect(() => {
        editedData();
    }, [tags])
    
    
  return (
    <>
    <div className="jobs">
        {filteredData.map((jobData)=><Job key={jobData.id} data={jobData} setTags={setTags}/>)}
    </div>
    </>
  )
}

export default Jobs