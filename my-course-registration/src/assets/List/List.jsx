const List = ({list}) => {
    const {courseName} = list
    return (
        <div className="pt-2">
            {/* <h3 className="font-semibold">{courseName}</h3> */}
            
                <li className="text-justify">{courseName}</li>
            
        </div>
    );
};

export default List;