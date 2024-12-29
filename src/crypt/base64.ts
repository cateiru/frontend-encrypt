import { Crypt } from "../crypt";

export class Base64 implements Crypt {
  encrypt(value: string): string {
    return btoa(encodeURIComponent(value));
  }

  decrypt(value: string): string {
    return decodeURIComponent(atob(value));
  }
}
