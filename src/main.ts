import { Xor } from "./crypt/xor";
import { write } from "./tools";

function events() {
  const encryptInputElement = document.querySelector(".js-encrypt-form");
  if (!(encryptInputElement instanceof HTMLTextAreaElement)) {
    return;
  }
  const decryptInputElement = document.querySelector(".js-decrypt-form");
  if (!(decryptInputElement instanceof HTMLTextAreaElement)) {
    return;
  }

  // XOR 暗号
  const xorEncryptButtonElement = document.querySelector(".js-xor-submit");
  if (xorEncryptButtonElement) {
    xorEncryptButtonElement.addEventListener("click", () => {
      const xor = new Xor("key");

      const encryptedText = xor.encrypt(encryptInputElement.value);
      write(decryptInputElement, btoa(encodeURIComponent(encryptedText)));
    });
  }

  // XOR 復号
  const xorDecryptButtonElement = document.querySelector(
    ".js-xor-decrypt-submit"
  );
  if (xorDecryptButtonElement) {
    xorDecryptButtonElement.addEventListener("click", () => {
      const xor = new Xor("key");

      const base64Value = decodeURIComponent(atob(decryptInputElement.value));

      const decryptedText = xor.decrypt(base64Value);
      write(".js-decrypt-result", decryptedText);
    });
  }

  // Base64 暗号 (暗号かどうかは審議)
  const base64EncryptButtonElement =
    document.querySelector(".js-base64-submit");
  if (base64EncryptButtonElement) {
    base64EncryptButtonElement.addEventListener("click", () => {
      write(
        decryptInputElement,
        btoa(encodeURIComponent(encryptInputElement.value))
      );
    });
  }

  // Base64 復号 (暗号かどうかは審議)
  const base64DecryptButtonElement = document.querySelector(
    ".js-base64-decrypt-submit"
  );
  if (base64DecryptButtonElement) {
    base64DecryptButtonElement.addEventListener("click", () => {
      const base64Value = decodeURIComponent(atob(decryptInputElement.value));
      write(".js-decrypt-result", base64Value);
    });
  }
}

function main() {
  events();
}

main();
