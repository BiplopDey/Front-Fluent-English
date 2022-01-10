import { diccionaryApiService } from "./diccionaryApiService";

export const wordsListService = {
  list: [],
  addAll(list) {
    this.list = [...list];
  },
  async fetchAll() {
    const words = await diccionaryApiService.fetchAll();
    this.addAll(words);
  },
  async add(word) {
    const response = await diccionaryApiService.create(word);
    this.list = [response, ...this.list];
  },
  async delete(word) {
    await diccionaryApiService.deleteById(word.id);
    this.list.splice(this.findIndexById(word.id), 1);
  },
  async update(word) {
    const response = await diccionaryApiService.update(word);
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
