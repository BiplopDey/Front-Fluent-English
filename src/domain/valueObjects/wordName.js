export default function wordName(name) {
  function isPhrasalVerb(word) {
    const length = word.split(" ").length;
    return 1 < length && length <= 3;
  }

  return {
    name: name.charAt(0).toUpperCase() + name.slice(1),
    isPhrasalVerb: isPhrasalVerb(name),
  };
}
