import { useEffect, useState } from 'react'
import Button from '../../primitives/Button'
import TextInput from '../../primitives/TextInput'
import GithubIcon from '../../assets/github-mark-white.svg'
import { NotificationContext } from '../../App.jsx'

function CreateDeployment({ visibilityState, hide }) {
    const [deployments, setDeployments] = useState(null)

    return (
        <div
            className={
                'absolute w-full h-full flex ' +
                ' items-end justify-center ' +
                (visibilityState ? 'dark-in-fast' : 'dark-out-fast')
            }
        >
            <div
                className={
                    'w-full bg-white shadow-xl ' +
                    ' rounded-t-xl ' +
                    'flex items-left p-8 flex-col gap-2 ' +
                    (visibilityState
                        ? 'slide-in-top-fast'
                        : 'slide-out-top-fast')
                }
            >
                <div className="self-center font-semibold text-3xl">
                    Create a new project
                </div>
                <div className="self-center font-normal opacity-45 text-sm mb-8 text-center">
                    This process will create a project directory on the server,
                    "ezdeploy" user and nginx config
                </div>
                <TextInput
                    className="mb-4"
                    placeholder={'eg. My super-duper project'}
                    label="Project name"
                />
                <TextInput
                    className="mb-4"
                    placeholder={'eg. 192.168.0.1'}
                    label="SSH Address"
                />
                <TextInput
                    className="mb-4"
                    placeholder={'eg. root'}
                    label="SSH Root User Login"
                />
                <TextInput
                    className="mb-4"
                    placeholder={'eg. root123'}
                    isPassword={true}
                    label="SSH Root User Password"
                />
                <TextInput
                    className="mb-4"
                    placeholder="/home/ezdeploy/${project_name}"
                    label="Project Directory"
                />
                <div className="flex item-center justify-center">
                    <Button
                        className="bg-neutral-700 hover:bg-neutral-800 active:bg-neutral-900 flex-grow"
                        label={
                            <div className="flex items-center gap-2 p-2">
                                <img src={GithubIcon} className="w-8" />
                                <p className="font-medium">
                                    Add repo from github
                                </p>
                            </div>
                        }
                    />
                </div>
                <div className="flex justify-between mt-8">
                    <Button
                        className="bg-slate-500 hover:bg-slate-600 active:bg-slate-700"
                        onClick={hide}
                        label="Cancel"
                    />
                    <Button onClick={() => {}} label="Create" />
                </div>
            </div>
        </div>
    )
}

export default CreateDeployment
