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

  if (element instanceof HTMLTextAreaElement) {
    element.value = text;
  } else if (element instanceof HTMLElement) {
    element.textContent = text;
  }

  // カスタムイベントを発火
  const event = new Event("contentChanged");
  element?.dispatchEvent(event);
}

/**
 * callback の実行時間を計測する
 *
 * @param name - 計測名
 * @param callback - 計測する処理
 */
export function timeMeasure(
  element: string | HTMLElement,
  callback: () => void
) {
  const start = performance.now();
  callback();
  const end = performance.now();

  const e =
    typeof element === "string" ? document.querySelector(element) : element;
  if (e instanceof HTMLElement) {
    e.textContent = `${end - start}ms`;
  }
}

/**
 * テキストをバイナリに変換する
 *
 * @param inputText - 変換するテキスト
 * @returns バイナリに変換された文字列
 */
export function inputTextToBinary(inputText: string): string {
  return inputText
    .split("")
    .map((char) => char.charCodeAt(0).toString(2))
    .join(" ");
}
