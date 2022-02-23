export default function WordService(repository) {
  this.all = async function () {
    return await repository.fetchAll();
  };
  this.create = async function (wordDto) {
    return await repository.save(wordDto);
  };
  this.update = async function (wordDto) {
    return await repository.save(wordDto);
  };
  this.get = async function (id) {
    return await repository.get(id);
  };
}

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
  isYoutubeUrl(url) {
    return Boolean(this.getYoutubeVideoId(url));
  },
  getYoutubeVideoId(url) {
    var regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    if (match && match[7].length == 11) return match[7];
    return false;
  },
};
