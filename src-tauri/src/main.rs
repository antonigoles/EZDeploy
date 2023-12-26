// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

#[tauri::command]
fn read_deployment_json() -> String {
    return String::from("[{\"\"}]");
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![read_deployment_json])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
