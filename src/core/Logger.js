export function logInfo(message) {
    var now = new Date();
    console.log(`[${now.toLocaleDateString()}][INFO] ${message}`);
}

export function logError(message) {
    var now = new Date();
    console.error(`[${now.toLocaleDateString()}][ERROR] ${message}`);
}

export function logWarn(message) {
    var now = new Date();
    console.warn(`[${now.toLocaleDateString()}][WARN] ${message}`);
}
