import React from 'react'
import './SearchBar.css'
import SingleInfo from '../Job/SingleInfo/SingleInfo'

export default function SearchBar({ filteredKeyWords, deleteKeyWord, onClearFilter }) {

  return (
    <div className="search-card d-flex justify-content-between flex-wrap">
      <ul className='d-flex'>
        {filteredKeyWords &&
          filteredKeyWords.map((keyword) => (
            <li key={keyword}><SingleInfo inFilter={true} deleteKeyWord={deleteKeyWord}>{keyword}
            </SingleInfo></li>
          ))}
      </ul>
        <button className='clearAllBtn px-2' onClick={onClearFilter}>Clear</button>
    </div>
  )
}
