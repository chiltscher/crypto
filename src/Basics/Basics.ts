export const ALPHA_START = 97; // ASCII code for the lower "a";
export const ALPHA_END = 122; // ASCII coder for the lower "z";

export function GetAlphabetArray() : number[] {
    let result : number[] = [];
    for(let i = ALPHA_START; i <= ALPHA_END; i++) {
        result.push(i);
    }
    return result;
}

export function ShiftLeft<T>(array: Array<T>, shift: number = 1) : T[] {
    if(shift < 0) {
        shift = 1;
    }
    for(let i = 0; i < shift; i++) {
        array.push(array.shift() as T);
    }
    return array;
}

export function IsUpperCase(char: string) : boolean {
    return char.toUpperCase() === char;
}