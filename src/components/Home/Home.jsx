import React, { Fragment, useState } from 'react'
import data from '../../../data/data.json'
import './Home.css'
import { bgDesktop, bgMobile } from '../../utilities/images'
import Jobs from '../Job/Jobs/Jobs'
import SearchBar from '../SearchBar/SearchBar'

export default function Home() {
  const [filteredKeyWords, setFilteredKeyWords] = useState([])

  const onAddKeyWord = keyword => {
    if (!filteredKeyWords.includes(keyword)) {
      setFilteredKeyWords(prevKeyWords => [...prevKeyWords, keyword])
    }
  }

  const onDeleteKeyWord = removedKeyword => {
    const newKeyWords = filteredKeyWords.filter((keyword) => keyword !== removedKeyword)
    setFilteredKeyWords(newKeyWords)
  }
  
  const clearKeywordsHandler = () => {
    setFilteredKeyWords([])
  }

  return (
    <Fragment>
      <img src={bgDesktop} className="bg-desktop w-100" />
      <img src={bgMobile} className="bg-mobile w-100" />
      
      <div className="container">
        {filteredKeyWords.length > 0 && (
          <SearchBar
            filteredKeyWords={filteredKeyWords}
            deleteKeyWord={onDeleteKeyWord}
            onClearFilter={clearKeywordsHandler}
          />
        )}

        <Jobs data={data} addKeyWord={onAddKeyWord} keyWords={filteredKeyWords} />
      </div>
    </Fragment>
  )
}
