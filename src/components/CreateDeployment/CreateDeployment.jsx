import { useContext, useEffect, useState } from "react";
import Button from "../../primitives/Button";
import TextInput from "../../primitives/TextInput";
import GithubIcon from "../../assets/github-mark-white.svg";
import {
    ApplicationContext,
    NotificationTypes,
    AppRoutes,
} from "../../App.jsx";
import { add_to_saved_deployments } from "../../core/AppData";

function CreateDeployment({ visibilityState, hide }) {
    const { pushNotification, navigateTo } = useContext(ApplicationContext);
    const [formData, setFormData] = useState({
        project_name: "",
        ip_address: "",
        root_login: "",
        root_password: "",
        project_dir: "/home/ezdeploy/${project_name}",
    });

    function onFormUpdate(e) {
        let formDataRef = { ...formData };
        formDataRef[e.target.id] = e.target.value;
        setFormData(formDataRef);
    }

    function createProject() {
        for (const key in formData) {
            if (formData[key].length < 1) {
                pushNotification(
                    "You have to fill all the fields!",
                    NotificationTypes.Error,
                );
                return;
            }
        }
        pushNotification(
            <>
                Created a new project: <b>{formData["project_name"]}</b>!
            </>,
        );

        add_to_saved_deployments(formData);

        navigateTo(AppRoutes.ProjectView, formData);
    }

    return (
        <div
            className={
                "absolute w-full h-full flex " +
                " items-end justify-center " +
                (visibilityState == 0
                    ? "backdrop-brightness-100 -z-50"
                    : visibilityState == 1
                      ? "dark-in-fast"
                      : "dark-out-fast")
            }
        >
            <div
                className={
                    "w-1/2 h-5/6 bg-white shadow-xl " +
                    " rounded-t-xl " +
                    "flex items-left p-8 flex-col gap-2 " +
                    (visibilityState == 0
                        ? "translate-y-full"
                        : visibilityState == 1
                          ? "slide-in-top-fast"
                          : "slide-out-top-fast")
                }
            >
                <div className="self-center font-semibold text-3xl">
                    Create a new project
                </div>
                <div className="self-center font-normal opacity-45 text-sm mb-8 text-center">
                    This process will create a project directory on the server,
                    "ezdeploy" user and nginx config
                </div>
                <div className="h-4/5 overflow-y-auto p-4 border-b-1 border-slate-300">
                    <TextInput
                        id="project_name"
                        className="mb-4"
                        placeholder={"eg. My super-duper project"}
                        label="Project name"
                        onChange={onFormUpdate}
                        pattern=".*"
                    />
                    <TextInput
                        id="ip_address"
                        className="mb-4"
                        placeholder={"eg. 192.168.0.1"}
                        label="SSH Address"
                        onChange={onFormUpdate}
                        pattern=".*"
                    />
                    <TextInput
                        id="root_login"
                        className="mb-4"
                        placeholder={"eg. root"}
                        label="SSH Root User Login"
                        onChange={onFormUpdate}
                        pattern=".*"
                    />
                    <TextInput
                        id="root_password"
                        className="mb-4"
                        placeholder={"eg. root123"}
                        isPassword={true}
                        label="SSH Root User Password"
                        onChange={onFormUpdate}
                        pattern=".*"
                    />
                    <TextInput
                        id="project_dir"
                        className="mb-4"
                        value={formData["project_dir"]}
                        label="Project Directory"
                        onChange={onFormUpdate}
                        pattern=".*"
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
                </div>
                <div className="flex justify-between mt-8">
                    <Button
                        className="bg-slate-500 hover:bg-slate-600 active:bg-slate-700"
                        onClick={hide}
                        label="Cancel"
                    />
                    <Button onClick={createProject} label="Create" />
                </div>
            </div>
        </div>
    );
}

export default CreateDeployment;
