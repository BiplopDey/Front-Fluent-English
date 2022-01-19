export const wordService = {
  isPhrasalVerb(word) {
    return 1 <= word.split(" ").length <= 3;
  },
  isWord(word) {
    return word.split(" ").length === 1;
  },
  isSentence(word) {
    return word.split(" ").length > 3;
  },
};
