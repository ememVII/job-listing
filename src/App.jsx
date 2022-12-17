import data from './data/data.json'
import Jobs from './components/Jobs';
import Header from './components/Header';
import { useState } from 'react';
function App() {
  
  const [filterTags, setFilterTags] = useState([])
  
  const addFilterTags = (data) => {
    if(!filterTags.includes(data)) {
      setFilterTags([...filterTags,data])
    }
  }
  
  const deleteTag = (data) => {
    const newTags = filterTags.filter(key => key !== data)
    setFilterTags(newTags)
  }
  
  const clearAll =()=> {
    setFilterTags([])
  }
  
  return (
    <>
    <div className="header"></div>
    {
      filterTags.length > 0 && <Header tags={filterTags} deleteTags={deleteTag} clearAll={clearAll}/>
    }
    <Jobs data={data} tags={filterTags} setTags={addFilterTags}/>
    </>
  );
}

export default App;