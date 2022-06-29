import { forgetThing, getThing, rememberThing } from '../cookie_storage';

export interface IAuthInfo {
    accessToken: string;
    username: string;
}

const authCookieName = 'kha_auth';

function rememberAuthInfo(value: IAuthInfo): IAuthInfo {
    return rememberThing(authCookieName, value);
}

function getAuthInfo(): IAuthInfo | undefined {
    return getThing<IAuthInfo>(authCookieName, false);
}

function forgetAuthInfo(): boolean {
    return forgetThing(authCookieName);
}

function isLoggedIn(): boolean {
    return !!getAuthInfo();
}

export { rememberAuthInfo, getAuthInfo, forgetAuthInfo, isLoggedIn };
