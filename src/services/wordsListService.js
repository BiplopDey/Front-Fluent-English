import { restApiRepository } from "../repository/restApiRepository";
import { urlList } from "../repository/urlList";
import { listCrud } from "./listCrud";
import { wordService } from "./wordService";

export const wordsListService = {
  list: [],
  error: null,
  dicctionaryRepository: new restApiRepository(urlList.dicctionary),

  addAll(list) {
    this.list = [...list];
  },

  async fetchFavorites() {
    await this.fetchAll();
    this.addAll(this.list.filter((e) => e.star == true));
  },

  async toggleStar(word) {
    word.star = !word.star;
    await this.update(word);
  },

  async fetchAll() {
    try {
      const words = await this.dicctionaryRepository.fetchAll();
      this.addAll(words.reverse());
    } catch (err) {
      this.error = err;
    }
  },

  async fetchWords() {
    await this.fetchAll();
    this.addAll(this.list.filter((e) => !e.isSentence)); //e.isWord || e.isPhrasalVerb));
  },

  async fetchPhrasalVerb() {
    await this.fetchAll();
    this.addAll(this.list.filter((e) => e.isPhrasalVerb)); //e.isWord || e.isPhrasalVerb));
  },

  async fetchSentence() {
    await this.fetchAll();
    this.addAll(this.list.filter((e) => e.isSentence));
  },

  async add(word) {
    word.star = false;
    const name = word.name;
    if (wordService.isWord(name)) {
      word.isWord = true;
    }
    if (wordService.isPhrasalVerb(name)) {
      word.isPhrasalVerb = true;
    }
    if (wordService.isSentence(name)) {
      word.isSentence = true;
    }
    const response = await this.dicctionaryRepository.create(word);
    this.list = [response, ...this.list];
  },

  async delete(word) {
    await this.dicctionaryRepository.deleteById(word.id);
    listCrud.delete(this.list, word);
  },

  async update(word) {
    const response = await this.dicctionaryRepository.update(word);
    listCrud.update(this.list, response);
  },

  isEmpty() {
    return listCrud.empty(this.list);
  },

  startsWith(str) {
    //console.log(this.list);
    return str.length === 0
      ? this.list
      : this.list.filter((word) => word.name.startsWith(str));
  },
};
