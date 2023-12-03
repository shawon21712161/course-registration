const Course = ( {course,handleAddToLists} ) => {
    // console.log(course);
    const {courseName,description,credit,price,image} = course
    return (
        <div>

  {/* card start here*/}

<div className="p-2 m-2  h-full w-full rounded-md">
  <div>
    <img className="w-full" src={image} />
  </div>
  <div className="mt-2">
    <h3 className="font-bold">{courseName}</h3>
    <p className="text-justify">{description}</p>
  </div>
  <div className="flex justify-between mt-2 mb-2">
    <div>
      <p className="font-semibold">Price: ${price}</p>
    </div>
    <div>
      <p className="font-semibold">Credit: {credit} Hr</p>
    </div>
  </div>
  <div className="text-center mx-3">
    <button 
      onClick={()=>handleAddToLists(course)} 
      className="bg-blue-600 text-white font-semibold py-2 rounded-lg px-16">Select 
    </button>
    </div>
</div>

        {/* card end here */}

        </div>
    );
};

export default Course;