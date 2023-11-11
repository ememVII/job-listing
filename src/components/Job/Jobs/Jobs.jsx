import React, { useEffect, useState } from 'react'
import Job from '../Job'

export default function Jobs({ data, keyWords, addKeyWord }) {
  const [filteredJobs, setFilteredJobs] = useState([])

  const filteredData = () => {
    let newData = [...data]
    keyWords.forEach(key => {
      newData = newData.filter(jobData => {
        return (
          jobData.role === key ||
          jobData.level === key ||
          jobData.languages.includes(key) ||
          jobData.tools.includes(key)
        )
      })
    })
    setFilteredJobs(newData)
  }
  
  useEffect(() => {
    filteredData()
  }, [keyWords])
  
  return (
    <>
      {filteredJobs.map(job => (
        <Job key={job.id} data={job} addKeyWordHandler={addKeyWord} />
      ))}
    </>
  )
}

/* 

<Job
          key={job.id}
          logo={job.logo}
          company={job.company}
          new={job.new}
          featured={job.featured}
          position={job.position}
          postedAt={job.postedAt}
          contract={job.contract}
          location={job.location}
          role={job.role}
          level={job.level}
          languages={job.languages}
          tools={job.tools}
          addKeyWordHandler={addKeyWord}
        />


*/
