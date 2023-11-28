import { useState } from 'react'
import './App.css'
import Courses from './assets/Courses/Courses'
import Header from './assets/Header/Header'
import Lists from './assets/Lists/Lists'
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast.error("You Already Selected This Course");

function App() {
  const [lists, setLists] = useState([])
  const handleAddToLists = course =>{
    // console.log(course);
    // console.log(lists);
    const foundData = lists.find((item)=>item.id == course.id)
    if(!foundData){
      const newLists = [...lists,course]
      setLists(newLists)
    }
    else{
      // console.log("already exist");
      notify()
    }
   
  }

  return (
    <>
     <Header></Header>
     <Toaster />
     <div className='md:flex max-w-7xl mx-auto pb-5'>
        <Courses handleAddToLists={handleAddToLists}></Courses>
        <Lists lists={lists}></Lists>
     </div>
    </>
  )
}

export default App
