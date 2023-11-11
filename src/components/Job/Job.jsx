import React, { useState } from 'react'
import JobInfo from './JobInfo/JobInfo'
import './Job.css'

export default function Job(props) {
  
  const { logo, company, featured, position, postedAt, contract, location, role, level, languages, tools } = props.data
  
  return (
    <div className={`job-card ${featured && `featured`}`}>
      <div className="job-content d-flex">
        <div className="job-logo me-4">
          <img src={logo} />
        </div>
        <div className="job-details d-flex flex-column">
          <div className="header">
            <span className="company">{company}</span>
            {props.data.new && <span className="isNew mx-3">New!</span>}
            {featured && <span className="isFeatured">Featured</span>}
          </div>
          <div className="header-position my-2">
            <h5>{position}</h5>
          </div>
          <div className="header-details">
            <ul className="d-flex text-muted">
              <li>{postedAt}</li>
              <li className='bullet'>{contract}</li>
              <li>{location}</li>
            </ul>
          </div>
        </div>
      </div>

      <JobInfo
        role={role}
        level={level}
        languages={languages}
        tools={tools}
        onAddKeyWord={props.addKeyWordHandler}
      />
    </div>
  )
}
