const Course = ({course}) => {
    console.log(course);
    const {courseName,description,credit,price,image} = course
    return (
        <div>
            
        {/* card start here */}

        <div className="card h-full bg-base-100 shadow-xl">
  <figure className=" pt-2">
    <img src={image} className="rounded-lg" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title">{courseName}</h2>
    <p className="text-justify pb-2">{description}</p>
    
    <div className="flex justify-between">
    <div>
    <p className="text-justify pb-2 font-semibold">Price: ${price}</p>
    </div>
    <div>
    <p className="text-justify pb-2 font-semibold">Credit: {credit}Hr</p>
    </div>
    </div>

    <div className="card-actions">
      <button className="px-24 py-2 rounded-lg font-semibold text-white bg-blue-700">Buy Now</button>
    </div>
  </div>
</div>

        {/* card end here */}

        </div>
    );
};

export default Course;