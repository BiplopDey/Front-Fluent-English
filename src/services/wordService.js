export const wordService = {
  isPhrasalVerb(word) {
    const length = word.split(" ").length;
    return 1 < length && length <= 3;
  },
  isWord(word) {
    return word.split(" ").length === 1;
  },
  isSentence(word) {
    return word.split(" ").length > 3;
  },
};
