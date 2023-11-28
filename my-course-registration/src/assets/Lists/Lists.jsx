import { useState } from "react";
import List from "../List/List";

const Lists = ({lists}) => {
    const [price, setprice] = useState(0)
    const [credit, setcredit] = useState(0)
    return (
        <div className="w-1/3 m-4 mt-4 h-96 rounded-lg p-4 text-center bg-slate-200">

            <h2 className="border-b-2 border-b-gray-400 font-semibold text-2xl text-left py-3 text-blue-700">Credit Hour Remaining Hr</h2>

            <h2 className=" font-semibold text-2xl text-left py-2">Course Name </h2>
            <hr />
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
                    ></List>)
                }
            </div>
            <h4 className="text-lg font-semibold py-3 border-b-2 border-gray-400">Total Credit Hour : {credit}</h4>

            <h4 className="text-lg font-semibold py-2">Total Price : {price} USD</h4>
        </div>
    );
};

export default Lists;