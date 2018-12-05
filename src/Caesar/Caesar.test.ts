import Caesar from "./Caesar";

const PLAIN = "Ides of March";
const CRYPTED_1 = "Jeft pg Nbsdi";

describe("Caesar Cipher", () => {
    describe("Encipher", () => {
        const Cipher = new Caesar(1);
        let crypted : string = "";
        it("Should encipher the plain text", () => {
            crypted = Cipher.encipher(PLAIN);
            expect(crypted).not.toMatch(PLAIN);
            expect(crypted).toMatch(CRYPTED_1);
        });
    });
    describe("Decipher", () => {
        const Cipher = new Caesar(1);
        let decrypted : string = "";
        it("Should decipher the plain text", () => {
            decrypted = Cipher.decipher(CRYPTED_1);
            expect(decrypted).not.toMatch(CRYPTED_1);
            expect(decrypted).toMatch(PLAIN);
        });
    });
});