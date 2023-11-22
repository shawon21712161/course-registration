import List from "../List/List";

const Lists = ({lists}) => {
    return (
        <div className="w-1/3 m-4 mt-10 min-h-min rounded-lg p-4 text-center bg-slate-200">
            <h2 className=" font-semibold text-2xl">Course Lists: {lists.length}</h2>
            <hr />
            <div className="pt-2">
                {
                    lists.map(list=> <List key={list.id} list={list}></List>)
                }
            </div>
        </div>
    );
};

export default Lists;