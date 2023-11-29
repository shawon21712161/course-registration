import { useEffect } from "react";
import toast from "react-hot-toast";

const List = ({credit,setcredit,price,setprice,list,setRemaingCredit,remaingCredit}) => {
    const {courseName} = list

    useEffect(()=>{
        if(credit+list.credit <= 20){
            setprice(price+list.price)
            setRemaingCredit(remaingCredit - list.credit)
        }
        
    },[])

    useEffect(()=>{
        if(credit+list.credit <= 20){
            setcredit(credit+list.credit)
        }
        else{
            toast.error("Sorry")
        }
        
    },[])
    return (
        <div>

        
        <div className="pt-2 ">
            {/* <h3 className="font-semibold">{courseName}</h3> */}
            
           
                <li className="text-justify font-medium">{courseName}</li>

            
        </div>
        </div>
    );
};

export default List;