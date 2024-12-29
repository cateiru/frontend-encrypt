export interface Crypt {
  /**
   * 引数 value を暗号化して返す
   *
   * @param value 暗号化する文字列
   * @returns 暗号化された文字列
   */
  encrypt(value: string): string;

  /**
   * 引数 value を復号化して返す
   *
   * @param value 復号化する文字列
   * @returns 復号化された文字列
   */
  decrypt(value: string): string;
}
