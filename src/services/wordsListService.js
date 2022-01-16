import { diccionaryApiRepository } from "../repository/diccionaryApiRepository";

export const wordsListService = {
  list: [],
  queryRepository: diccionaryApiRepository,

  addAll(list) {
    this.list = [...list];
  },
  async toggleStar(word) {
    word.star = !word.star;
    await this.update(word);
  },
  async fetchAll() {
    const words = await this.queryRepository.fetchAll();
    this.addAll(words);
  },
  async add(word) {
    word.star = false;
    const response = await this.queryRepository.create(word);
    this.list = [response, ...this.list];
  },
  async delete(word) {
    await this.queryRepository.deleteById(word.id);
    this.list.splice(this.findIndexById(word.id), 1);
  },
  async update(word) {
    const response = await this.queryRepository.update(word);
    this.list[this.findIndexById(word.id)] = response;
  },
  findIndexById(id) {
    return this.list.findIndex((word) => word.id == id);
  },
  isEmpty() {
    return this.list.length === 0;
  },
  startsWith(str) {
    return this.list.filter((word) => word.name.startsWith(str));
  },
};
