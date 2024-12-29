/**
 * テキストを書き込む
 *
 * @param querySelector - 書き込む対象の要素のセレクタ
 * @param text - 書き込むテキスト
 */
export function write(querySelector: string | HTMLElement, text: string) {
  const element =
    typeof querySelector === "string"
      ? document.querySelector(querySelector)
      : querySelector;
  if (element instanceof HTMLElement) {
    element.textContent = text;
  }
}
