import DeleteIcon from "../../assets/delete.svg";

function DeploymenstListElement({ data }) {
    return (
        <div className="transition-all shadow-md border-t-4 border-t-slate-700 rounded-sm p-4 py-6 hover:cursor-pointer flex w-full bg-white justify-between items-center">
            <div className="font-bold text-xl text-slate-700">
                {data["project_name"]}
                <div className="font-normal text-sm">{data["ip_address"]}</div>
            </div>
            <div className="hover:bg-red-500 flex flex-col gap-1 bg-red-400 rounded-full p-2">
                <img src={DeleteIcon} alt="" />
            </div>
        </div>
    );
}

export default DeploymenstListElement;
