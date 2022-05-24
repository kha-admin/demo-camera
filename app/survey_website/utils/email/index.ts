import { regexEmail } from '../regex';

export function isValidEmail(value: string): boolean {
    return regexEmail.test(value);
}
