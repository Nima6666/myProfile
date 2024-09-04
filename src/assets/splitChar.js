export default function splitChar(characters) {
  let output = [];
  const regex = /[\s\S]/gu;

  let match;

  while ((match = regex.exec(characters)) !== null) {
    output.push(match[0]);
  }
  return output;
}
