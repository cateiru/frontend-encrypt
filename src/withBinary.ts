import { inputTextToBinary, write } from "./tools";

/**
 * リアルタイムバイナリ変換
 */
export function withBinary() {
  const withBinaryElements = document.querySelectorAll(".js-with-binary");

  withBinaryElements.forEach((element) => {
    const inputElement =
      element.querySelector<HTMLTextAreaElement>(".js-input");
    if (!(inputElement instanceof HTMLElement)) {
      return;
    }
    const outputElement = element.querySelector<HTMLPreElement>(".js-binary");
    if (!outputElement) {
      return;
    }
    const countElement = element.querySelector<HTMLSpanElement>(".js-count");

    const eventHandler = () => {
      const inputText = inputElement.value;
      const binaryText = inputTextToBinary(inputText);

      write(outputElement, binaryText);

      if (countElement) {
        countElement.textContent = inputText.length.toString();
      }
    };

    inputElement.addEventListener("input", eventHandler);
    inputElement.addEventListener("change", eventHandler);
    inputElement.addEventListener("contentChanged", eventHandler);
  });
}
