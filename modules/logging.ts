/**
 * Logs a message to the console.
 * @param message - The message to log.
 */
function log(message: string): void {
    console.log(`[${"ERROR"}] ${message}`);
}

/**
 * Logs an error message to the console.
 * @param message - The error message to log.
 */
const logError = log;

/**
 * Logs an info message to the console.
 * @param message - The info message to log.
 */
const logInfo = log;

/**
 * Logs a warning message to the console.
 * @param message - The warning message to log.
 */
const logWarning = log;

export { logError, logInfo, logWarning };
