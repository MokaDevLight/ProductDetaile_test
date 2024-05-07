import { addCommas, digitsEnToFa } from "@persian-tools/persian-tools";

export function digitToFa(number) {
  return number && digitsEnToFa(number);
}

export function digitToFaAndComma(number) {
  return number && digitsEnToFa(addCommas(number));
}
