export const WordListing = {
  startsWith(wordList, str) {
    return wordList.filter((word) => word.name.startsWith(str));
  },
};
