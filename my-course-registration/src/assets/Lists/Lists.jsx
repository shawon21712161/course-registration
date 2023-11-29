import { useState } from "react";
import List from "../List/List";

const Lists = ({lists}) => {
    const [price, setprice] = useState(0)
    const [credit, setcredit] = useState(0)
    const [remaingCredit, setRemaingCredit] = useState(20);
    return (
        <div className="w-1/3 m-2 mt-4 h-96  rounded-lg p-1 text-center ">

            <h2 className="border-b-2 border-b-gray-400 font-bold text-2xl text-left py-3 text-blue-700">Credit Hour Remaining {remaingCredit} Hr</h2>

            <h2 className=" font-bold text-2xl text-left py-2">Course Name </h2>
            
            <div className="pb-4 border-b-2 border-b-gray-400">
                {
                    lists.map(list=> 
                    <List 
                    key={list.id} 
                    price={price} 
                    setprice={setprice}
                    list={list}
                    credit={credit}
                    setcredit={setcredit}
                    setRemaingCredit={setRemaingCredit}
                    remaingCredit={remaingCredit}
                    ></List>)
                }
            </div>
            <h4 className="text-lg font-semibold py-3 border-b-2 border-gray-400">Total Credit Hour : {credit}</h4>

            <h4 className="text-lg font-semibold py-2">Total Price : {price} USD</h4>
        </div>
    );
};

export default Lists;