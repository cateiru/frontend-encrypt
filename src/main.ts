import { Base64 } from "./crypt/base64";
import { Xor } from "./crypt/xor";
import { timeMeasure, write } from "./tools";
import { withBinary } from "./withBinary";

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
      timeMeasure(".js-time-encrypt", () => {
        const xor = new Xor("key");

        const encryptedText = xor.encrypt(encryptInputElement.value);
        write(decryptInputElement, encryptedText);
      });
    });
  }

  // XOR 復号
  const xorDecryptButtonElement = document.querySelector(
    ".js-xor-decrypt-submit"
  );
  if (xorDecryptButtonElement) {
    xorDecryptButtonElement.addEventListener("click", () => {
      timeMeasure(".js-time-decrypt", () => {
        const xor = new Xor("key");

        const decryptedText = xor.decrypt(decryptInputElement.value);
        write(".js-decrypt-result", decryptedText);
      });
    });
  }

  // XOR 暗号Key長文
  const xorEncryptLoginKeyButtonElement = document.querySelector(
    ".js-xor-longkey-submit"
  );
  if (xorEncryptLoginKeyButtonElement) {
    xorEncryptLoginKeyButtonElement.addEventListener("click", () => {
      timeMeasure(".js-time-encrypt", () => {
        const xor = new Xor(
          "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        );

        const encryptedText = xor.encrypt(encryptInputElement.value);
        write(decryptInputElement, encryptedText);
      });
    });
  }

  // XOR 復号Key長文
  const xorDecryptLongKeyButtonElement = document.querySelector(
    ".js-xor-decrypt-longkey-submit"
  );
  if (xorDecryptLongKeyButtonElement) {
    xorDecryptLongKeyButtonElement.addEventListener("click", () => {
      timeMeasure(".js-time-decrypt", () => {
        const xor = new Xor(
          "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        );

        const decryptedText = xor.decrypt(decryptInputElement.value);
        write(".js-decrypt-result", decryptedText);
      });
    });
  }

  // Base64 暗号 (暗号かどうかは審議)
  const base64EncryptButtonElement =
    document.querySelector(".js-base64-submit");
  if (base64EncryptButtonElement) {
    base64EncryptButtonElement.addEventListener("click", () => {
      timeMeasure(".js-time-encrypt", () => {
        const b = new Base64();

        const encryptedText = b.encrypt(encryptInputElement.value);
        write(decryptInputElement, encryptedText);
      });
    });
  }

  // Base64 復号 (暗号かどうかは審議)
  const base64DecryptButtonElement = document.querySelector(
    ".js-base64-decrypt-submit"
  );
  if (base64DecryptButtonElement) {
    base64DecryptButtonElement.addEventListener("click", () => {
      timeMeasure(".js-time-decrypt", () => {
        const b = new Base64();

        const decryptedText = b.decrypt(decryptInputElement.value);

        write(".js-decrypt-result", decryptedText);
      });
    });
  }
}

function main() {
  events();
  withBinary();
}

main();
