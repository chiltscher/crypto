import {ALPHA_START, ALPHABET, GetAlphabetArray, IsUpperCase, ShiftLeft} from "../Basics/Basics";

export default class Caesar {

    private readonly ShiftedABC: number[];

    constructor(shift: number = 1) {
        this.ShiftedABC = ShiftLeft(GetAlphabetArray(), shift);
    }

    public encipher(plain: string): string {
        // This is where we will save the encryption
        let encrypted: string = "";

        // Iterate through the whole string
        for (let i = 0; i < plain.length; i++) {
            /* first we have to find out the ascii code for the letter
             * checking just the lowercase letters makes it more simple.
             * We can convert it to uppercase later.
             */

            let isUpperCase = IsUpperCase(plain[i]);
            let asciiLetter = (plain[i].toLowerCase()).charCodeAt(0);


            // This step will give us the exact position of the letter in the alphabet...
            let index = asciiLetter - ALPHA_START;
            // just encipher letters
            if (index >= 0) {
                // ... but we'll take the letter from the shifted one and translate it back to a string.
                let newLetter = String.fromCharCode(this.ShiftedABC[index]);

                // transform it to uppercase if it was before
                encrypted += isUpperCase ? newLetter.toUpperCase() : newLetter;
            } else encrypted += plain[i];

        }
        return encrypted;
    }

    public decipher(crypted: string): string {
        let decrypted: string = "";

        // Iterate through the whole string
        for (let i = 0; i < crypted.length; i++) {
            // check if the letter is uppercase to restore it later
            let isUpperCase = IsUpperCase(crypted[i]);

            // find the ascii code for the letter, ...
            let asciiLetter = (crypted[i].toLowerCase()).charCodeAt(0);
            // ... its position in the shifted alphabet ...
            let index = this.ShiftedABC.indexOf(asciiLetter);
            // ... and take the code form the found position of the unshifted alphabet
            let newLetter = (index >= 0) ? String.fromCharCode(ALPHABET[index]) : crypted[i];

            // add the decoded letter
            decrypted += isUpperCase ? newLetter.toUpperCase() : newLetter;
        }

        return decrypted;

    }
}