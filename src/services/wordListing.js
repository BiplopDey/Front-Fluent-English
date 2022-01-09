export const WordListing = {
  empiezaCon(wordList, str) {
    return wordList.filter((word) => word.name.startsWith(str));
  },
};
