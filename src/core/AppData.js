import {
    writeTextFile,
    exists,
    createDir,
    BaseDirectory,
    readTextFile,
} from "@tauri-apps/api/fs";
import { appConfigDir } from "@tauri-apps/api/path";
import { logInfo } from "./Logger";

const defaultConfig = {
    deployments: [],
};

export async function create_config_files_if_not_exists() {
    logInfo("Checking if config folder & file exists...");

    const configFileExists = await exists("ezdeploy.json", {
        dir: BaseDirectory.AppData,
    });

    const configFolderExists = await exists(await appConfigDir());

    if (configFileExists) {
        return logInfo("Success, config exists");
    }

    logInfo("Config does not exist, creating...");
    if (!configFolderExists) {
        await createDir(BaseDirectory.AppData);
    }
    await writeTextFile(
        "ezdeploy.json",
        JSON.stringify(defaultConfig, null, 4),
        { dir: BaseDirectory.AppData },
    );
}

export async function save_to_config(data, skipSanityCheck = true) {
    if (!skipSanityCheck) await create_config_files_if_not_exists();
    await writeTextFile("ezdeploy.json", JSON.stringify(data, null, 4), {
        dir: BaseDirectory.AppConfig,
    });
}

export async function get_config_data(skipSanityCheck = true) {
    if (!skipSanityCheck) await create_config_files_if_not_exists();
    const data = await readTextFile("ezdeploy.json", {
        dir: BaseDirectory.AppConfig,
    });
    return JSON.parse(data);
}

export async function add_to_saved_deployments(data, skipSanityCheck = false) {
    if (!skipSanityCheck) await create_config_files_if_not_exists();
    const oldConfigData = await get_config_data();
    oldConfigData["deployments"].push(data);
    await save_to_config(oldConfigData);
}
