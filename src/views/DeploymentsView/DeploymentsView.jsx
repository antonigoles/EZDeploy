import { useEffect, useState } from "react";
import CreateDeployment from "../../components/CreateDeployment/CreateDeployment";
import DeploymenstListElement from "../../components/DeploymenstListElement/DeploymenstListElement";
import { get_config_data } from "../../core/AppData";
import Button from "../../primitives/Button";
import "./DeploymentsView.css";
import AddGray300 from "../../assets/add-gray-300.svg";

function DeploymentsView() {
    const [deployments, setDeployments] = useState([]);
    const [createDeploymentVisibleState, setCreateDeploymentVisibleState] =
        useState(0);

    useEffect(() => {
        async function loadDeployments() {
            const configData = await get_config_data();
            setDeployments([...configData["deployments"]]);
        }

        loadDeployments();
    }, []);

    return (
        <div className="w-full h-full flex flex-col items-center justify-center select-none">
            {deployments && deployments.length > 0 ? (
                <div className="flex flex-row items-start justify-start content-start flex-wrap w-full h-full select-none gap-4 p-2 overflow-y-auto">
                    {deployments.map((deployment, idx) => {
                        return (
                            <DeploymenstListElement
                                key={idx}
                                data={deployment}
                            />
                        );
                    })}
                    <div
                        onClick={() => {
                            setCreateDeploymentVisibleState(1);
                        }}
                        className="hover:cursor-pointer w-48 h-48 border-dashed border-gray-300 border-4 text-gray-300 text-xl text-center flex items-center justify-center"
                    >
                        <img src={AddGray300} alt="Add" className="w-8" />
                    </div>
                </div>
            ) : deployments == null ? (
                <>Loading</>
            ) : (
                <div className="flex flex-col items-center justify-center w-full h-full select-none gap-4">
                    <div className="text-2xl font-medium">
                        You don't have any deployments yet
                    </div>
                    <Button
                        onClick={() => {
                            setCreateDeploymentVisibleState(1);
                        }}
                        label="Make one!"
                    />
                </div>
            )}
            <CreateDeployment
                visibilityState={createDeploymentVisibleState}
                hide={() => setCreateDeploymentVisibleState(2)}
            />
        </div>
    );
}

export default DeploymentsView;
