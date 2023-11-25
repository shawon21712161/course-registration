import { useEffect } from "react";

const List = ({credit,setcredit,price,setprice,list}) => {
    const {courseName} = list

    useEffect(()=>{
        setprice(price+list.price)
    },[])

    useEffect(()=>{
        setcredit(credit+list.credit)
    },[])
    return (
        <div>

        
        <div className="pt-2 border-b-2">
            {/* <h3 className="font-semibold">{courseName}</h3> */}
            
           
                <li className="text-justify font-medium">{courseName}</li>

            
        </div>
        </div>
    );
};

export default List;