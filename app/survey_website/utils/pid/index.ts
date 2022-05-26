import { isString } from 'lodash-es';

export function isValidThaiPid(value: unknown): boolean {
    if (!isString(value)) {
        return false;
    }

    const last = parseInt(value[value.length - 1], 10);
    let sum = 0;
    let count = 0;

    for (let i = 13; i >= 2; i -= 1) {
        sum += parseInt(value[count], 10) * i;
        count += 1;
    }

    const step4 = sum % 11;
    let step5 = 11 - step4;

    if (step5 / 10 !== 0) {
        step5 %= 10;
    }

    if (step5 === last && value.length === 13) {
        return true;
    }

    return false;
}
