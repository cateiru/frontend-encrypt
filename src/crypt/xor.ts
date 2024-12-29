import { Crypt } from "../crypt";

export class Xor implements Crypt {
  private key: string;

  constructor(key: string) {
    this.key = key;
  }

  encrypt(value: string): string {
    return this.crypt(value);
  }

  decrypt(value: string): string {
    return this.crypt(value);
  }

  private crypt(value: string): string {
    const key = this.key;
    const keyLength = key.length;
    let result = "";

    for (let i = 0; i < value.length; i++) {
      result += String.fromCharCode(
        value.charCodeAt(i) ^ key.charCodeAt(i % keyLength)
      );
    }

    return result;
  }
}
