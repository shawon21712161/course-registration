import { useState } from 'react'
import './App.css'
import Courses from './assets/Courses/Courses'
import Header from './assets/Header/Header'
import Lists from './assets/Lists/Lists'
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast.error("You Already Selected This Course");
const notify2 = () => toast.error("Credit limit over");

function App() {
  const [lists, setLists] = useState([])
  const handleAddToLists = course =>{
    // console.log(course);
    // console.log(lists);
    const foundData = lists.find((item)=>item.id == course.id)
    const currentTotal = lists.reduce((previousValue, currentValue) => previousValue+currentValue.credit, 0)
    
    // console.log(currentTotal);

if(currentTotal + course.credit <= 20){
    if(!foundData){
      const newLists = [...lists,course]
      setLists(newLists)
    }
    else{
      // console.log("already exist");
      notify()
    }
  }else{
    notify2()
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
