import { useEffect, useState } from 'react'
import CreateDeployment from '../components/CreateDeployment/CreateDeployment'
import './DeploymentsView.css'

function DeploymentsView() {
    const [deployments, setDeployments] = useState(null)
    const [createDeploymentVisible, setCreateDeploymentVisible] =
        useState(false)

    useEffect(() => {
        setDeployments([])
    }, [])

    return (
        <div className="flex flex-col items-center justify-center w-full h-full select-none gap-4">
            {deployments && deployments.length > 0 ? (
                <></>
            ) : (
                <>
                    <div className="text-2xl font-medium">
                        You don't have any deployments yet
                    </div>
                    <a
                        onClick={() => {
                            setCreateDeploymentVisible(true)
                        }}
                        className="hover:cursor-pointer transition-shadow bg-green-500
         text-white font-normal px-10 py-2 hover:bg-green-600 rounded-lg"
                    >
                        Make one!
                    </a>
                </>
            )}
            <CreateDeployment
                visibilityState={createDeploymentVisible}
                hide={() => setCreateDeploymentVisible(false)}
            />
        </div>
    )
}

export default DeploymentsView
