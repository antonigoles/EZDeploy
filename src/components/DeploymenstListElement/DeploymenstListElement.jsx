import { useContext } from "react";
import { ApplicationContext, AppRoutes } from "../../App.jsx";

function DeploymenstListElement({ data }) {
    const { navigateTo } = useContext(ApplicationContext);
    return (
        <div
            onClick={() => {
                navigateTo(AppRoutes.ProjectView, { id: data["id"] });
            }}
            className="transition-all shadow-md  rounded-sm p-4 py-6 
        hover:cursor-pointer flex  bg-white justify-start items-start flex-col border-dashed border-4 border-gray-400
        w-48 h-48"
        >
            <div className="font-bold text-xl text-slate-700">
                {data["project_name"]}
                <div className="font-normal text-sm">{data["ip_address"]}</div>
            </div>
        </div>
    );
}

export default DeploymenstListElement;
