import Cookies from 'js-cookie';

/**
 * save thing (value) in browser cookies
 * @param  name      a cookie name
 * @param  thing    a value that can be stringified
 * @return thing
 */
function rememberThing<T>(
    name: string,
    thing: T,
    expires: Cookies.CookieAttributes['expires'] = 7,
): T {
    Cookies.set(name, JSON.stringify(thing), { expires });

    return thing;
}

/**
 * get thing (value) by cookie name from browser cookies
 * @param  name      a cookie name
 * @return thing
 */
function getThing<T>(name: string, forgetAfterGet = true): T | undefined {
    const thing = Cookies.get(name);

    if (forgetAfterGet) {
        Cookies.remove(name);
    }

    if (thing) {
        return JSON.parse(thing) as T;
    }

    return undefined;
}

/**
 * remove thing from browser cookies if exist
 * @param  name      a cookie name
 * @return boolean  true, if there is a thing to remove
 */
function forgetThing(name: string): boolean {
    const thing = Cookies.get(name);

    Cookies.remove(name);

    return !!thing;
}

export { rememberThing, getThing, forgetThing };
