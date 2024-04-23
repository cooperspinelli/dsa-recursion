/** revString: return a copy of a string, but in reverse. */

function revString(str: string): string {
  if (str.length < 2) return str;
  return revString(str.slice(1)) + str[0];
}

export { revString };