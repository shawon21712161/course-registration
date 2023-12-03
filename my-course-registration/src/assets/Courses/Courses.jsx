import { useEffect, useState } from "react";
import Course from "../Course/Course";

const Courses = ({handleAddToLists}) => {
    
    const [courses,setCourses]= useState([]) 
    
    useEffect(()=>{
        fetch('Course.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <div className="w-2/3">
            {/* <h3>Courses List : {courses.length}</h3> */}

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-2 m-2">
            {
                courses.map(course=> <Course key={course.id} handleAddToLists={handleAddToLists}
                  course={course}>
                  </Course>)
            }
            </div>
        </div>
    );
};

export default Courses;