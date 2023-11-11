import React from 'react'
import './JobInfo.css'
import SingleInfo from '../SingleInfo/SingleInfo'

export default function JobInfo({
  role,
  level,
  languages,
  tools,
  onAddKeyWord,
}) {
  
let keywords = [role, level, ...languages, ...tools]

  return (
    <div className="job-info">
      {keywords.map(keyword => (
        <SingleInfo inList={true} key={keyword} onClickHandler={onAddKeyWord}>
          {keyword}
        </SingleInfo>
      ))}
    </div>
  )
}
