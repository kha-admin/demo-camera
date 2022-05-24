import { regexThPhoneNumber } from '../regex';

export function isValidThaiPhoneNumber(value: string): boolean {
    return regexThPhoneNumber.test(value);
}
