import { isLoggedIn } from '@/utils/auth_storage';

/**
 * site is active on browser
 *
 * @return boolean
 */
function isOnBrowser(): boolean {
    return !!window;
}

function verifyToken(): void {
    if (!isOnBrowser() || !isLoggedIn()) return;

    // TODO: connect backend here!
}

let refreshIntervalId: NodeJS.Timer | undefined = undefined;

function stopRefreshInterval(intervalId: NodeJS.Timer): void {
    clearInterval(intervalId);
}

const delay = 1000 * 60 * 1; // 1 min

function refreshAccessToken(ms = delay): void {
    if (refreshIntervalId) {
        stopRefreshInterval(refreshIntervalId);
    }

    refreshIntervalId = setInterval(verifyToken, ms);
}

export { refreshAccessToken };
