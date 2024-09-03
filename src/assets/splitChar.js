export default function splitChar(sent) {
  let output = [];
  const regex = /[\s\S]/gu;

  let match;

  while ((match = regex.exec(sent)) !== null) {
    output.push(match[0]);
  }
  return output;
}
