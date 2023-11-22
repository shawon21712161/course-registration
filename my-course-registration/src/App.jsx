import { useState } from 'react'
import './App.css'
import Courses from './assets/Courses/Courses'
import Header from './assets/Header/Header'
import Lists from './assets/Lists/Lists'

function App() {
  const [lists, setLists] = useState([])
  const handleAddToLists = course =>{
    // console.log(course);
    const newLists = [...lists,course]
    setLists(newLists)
  }

  return (
    <>
     <Header></Header>
     <div className='md:flex max-w-7xl mx-auto pb-5'>
        <Courses handleAddToLists={handleAddToLists}></Courses>
        <Lists lists={lists}></Lists>
     </div>
    </>
  )
}

export default App
